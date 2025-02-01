import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const handlePress = () => {
    alert('Button clicked!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to My First App</Text>
      <Text style={styles.subheading}>This is a React Native app</Text>
      <Button title="Click Me" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    color: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },  
  subheading: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
  },
});

export default App;
