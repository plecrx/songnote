import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ItemProps = {
  item: {id: number; title: string; artist: string};
  onPress?: (item: {id: number; title: string; artist: string}) => void;
  backgroundColor: {backgroundColor: string};
  textColor: {color: string};
};

export const Item = ({
  item,
  onPress,
  backgroundColor,
  textColor,
}: ItemProps) => {
  const handlePress = () => {
    if (onPress) {
      onPress(item);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    borderRadius: 15,
  },
  title: {
    fontSize: 32,
  },
});
