import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';


import Star from './star';

const Stars = ({
    quantity: oldQuantity,
    editable = false,
    big = false

}) => {
    const [quantity, setQuantity] = useState(oldQuantity);

    const RenderStars = () => {
        const listStars = [];
        for (let i = 0; i < 5; i++) {
            listStars.push(
                <Star
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    disabled={!editable}
                    completed={i < quantity}
                    big={big}
                />
            );
        }
        return listStars;
    }

    return (
        <View style={styles.container}>
            <RenderStars />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})


export default Stars;