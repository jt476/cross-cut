import { StyleSheet } from 'react-native';
import { View, Text } from './Themed';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5';
import { useIsFocused } from '@react-navigation/native';

interface ProjectInputProps {
  handlePreviousProjectPress: (project: string) => void
}

export default function PreviousProject<ProjectInputProps>({handlePreviousProjectPress, title, numToDisplay}) {
  const [previousProjects, setPreviousProjects] = useState<any[]>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@previous_projects')
        if(jsonValue != null) {
          const values = JSON.parse(jsonValue);
          values.sort((a, b) => (b.added === undefined ? 0 : b.added) - (a.added === undefined ? 0 : a.added));
          setPreviousProjects(values);
        }
      } catch(e) {
        console.error(e);
      }
    }
    getData();
  }, [isFocused]);

  return (
      <View style={{marginTop: 10, marginBottom: 10, backgroundColor: 'none'}}>
        {previousProjects.length > 0 ? <Text>{title}</Text> : <View/>}
        {previousProjects.slice(0, Math.min(previousProjects.length, numToDisplay)).map(project => {
          return(
          <View key={project.name} style={styles.previousProject}>
            <FontAwesome5.Button key={project.name} color='#1c2026' name='map-pin' style={{backgroundColor: 'white'}} 
            onPress={() => handlePreviousProjectPress(project)} solid>
              {project.description !== undefined ? project.description : project.name}</FontAwesome5.Button>
          </View>
        )})}
      </View>
  );
}

const styles = StyleSheet.create({
  previousProject: {
    marginTop:5, 
    backgroundColor: 'transparent',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});
