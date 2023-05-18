import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import React from "react";

type MapProps = {
    navigation: any
}

const Map: React.FC<MapProps> =  ({ navigation }) => {
    const moscowRegion = {
        latitude: 55.755825,
        longitude: 37.617298,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    return (
        <View style={styles.map}>
            <MapView
                style={styles.map}
                initialRegion={moscowRegion} //your region data goes here.
            >
                {/*Make sure the Marker component is a child of MapView. Otherwise it won't render*/}
            <Marker coordinate={moscowRegion}
                // image={{uri: ''}}
                title={"Москва"}
                description={"Расположение основных центров школ искусств"} />
            </MapView>
        </View>
    );
}

export default Map;

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    }
})