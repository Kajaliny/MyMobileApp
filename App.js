import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Home  from './components/Home';
import  ContactUs  from './components/ContactUs';
import  AboutUs  from './components/AboutUs';

xport default function App() {
    const Stack = createNativeStackNavigator();
  return (

   <SafeAreaProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouterName='contact'
          screenOptions={{
            headerStyle:{backgroundColor:'#e2bee2'}
          }}>   
 <Stack.Screen name='home' component={Home} options={{title:"welcome"}}/>
 <Stack.Screen name='contact' component={ContactUs} options={{title:"ContactUs"}}/>
