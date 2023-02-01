import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import { loadTop } from '../services/loadData';
import logo from '../assets/logo.png';

class Top extends React.Component {

    state = {
        top: {
            welcome: "",
            subWelcome: ""
        }
    }

    topUpdate() {
        const regress = loadTop()
        this.setState({ top: regress })
    }

    componentDidMount() {
        this.topUpdate();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.image} />
                <Text style={styles.title}>{this.state.top.welcome}</Text>
                <Text style={styles.text}>{this.state.top.subWelcome}</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    image: {
        width: 80,
        height: 30
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 15
    },
    text: {
        fontSize: 16,
    }
});


export default Top;