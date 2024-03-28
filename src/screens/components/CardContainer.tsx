import React, {createContext, useContext, useEffect, useState} from 'react';
import {StyleSheet, useColorScheme, Pressable, Dimensions, Text} from 'react-native';
import CardLayout from './CardLayout';

const SampleCardDetails = [
    {
      title: 'Card 1',
    },
    {
      title: 'Card 2',
    },
    { title: 'Card 3' },
  ];

export const cardClosedContext = createContext(false);

type CardContainerProps = {
  navigation?: any;
};

function CardContainer({navigation}: CardContainerProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const cardClosed = useContext(cardClosedContext);
  const rotateDegreeDefault =
    10 - (SampleCardDetails.length - 2 * Math.log2(2.5)) * 2;
    const translateYDefault = 80;

  const handlePress = () => {
    if (cardClosed) {
      navigation.navigate('DisplayCardsList');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <>
      <Text style={{fontSize: 20}}>{cardClosed ? 'closed' : 'open'}</Text>
      <Pressable onPress={handlePress} style={styles.cardContainer}>
        {SampleCardDetails.slice(0)
          .reverse()
          .map((card, index) => (
            <CardLayout
              key={index}
              title={card.title}
              rotateDegree={cardClosed ?
                (SampleCardDetails.length - (index + 1)) * rotateDegreeDefault :
                0
              }
                translateY={cardClosed ? 0 : translateYDefault * index}
                scale={cardClosed ? 1 : 1.1}
            />
          ))}
      </Pressable>
    </>
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

export default CardContainer;
