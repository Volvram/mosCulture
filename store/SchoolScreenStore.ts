import { makeObservable, observable, action, computed, runInAction, IReactionDisposer, reaction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import { HOST } from "../config/host";
import querystring from "query-string";
import axios, { AxiosResponse } from "axios";
import { Alert } from "react-native";

export type SchoolType = {
    id: number,
    name: string,
    email: string,
    image: string,
    address: string,
    phoneNumber: string,
    longitude: number,
    latitude: number,
    createdAt: string,
    updatedAt: string,
    content: string,
    district: {
        id: number,
        name: string
    },
    arts: [
        {
            id: number,
            name: string
        }
    ],
    studyPrograms: [
        {
        id: 0,
        name: string
        }
    ]
}

type PrivateFields = "_schools" | "_districtFilters" | "_artFilters";

export default class SchoolScreenStore implements ILocalStore {
    private _schools: SchoolType[] | null = null;
    private _districtFilters: number[] | null = null;
    private _artFilters: number[] | null = null;

    constructor() {
        makeObservable<SchoolScreenStore, PrivateFields>(this, {
            _schools: observable,
            setSchools: action,
            schools: computed,
            _districtFilters: observable,
            setDistrictFilters: action,
            districtFilters: computed,
            _artFilters: observable,
            setArtFilters: action,
            artFilters: computed,
        })
    }

    setSchools(schools: SchoolType[]) {
        this._schools = schools;
    }

    get schools() {
        return this._schools;
    }

    setDistrictFilters(districtFilters: number[]) {
        if (districtFilters.length !== 0) {
            this._districtFilters = districtFilters
        } else {
            this._districtFilters = null
        }
    }

    get districtFilters() {
        return this._districtFilters;
    }

    setArtFilters(artFilters: number[]) {
        if (artFilters.length !== 0) {
            this._artFilters = artFilters
        } else {
            this._artFilters = null
        }
    }

    get artFilters() {
        return this._artFilters;
    }

    requestSchools = async () => {
        try {
            let result: AxiosResponse<any, any>;
            if (this._districtFilters && this._artFilters) {
                result = await axios(`${HOST}/schools`, {
                    method: "get",
                    params: {
                        per_page: 50,
                        district_ids: this._districtFilters,
                        art_ids: this._artFilters
                    },
                    paramsSerializer: params => {
                        return querystring.stringify(params)
                    }
                });
            } else if (this._districtFilters) {
                result = await axios(`${HOST}/schools`, {
                    method: "get",
                    params: {
                        per_page: 50,
                        district_ids: this._districtFilters
                    },
                    paramsSerializer: params => {
                        return querystring.stringify(params)
                    }
                });
            } else if (this._artFilters) {
                result = await axios(`${HOST}/schools`, {
                    method: "get",
                    params: {
                        per_page: 50,
                        art_ids: this._artFilters
                    },
                    paramsSerializer: params => {
                        return querystring.stringify(params)
                    }
                });
            } else {
                result = await axios(`${HOST}/schools`, {
                    method: "get",
                    params: {
                        per_page: 50,
                    }
                });
            }

            runInAction(() => {
                this.setSchools(result.data);
            })
        } catch(e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                console.log("School Screen Store: ", e)
            }
            this.setSchools([]);
        }
    }

    destroy() {
        this._filtersChangeHandler();
    }

    readonly _filtersChangeHandler: IReactionDisposer = reaction(
        () => [this._districtFilters, this._artFilters],
        () => this.requestSchools()
    );
}