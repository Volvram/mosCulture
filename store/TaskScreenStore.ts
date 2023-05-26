import { makeObservable, observable, action, computed, runInAction} from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import axios from "axios";
import { HOST } from "../config/host";
import { Alert } from "react-native";

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

type PrivateFields = "_tests";

export class TaskScreenStore implements ILocalStore {
    private _tests: TastType[] | null = null;

    constructor() {
        makeObservable<TaskScreenStore, PrivateFields>(this, {
            _tests: observable,
        })
    }

    setTests(tests: TastType[]) {
        this._tests = tests;
    }

    get tests() {
        return this._tests;
    }

    requestTests = async () => {
        try {
            const result = await axios(`${HOST}/tests`, {
                method: "get",
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

    destroy() {}
}