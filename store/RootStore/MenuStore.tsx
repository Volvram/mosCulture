import { makeObservable, observable, action, computed } from "mobx";

type PrivateFields = "_activeSection";

export default class MenuStore {
    private _activeSection = "feed";

    constructor() {
        makeObservable<MenuStore, PrivateFields>(this, {
            _activeSection: observable,
            setActiveSection: action,
            activeSection: computed,
        });
    }

    setActiveSection = (activeSection: string) => {
        this._activeSection = activeSection;
    }

    get activeSection() {
        return this._activeSection;
    }
}