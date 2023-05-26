import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import React from "react";
import MapModal from "./components/MapModal/MapModal";
import { SchoolType } from "../../../../store/SchoolScreenStore";

type MapProps = {
    navigation: any,
    schools: SchoolType[] | null,
}

const moscowRegion = {
    latitude: 55.755825,
    longitude: 37.617298,
    latitudeDelta: 0.4,
    longitudeDelta: 0.3,
};

const Map: React.FC<MapProps> =  ({ navigation, schools }) => {
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [chosenSchool, setChosenSchool] = React.useState<SchoolType | null>(null);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.map}>
            <MapView
                style={styles.map}
                zoomEnabled={true}
                scrollEnabled={true}
                showsScale={true}
                region={moscowRegion}
            >
                {schools && schools.map((school) => {
                    const region = {
                        latitude: school.latitude,
                        longitude: school.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    };
                    return (
                        <Marker key={school.id} coordinate={region}
                            image={{uri: 'https://pvc-c0a6feae-7987-4729-b7eb-5f07f4dc591c.obs.ru-moscow-1.hc.sbercloud.ru/media/map/icons/geomark_school.png'}}
                            onPress={() => {
                                setChosenSchool(school)
                                toggleModal()
                            }}/>
                    )
                })
                }
            </MapView>
            <MapModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} chosenSchool={chosenSchool}/>
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