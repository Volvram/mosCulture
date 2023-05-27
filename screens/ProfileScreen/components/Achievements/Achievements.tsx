import { StyleSheet, View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import Card from "../../../../components/Card/Card";
import { AchievementType } from "../../../../store/ProfileStore";

const achievements = [{id: 1, title: "Lorem ipsum dolor sit aet, consectetur"},
{id: 2, title: "Lorem ipsum dolor sit aet, consectetur"},
{id: 3, title: "Lorem ipsum dolor sit aet, consectetur"}]

type AchievementsProps = {
    navigation: any,
    achievements: AchievementType[] | null
}

const Achievements: React.FC<AchievementsProps> = ({ navigation, achievements }) => {
    return (
        <View style={styles.achievements}>
            <Text style={styles.achievements_title}>Ваши достижения</Text>
            <ScrollView 
                style={styles.achievements_list}
                horizontal
                contentContainerStyle={{
                    flexGrow: 1, flexDirection: 'row',
                }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast">
                {achievements ? achievements.map((achievement, index) => {
                    if (index <= 5) {
                        return (
                            <Card key={achievement.id} bottom={achievement.title}
                            width={187} height={192}
                            image={achievement.image} />
                        )
                    } else {

                    }
                })
                :  <ActivityIndicator style={styles.achievements_dataIsLoading} size="large" color={COLORS.blueAction} />
                }
            </ScrollView>
            <TouchableOpacity style={{marginTop: 16, alignSelf: "center"}}
                onPress={() => navigation.navigate("Достижения", {achievements: achievements})}>
                <Text style={styles.achievements_more}>Смотреть все</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Achievements;

const styles = StyleSheet.create({
    achievements: {
        marginTop: 17,
        width: '100%',
    },
    achievements_title: {
        ...TYPOGRAPHY.h1,
        color: COLORS.black,
        alignSelf: "center",
    },
    achievements_list: {
        marginTop: 16,
        width: "100%",
        backgroundColor: COLORS.lightGray,
        borderRadius: 16,
    },
    achievements_dataIsLoading: {
        marginVertical: "auto",
        width: "100%",
        alignSelf: "center",
    },
    achievements_more: {
        ...TYPOGRAPHY.p1,
        color: COLORS.blueAction,
    }
});