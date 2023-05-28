import {makeObservable, observable, action, computed, reaction, IReactionDisposer } from "mobx";
import { AnswerType } from "../screens/TestScreen/TestScreen";
import { ILocalStore } from "../utils/useLocalStore";
import { HOST } from "../config/host";
import axios from "axios";
import { Alert } from "react-native";
import rootStore from "./RootStore/instance";

type privateFields = "_testId" | "_currentQuestion" | "_chosenAnswer" | "_score" | "_correctAnswer" | "_currentAnswers"

export class TestScreenStore implements ILocalStore {
    private _testId: number | null = null;
    private _currentQuestion = 1;
    private _chosenAnswer: AnswerType | null = null;
    private _score = 0;
    private _correctAnswer: boolean | null = null;
    private _currentAnswers: AnswerType[] | null = null;

    constructor() {
        makeObservable<TestScreenStore, privateFields>(this, {
            _testId: observable,
            setTestId: action,
            testId: computed,
            _currentQuestion: observable,
            setCurrentQuestion: action,
            currentQuestion: computed,
            _chosenAnswer: observable,
            setChosenAnswer: action,
            chosenAnswer: computed,
            _score: observable,
            setScore: action,
            score: computed,
            _correctAnswer: observable,
            setCorrectAnswer: action,
            correctAnswer: computed,
            _currentAnswers: observable,
            setCurrentAnswers: action,
            currentAnswers: computed,
            shuffle: action,
        })
    }

    setTestId(testId: number) {
        this._testId = testId;
    }

    get testId() {
        return this._testId;
    }

    setCurrentQuestion(currentQuestion: number) {
        this._currentQuestion = currentQuestion;
    }

    get currentQuestion() {
        return this._currentQuestion;
    }

    setChosenAnswer(chosenAnswer: AnswerType | null) {
        this._chosenAnswer = chosenAnswer;
    }

    get chosenAnswer() {
        return this._chosenAnswer;
    }

    setScore(score: number) {
        this._score = score;
    }

    get score() {
        return this._score;
    }

    setCorrectAnswer(correctAnswer: boolean) {
        this._correctAnswer = correctAnswer;
    }

    get correctAnswer() {
        return this._correctAnswer;
    }

    setCurrentAnswers(currentAnswers: AnswerType[]) {
        this._currentAnswers = this.shuffle(currentAnswers);
    }

    get currentAnswers() {
        return this._currentAnswers;
    }

    shuffle = (answers: AnswerType[]) => {
        let currentIndex = answers.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [answers[currentIndex], answers[randomIndex]] = [
                answers[randomIndex], answers[currentIndex]];
        }

        return answers;
    }

    sendAnswer = async () => {
        try {
            const result = await axios(`${HOST}/${rootStore.user.userId}/tests/${this._testId}`, {
                method: "post",
                data: {
                    score: this._score
                }
            })
        } catch(e: any) {
            if (e.toString().split(" ").find((el: string) => el === "Network")) {
                Alert.alert("Отсутствует подключение к серверу");
            } else {
                console.log("Test Screen Store: ", e.response);
            }
        }
    };

    destroy(){}
}