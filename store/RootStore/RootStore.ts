import TestStore from "./TestStore";

export default class RootStore {
    readonly count = new TestStore();
}