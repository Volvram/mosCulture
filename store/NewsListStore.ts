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

type PrivateFields = "_news";

export default class NewsListStore implements ILocalStore {
    private _news: ArticleType[] | null = null;

    constructor() {
        makeObservable<NewsListStore, PrivateFields>(this, {
            _news: observable,
            setNews: action,
            news: computed,
        })
    }

    setNews(news: ArticleType[]) {
        this._news = news;
    }

    get news() {
        return this._news;
    }

    requestNews = async () => {
        try {
            const result = await axios(`${HOST}/articles`, {
                method: "get",
                params: {
                    per_page: 10,
                    article_type_ids: 1,
                }
            });

            runInAction(() => {
                this.setNews(result.data);
            });
            
        } catch(e) {
            console.log("News List Store", e)
            this.setNews([]);
        }
    } 

    destroy() {}
}