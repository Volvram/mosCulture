import { makeObservable, observable, action, computed, runInAction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import { HOST } from "../config/host";
import axios from "axios";
import { Alert } from "react-native";

type PrivateFields = "_name" | "_email" | "_password";

export class SignUpStore implements ILocalStore {
    private _name: string = "";
    private _email: string = "";
    private _password: string = "";

    constructor() {
        makeObservable<SignUpStore, PrivateFields>(this, {
            _name: observable,
            setName: action,
            name: computed,
            _email: observable,
            setEmail: action,
            email: computed,
            _password: observable,
            setPassword: action,
            password: computed
        })
    }

    setName(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
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

    async requestRegister() {
        try {
            const result = await axios(`${HOST}/users`, {
                method: "post",
                data: {
                    name: this._name,
                    email: this._email,
                    password: this._password,
                },
                headers: { 
                    "Accept": 'application/json'
                },
            });

            runInAction(() => {
                Alert.alert("Аккаунт успешно зарегистрирован");
            });

            return new Promise((resolve, reject) => {
                resolve(true);
            })

        } catch (e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                console.log("Sign Up Store: ", e.response);
                return new Promise((resolve, reject) => {
                    resolve(false);
                })
            }
        }  
    }

    destroy() {}
}