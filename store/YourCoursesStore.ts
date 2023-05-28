import { makeObservable, observable, action, computed, runInAction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import { CourseType } from "./InterestingCoursesStore";
import { HOST } from "../config/host";
import axios from "axios";
import rootStore from "./RootStore/instance";
import { Alert } from "react-native";

type PrivateFields = "_courses"

export class YourCoursesStore implements ILocalStore {
    private _courses: CourseType[] | null = null;

    constructor() {
        makeObservable<YourCoursesStore, PrivateFields>(this, {
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
            if (rootStore.user.authorized) {
                const result = await axios(`${HOST}/users/${rootStore.user.userId}/courses`, {
                    method: "get",
                })

                runInAction(() => {
                    this.setCourses(result.data);
                })
            }
        } catch(e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                console.log("YourCourses Store: ", e)
            }
            this.setCourses([]);
        }
    }

    destroy(){}
}