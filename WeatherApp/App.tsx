import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Welcome to my app!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>This is the body of my app!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Designed and Developed by Dinesh korukonda</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    width: "100%",
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  body: {
    width: "100%",
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  bodyText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  footer: {
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  footerText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
