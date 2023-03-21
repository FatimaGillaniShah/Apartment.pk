import React,{Component} from 'react';
import { render } from 'react-dom';
import {View,Text,TextInput,TouchableOpacity,Image,StyleSheet,ImageBackground,Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProfilePage from './ProfileScreen';

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            userName:"",
            password:"",
        }
    }

    validate_field=()=>{
        const {userName,password} = this.state
        if(userName==""){
            alert("Please fill username")
            return false
        }else if(password=="") {
            alert("Please fill password")
            return false
        }
        return true
    }

    making_api_call=()=>{
        if(this.validate_field()){
            alert("Successfully loggedin")
            };
        }

    render(){
        return(
            <View style={{flex:1,alignItems:'center',backgroundColor:'white'}} >
                <ScrollView contentContainerStyle={{flexGrow:1,justifyContent:'center'}} >

                    <View style={{marginBottom:30}} resizeMode='contain' >   
                        <Image source={require('./assets/Icons/Apartment.png')} style={{width:350,height:100}} resizeMode='contain' ></Image>
                    </View>

                    <Text style={{fontSize:17, }}> Email / Phone </Text>
                    <TextInput placeholder={"Enter your phone no. or email"} onChangeText={(value) => this.setState({userName:value})}
                    style={{height:42,borderBottomWidth:1,borderColor:'#c0c0c0',backgroundColor:'white',}} />

                    <Text style={{fontSize:17, marginTop:"5%",}}> Password </Text>
                    <TextInput secureTextEntry={true} placeholder={"Enter the password"} onChangeText={(value) => this.setState({password:value})}
                    style={{height:42, borderBottomWidth:1, borderColor:'#c0c0c0', backgroundColor:'white',}} />
                       

                    <View style={{marginTop:"5%",}} >

                        <TouchableOpacity style={{borderWidth:0, height:42, width:"60%",
                            justifyContent:'center', alignItems:'center', borderRadius:5, backgroundColor:"#29aae3", 
                            alignSelf:'center', textAlign:'center'}} 
                            onPress={()=>this.making_api_call()}>

                        <Text style={{color:"white"}}> Login </Text>
                        </TouchableOpacity>

                    </View>

                    <Text style={{fontSize:17, marginTop:"5%",alignSelf:'center'}} > Forget your password </Text>

                    <View style={{height:20}} />

                    <View style={{flexDirection:'row'}} >
                        <View style={{flex:1,backgroundColor:'#c0c0c0',height:1,marginTop:8}} />
                        <Text> Or Login With </Text>
                        <View style={{flex:1,backgroundColor:'#c0c0c0',height:1,marginTop:8}} />
                    </View>

                    <View style={{flexDirection:'row',alignSelf:'center'}} >
                        <ImageBackground style={{opacity:1,borderRadius:150/2,width:50,height:50,backgroundColor:'#3b5999',marginTop:10,
                                                marginRight:10,justifyContent:"center",alignItems: 'center',}} >
                            <Image source={require('./assets/Icons/Facebook.png')} style={styles.facebook} ></Image>
                        </ImageBackground>

                        <ImageBackground style={{opacity:1,borderRadius:150/2,width:50,height:50,backgroundColor:'#db4a39',marginTop:10,
                                                marginRight:10,justifyContent:"center",alignItems: 'center',}} >
                            <Image source={require('./assets/Icons/Google.png')} style={styles.google} ></Image>
                        </ImageBackground>
                    </View>

                <View style={{justifyContent:'center',alignSelf:'center',bottom:20,position:'absolute'}}>
                    <Text style={{textAlign:'center'}}>
                        Don't you have an account?
                        <Text style={{color:'#47b6e5'}} > Register</Text>
                    </Text>
                </View>
                </ScrollView>
            </View>
        );
    }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    facebook:{
        width:30,
        height:30,
        resizeMode: "cover",
        justifyContent:'center',
        alignSelf:'center',
    },
    google:{
        width:30,
        height:30,
        resizeMode: "cover",
        justifyContent:'center',
        alignSelf:'center',
    },
    blue:{
        color: '#000080',
        textAlign:'left'
    },
    GridViewBlockStyle: {
        justifyContent: 'center',
        // flex:1,
        alignItems: 'center',
        height: 150,
        width:win.width,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.27,
        // shadowRadius: 4.65,
        elevation: 2,
        // margin: 5,
        backgroundColor: '#FFFFFF',
        // borderRadius:20,
    },
})