import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import CardContainer from '../../components/CardContainer';
import PaymentControls from '../../components/PaymentControls';
import RecentActivityContainer from '../../components/RecentActivityContainer';

import Bell from '../../assets/icons/bell.svg';
import Hello from '../../assets/icons/helloEmoji.svg';

const Colors = {
  light: '#E5E5D5',
  dark: '#353525',
  fontLight: '#FFFFFF',
  fontDark: '#000000',
};

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type HomeProps = PropsWithChildren<{
  navigation: any;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Home({navigation}: HomeProps): React.JSX.Element {
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
        style={{backgroundColor: styleVars.backgroundColor}}>
        <View style={[styles.topHeader]}>
          <View style={[styles.headerLeft]}>
            <View style={[styles.header]}>
              <Text
                style={{
                  color: styleVars.fontHighlightColor,
                  fontSize: 24,
                  fontWeight: '300',
                }}>
                Welcome Back,
              </Text>
              <Text
                style={{
                  color: styleVars.fontHighlightColor,
                  fontSize: 24,
                  fontWeight: '400',
                }}>
                User Name <Hello width={30} height={26} fill={'#FAC036'} />
              </Text>
            </View>
          </View>
          <View style={[styles.headerRight]}>
            <Pressable style={({pressed})=> [{
              elevation: pressed ? 3 : 0,
              shadowColor: 'black',
              shadowOffset: pressed ? {width: 0, height: 1} : {width: 0, height: 0},
              backgroundColor: pressed ? '#E2E2FF':'#E0E0FF',
              borderColor: pressed ? 'black' : 'white',
            } ,styles.menu]}>
              <Bell
                width={30}
                height={30}
                fill={styleVars.fontHighlightColor}
              />
            </Pressable>
          </View>
        </View>
        <CardContainer navigation={navigation}/>
        <PaymentControls pay="Pay" transfer="Transfer" checkCreditScore={true} />
        <RecentActivityContainer />
        <View
          style={[
            {
              backgroundColor: styleVars.backgroundColor,
            },
          ]}>
          <Section title="Step One">
            Edit to change this screen and then come back to see your edits.
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  topHeader: {
    marginHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginTop: 20,
  },
  headerLeft: {
    position: 'absolute',
    left: 0,
  },
  headerRight: {
    position: 'absolute',
    right: 0,
  },
  header: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  menu: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

export default Home;
