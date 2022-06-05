/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    outcountainer:{
        flex: 1,

    },
    container:{
        backgroundColor: '#dadfdc',
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        borderRadius: 5,
        //width: Dimensions.get('window').width / 2.15
    },
    id:{
    },
    imgURL:{height: Dimensions.get('window').height / 4,
            borderTopLeftRadius:5,
            borderTopRightRadius:5,
            flex: 1,
            margin: 5,
            alignItems: 'center',

        },
    title:{
        margin:3,
        fontWeight: 'bold',
    },
    inStock:{
        fontWeight: 'bold',
        color: 'orange',
        margin:3,

        
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