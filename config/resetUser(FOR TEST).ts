import AsyncStorage from "@react-native-async-storage/async-storage";


export async function resetUser(){
    await AsyncStorage.setItem("access_token", "");
    await AsyncStorage.setItem("refresh_token", "");

    console.log(await AsyncStorage.getItem("access_token"))
}