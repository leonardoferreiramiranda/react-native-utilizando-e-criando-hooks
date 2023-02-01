import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

import Product from './product';
import useProducers from '../hooks/useProducers';

const Producers = ({ top: Top }) => {

    const [title, list] = useProducers();


    const topList = () => {
        return (
            <>
                <Top />
                <Text style={styles.title}>{title}</Text>
            </>
        )
    }
    return (
        <FlatList
            data={list}
            renderItem={({ item }) => <Product {...item} />}
            keyExtractor={({ name }) => name}
            ListHeaderComponent={topList}
        />
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#000000'

    }
});

export default Producers;