import React from 'react';
import {View} from 'react-native';
import {Item} from '../components/Item';

type QuotesScreenProps = {
  route: {params: {item: {id: number; title: string; artist: string}}};
  navigation: any;
};

export const QuoteScreen = ({route}: QuotesScreenProps) => {
  const {item} = route.params;
  const backgroundColor = '#f7c1ad';
  const color = 'whitesmoke';

  return (
    <View>
      <Item
        item={item}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    </View>
  );
};
