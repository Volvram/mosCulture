import { makeObservable, observable, action, computed, runInAction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import axios from "axios";
import { HOST } from "../config/host";

type PrivateFields = "_authorized";

export class ProfileScreenStore implements ILocalStore {
    
    constructor() {
        
    }

    

    destroy(){}
}