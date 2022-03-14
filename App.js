import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Carditem from './Components/Carditem';
import Piechart from './Components/Piechart';
import Details from './Screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Details' component={Details}/>

        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
   
  },
});
