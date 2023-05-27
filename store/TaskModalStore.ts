import { makeObservable, observable, action, computed, runInAction} from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import { Alert } from "react-native";
import axios from "axios";
import { HOST } from "../config/host";

export type TestType = {
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
        questions: [
          {
            id: number,
            text: string,
            video: string | null,
            audio: string | null,
            image: string | null,
            explanation: string,
            answers: [
              {
                id: number,
                text: string,
                video: string | null,
                audio: string | null,
                image: string | null,
                isCorrect: boolean
              }
            ]
          }
        ]
}

type PrivateFields = "_taskId" | "_task";

export class TaskModalStore implements ILocalStore {
    private _taskId: number | null;
    private _task: TestType | null = null;

    constructor(id: number | null) {
        this._taskId = id;

        makeObservable<TaskModalStore, PrivateFields>(this, {
            _taskId: observable,
            setTaskId: action,
            taskId: computed,
            _task: observable,
            setTask: action,
            task: computed,
        })
    }

    setTaskId(taskId: number | null) {
        this._taskId = taskId;
    }

    get taskId() {
        return this._taskId;
    }

    setTask(task: TestType) {
        this._task = task;
    }

    get task() {
        return this._task;
    }

    requestTask = async () => {
        try {
            if (this._taskId) {
                const result = await axios(`${HOST}/tests/${this._taskId}`, {
                    method: "get",
                })
    
                runInAction(() => {
                    this.setTask(result.data);
                })
            }

        } catch(e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                console.log("Task Modal Store: ", e.response);
            }
        }
    }

    destroy(){}
}