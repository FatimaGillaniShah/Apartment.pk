import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import EditPage from './EditPage';

class ProfilePage extends Component{

    render(){
        return(
            <View style={styles.MainContainer}>
                <View style={styles.GridViewBlockStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EditPage')} style={{alignSelf:'flex-end',margin:5}} > 
                        <Image source={require('./assets/Icons/Edit-blue.png')} style={{width:20,height:20}} />
                    </TouchableOpacity>
                    <View style={{alignSelf:'center',position:'absolute',bottom:20,justifyContent:'center'}}>
                        <Text style={styles.GridViewInsideTextItemStyle} > Azeem Hammad </Text>
                        <Text style={styles.GridViewInsideTextItemStyle} > azeem123@gmail.com </Text>
                    </View>
                </View>
                <Text style={{marginTop:5}}></Text>
                <View style={styles.GridViewBlockList}>
                    <Image source={require('./assets/Icons/History.png')} style={{width:20,height:20,marginLeft:10,marginRight:10}} />
                    <Text>Viewed History</Text>
                    <Text style={{flex:1}} />
                    <Image source={require('./assets/Icons/Right-Arrow.png')} style={{width:15,height:15,marginRight:10}} />
                </View>

                <View style={styles.GridViewBlockList}>
                    <Image source={require('./assets/Icons/Search-Blue.png')} style={{width:20,height:20,marginLeft:10,marginRight:10}} />
                    <Text>Customized Plan</Text>
                    <Text style={{flex:1}} />
                    <Image source={require('./assets/Icons/Right-Arrow.png')} style={{width:15,height:15,marginRight:10}} />
                </View>

                <View style={styles.GridViewBlockList}>
                    <Image source={require('./assets/Icons/Settings.png')} style={{width:20,height:20,marginLeft:10,marginRight:10}} />
                    <Text>Settings</Text>
                    <Text style={{flex:1}} />
                    <Image source={require('./assets/Icons/Right-Arrow.png')} style={{width:15,height:15,marginRight:10}} />
                </View>

                <Text style={{marginLeft:20,marginTop:10,fontFamily:'Poppins-Bold'}} >Apartment.pk</Text>

                <View style={styles.GridViewBlockList}>
                    <Image source={require('./assets/Icons/About.png')} style={{width:20,height:20,marginLeft:10,marginRight:10}} resizeMode='contain' />
                    <Text>About Apartment.pk</Text>
                    <Text style={{flex:1}} />
                    <Image source={require('./assets/Icons/Right-Arrow.png')} style={{width:15,height:15,marginRight:10}} />
                </View>

                <View style={styles.GridViewBlockList}>
                    <Image source={require('./assets/Icons/Contact.png')} style={{width:20,height:20,marginLeft:10,marginRight:10}} resizeMode='contain'/>
                    <Text>Contact Apartmen.pk</Text>
                    <Text style={{flex:1}} />
                    <Image source={require('./assets/Icons/Right-Arrow.png')} style={{width:15,height:15,marginRight:10}} />
                </View>

                <Text style={{marginLeft:20,marginTop:10,fontFamily:'Poppins-Bold'}} >Logout</Text>

                <View style={{flexDirection:'row'}} >
                <TouchableOpacity style={{height:45, marginTop:10,flex:1,marginLeft:20,marginRight:20,
                    justifyContent:'center', alignItems:'center', borderRadius:5, backgroundColor:"#29aae3", 
                    alignSelf:'center', textAlign:'center'}} 
                    onPress={()=>this.making_api_call()}>

                <Text style={{color:"white"}}> Logout </Text>
                </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const AppNavigator = createStackNavigator(  
    {  
        ProfilePage: {screen:ProfilePage, navigationOptions: {headerShown: false},
        },
        EditPage: {screen:EditPage, 
            navigationOptions:{
                // header:{shadowColor: 'transparent'},
                headerStyle:{ backgroundColor:'white',elevation:0},
                headerTitleAlign:'center',
                headerTitleStyle:{color:'black', fontFamily:'Poppins-Bold'},
                title:'Edit Profile', }
            }, 
    },  
    {  
        initialRouteName: "ProfilePage"  
    }  
);  

const AppContainer = createAppContainer(AppNavigator);  

export default class ProfileScreen extends Component{
    render(){
        return <AppContainer/>;
    }
}

const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:'#fbfbfb'
    },
    GridViewBlockStyle: {
        marginTop:50,
        alignItems: 'center',
        height: 150,
        marginLeft:20,
        marginRight:20,
        elevation: 0.8,
        backgroundColor: '#ffffff',
        borderRadius:5,
    },
    GridViewInsideTextItemStyle: {
        color: '#808080',
        // padding: 5,
        fontSize: 18,
        justifyContent: 'center',
        alignSelf:'center',
    },
    GridViewBlockList:{
        flexDirection:'row',
        backgroundColor:'#ffffff',
        alignItems: 'center',
        marginLeft:20,
        height:50,
        marginRight:20,
        margin: 5,
        borderRadius:5,
        elevation: 0.8,
    }
})
