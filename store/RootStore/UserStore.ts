import {makeObservable, observable, action, computed, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { HOST } from "../../config/host";
import { decodeToken } from "../../config/decodeToken";

type PrivateFields = "_authorized" | "_avatar" | "_userId" | "_name" | "_createdAt" | "_email" | "_roles" | "_score";

export default class UserStore {
    private _authorized: boolean | null = null;
    private _avatar: string | null = null;
    private _userId: number | null = null;
    private _name: string | null = null;
    private _createdAt: string | null = null;
    private _email: string | null = null;
    private _roles: string[] | null = null;
    private _score: number | null = null;

    constructor() {
        makeObservable<UserStore, PrivateFields>(this, {
            _authorized: observable,
            setAuthorized: action,
            authorized: computed,
            checkAuthorization: action,
            _avatar: observable,
            setAvatar: action,
            avatar: computed,
            _userId: observable,
            setUserId: action,
            userId: computed,
            _name: observable,
            setName: action,
            name: computed,
            _createdAt: observable,
            setCreatedAt: action,
            createdAt: computed,
            _email: observable,
            setEmail: action,
            email: computed,
            _roles: observable,
            setRoles: action,
            roles: computed,
            _score: observable,
        })
    }

    setAuthorized(authorized: boolean) {
        this._authorized = authorized;
    }

    get authorized() {
        return this._authorized;
    }

    setAvatar(avatar: string | null) {
        this._avatar = avatar;
    }

    get avatar() {
        return this._avatar;
    }

    setUserId(userId: number) {
        this._userId = userId;
    }

    get userId() {
        return this._userId;
    }

    setName(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    setCreatedAt(createdAt: string) {
        this._createdAt = createdAt;
    }

    get createdAt() {
        return this._createdAt;
    }

    setEmail(email: string) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    setRoles(roles: string[]) {
        this._roles = roles;
    }

    get roles() {
        return this._roles;
    }

    setScore(score: number) {
        this._score = score;
    }

    get score() {
        return this._score;
    }

    setAllData(authorized: boolean, avatar: string | null, userId: number, name: string, createdAt: string, email: string, roles: string[], score: number) {
        this.setAuthorized(authorized);
        this.setAvatar(avatar);
        this.setUserId(userId);
        this.setName(name);
        this.setCreatedAt(createdAt);
        this.setEmail(email);
        this.setRoles(roles);
        this.setScore(score);
    }

    async checkAuthorization() {
        try {
            const accessToken = await AsyncStorage.getItem("access_token");

            if (accessToken) {
                const payload = decodeToken(accessToken);

                const result = await axios(`${HOST}/users/${payload.user_id}`, {
                    method: "get",
                    headers: {
                        "Authorization" : `Bearer ${accessToken}`
                    }
                })

                runInAction(() => {
                    const data = result.data;

                    this.setAllData(true, data.avatar, data.id, data.name, data.createdAt, data.email, data.roles, data.score);
                })
            } else {
                throw new Error("no access token");
            }
        } catch(e: any) {
            try {
                const refreshToken = await AsyncStorage.getItem("refresh_token");

                if (refreshToken) {
                    const result = await axios(`${HOST}/auth/refresh`, {
                        method: "post",
                        headers: {
                            "Authorization" : `Bearer ${refreshToken}`
                        }
                    })
                    
                    runInAction(async () => {
                        await AsyncStorage.setItem("access_token", result.data.access_token);
                        await AsyncStorage.setItem("refresh_token", result.data.refresh_token);
                        this.checkAuthorization();
                    })
                } else {
                    throw new Error("no refresh token");
                }
            } catch(e: any) {
                this._authorized = false;
            }
        }
    }
}