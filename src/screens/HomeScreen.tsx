import React from 'react';
import {ItemList} from '../components/ItemList';
import {View} from 'react-native';

type HomeScreenProps = {
  navigation: any;
};

type Item = {id: number; title: string; artist: string};

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const handleItemSelect = (item: Item) => {
    navigation.navigate('Quotes', {
      item: item,
    });
  };
  return (
    <View>
      <ItemList handleItemSelect={handleItemSelect} />
    </View>
  );
};
