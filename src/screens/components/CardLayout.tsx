import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';

type CardLayoutProps = PropsWithChildren<{
  title: string;
  rotateDegree?: number;
  translateY?: number;
  scale?: number;
}>;

function CardLayout({
  title,
  rotateDegree,
  translateY,
  scale,
}: CardLayoutProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const cardRotate = useSharedValue(0);
  const cardTranslate = useSharedValue(0);
  const cardScale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
        {rotate: `${cardRotate.value || 0}deg`},
        {translateY: cardTranslate.value || 0},
        {scale: cardScale.value || 1},
      ]
  }));

  useEffect(() => {
    cardRotate.value = withSpring(rotateDegree || 0);
    cardTranslate.value = withSpring(translateY || 0, {damping: 10, stiffness: 100});
    cardScale.value = withSpring(scale || 1);
  }, [cardRotate, cardTranslate, cardScale]);
  
  return (
    <Animated.View
      style={[
        styles.card,
        animatedStyles,
      ]}>
      <Text>{title}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: 'red',
    width: 360,
    height: (360 * 194) / 334.46,
    backgroundColor: '#474C5F',
    borderRadius: 20,
    position: 'absolute',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 10},
  },
});

export default CardLayout;
