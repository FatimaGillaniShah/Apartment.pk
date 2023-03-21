import React, {Component} from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {View, Image, StyleSheet, SafeAreaView,StatusBar} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Home from './Home';
import Profile from './Login';
import Splash from './Splash';
import Like from './Like';
import DetailPage from './DetailPage';
import Search from './Search';
import Chat from './Chat';
import ProfilePage from './ProfileScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

var isLoggedIn = false;

const TabNavigator = createMaterialBottomTabNavigator({

  Search:{screen:Search,
      navigationOptions:{
        //   tabBarLabel:() => null,
        labeled: false,
        activeColor:'#ff0000',
        inactiveColor:'#000000',
        barStyle:{backgroundColor:'#FFFFFF'},
        tabBarIcon:({focused}) => (
            <View>
                <Image source={
                    focused ? require('./assets/Icons/Search-Blue.png') : require('./assets/Icons/Search-grey.png')
                } 
                    style={styles.Image} />
            </View>
        )
      }
  },
  Chat:{screen:Chat,
        navigationOptions:{
        //   tabBarLabel:() => null,
            labeled: false,
            activeColor:'#ff0000',
            inactiveColor:'#000000',
            barStyle:{backgroundColor:'#FFFFFF'},
            tabBarIcon:({focused}) => (
                <View>
                    <Image source={
                        focused ? require('./assets/Icons/Chat-Blue.png') : require('./assets/Icons/Chat-grey.png')
                    } 
                        style={styles.Image} />
                </View>
            )
        }
  },
  Home:{screen:Home,
        navigationOptions:{
        //   tabBarLabel:() => null,
            labeled: false,
            activeColor:'#ff0000',
            inactiveColor:'#000000',
            barStyle:{backgroundColor:'#FFFFFF'},
            tabBarIcon:({focused}) => (
                <View>
                    <Image source={
                        focused ? require('./assets/Icons/Home-Blue.png') : require('./assets/Icons/Home-Grey.png')
                    } 
                        style={styles.Image} />
                </View>
            )
        }
  },
  Like:{screen:Like,
        navigationOptions:{
            // tabBarLabel:() => null,
            labeled:false,
            activeColor:'#ff0000',
            inactiveColor:'#000000',
            barStyle:{backgroundColor:'#FFFFFF'},
            tabBarIcon:({focused}) => (
                <View style={styles.container}>
                    <Image source={
                        focused ? require('./assets/Icons/Heart-Blue.png') : require('./assets/Icons/Heart-Grey.png')
                    } 
                        style={styles.Image} />
                </View>
            )
        }
  },
  Profile:{screen:Profile,
        navigationOptions:{
            // tabBarLabel:() => null,
            labeled:false,
            activeColor:'#ff0000',
            inactiveColor:'#000000',
            barStyle:{backgroundColor:'#FFFFFF'},
            tabBarIcon:({focused}) => (
                <View>
                    {isLoggedIn ? 
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfilePage')}>
                    <Image source={{uri:'https://image.shutterstock.com/z/stock-vector-pakistan-flag-made-of-glitter-sparkle-brush-paint-vector-1143787928.jpg'}}
                    style={{borderRadius:20,width:25,height:25,resizeMode: "cover",justifyContent:'center',borderWidth:2,borderColor:'#2aaae1'}} />
                    </TouchableOpacity>
                    :
                    <Image source={
                        focused ? require('./assets/Icons/User-Blue.png') : require('./assets/Icons/User-Grey.png')
                    } 
                    style={styles.Image} />
                    }
                </View>
            )
        }
    },
},
{
  initialRouteName: 'Home'
}
);


const Appp = createSwitchNavigator({
  Splash:{screen:Splash, navigationOptions:{header:null}},
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  },
  DetailPage:{screen:DetailPage, 
    navigationOptions: {
      header: null,
      tabBarVisible: false
  }},

});

const styles = StyleSheet.create({
  MainContainer:{
      flex:1, 
      justifyContent:'center', 
      margin:10,
  },
  Image:{
      width:22,
      height:22,
      resizeMode: "cover",
      justifyContent:'center',
  },
  GridViewBlockStyle: {
      justifyContent: 'center',
      flex:1,
      alignItems: 'center',
      height: 150,
      shadowColor: "#000",
      shadowOffset: {
          width: 2,
          height: 2,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 2,
      margin: 5,
      backgroundColor: '#FFFFFF',
      borderRadius:20,
  },
  GridViewInsideTextItemStyle: {
      color: '#808080',
      padding: 5,
      fontSize: 18,
      justifyContent: 'center',
  },
  loader:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff"
  },
})

const AppContainer = createAppContainer(Appp);  

export default class App extends Component{
    render(){
        return(
            <>
            <SafeAreaView style={{flex:0, backgroundColor:'white'}} />
            <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
                <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" />
                <AppContainer />
            </SafeAreaView>
            </>
        );
    }
}

// export default createAppContainer(Appp);

