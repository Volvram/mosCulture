import { makeObservable, observable, action, computed, runInAction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import { HOST } from "../config/host";
import axios from "axios";
import { Alert } from "react-native";
import { ArticleType } from "./DailyWordStore";

type PrivateFields = "_arts";

export class AboutArtStore implements ILocalStore {
    private _arts: ArticleType[] | null = null;

    constructor() {
        makeObservable<AboutArtStore, PrivateFields>(this,{
            _arts: observable
        })
    }

    setArts(arts: ArticleType[] | null) {
        this._arts = arts;
    }

    get arts() {
        return this._arts;
    }

    requestArts = async () => {
        try {
            const result = await axios(`${HOST}/articles`, {
                method: "get",
                params: {
                    article_type_ids: 6
                }
            })

            runInAction(() => {
                this.setArts(result.data);
            })
        } catch(e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                console.log("About Art Store: ", e)
            }
            this.setArts([]);
        }
    }

    destroy(){}
}