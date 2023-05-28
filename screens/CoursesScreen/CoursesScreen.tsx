import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { COLORS } from "../../config/colors";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import YourCourses from "./components/YourCourses/YourCourses";
import OtherCourses from "./components/OtherCourses/OtherCourses";
import CourseModal from "./components/CourseModal/CourseModal";
import rootStore from "../../store/RootStore/instance";
import { useLocalStore } from "../../utils/useLocalStore";
import InterestingCourses from "./components/InterestingCourses/InterestingCourses";
import { CourseType } from "../../store/InterestingCoursesStore";

type CoursesScreenProps = {
    navigation: any,
}

const CoursesScreen: React.FC<CoursesScreenProps> = ({ navigation }) => {

    const [isModalVisible, setModalVisible] = React.useState(false);
    const [currentCourse, setCurrentCourse] = React.useState<CourseType | null>(null);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <ScreenHeader buttons={
                [{image: require("../../assets/img/search.png"), onClick: () => {}}, 
                {image: require("../../assets/img/sliders.png"), onClick: () => {}}]
                } />
            <ScrollView style={styles.courses}>
                {rootStore.user.authorized && 
                    <YourCourses navigation={navigation} />
                }
                <InterestingCourses navigation={navigation} onOpen={(course: CourseType) => {
                        setCurrentCourse(course)
                        setModalVisible(true)
                    }}/>
                <OtherCourses navigation={navigation} onOpen={(course: CourseType) => {
                        setCurrentCourse(course)
                        setModalVisible(true)
                    }}/>
            </ScrollView>
            <CourseModal navigation={navigation} 
                isModalVisible={isModalVisible} 
                setModalVisible={setModalVisible} 
                currentCourse={currentCourse}/>
            <StatusBar style="auto" />
        </View>
    );
}
export default CoursesScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    courses: {
        height: '100%',
    }
});