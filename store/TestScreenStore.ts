import {makeObservable, observable, action, computed } from "mobx";
import { AnswerType } from "../screens/TestScreen/TestScreen";
import { ILocalStore } from "../utils/useLocalStore";

type privateFields = "_currentQuestion" | "_chosenAnswer" | "_score" | "_correctAnswer" | "_showNotes"

export class TestScreenStore implements ILocalStore {
    private _currentQuestion = 1;
    private _chosenAnswer: AnswerType | null = null;
    private _score = 0;
    private _correctAnswer: boolean | null = null;
    private _showNotes = false;

    constructor() {
        makeObservable<TestScreenStore, privateFields>(this, {
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
            _showNotes: observable,
            setShowNotes: action,
            showNotes: computed,
        })
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

    setShowNotes(showNotes: boolean) {
        this._showNotes = showNotes;
    }

    get showNotes() {
        return this._showNotes;
    }

    destroy(){}
}