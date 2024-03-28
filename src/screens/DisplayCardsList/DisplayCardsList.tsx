import React from 'react';
import type {PropsWithChildren} from 'react';
import {Dimensions, useColorScheme} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import CardContainer from '../components/CardContainer';

const Colors = {
  light: '#E5E5D5',
  dark: '#353525',
  fontLight: '#FFFFFF',
  fontDark: '#000000',
};

type DisplayCardsListProps = PropsWithChildren<{
  navigation: any;
}>;

function DisplayCardsList({
  navigation,
}: DisplayCardsListProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const styleVars = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.light,
    fontBaseColor: isDarkMode ? Colors.fontLight : Colors.fontDark,
    fontHighlightColor: isDarkMode ? Colors.light : Colors.dark,
  };

  return (
    <SafeAreaView style={{backgroundColor: styleVars.backgroundColor}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styleVars.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: styleVars.backgroundColor}}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={[styles.displayCardsContainer]}>
          <CardContainer navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  displayCardsContainer: {
    backgroundColor: '#E5E5D5',
    height: 1000,
  },
});

export default DisplayCardsList;
