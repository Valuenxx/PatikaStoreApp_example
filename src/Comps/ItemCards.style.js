/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        justifyContent: 'center',
        backgroundColor: '#dadfdc',
        flex: 1,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        width: Dimensions.get('window').width / 2.15

    },
    id:{
        flex: 1,
    },
    imgURL:{height: Dimensions.get('window').height / 4,
            borderTopLeftRadius:5,
            borderTopRightRadius:5,
            flex: 1,
            margin: 5,

        },
    title:{
        margin:3,
        fontWeight: 'bold',
    },
    inStock:{
        fontWeight: 'bold',
        color: 'orange',
        margin:3,
        flex: 1,
        
    },
    price:{},
    author:{
        color: '#b67d0c',
        fontStyle: 'italic',
        textAlign: 'right',
        margin:3,
        flex: 1,
    },
});