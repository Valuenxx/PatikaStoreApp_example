/* eslint-disable prettier/prettier */

import React from 'react';
import {SafeAreaView, Text, View, FlatList, StyleSheet} from 'react-native';
import dataset from './Patika_data.json'
import ItemCards from './Comps/ItemCards'

function  App() {
  return (
    <SafeAreaView  >
      <View >
        <FlatList
          numColumns={2}
          data={dataset}
          renderItem={({item}) => <ItemCards datas={item} />}
          />
      </View>
    </SafeAreaView>
  );
};



export default App;
