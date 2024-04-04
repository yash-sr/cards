import React from 'react';
import type {PropsWithChildren} from 'react';
import {Dimensions, useColorScheme} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import CardContainer from '../../components/CardContainer';
import CardLayout from '../../components/CardLayout';
import RecentActivityContainer from '../../components/RecentActivityContainer';

const Colors = {
  light: '#E5E5D5',
  dark: '#353525',
  fontLight: '#FFFFFF',
  fontDark: '#000000',
};

type CardDetailsProps = PropsWithChildren<{
  navigation: any;
}>;

function CardDetails({navigation}: CardDetailsProps): React.JSX.Element {
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
        <View style={[styles.manageCards]}>
          <View style={styles.cardContainer}>
            <CardLayout title="Card 1" scale={1.11} />
          </View>
          <Text style={{color: 'red', fontSize: 16}}>boss</Text>
          <RecentActivityContainer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  manageCards: {
    backgroundColor: '#E5E5D5',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    minHeight: Dimensions.get('window').height,
  },
  cardContainer: {
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: 300,
  },
});

export default CardDetails;
