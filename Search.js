import React,{Component} from 'react';
import {Text,StyleSheet,View,FlatList,TextInput,Image, ImageBackground,ScrollView, CheckBox} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SearchItemPage from './SearchItemPage';

class SearchPage extends Component {

    constructor(props){
        super(props);
        this.state={
            Data:[
                {
                    "type":"Family/Children",
                    "image": require('./assets/Icons/Family.png')
                },
                {
                    "type":"Couple",
                    "image":require('./assets/Icons/couple.png')
                },
                {
                    "type":"Student",
                    "image":require('./assets/Icons/Student.png')
                },
                {
                    "type":"Family/Children",
                    "image":require('./assets/Icons/Student.png')
                },
            ],
            searchItem:"",
        }
    }

    handleImagePress = (id) => {
        if(_.includes(this.state.selectedIds, id)) {
            let newSelectedIds = _.filter(this.state.selectedIds, (curObject) => {
                return curObject !== id;
            });
            this.setState({selectedIds : newSelectedIds});
          } else {
            let newSelectedIds = [...this.state.selectedIds, id];
            this.setState({selectedIds : newSelectedIds});
          }
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}} >
                <View style={{marginTop:30, marginLeft:10, marginRight:10}}>
                    <Text style={{fontSize: 40,fontFamily: 'Poppins-Bold',}}>
                        What Are You Looking For ?
                    </Text>
                </View>
                <View style={{alignSelf:'center',flexDirection:'row',backgroundColor:'#f5f5f5',justifyContent:'center',
                    alignItems:'center',borderWidth:0.5,marginLeft:10,marginRight:10}} >
                    <Image
                        source={require('./assets/Icons/Search-grey.png')}
                        style={styles.imageStyle}
                    />
                    <TextInput
                        style={{flex: 1}} onChangeText={(value) => this.setState({searcItem:value})}
                        placeholder={"Enter Keyword"} returnKeyType='search' onSubmitEditing={() => this.props.navigation.navigate('SearchItemPage')}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <Text style={{margin:10,fontFamily:'Poppins-Medium',fontSize:15}} > Filters </Text>

                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.GridViewBlockStyle}>
                        <View style={{flexDirection:'row',alignSelf:'flex-start',marginTop:7,marginLeft:15}} >
                            <ImageBackground 
                                style={{borderRadius:5,width:45,height:45,backgroundColor:'#2aaae1',justifyContent:"center",alignItems: 'center',}}>
                                <Image source={require('./assets/Icons/User.png')}
                                style={{width: 20, height: 23}} /> 
                            </ImageBackground>
                            <Text style={{alignSelf:'center',fontFamily:'Poppins-Medium',marginLeft:10}} >Lifestyle</Text>
                        </View>
                        <FlatList 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={this.state.Data}
                            renderItem = {({item,index,}) => (
                                <View style={{flex:1,paddingLeft:20,paddingTop:15,paddingRight:20,justifyContent:"center",alignItems: 'center',}}>
                                    <TouchableWithoutFeedback >
                                    <ImageBackground 
                                        style={{borderRadius:5,width:65,height:65,backgroundColor:'#e9f6fc',justifyContent:"center",alignItems: 'center'}}>
                                        <Image source={item.image}
                                            key={index}
                                            style={{width:25, height:25}} >
                                        </Image>
                                    </ImageBackground>
                                    </TouchableWithoutFeedback>
                                    <Text style={{fontFamily:'Poppins-Medium',margin:5}} > {item.type} </Text>
                                </View>
                            )}
                            >
                        </FlatList>
                    </View>

                    <View style={styles.GridViewBlockStyle}>
                        <View style={{flexDirection:'row',alignSelf:'flex-start',marginTop:7,marginLeft:15}} >
                            <ImageBackground 
                                style={{borderRadius:5,width:45,height:45,backgroundColor:'#2aaae1',justifyContent:"center",alignItems: 'center',}}>
                                <Image source={require('./assets/Icons/Room-Type.png')}
                                style={{width: 20, height: 23}} /> 
                            </ImageBackground>
                            <Text style={{alignSelf:'center',fontFamily:'Poppins-Medium',marginLeft:10}} >Room Type</Text>
                        </View>
                        <FlatList 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={this.state.Data}
                            renderItem = {({item,index,}) => (
                                <View style={{flex:1,paddingLeft:20,paddingTop:15,paddingRight:20,justifyContent:"center",alignItems: 'center',}}>
                                    <ImageBackground 
                                        style={{borderRadius:5,width:65,height:65,backgroundColor:'#e9f6fc',justifyContent:"center",alignItems: 'center',}}>
                                        <Image source={item.image}
                                            key={index}
                                            style={{width:25, height:25}} >
                                        </Image>
                                    </ImageBackground>
                                    <Text style={{fontFamily:'Poppins-Medium',margin:5}} > {item.type} </Text>
                                </View>
                            )}
                            >
                        </FlatList>
                    </View>

                    <View style={styles.GridViewBlockStyle}>
                        <View style={{flexDirection:'row',alignSelf:'flex-start',marginTop:7,marginLeft:15}} >
                            <ImageBackground 
                                style={{borderRadius:5,width:45,height:45,backgroundColor:'#2aaae1',justifyContent:"center",alignItems: 'center',}}>
                                <Image source={require('./assets/Icons/Amenities.png')}
                                style={{width: 20, height: 23}} /> 
                            </ImageBackground>
                            <Text style={{alignSelf:'center',fontFamily:'Poppins-Medium',marginLeft:10}} >Amenties</Text>
                        </View>
                        <FlatList 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={this.state.Data}
                            renderItem = {({item,index,}) => (
                                <View style={{flex:1,paddingLeft:20,paddingTop:15,paddingRight:20,justifyContent:"center",alignItems: 'center',}}>
                                    <ImageBackground 
                                        style={{borderRadius:5,width:65,height:65,backgroundColor:'#e9f6fc',justifyContent:"center",alignItems: 'center',}}>
                                        <Image source={item.image}
                                            key={index}
                                            style={{width:25, height:25}} >
                                        </Image>
                                    </ImageBackground>
                                    <Text style={{fontFamily:'Poppins-Medium',margin:5}} > {item.type} </Text>
                                </View>
                            )}
                            >
                        </FlatList>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const AppNavigator = createStackNavigator(  
    {  
        SearchPage: {screen:SearchPage, navigationOptions: {headerShown: false},
        },
        SearchItemPage: {screen:SearchItemPage, 
            navigationOptions:{
                headerStyle:{backgroundColor:'white',elevation: null},
                headerTitleAlign:'center',
                headerTitleStyle:{color:'black', fontFamily:'Poppins-Bold'},
                title:'Search Result',
                headerBackground: (
                    <View style={{backgroundColor:'white',flex:1}} >
                    <View style={{alignSelf:'flex-end',justifyContent:'center',marginTop:12,marginRight:10,backgroundColor:'white'}}>
                        <Image style={{width:22,height:22,}}
                        source={require('./assets/Icons/Filters.png')}
                        />
                    </View>
                    </View>
                  ),
                }
            }, 
    },  
    {  
        initialRouteName: "SearchPage"  
    }  
);  

const AppContainer = createAppContainer(AppNavigator);

export default class Search extends Component{
    render(){
        return <AppContainer/>;
    }
}


const styles = StyleSheet.create({
    GridViewBlockStyle: {
        // justifyContent: 'center',
        // flex:1,
        // alignItems: 'center',
        // height: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.27,
        elevation: 4,
        margin: 5,
        backgroundColor: '#FFFFFF',
        borderRadius:5,
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      height: 40,
      borderRadius: 5,
      margin: 10,
    },
    imageStyle: {
      padding: 10,
      margin: 5,
      height: 20,
      width: 20,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
  });
  