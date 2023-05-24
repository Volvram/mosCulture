import { ImageSourcePropType } from "react-native/types";

export type menuSectionType = {
    id: string;
    name: string;
    image: ImageSourcePropType;
    imageActive: ImageSourcePropType;
    authorizationRequired?: boolean;
}

export const menuSections: menuSectionType[] = [
    {
        id: "feed",
        name: "Лента",
        image: require("../assets/img/compass.png"),
        imageActive: require("../assets/img/compassActive.png"),
    },
    {
        id: "entertainments",
        name: "Развлечения",
        image: require("../assets/img/controller.png"),
        imageActive: require("../assets/img/controllerActive.png")
    },
    {
        id: "courses",
        name: "Курсы",
        image: require("../assets/img/book.png"),
        imageActive: require("../assets/img/bookActive.png"),
    },
    {
        id: "schools",
        name: "Школы",
        image: require("../assets/img/mortarboard.png"),
        imageActive: require("../assets/img/mortarboardActive.png")
    },
    {
        id: "profile",
        name: "Профиль",
        image: require("../assets/img/person.png"),
        imageActive: require("../assets/img/personActive.png"),
        authorizationRequired: true,
    },
];