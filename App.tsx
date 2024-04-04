import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './src/screens/Home/Home';
import DisplayCardsList from './src/screens/DisplayCardsList/DisplayCardsList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardContainer, {cardClosedContext} from './src/components/CardContainer';
import CardDetails from './src/screens/CardDetails/CardDetails';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => (
            <cardClosedContext.Provider value={true}>
              <Home {...props} navigation={props.navigation} />
            </cardClosedContext.Provider>
          )}
        </Stack.Screen>
        <Stack.Screen name="DisplayCardsList" options={{headerShown: false}}>
          {props => (
            <cardClosedContext.Provider value={false}>
              <DisplayCardsList {...props} navigation={props.navigation} />
            </cardClosedContext.Provider>
          )}
        </Stack.Screen>
        <Stack.Screen name="CardDetails" options={{headerShown: false}}>
          {props => (
            <cardClosedContext.Provider value={false}>
              <CardDetails {...props} navigation={props.navigation} />
            </cardClosedContext.Provider>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 0,
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    zIndex: 1,
  },
});

export default App;
