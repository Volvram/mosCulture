import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Modal from "react-native-modal";
import CheckBox from 'expo-checkbox';
import { TYPOGRAPHY } from '../../../../config/typography';
import { COLORS } from '../../../../config/colors';
import React from 'react';
import { useLocalStore } from '../../../../utils/useLocalStore';
import SchoolFilterStore from "../../../../store/SchoolFilterStore";
import { observer } from 'mobx-react-lite';

type SchoolFilterProps = {
    isFilterVisible: boolean,
    setFilterVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const districts = ["ЦАО", "ЮВАО","СЗАО", "САО", "ЮАО", "ЗелАО"];
const directions = ["Музыкальная", "Художественная", "Театральная", "Хореографическая",]

const SchoolFilter: React.FC<SchoolFilterProps> = ({isFilterVisible, setFilterVisible}) => {
    const schoolFiltersStore = useLocalStore(() => new SchoolFilterStore());
    
    return (
        <Modal
                style={styles.schoolFilter}
                animationIn="slideInUp"
                isVisible={isFilterVisible}
                onBackdropPress={() => setFilterVisible(false)}
            >
                <View style={styles.schoolFilter_wrapper}>
                    <View style={styles.schoolFilter_wrapper_top}>
                        <Text style={styles.schoolFilter_wrapper_top_text}>Фильтровать</Text>
                        <TouchableOpacity onPress={() => setFilterVisible(false)}>
                            <Image style={styles.schoolFilter_wrapper_top_close} source={require("../../../../assets/img/buttonClose.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.schoolFilter_wrapper_districts}>
                        <Text style={styles.schoolFilter_wrapper_districts_title}>По округу</Text>
                        <View style={styles.schoolFilter_wrapper_districts_choices}>
                            {districts.map(district => {
                                return (
                                    <View key={district} style={styles.schoolFilter_wrapper_districts_choices_choice}>
                                        <CheckBox
                                            disabled={false}
                                            value={Boolean(schoolFiltersStore.chosenDistricts.find(dis => dis === district))}
                                            onValueChange={(newValue) => {
                                                if (newValue) {
                                                    schoolFiltersStore.addChosenDistrict(district);
                                                } else {
                                                    schoolFiltersStore.deleteChosenDistrict(district)
                                                }
                                            }}
                                            color={COLORS.blueAction}
                                            style={{borderRadius: 6}}
                                        />
                                        <Text style={styles.schoolFilter_wrapper_districts_choices_choice_text}>{district}</Text>
                                    </View>
                                )
                            })
                            }
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                            <TouchableOpacity onPress={() => schoolFiltersStore.setChosenDistricts([])}>
                                <Text style={{...TYPOGRAPHY.p1, color: COLORS.blueAction}}>Сбросить все</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => schoolFiltersStore.setChosenDistricts([...districts])}>
                                <Text style={{...TYPOGRAPHY.p1, color: COLORS.blueAction}}>Выбрать всё</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop: 32}}>
                        <Text style={styles.schoolFilter_wrapper_direction_title}>По направлению</Text>
                        <View style={styles.schoolFilter_wrapper_direction_choices}>
                            {directions.map(direction => {
                                return (
                                    <View key={direction} style={styles.schoolFilter_wrapper_direction_choices_choice}>
                                        <CheckBox
                                            disabled={false}
                                            value={Boolean(schoolFiltersStore.chosenDirections.find(dir => dir === direction))}
                                            onValueChange={(newValue) => {
                                                if (newValue) {
                                                    schoolFiltersStore.addChosenDirection(direction)
                                                } else {
                                                    const idx = schoolFiltersStore.chosenDirections.findIndex(dis => dis === direction);
                                                    schoolFiltersStore.deleteChosenDirection(direction);
                                                }
                                            }}
                                            color={COLORS.blueAction}
                                            style={{borderRadius: 6}}
                                        />
                                        <Text style={styles.schoolFilter_wrapper_direction_choices_choice_text}>{direction}</Text>
                                    </View>
                                )
                            })
                            }
                        </View>
                    </View>

                    <View style={styles.schoolFilter_wrapper_action}>
                        <TouchableOpacity style={styles.schoolFilter_wrapper_action_reset}
                            onPress={() => {schoolFiltersStore.setChosenDistricts([]); schoolFiltersStore.setChosenDirections([])}}>
                            <Text style={styles.schoolFilter_wrapper_action_reset_text}>Сбросить</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.schoolFilter_wrapper_action_apply}>
                            <Text style={styles.schoolFilter_wrapper_action_apply_text}>Применить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </Modal>
    )
}

export default observer(SchoolFilter);

const styles = StyleSheet.create({
    schoolFilter: {
        margin: 0,
        justifyContent: "flex-end"
    },
    schoolFilter_wrapper: {
        paddingTop: 25,
        paddingBottom: 32,
        paddingHorizontal: 16,
        width: "100%",
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    schoolFilter_wrapper_top: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    schoolFilter_wrapper_top_text: {
        ...TYPOGRAPHY.h2,
        color: COLORS.black
    },
    schoolFilter_wrapper_top_close: {
        width: 48,
        height: 48,
    },
    schoolFilter_wrapper_districts: {
        marginTop: 32,
    },
    schoolFilter_wrapper_districts_title: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray,
    },
    schoolFilter_wrapper_districts_choices: {
        marginVertical: 8,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    schoolFilter_wrapper_districts_choices_choice: {
        marginVertical: 8,
        display: "flex",
        flexDirection: "row",
        flexBasis: "33%",
        alignItems: "center"
    },
    schoolFilter_wrapper_districts_choices_choice_text: {
        ...TYPOGRAPHY.h4,
        color: COLORS.black,
        marginLeft: 8,
    },
    schoolFilter_wrapper_direction_title: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray,
    },
    schoolFilter_wrapper_direction_choices: {
        marginVertical: 8,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    schoolFilter_wrapper_direction_choices_choice: {
        marginVertical: 8,
        display: "flex",
        flexDirection: "row",
        flexBasis: "50%",
        alignItems: "center"
    },
    schoolFilter_wrapper_direction_choices_choice_text: {
        ...TYPOGRAPHY.h4,
        color: COLORS.black,
        marginLeft: 8,
    },
    


    schoolFilter_wrapper_action: {
        marginTop: 32,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    schoolFilter_wrapper_action_reset: {
        paddingVertical: 12,
        paddingHorizontal: 53.5,
        backgroundColor: COLORS.lightGray,
        borderRadius: 24,
    },
    schoolFilter_wrapper_action_reset_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.black
    },
    schoolFilter_wrapper_action_apply: {
        paddingVertical: 12,
        paddingHorizontal: 47,
        backgroundColor: COLORS.blueAction,
        borderRadius: 24,
    },
    schoolFilter_wrapper_action_apply_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white
    },
})