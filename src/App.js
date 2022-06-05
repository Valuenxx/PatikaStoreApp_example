/* eslint-disable prettier/prettier */

import React from 'react';
import {SafeAreaView, Text, View, FlatList, StyleSheet} from 'react-native';
import dataset from './Patika_data.json'
import ItemCards from './Comps/ItemCards'

function  App() {
  return (
    <SafeAreaView  style={styles.outcontainer}>
      <View>
        <FlatList
          numColumns={2}
          data={dataset}
          renderItem={({item}) => <ItemCards datas={item} />}
          />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outcontainer: {
    backgroundColor:'white',
    width: '100%',
    flexDirection: 'row',
    margin: 5,
    flex: 5,
  }
})


export default App;
