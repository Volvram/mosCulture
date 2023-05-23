import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import React from "react";
import MapModal from "./components/MapModal/MapModal";

type MapProps = {
    navigation: any
}

const moscowRegion = {
    latitude: 55.755825,
    longitude: 37.617298,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
};

const Map: React.FC<MapProps> =  ({ navigation }) => {
    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.map}>
            <MapView
                style={styles.map}
                initialRegion={moscowRegion} //your region data goes here.
            >
            <Marker coordinate={moscowRegion}
                // image={{uri: ''}}
                onPress={() => {toggleModal()}}/>
            </MapView>

            <MapModal isModalVisible={isModalVisible} setModalVisible={setModalVisible}/>
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