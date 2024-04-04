// Payment Controls component
// This component is responsible for rendering the payment controls
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  useColorScheme,
  View,
} from 'react-native';

import ScanIcon from '../assets/icons/Scan.svg';
import TransferIcon from '../assets/icons/Transfer.svg';

type PaymentOptionsProps = PropsWithChildren<{
  optionName: string;
  children?: React.ReactNode;
}>;

type PaymentControlProps = PropsWithChildren<{
  pay?: string;
  transfer?: string;
  checkCreditScore?: boolean;
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
          shadowOffset: pressed
            ? {width: 5, height: 10}
            : {width: 0, height: 0},
          backgroundColor: pressed ? '#E2E2FF' : '#E0E0FF',
        },
        styles.paymentOption,
      ]}>
      {children}
        <Text
          style={{
            fontSize: 16,
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
  checkCreditScore,
}: PaymentControlProps): React.JSX.Element => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={{minWidth: '100%'}}>
      <View style={styles.paymentControls}>
      {/* pay */}
      {pay && (
        <PaymentOptions optionName={pay}>
          <ScanIcon />
        </PaymentOptions>
      )}
      {/* transfer */}
      {transfer && (
        <PaymentOptions optionName={transfer}>
          <TransferIcon />
        </PaymentOptions>
      )}
      {/* {checkCreditScore && (
        <PaymentOptions optionName={'Check Credit Score'}></PaymentOptions>
      )} */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paymentControls: {
    marginTop: 10,
    minWidth: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  },
});

export default PaymentControls;
