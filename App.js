import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigator from './src/Navigation/Navigator'
import HomeTabNavigator from './src/Navigation/HomeTabNavigator'


export default function App() {
  return (
    <>
      <Navigator/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width:'100%',
    height:'100%',

  },
});
