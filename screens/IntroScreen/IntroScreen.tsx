import { StyleSheet, View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";

type IntroScreenProps = {
    navigation: any,
}

const IntroScreen: React.FC<IntroScreenProps> = ({ navigation }) => {
    const [sliderState, setSliderState] = React.useState({ currentPage: 0 });
    const { width, height } = Dimensions.get('window');
    const scroller = React.useRef<ScrollView>(null);

    const setSliderPage = (event: any) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x / width);
        if (indexOfNextScreen !== currentPage) {
            setSliderState({
                ...sliderState,
                currentPage: indexOfNextScreen,
            });
        }
    }

    return (
        <View style={styles.intro}>
            <ScrollView
                ref={scroller}
                style={{ flex: 1 }}
                horizontal={true}
                scrollEventThrottle={16}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event: any) => {
                    setSliderPage(event);
                }}
            >
            <View style={{ width, height }}>
                <View style={styles.wrapper}>
                    <Image style={{width: "100%", minWidth: 361, minHeight: 334}} 
                        source={require("../../assets/img/intro_1.png")}/>
                    <Text style={styles.header}>Добро пожаловать в приложение Мос.Культура</Text>
                    <Text style={styles.paragraph}>
                        Здесь Вы найдёте подборку новостей и фактов из мира культуры и искусства, 
                        тематические игры и курсы, информацию о школах и многое другое!
                    </Text>
                </View>
            </View>
            <View style={{ width, height }}>
                <View style={styles.wrapper}>
                    <Image style={{width: "100%", minWidth: 361, minHeight: 334}} 
                        source={require("../../assets/img/intro_2.png")}/>
                    <Text style={styles.header}>Приложение создано при поддержке</Text>
                    <Text style={styles.paragraph}>
                        Департамента культуры города Москвы и Дирекции образовательных программ в сфере культуры и искусства.
                    </Text>
                </View>
            </View>
            <View style={{ width, height }}>
                <View style={styles.wrapper}>
                    <Image style={{width: "100%", minWidth: 361, minHeight: 334}} 
                        source={require("../../assets/img/intro_3.png")}/>
                    <Text style={styles.header}>Хотите создать аккаунт для доступа ко всем функциям?</Text>
                    <Text style={styles.paragraph}>
                        Нажмите “Пропуск”, если не хотите создавать аккаунт. Зарегистрироваться можно будет позже.
                    </Text>
                </View>
            </View>
            </ScrollView>
            <View style={styles.paginationWrapper}>
            {Array.from(Array(3).keys()).map((key, index) => {
                    return (
                        <View style={[styles.paginationDots, { opacity: sliderState.currentPage === index ? 1 : 0.2 }]} key={index} />
                    );
                })}
            </View>
            <View style={styles.intro_footer}>
                <TouchableOpacity onPress={() => navigation.navigate("Приложение")}>
                    <Text style={styles.intro_footer_skip}>Пропуск</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => { 
                    if (sliderState.currentPage === 2) {
                        navigation.navigate("Приложение");
                    } else {
                        if (scroller.current) {
                            scroller.current.scrollTo({ x: width * (sliderState.currentPage + 1) });
                        }
                    }
                    
                }}>
                    <Image style={styles.intro_footer_buttonForward} source={require("../../assets/img/btnForward.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.intro_decoration_wrapper}>
                <Image style={styles.intro_decoration_image} source={require("../../assets/img/decoration_1.png")} />
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default IntroScreen;

const styles = StyleSheet.create({
    intro: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    wrapper: {
        marginTop: 79,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginTop: 28,
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: "center",
        textAlign: "center"
    },
    paragraph: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray,
        alignSelf: "center",
        textAlign: "center"
    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 128,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDots: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#737373',
        marginLeft: 10,
    },
    intro_footer: {
        zIndex: 1,
        paddingHorizontal: 16,
        marginBottom: 64,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    intro_footer_skip: {
        color: "#737373",
        fontSize: 18,
    },
    intro_footer_buttonForward: {
        width: 48,
        height: 48,
    },
    intro_decoration_wrapper: {
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    intro_decoration_image: {
        width: 200,
        height: 120,
    }
})