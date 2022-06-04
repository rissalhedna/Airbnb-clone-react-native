import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/Screens/Home'
import SearchResults from './src/Screens/SearchResults'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home/> */}
      <SearchResults />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width:'100%',
    height:'100%'
  },
});
