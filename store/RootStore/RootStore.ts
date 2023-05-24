import TestStore from "./TestStore";
import UserStore from "./UserStore";

export default class RootStore {
    readonly count = new TestStore();
    readonly user = new UserStore();
}