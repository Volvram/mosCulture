import MenuStore from "./MenuStore";
import TestStore from "./TestStore";

export default class RootStore {
    readonly count = new TestStore();
    readonly menu = new MenuStore();
}