import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { useEffect, useState } from 'react';
import React from 'react';

export default function ResultScreen({ route, navigation } : {route: any, navigation: any}) {
  useEffect(() => {
  }, []);

  useEffect(() => {
  }, []);
  
  return (
    <View style={styles.container}>
      test
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  scrollView: {
    width: '100%',
    marginBottom: 20,
  },
});
