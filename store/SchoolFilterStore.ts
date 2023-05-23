import { makeObservable, observable, action, computed, runInAction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import axios from "axios";
import { HOST } from "../config/host";

type PrivateFields = "_chosenDistricts" | "_chosenDirections";

export default class SchoolFilterStore implements ILocalStore {
    private _chosenDistricts: string[] = [];
    private _chosenDirections : string[] = [];

    constructor() {
        makeObservable<SchoolFilterStore, PrivateFields>(this, {
            _chosenDistricts: observable,
            setChosenDistricts: action,
            chosenDistricts: computed,
            addChosenDistrict: action,
            deleteChosenDistrict: action,
            _chosenDirections: observable,
            setChosenDirections: action,
            chosenDirections: computed,
            addChosenDirection: action,
            deleteChosenDirection: action,
        })
    }

    setChosenDistricts(chosenDistricts: string[]) {
        this._chosenDistricts = chosenDistricts;
    }

    get chosenDistricts() {
        return this._chosenDistricts;
    }

    addChosenDistrict(chosenDistrict: string) {
        this._chosenDistricts = [...this._chosenDistricts, chosenDistrict];
    }

    deleteChosenDistrict(chosenDistrict: string) {
        const idx = this._chosenDistricts.findIndex(dis => dis === chosenDistrict);
        this.setChosenDistricts([
            ...this._chosenDistricts.slice(0, idx), 
            ...this._chosenDistricts.slice(idx+1, this._chosenDistricts.length)]);
    }

    setChosenDirections(chosenDirections: string[]) {
        this._chosenDirections = chosenDirections;
    }

    get chosenDirections() {
        return this._chosenDirections;
    }

    addChosenDirection(chosenDirection: string) {
        this._chosenDirections = [...this._chosenDirections, chosenDirection];
    }

    deleteChosenDirection(chosenDirection: string) {
        const idx = this._chosenDirections.findIndex(dis => dis === chosenDirection);
        this.setChosenDirections([
            ...this._chosenDirections.slice(0, idx), 
            ...this._chosenDirections.slice(idx+1, this._chosenDirections.length)]);
    }

    sendFilters = async () => {
        try {
            // const result = await axios(`${HOST}/articles`, {
            //     method: "get",
            // });
            // runInAction(() => {
            //     this.setNews(result.data.filter((item: ArticleType) => item.articleType.name === "Новости"));
            // });
            
        } catch(e) {
            // this.setNews([]);
            // console.log(e)
        }
    } 

    destroy() {}
}