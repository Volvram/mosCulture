import { makeObservable, observable, action, computed, runInAction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import { Alert } from "react-native";
import axios from "axios";
import { HOST } from "../config/host";
import rootStore from "./RootStore/instance";

export type AchievementType = {
    id: number,
    title: string,
    image: string,
    received: boolean,
    successInfo: string,
    paintingName: string,
    paintingCaption: string,
    paintingDescription: string
}

type PrivateFields = "_achievements"

export class ProfileStore implements ILocalStore {
    private _achievements: AchievementType[] | null = null;

    constructor() {
        makeObservable<ProfileStore, PrivateFields>(this, {
            _achievements: observable,
            setAchievements: action,
            achievements: computed,
        })
    }

    setAchievements(achievements: AchievementType[] | null) {
        this._achievements = achievements;
    }

    get achievements() {
        return this._achievements
    }

    requestAchievements = async () => {
        try {
            const result = await axios(`${HOST}/users/${rootStore.user.userId}/achievements`);

            runInAction(() => {
                this.setAchievements(result.data);
            })
        } catch (e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                this.setAchievements([]);
                console.log("Profile Store", e);
            }
        }
    }

    destroy(){}
}