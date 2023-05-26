import { makeObservable, observable, action, computed, runInAction } from "mobx";
import { ILocalStore } from "../utils/useLocalStore";
import axios, { AxiosResponse } from "axios";
import { HOST } from "../config/host";
import { Alert } from "react-native";

type ArticleType = {
  id: number,
  name: string,
  description: string,
  image: string,
  published: true,
  content: string,
  createdAt: string,
  updatedAt: string,
  articleType: {
    id: number,
    name: string
  },
  arts: [
    {
      id: number,
      name: string
    }
  ]
}

type PrivateFields = "_post";

export class PostContentStore implements ILocalStore {
    private _postId: number;
    private _postType: string;
    private _post: ArticleType | null  = null;

    constructor(postId: number, postType: string) {
        this._postId = postId;
        this._postType = postType;

        makeObservable<PostContentStore, PrivateFields>(this, {
            _post: observable,
            setPost: action,
            post: computed,
        })
    }

    setPost(post: ArticleType) {
        this._post = post;
    }

    get post() {
        return this._post;
    }

    requestPost = async () => {
        try {
            let result: AxiosResponse<any, any>;
            if (this._postType === "article") {
                result = await axios(`${HOST}/articles/${this._postId}`, {
                    method: "get",
                })
            }

            runInAction(() => {
                this.setPost(result.data);
            })

        } catch(e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                console.log("Post Content Store: ", e.response);
            }
        }
    }

    destroy(){}
}