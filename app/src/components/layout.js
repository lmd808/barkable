import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Layout = (text) => {
    return (
        <LinearGradient
        colors={[`#009ffd`, `#2a2a72`]}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{ x: 1, y: 1 }}
        locations={[0.3, 0.9]}>
          <Text>{text}</Text>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Layout
