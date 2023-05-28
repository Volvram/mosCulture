import { makeObservable, observable, action, computed, runInAction, IReactionDisposer, reaction} from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import axios, { AxiosResponse } from "axios";
import { HOST } from "../config/host";
import { Alert } from "react-native";
import rootStore from "./RootStore/instance";

export type TastType = {
    id: number,
    title: string,
    description: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    scorePerQuestion: number,
    difficulty: string,
    art: {
        id: number,
        name: string
    },
    userId?: number,
    score?: number,
    passedAt?: string
}

type PrivateFields = "_tests" | "_artId";

export class TaskScreenStore implements ILocalStore {
    private _artId: number | null = null;
    private _tests: TastType[] | null = null;

    constructor() {
        makeObservable<TaskScreenStore, PrivateFields>(this, {
            _artId: observable,
            setArtId: action,
            artId: computed,
            _tests: observable,
            setTests: action,
            tests: computed,
        })
    }

    setArtId(artId: number) {
        this._artId = artId;
    }

    get artId() {
        return this._artId;
    }

    setTests(tests: TastType[]) {
        this._tests = tests;
    }

    get tests() {
        return this._tests;
    }

    requestTests = async () => {
        try {
            let result: AxiosResponse<any, any>;
            // if (rootStore.user.authorized) {
            //     result = await axios(`${HOST}/users/${rootStore.user.userId}/tests`, {
            //         method: "get",
            //         params: {
            //             art_id: this._artId,
            //         }
            //     })
            // } else {
            //     result = await axios(`${HOST}/tests`, {
            //         method: "get",
            //         params: {
            //             art_id: this._artId,
            //         }
            //     })
            // }

            result = await axios(`${HOST}/tests`, {
                method: "get",
                params: {
                    art_id: this._artId,
                }
            })

            runInAction(() => {
                this.setTests(result.data);
            })
            
        } catch(e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                console.log("Task Screen Store: ", e.response);
            }
        }
    }

    destroy() {
        this._handleChangeArtId();
    }

    readonly _handleChangeArtId: IReactionDisposer = reaction(
        () => this._artId,
        () => this.requestTests()
    )
}