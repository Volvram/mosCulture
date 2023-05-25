import { COLORS } from "./colors"

export const defineTagStyle = (tag: string) => {
    let tagStyle
    if (tag === "Изобразительное Искусство") {
        tagStyle = { paddingVertical: 2, paddingHorizontal: 10, backgroundColor: COLORS.pink, borderRadius: 8}
    }else if (tag === "Музыка") {
        tagStyle = { paddingVertical: 2, paddingHorizontal: 10, backgroundColor: COLORS.yellow, borderRadius: 8}
    }else if (tag === "Театр") {
        tagStyle = { paddingVertical: 2, paddingHorizontal: 10, backgroundColor: COLORS.purple, borderRadius: 8}
    }else {
        tagStyle = { paddingVertical: 2, paddingHorizontal: 10, backgroundColor: COLORS.blue, borderRadius: 8}
    }

    return tagStyle;
}