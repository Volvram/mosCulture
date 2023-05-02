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
    }
] 