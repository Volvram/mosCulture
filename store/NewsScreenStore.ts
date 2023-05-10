import { makeObservable, observable, action, computed, toJS } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";

type PrivateFields = "_activeTags";

export default class NewsScreenStore implements ILocalStore {
    private _activeTags: string[] = ["Все"];

    constructor() {
        makeObservable<NewsScreenStore, PrivateFields>(this, {
            _activeTags: observable,
            toggleActiveTag: action,
            activeTags: computed,
        })
    }

    toggleActiveTag(activeTag: string) {
        const tagIsActive = this._activeTags.findIndex(tag => tag === activeTag);

        if (tagIsActive === -1) {
            this._activeTags.push(activeTag);
        } else {
            this._activeTags.splice(tagIsActive, 1);
        }
    }

    get activeTags() {
        return this._activeTags;
    }
    
    destroy() {

    }
}