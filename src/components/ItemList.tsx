import React, {useState} from 'react';
import {FlatList} from 'react-native';
import sampleData from '../utils/data.json';
import {Item} from './Item';

type ItemListProps = {
  handleItemSelect: (item: Item) => void;
};

type Item = {id: number; title: string; artist: string};

export const ItemList = ({handleItemSelect}: ItemListProps) => {
  const [selectedItem, setSelectedItem] = useState<Item>();
  const onPress = (item: Item) => {
    setSelectedItem(item);
    handleItemSelect(item);
  };

  return (
    <FlatList
      data={sampleData}
      renderItem={({item}) => {
        const backgroundColor =
          item.id === selectedItem?.id ? '#ffe9e0' : '#f7c1ad';
        const color = item.id === selectedItem?.id ? 'seashell' : 'whitesmoke';
        return (
          <Item
            item={item}
            onPress={onPress}
            backgroundColor={{backgroundColor}}
            textColor={{color}}
          />
        );
      }}
      extraData={selectedItem?.id}
    />
  );
};
