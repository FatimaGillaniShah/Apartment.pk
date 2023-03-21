import React,{Component} from 'react';
import {View, ImageBackground, StyleSheet, StatusBar} from 'react-native';

var logo = require('./assets/Icons/Apartment.png')
var backgroundImage = require('./assets/Icons/Bg.jpg')


export default class Splash extends Component{

    constructor(props){
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        },2000);
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backdrop} >
                    <View style={styles.overlay} >
                        <ImageBackground source={logo} style={styles.logo} resizeMode='contain' />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
    },
    logo:{
        width: 230,
        height: 70,
        alignItems:'center',
        justifyContent:'center',

    },
    overlay:{
        flex:1,
        opacity:1,
        alignItems:'center',
        justifyContent:'center',
    },
    backdrop: {
        flex:1,
        flexDirection: 'column',
    },
})