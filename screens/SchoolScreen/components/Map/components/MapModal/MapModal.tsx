import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import Modal from "react-native-modal";
import { COLORS } from "../../../../../../config/colors";
import { TYPOGRAPHY } from "../../../../../../config/typography";

type MapModalProps = {
    isModalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const MapModal: React.FC<MapModalProps> = ({ isModalVisible, setModalVisible }) => {
    

    return (
        <Modal
            style={styles.mapModal}
            isVisible={isModalVisible}
            animationIn="slideInUp"
            onBackdropPress={() => setModalVisible(false)}
            swipeDirection="down"
            onSwipeComplete={() => setModalVisible(false)}
            >
            <View style={styles.mapModal_wrapper}>
                <View style={styles.mapModal_wrapper_top}>
                    <View style={styles.mapModal_wrapper_top_tags}>
                        {["Музыкальная", "Театральная"].map(tag => {
                            let tagStyle;
                            if (tag === "Музыкальная") {
                                tagStyle = {backgroundColor: COLORS.yellow}
                            } else if (tag === "Художественная") {
                                tagStyle = {backgroundColor: COLORS.pink}
                            } else if (tag === "Театральная") {
                                tagStyle = {backgroundColor: COLORS.purple}
                            }
                            return (
                                <View key={tag} style={[styles.mapModal_wrapper_top_tag, tagStyle]}>
                                    <Text style={styles.mapModal_wrapper_top_tag_text}>{tag}</Text>
                                </View>
                            )
                        })
                        }
                    </View>
                    <TouchableOpacity style={{marginRight: 16}} onPress={() => {setModalVisible(false)}}>
                        <Image style={{width: 48, height: 48}} 
                            source={require("../../../../../../assets/img/buttonClose.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.mapModal_wrapper_title}>Детская школа искусств № 14</Text>
                <ImageBackground source={require("../../../../../../assets/img/decoration_3.png")}>
                    <Text style={styles.mapModal_wrapper_description}>Школа искусств, дополнительное образование</Text>
                    <View style={styles.mapModal_wrapper_rating}>
                        {
                            ["1", "2","3","4", "5"].map(star => {
                                return (
                                    <Image style={{marginHorizontal: 4}} key={star} source={require("../../../../../../assets/img/star.png")} />
                                )
                            })
                        }
                        <Text style={styles.mapModal_wrapper_rating_mark}>5.0</Text>
                        <Text style={styles.mapModal_wrapper_rating_feedbacks}>68 отзывов</Text>
                    </View>
                    <View style={styles.mapModal_wrapper_details}>
                        <View style={styles.mapModal_wrapper_details_section}>
                            <Image style={styles.mapModal_wrapper_details_section_image} 
                                source={require("../../../../../../assets/img/geo.png")} />
                            <Text style={styles.mapModal_wrapper_details_section_title}>Адрес</Text>
                            <Text style={styles.mapModal_wrapper_details_section_data}>Пронская ул., 7, Москва</Text>
                        </View>
                        <View style={styles.mapModal_wrapper_details_section}>
                            <Image style={styles.mapModal_wrapper_details_section_image} 
                            source={require("../../../../../../assets/img/telephone.png")} />
                            <Text style={styles.mapModal_wrapper_details_section_title}>Контакты</Text>
                            <Text style={styles.mapModal_wrapper_details_section_data}>+7 (495) 705-61-71</Text>
                        </View>
                        <View style={styles.mapModal_wrapper_details_section}>
                            <Image style={styles.mapModal_wrapper_details_section_image}
                            source={require("../../../../../../assets/img/clock.png")} />
                            <Text style={styles.mapModal_wrapper_details_section_title}>Время работы</Text>
                            <Text style={styles.mapModal_wrapper_details_section_data}>Открыто до 20:00</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.mapModal_wrapper_more}>
                        <Text style={styles.mapModal_wrapper_more_text}>Подробнее</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </Modal>
    )
}

export default MapModal;

const styles = StyleSheet.create({
    mapModal: {
        margin: 0,
        justifyContent: "flex-end"
    },
    mapModal_wrapper: {
        paddingTop: 26,
        paddingLeft: 8,
        width: "100%",
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    mapModal_wrapper_top: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    mapModal_wrapper_top_tags: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    mapModal_wrapper_top_tag: {
        marginHorizontal: 8,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    mapModal_wrapper_top_tag_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.black
    },
    mapModal_wrapper_title: {
        ...TYPOGRAPHY.h3,
        marginTop: 6,
        marginLeft: 8,
        color: COLORS.black,
    },
    mapModal_wrapper_description: {
        ...TYPOGRAPHY.p1,
        marginTop: 8,
        marginLeft: 8,
        maxWidth: 268,
        color: COLORS.gray,
    },
    mapModal_wrapper_rating: {
        marginLeft: 4,
        marginTop: 16,
        maxWidth: 259,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    mapModal_wrapper_rating_mark: {
        ...TYPOGRAPHY.p1,
        marginLeft: 12,
        fontWeight: "700",
        color: COLORS.black
    },
    mapModal_wrapper_rating_feedbacks:{
        ...TYPOGRAPHY.p1,
        marginLeft: 8,
        color: COLORS.gray,
    },
    mapModal_wrapper_details: {
        marginTop: 16,
    },
    mapModal_wrapper_details_section: {
        marginVertical: 8,
        marginLeft: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    mapModal_wrapper_details_section_image: {
        width: 20,
        height: 20,
    },
    mapModal_wrapper_details_section_title: {
        ...TYPOGRAPHY.p1,
        marginLeft: 8,
        color: COLORS.gray
    },
    mapModal_wrapper_details_section_data: {
        ...TYPOGRAPHY.p1,
        marginLeft: 16,
        color: COLORS.black
    },
    mapModal_wrapper_more: {
        marginVertical: 32,
        paddingVertical: 12,
        paddingHorizontal: 46,
        alignSelf: "center",
        backgroundColor: COLORS.blueAction,
        borderRadius: 24,
    },
    mapModal_wrapper_more_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white,
    }
});