import { StyleSheet, KeyboardAvoidingView, Platform, Button, Keyboard, ScrollView, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SetProjectEditorScreen({ route, navigation } : {route: any, navigation: any}) {
  useEffect(() => {
  }, []);

  return (
    <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 5,
    height: 1,
    width: '100%',
  },
});
