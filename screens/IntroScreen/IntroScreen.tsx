import { StyleSheet, View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { COLORS } from "../../config/colors";

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
                <Text style={styles.header}>Nature Imitates Art</Text>
                <Text style={styles.paragraph}>....something like that</Text>
                </View>
            </View>
            <View style={{ width, height }}>
                <View style={styles.wrapper}>
                <Text style={styles.header}>High quality Art work</Text>
                <Text style={styles.paragraph}>... for a fraction of the price</Text>
                </View>
            </View>
            <View style={{ width, height }}>
                <View style={styles.wrapper}>
                <Text style={styles.header}>Top Notch Artists</Text>
                <Text style={styles.paragraph}>... all in one place</Text>
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
                <TouchableOpacity onPress={() => navigation.navigate("Главная")}>
                    <Text>Пропустить</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => { 
                    if (scroller.current) {
                        scroller.current.scrollTo({ x: width * (sliderState.currentPage + 1) });
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 17,
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
    // paginationDot_active: {
    //     height: 12,
    //     width: 12,
    //     borderRadius: 6,
    //     backgroundColor: '#FF5D9D',
    //     marginLeft: 10,
    // },
    intro_footer: {
        zIndex: 1,
        paddingHorizontal: 16,
        marginBottom: 64,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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