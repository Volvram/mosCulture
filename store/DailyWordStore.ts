import { makeObservable, observable, action, computed, runInAction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import axios from "axios";
import { HOST } from "../config/host";

export type ArticleType = {
    id: string,
    name: string,
    description: string,
    image: string,
    published: true,
    content: string,
    createdAt: string,
    updatedAt: string,
    articleType: {
        id: number,
        name: string
    }
}

type PrivateFields = "_dailyWord";

export default class DailyWordStore implements ILocalStore {
    private _dailyWord: ArticleType | null | undefined = null;

    constructor() {
        makeObservable<DailyWordStore, PrivateFields>(this, {
            _dailyWord: observable,
            setDailyWord: action,
            dailyWord: computed,
        })
    }

    setDailyWord(dailyWord: ArticleType | undefined) {
        this._dailyWord = dailyWord;
    }

    get dailyWord() {
        return this._dailyWord;
    }

    requestDailyWord = async () => {
        try {
            const result = await axios(`${HOST}/articles`, {
                method: "get",
                params: {
                    per_page: 1,
                    article_type_ids: 10,
                }
            });

            runInAction(() => {
                this.setDailyWord(result.data[0]);
            });
            
        } catch(e) {
            this.setDailyWord(undefined);
            console.log(e)
        }
    } 

    destroy() {}
}