import { makeObservable, observable, action, computed, runInAction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import { Alert } from "react-native";
import axios from "axios";
import { HOST } from "../config/host";
import rootStore from "./RootStore/instance";

export type ArtType = {
    id: number,
    name: string,
}

export type TaskType = {
    id: number,
    name: string,
    userScore?: number | null,
    scoreSum: number,
    userCount?: number | null,
    testsCount: number,
}

type PrivateFields = "_tasks";

export class TasksStore implements ILocalStore {
    private _tasks: TaskType[] | null = null;

    constructor() {
        makeObservable<TasksStore, PrivateFields>(this, {
            _tasks: observable,
        })
    }

    setTasks(tasks: TaskType[]) {
        this._tasks = tasks;
    }
    
    get tasks() {
        return this._tasks;
    }

    requestTasks = async () => {
        try {
            let result: TaskType[] = [];

            const arts = await axios(`${HOST}/arts`, {
                method: "get",
            })
            
            for (let art of arts.data) {
                let userScore;
                let userCount;

                if (rootStore.user.authorized) {
                    userScore = await axios(`${HOST}/users/${rootStore.user.userId}/tests/score-sum`, {
                        method: "get",
                        params: {
                            art_id: art.id
                        }
                    });

                    userCount = await axios(`${HOST}/users/${rootStore.user.userId}/tests/count`, {
                        method: "get",
                        params: {
                            art_id: art.id
                        }
                    })
                } 

                const scoreSum = await axios(`${HOST}/tests/score-sum`, {
                    method: "get",
                    params: {
                        art_id: art.id
                    }
                })
                const testsCount = await axios(`${HOST}/tests/count`, {
                    method: "get",
                    params: {
                        art_id: art.id
                    }
                });

                result.push({
                    id: art.id,
                    name: art.name,
                    userScore: userScore ? userScore.data : 0,
                    scoreSum: scoreSum.data,
                    userCount: userCount ? userCount.data : 0,
                    testsCount: testsCount.data,
                });
            }

            runInAction(() => {
                this.setTasks(result);
            })
            
        } catch(e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                console.log("Task Store: ", e.response);
            }
        }
    }

    destroy(){}
}