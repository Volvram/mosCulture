import { makeObservable, observable, action, computed, runInAction } from "mobx"
import { ILocalStore } from "../utils/useLocalStore";
import { ArticleType } from "./DailyWordStore";
import axios from "axios";
import { HOST } from "../config/host";

type PrivateFields = "_questions";

export class QuestionsToTeacherStore implements ILocalStore {
    private _questions: ArticleType[] | null = null;

    constructor(){
        makeObservable<QuestionsToTeacherStore, PrivateFields>(this, {
            _questions: observable,
            setQuestions: action,
            questions: computed
        })
    }

    setQuestions(questions: ArticleType[]) {
        this._questions = questions
    }

    get questions() {
        return this._questions;
    }

    requestQuestions = async () => {
        try {
            const result = await axios(`${HOST}/articles`, {
                method: "get",
                params: {
                    per_page: 1,
                    article_type_ids: 2
                }
            });

            runInAction(() => {
                this.setQuestions(result.data);
            })
        } catch(e: any) {
            console.log("QuestionsToTeacher Store", e);
        }
    }

    destroy(){}
}