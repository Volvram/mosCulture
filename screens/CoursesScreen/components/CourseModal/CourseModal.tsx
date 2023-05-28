import { StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import { formatPrice } from "../../../../config/formatPrice";
import { CourseType } from "../../../../store/InterestingCoursesStore";

type CourseModalType = {
    navigation: any,
    isModalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    currentCourse: CourseType | null;
}

const CourseModal: React.FC<CourseModalType> = ({ navigation, isModalVisible, setModalVisible, currentCourse }) => {
    return (
        <Modal
            style={styles.courseModal}
            isVisible={isModalVisible}
            animationIn="slideInUp"
            onBackdropPress={() => setModalVisible(false)}
            swipeDirection="down"
            onSwipeComplete={() => setModalVisible(false)}>

                {currentCourse ?
                    <View style={styles.courseModal_wrapper}>
                    <Image style={styles.courseModal_wrapper_image} 
                        source={{uri: currentCourse.image}}/>
                    <View style={styles.courseModal_wrapper_details}>
                        <View style={styles.courseModal_wrapper_details_top}>
                            <View style={styles.courseModal_wrapper_details_top_tag}>
                                <Text style={styles.courseModal_wrapper_details_top_tag_text}>
                                    {currentCourse.art.name}
                                </Text>
                            </View>
                            <View style={styles.courseModal_wrapper_details_top_price}>
                                <Text style={styles.courseModal_wrapper_details_top_price_text}>Цена:</Text>
                                <Text style={styles.courseModal_wrapper_details_top_price_num}>
                                    {currentCourse.price !== 0 ? formatPrice(currentCourse.price)
                                    : "Бесплатно"}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.courseModal_wrapper_title}>{currentCourse.name}</Text>
                        <Text style={styles.courseModal_wrapper_description}>
                            {currentCourse.description}
                        </Text>
                        <View style={styles.courseModal_wrapper_info}>
                            <Image style={styles.courseModal_wrapper_info_image} source={require("../../../../assets/img/person.png")} />
                            <Text style={styles.courseModal_wrapper_info_text}>{currentCourse.duration}</Text>
                            <Image style={[styles.courseModal_wrapper_info_image, {marginLeft: 16}]} 
                                source={require("../../../../assets/img/duration.png")} />
                            <Text style={styles.courseModal_wrapper_info_text}>40 ч</Text>
                        </View>
                        <Text style={styles.courseModal_wrapper_rule}>Первый ознакомительный урок бесплатный.</Text>
                        <View style={styles.courseModal_wrapper_bottom}>
                            <TouchableOpacity style={styles.courseModal_wrapper_bottom_back} 
                                onPress={() => {setModalVisible(false)}}>
                                <Text style={styles.courseModal_wrapper_bottom_back_text}>Назад</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.courseModal_wrapper_bottom_start} 
                                //onPress={navigation.navigate("Пост", { post: course})}
                              >
                                <Text style={styles.courseModal_wrapper_bottom_start_text}>К курсу</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                : <ActivityIndicator style={styles.courseModal_dataIsLoading} size="large" color={COLORS.blueAction} />
                }
        </Modal>
    )
}

export default CourseModal;

const styles = StyleSheet.create({
    courseModal: {
        margin: 0,
        justifyContent: "flex-end"
    },
    courseModal_wrapper: {
        width: "100%",
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    courseModal_wrapper_image: {
        width: "100%",
        minHeight: 220,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    courseModal_wrapper_details: {
        paddingTop: 16,
        paddingBottom: 40,
        paddingHorizontal: 16,
    },
    courseModal_wrapper_details_top: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    courseModal_wrapper_details_top_tag: {
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: COLORS.yellow
    },
    courseModal_wrapper_details_top_tag_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.black
    },
    courseModal_wrapper_details_top_price: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    courseModal_wrapper_details_top_price_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray
    },
    courseModal_wrapper_details_top_price_num: {
        ...TYPOGRAPHY.h3,
        marginHorizontal: 8,
        color: COLORS.black
    },
    courseModal_wrapper_title: {
        ...TYPOGRAPHY.h3,
        marginTop: 16,
        color: COLORS.black
    },
    courseModal_wrapper_description: {
        ...TYPOGRAPHY.p1,
        marginTop: 8,
        color: COLORS.gray
    },
    courseModal_wrapper_info: {
        marginTop: 16,
        flexDirection: "row", 
        alignItems: "center"
    },
    courseModal_wrapper_info_image: {
        width: 20,
        height: 20,
    },
    courseModal_wrapper_info_text: {
        ...TYPOGRAPHY.p1,
        marginLeft: 4,
        color: COLORS.gray
    },
    courseModal_wrapper_rule: {
        ...TYPOGRAPHY.p1,
        marginTop: 16,
        color: COLORS.blueAction
    },
    courseModal_wrapper_bottom: {
        marginTop: 32,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    courseModal_wrapper_bottom_back: {
        paddingVertical: 12,
        paddingHorizontal: 65.5,
        backgroundColor: COLORS.lightGray,
        borderRadius: 24,
    },
    courseModal_wrapper_bottom_back_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.black
    },
    courseModal_wrapper_bottom_start: {
        paddingVertical: 12,
        paddingHorizontal: 61.5,
        backgroundColor: COLORS.blueAction,
        borderRadius: 24,
    },
    courseModal_wrapper_bottom_start_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white
    },
    courseModal_dataIsLoading: {
        marginTop: "100%",
        marginBottom: "100%",
        width: "100%",
        alignSelf: "center",
    }
})