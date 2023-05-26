import { makeObservable, observable, action, computed, runInAction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import { HOST } from "../config/host";
import axios from "axios";
import { Alert } from "react-native";

export type ResultType = {
    id?: number,
    email?: string,
    password?: string,
    name: string,
    avatar: string | null,
    score: number,
    createdAt?: string,
    updatedAt?: string,
    roles?: null
}

type PrivateFields = "_leaderBoard"

export default class RatingStore implements ILocalStore {
    private _leaderBoard: ResultType[] | null = null;

    constructor() {
        makeObservable<RatingStore, PrivateFields>(this, {
            _leaderBoard: observable,
            setLeaderBoard: action,
            leaderBoard: computed
        })
    }

    setLeaderBoard(leaderBoard: ResultType[]) {
        this._leaderBoard = leaderBoard;
    }

    get leaderBoard() {
        return this._leaderBoard;
    }

    requestLeaderBoard = async () => {
        try {
            const result = await axios(`${HOST}/leaderboard`, {
                method: "get",
            });

            runInAction(() => {
                this.setLeaderBoard(result.data);
            })
        } catch(e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                this.setLeaderBoard([]);
                console.log("Rating Store", e);
            }
        }
    }

    destroy() {}
}