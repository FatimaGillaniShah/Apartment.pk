import React,{Component} from 'react';
import {View,Text,TextInput,Image,StyleSheet,ImageBackground} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default class EditPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            gender:'male',
        }
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <View style={{alignItems:'center',marginTop:30}}>
                    <View style={{borderRadius:150/2,borderWidth:2,borderColor:'#aedef1',padding:1,}}>
                        <Image  style={{width:150, height:150,borderRadius:150/2,alignItems:'center'}}  
                                source={require('./assets/Images/Apartment.jpg')} >   
                        </Image>
                    </View>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{margin:5,fontFamily:'Poppins-SemiBold',fontSize:15,color:'#9f9f9f'}} >Change Photo</Text>
                    <Image source={require('./assets/Icons/Edit.png')} style={{width:15,height:15,margin:5}} />
                </View>

                <View style={{flex:1,margin:10}} >
                    <Text style={{fontSize:17, }}> Name </Text>
                    <TextInput placeholder={"Azeem"} onChangeText={(value) => this.setState({userName:value})}
                    style={{height:42,borderBottomWidth:1,borderColor:'#c0c0c0',backgroundColor:'white',}} />

                    <Text style={{fontSize:17, marginTop:"5%",}}> Email </Text>
                    <TextInput secureTextEntry={true} placeholder={"azeem@mail.com"} onChangeText={(value) => this.setState({password:value})}
                    style={{height:42, borderBottomWidth:1, borderColor:'#c0c0c0', backgroundColor:'white',}} />

                    <Text style={{fontSize:17, marginTop:"5%",}}> Phone Number </Text>
                    <TextInput secureTextEntry={true} placeholder={"000 0000 0000"} onChangeText={(value) => this.setState({password:value})}
                    style={{height:42, borderBottomWidth:1, borderColor:'#c0c0c0', backgroundColor:'white',}} />

                    <Text style={{fontSize:17, marginTop:"5%",}}> Gender </Text>
                    <DropDownPicker
                            items={[
                                {label: 'Male', value: 'male'},
                                {label: 'Female', value: 'female'},
                            ]}
                            defaultValue={this.state.gender}
                            containerStyle={{height: 40, }}
                            style={{backgroundColor: '#ffffff',borderWidth:0,borderBottomWidth:1}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                        }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                        />
                </View>

            </View>
        );
    }
}