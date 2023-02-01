import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

const Star = ({
    onPress,
    disabled = true,
    completed,
    big = false
}) => {

    const styles = stylesFunction(big);

    const getImage = () => {
        if (completed) {
            return estrela
        }
        return estrelaCinza
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
        >
            <Image source={getImage()} style={styles.stars} />
        </TouchableOpacity>
    );
}

const stylesFunction = (big) => StyleSheet.create({
    stars: {
        width: big ? 36 : 12,
        height: big ? 36 : 12,
        marginRight: 2
    }
})

export default Star;