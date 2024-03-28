// Payment Controls component
// This component is responsible for rendering the payment controls
import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, StyleSheet, View, Pressable, useColorScheme} from 'react-native';

import Scan from '../../assets/icons/Scan.svg';
import Transfer from '../../assets/icons/Transfer.svg';

type PaymentOptionsProps = PropsWithChildren<{
  optionName: string;
  children: React.ReactNode;
}>;

type PaymentControlProps = PropsWithChildren<{
  pay?: string;
  transfer?: string;
}>;

const PaymentOptions = ({
  optionName,
  children,
}: PaymentOptionsProps): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Pressable
      style={({pressed}) => [
        {
            elevation: pressed ? 3 : 0,
          shadowColor: 'red',
          shadowOffset: pressed ? {width: 5, height: 10} : {width: 0, height: 0},
          backgroundColor: pressed ? '#E2E2FF':'#E0E0FF',
        },
        styles.paymentOption,
      ]}>
      {children}
      <Text
        style={{
          fontSize: 20,
          fontWeight: '300',
          color: isDarkMode ? 'white' : 'black',
        }}>
        {optionName}
      </Text>
    </Pressable>
  );
};

const PaymentControls = ({
  pay,
  transfer,
}: PaymentControlProps): React.JSX.Element => {
  return (
    <View style={styles.paymentControls}>
      {/* pay */}
      {pay && (
        <PaymentOptions optionName={pay}>
          <Scan />
        </PaymentOptions>
      )}
      {/* transfer */}
      {transfer && (
        <PaymentOptions optionName={transfer}>
          <Transfer />
        </PaymentOptions>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  paymentControls: {
    marginTop: 0,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  paymentOption: {
    width: 140,
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: 'grey',
    flexDirection: 'row',
    // backgroundColor: '#E0E0FF',
  },
});

export default PaymentControls;
