import React,{Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,Alert} from 'react-native';

export default class Chat extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:'white',justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:40}} >Chat Screen</Text>
            </View>
        );
    }
}