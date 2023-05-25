import { makeObservable, observable, action, computed, runInAction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import axios from "axios";
import { HOST } from "../config/host";

type DistrictType = {
    id: number,
    name: string
}

type ArtType = {
    id: number,
    name: string
}

type PrivateFields = "_districts" | "_chosenDistricts" | "_arts" | "_chosenArts";

export default class SchoolFilterStore implements ILocalStore {
    private _districts: DistrictType[] | null = null;
    private _chosenDistricts: number[] = [];

    private _arts: ArtType[] | null = null;
    private _chosenArts: number[] = [];

    constructor() {
        makeObservable<SchoolFilterStore, PrivateFields>(this, {
            _districts: observable,
            setDistricts: action,
            districts: computed,
            _chosenDistricts: observable,
            setChosenDistricts: action,
            chosenDistricts: computed,
            addChosenDistrict: action,
            deleteChosenDistrict: action,
            _arts: observable,
            _chosenArts: observable,
            setChosenArts: action,
            chosenArts: computed,
            addChosenArt: action,
            deleteChosenArt: action,
        })
    }

    setDistricts(districts: DistrictType[]) {
        this._districts = districts;
    }

    get districts() {
        return this._districts;
    }

    setChosenDistricts(chosenDistricts: number[]) {
        this._chosenDistricts = chosenDistricts;
    }

    get chosenDistricts() {
        return this._chosenDistricts;
    }

    addChosenDistrict(chosenDistrict: number) {
        this._chosenDistricts = [...this._chosenDistricts, chosenDistrict];
    }

    deleteChosenDistrict(chosenDistrict: number) {
        const idx = this._chosenDistricts.findIndex(dis => dis === chosenDistrict);
        this.setChosenDistricts([
            ...this._chosenDistricts.slice(0, idx), 
            ...this._chosenDistricts.slice(idx+1, this._chosenDistricts.length)]);
    }

    setArts(arts: ArtType[]) {
        this._arts = arts;
    }

    get arts() {
        return this._arts;
    }

    setChosenArts(chosenArts: number[]) {
        this._chosenArts = chosenArts;
    }

    get chosenArts() {
        return this._chosenArts;
    }

    addChosenArt(chosenArt: number) {
        this._chosenArts = [...this._chosenArts, chosenArt];
    }

    deleteChosenArt(chosenArt: number) {
        const idx = this._chosenArts.findIndex(art => art === chosenArt);
        this.setChosenArts([
            ...this._chosenArts.slice(0, idx), 
            ...this._chosenArts.slice(idx+1, this._chosenArts.length)]);
    }

    requestDistricts = async () => {
        try {
            const result = await axios(`${HOST}/districts`, {
                method: "get"
            })

            runInAction(() => {
                this.setDistricts(result.data);
            })
        } catch(e) {
            console.log("School Filter Store", e);
        }
    }

    requestArts = async () => {
        try {
            const result = await axios(`${HOST}/arts`, {
                method: "get"
            })

            runInAction(() => {
                this.setArts(result.data);
            })
        } catch(e) {
            console.log("School Filter Store", e);
        }
    }
    destroy() {}
}