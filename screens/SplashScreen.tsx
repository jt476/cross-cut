import { Animated, Button, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import { View, Text } from '../components/Themed';
import React, { useEffect, useState } from 'react';
import Colors from '../constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import RecentLocations from '../components/PreviousProject';
import { useIsFocused } from '@react-navigation/native';
import PreviousProject from '../components/PreviousProject';

export default function SplashScreen({ route, navigation } : {route: any, navigation: any}) {
  let defaultAnimations = {
    toValue: { x: 0, y: 0 },
    useNativeDriver: true,
    speed: 0.1,
    bounciness: 0,
    overshootClamping: true,
  };
  let boxOne = new Animated.ValueXY({x: 0, y: Dimensions.get('window').height});
  let boxTwo = new Animated.ValueXY({x: 0, y: Dimensions.get('window').height});

  let overlayOpacity = new Animated.Value(0);
  let miniLocationInput = new Animated.ValueXY({x:0, y: Dimensions.get('window').height});

  useEffect(() => {
    Animated.spring(boxOne, {
      ...defaultAnimations,
    }).start(() => {
      Animated.spring(boxTwo, {
        ...defaultAnimations,
      }).start(() => {
          Animated.timing(
            overlayOpacity,
            {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
            }
          ).start(() => {
            Animated.spring(miniLocationInput, {
              toValue: { x: 0, y: 0 },
              useNativeDriver: true,
              speed: 0.1,
              bounciness: 0,
              overshootClamping: true,
            }).start(() => {
            })
          });
        });
      });
  }, []);

  const handlePreviousProjectPress = (projectName: any):void => {
    navigation.navigate("SetProjectEditorScreen", {
      ...route.params,
      projectName: projectName,
    });
  };

  return (
    <View style={styles.backgroundViews}>
      <Animated.View style={{flex: 1, backgroundColor: Colors.snow.background,
          transform: [{ translateX: boxOne.x }, { translateY: boxOne.y }]
        }}/>
      <Animated.View style={{flex: 1, backgroundColor: Colors.thunder.background,
          transform: [{ translateX: boxTwo.x }, { translateY: boxTwo.y }]
        }}/>
      <Animated.View style={{
          zIndex: 1, 
          opacity: overlayOpacity, 
          width: '100%', 
          height: '100%', 
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <View style={{justifyContent: "flex-end", alignItems: 'center', width: '100%', backgroundColor: 'none', flex: 1}}>
          <Animated.View style={{
            backgroundColor: '#979dac',
            width: '100%',
            maxWidth: 600,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            justifyContent: 'center',
            padding: 20,
            transform: [{ translateX: miniLocationInput.x }, { translateY: miniLocationInput.y }]}}>
            <View style={{backgroundColor: 'none', justifyContent: 'center'}}>
              <FontAwesome5.Button name='hammer' color='#1c2026' 
              onPress={() => handlePreviousProjectPress(null)} style={{backgroundColor: 'white'}}
              light>
                What are you making?
              </FontAwesome5.Button>
              <PreviousProject handlePreviousProjectPress={handlePreviousProjectPress} title="Recent Projects:" numToDisplay={Math.max(Math.round(((Dimensions.get('window').height / 2)-150)/50), 2)}/>
            </View>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  backgroundViews: {
    flex: 1,
    flexDirection: "row",
    zIndex: 2,
    width: '100%',
    height: '100%'
  },
  parent: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  animatedBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: 100,
  },
});

