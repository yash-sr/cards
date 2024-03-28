// Payment Controls component
// This component is responsible for rendering the payment controls
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  useColorScheme,
} from 'react-native';

import Scan from '../../assets/icons/Scan.svg';

type ActivityProps = PropsWithChildren<{
  imageUri: string;
  vendorName: string;
  date: Date;
  amount: number;
}>;

type PaymentControlProps = PropsWithChildren<{
  pay?: string;
  transfer?: string;
}>;

const Activity = ({
  imageUri,
  vendorName,
  date,
  amount,
}: ActivityProps): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Pressable style={({pressed})=>[{
        elevation: pressed ? 1 : 0,
        shadowOffset: pressed ? {width: 0, height: 1} : {width: 0, height: 0},
        backgroundColor: pressed ? '#E2E2DF':'#E5E5D5',
    },styles.recentActivity]}>
      {/* Generate a view to display recent purchase details in a row with icon, vendor name, date and amount */}
      <Image source={{uri: imageUri}} style={styles.activityVendorIcon} />
      <View style={styles.activityVendorAndDate}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
          }}>
          {vendorName}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 400,
          }}>
          {date.toLocaleDateString()}
        </Text>
      </View>
      <View style={styles.activityAmount}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
          }}>
          -$ {amount}
        </Text>
      </View>
    </Pressable>
  );
};

const RecentActivityContainer = ({
  pay,
  transfer,
}: PaymentControlProps): React.JSX.Element => {
  const date: Date = new Date();
  return (
    <View style={styles.recentActivityContainer}>
      <Text style={styles.recentActivityHeader}>
        Recent Activities
      </Text>
      <Activity
        imageUri={
          'https://i.pinimg.com/564x/39/37/47/393747d57d29232eaa98b9ecba7c4dca.jpg'
        }
        vendorName={'Netflix'}
        date={date}
        amount={12.99}
      />
      <Activity
        imageUri={
          'https://i.pinimg.com/564x/f9/55/14/f95514de2f6b9083201adf75a2de4eb0.jpg'
        }
        vendorName={'Amazon'}
        date={date}
        amount={45.99}
      />
      <Activity
        imageUri={
          'https://i.pinimg.com/564x/1b/54/ef/1b54efef3720f6ac39647fc420d4a6f9.jpg'
        }
        vendorName={'Netflix'}
        date={date}
        amount={12.99}
      />
      <Activity
        imageUri={
          'https://i.pinimg.com/564x/1b/54/ef/1b54efef3720f6ac39647fc420d4a6f9.jpg'
        }
        vendorName={'Netflix'}
        date={date}
        amount={12.99}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recentActivityContainer: {
    marginTop: 0,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  recentActivity: {
    width: '100%',
    height: 80,
    paddingHorizontal: 20,
    marginVertical: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    borderColor: 'grey',
    flexDirection: 'row',
  },
  recentActivityHeader: {
    fontSize: 20,
    paddingHorizontal: 20,
    fontWeight: '600',
    color: 'black',
    padding: 10,
  },
  activityVendorIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  activityVendorAndDate: {
    width: 200,
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  activityAmount: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecentActivityContainer;
