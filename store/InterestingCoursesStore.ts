import { makeObservable, observable, action, computed, runInAction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import { Alert } from "react-native";
import { HOST } from "../config/host";
import axios from "axios";

export type CourseType = {
    id: number,
    name: string,
    image: string,
    content: string,
    description: string,
    price: number,
    duration: number,
    createdAt: string,
    updatedAt: string,
    art: {
        id: number,
        name: string
    },
    lessons: [
        {
        id: number,
        lessonOrder: number,
        name: string,
        image: string,
        content: string,
        description: string,
        duration: number,
        createdAt: string,
        updatedAt: string,
        intro: boolean
        }
    ],
        studyProgram: {
            id: number,
            name: string
        }
    }

type PrivateFields = "_courses";

export class InterestingCoursesStore implements ILocalStore {
    private _courses: CourseType[] | null = null;

    constructor() {
        makeObservable<InterestingCoursesStore, PrivateFields>(this, {
            _courses: observable,
            setCourses: action,
            courses: computed,
        })
    }

    setCourses(courses: CourseType[] | null) {
        this._courses = courses;
    }

    get courses() {
        return this._courses;
    }

    requestCourses = async () => {
        try {
            const result = await axios(`${HOST}/courses`, {
                method: "get",
                params: {
                    per_page: 5
                }
            })

            runInAction(() => {
                this.setCourses(result.data);
            })
        } catch(e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                console.log("InterestingCourses Store: ", e)
            }
            this.setCourses([]);
        }
    }

    destroy(){}
}