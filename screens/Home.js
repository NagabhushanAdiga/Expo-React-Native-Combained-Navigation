import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.toggleDrawer()}>
        <Text style={{color:"#fff"}}>Open Drawer</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#09f',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
});
export default Home;
