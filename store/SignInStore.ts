import { makeObservable, observable, action, computed, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ILocalStore } from "../utils/useLocalStore";
import { HOST } from "../config/host";
import axios from "axios";
import querystring from "query-string";
import rootStore from "./RootStore/instance";
import { Alert } from "react-native";

type PrivateFields = "_email" | "_password";

export class SignInStore implements ILocalStore {
    private _email: string = "";
    private _password: string = "";

    constructor() {
        makeObservable<SignInStore, PrivateFields>(this, {
            _email: observable,
            setEmail: action,
            email: computed,
            _password: observable,
            setPassword: action,
            password: computed
        })
    }

    setEmail(email: string) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    setPassword(password: string) {
        this._password = password;
    }

    get password() {
        return this._password;
    }

    async requestLogin() {
        try { 
            const result = await axios(`${HOST}/auth/login`, {
                method: "post",
                data: querystring.stringify({
                    email: this._email,
                    password: this._password,
                }),
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": 'application/json'
                },
            });

            runInAction(async () => {
                await AsyncStorage.setItem("access_token", result.data.access_token);
                await AsyncStorage.setItem("refresh_token", result.data.refresh_token);
                await rootStore.user.checkAuthorization();
            });

            return new Promise((resolve, reject) => {
                resolve(true);
            });

        } catch (e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                return new Promise((resolve, reject) => {
                    resolve(false);
                });
            }
        }  
    }

    destroy() {}
}