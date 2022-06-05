/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import styles from './ItemCards.style'

const ItemCards = ({datas}) => {
    return(
        <View style={styles.outcountainer}>
            <View style={styles.container}>
                <Image style={styles.imgURL} source={{uri: datas.imgURL}} />
                <Text style={styles.title}>{datas.title}</Text>
                <Text style={styles.price}></Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.inStock}>{datas.inStock}</Text>
                    <Text style={styles.author}>{datas.author}</Text>
                </View>
            </View>
        </View>
    );
};


export default ItemCards;