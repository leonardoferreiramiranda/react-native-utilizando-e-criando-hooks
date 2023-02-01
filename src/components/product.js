import React, { useReducer, useMemo } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Stars from './stars';

const distanceInMeters = (distance) => {
    return `${distance}m`
}

const Product = ({ name, image, distance, stars }) => {

    const [selected, reverseSelected] = useReducer(
        (selected) => !selected,
        false
    );

    const distanceText = useMemo(
        () => distanceInMeters(distance)
        , [distance]);

    return <TouchableOpacity
        style={styles.container}
        onPress={reverseSelected}
    >
        <Image source={image} accessibilityLabel={name} style={styles.image} />
        <View style={styles.containerInfo}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Stars quantity={stars} editable={selected} big={selected} />
            </View>
            <Text style={styles.distance}>{distanceText}</Text>

        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 4
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    containerInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distance: {
        fontSize: 12,
        lineHeight: 19
    }
})

export default Product;