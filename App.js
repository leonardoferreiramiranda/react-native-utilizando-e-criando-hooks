import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from "./src/pages/home";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})

export default App;