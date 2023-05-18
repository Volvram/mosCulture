import { ImageSourcePropType } from "react-native/types";

export type menuSectionType = {
    id: string;
    name: string;
    image?: ImageSourcePropType;
}

export const menuSections: menuSectionType[] = [
    {
        id: "main",
        name: "Главная",
        image: require("../assets/img/house.png")
    },
    {
        id: "news",
        name: "Новости",
        image: require("../assets/img/newspaper.png")
    },
    {
        id: "signIn",
        name: "Войти",
        image: require("../assets/img/gear.png")
    },
    {
        id: "signUp",
        name: "Зарегистрироваться",
        image: require("../assets/img/gear.png")
    },
];

export type otherSectionType = {
    id: string;
    name: string;
    image?: ImageSourcePropType;
}

export const otherSections: otherSectionType[] = [
    {
        id: "options",
        name: "Настройки",
        image: require("../assets/img/gear.png")
    },
    {
        id: "notices",
        name: "Уведомления",
        image: require("../assets/img/bell.png")
    },
    {
        id: "help",
        name: "Помощь",
        image: require("../assets/img/questionCircle.png")
    },
]