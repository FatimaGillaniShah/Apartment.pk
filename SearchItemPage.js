import React,{Component} from 'react';
import {Text,StyleSheet,View,FlatList,Image, ImageBackground,ScrollView,Dimensions,TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class SearchItemPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            bed:'2Bed',
            family:'Family',
            transportation:'Transportation',
            transportation:'Transportation',
            Data:[
                require('./assets/Images/Apartment.jpg'),
                require('./assets/Images/Apartment.jpg'),
                require('./assets/Images/Apartment.jpg'),
                require('./assets/Images/Apartment.jpg'),
            ],
        }
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}} >
                <View style={{marginTop:60}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.Data}
                    renderItem = {({item,index,}) => (
                        <View style={styles.GridViewBlockStyle}>
                        <ImageBackground  style={styles.Image} imageStyle={{borderRadius:6}} 
                            source={item} key={index} >  
                            <View style={{flexDirection: 'row' }}  >
                                <Text style={styles.AmountText}> PKR 10,000,000 </Text>
                                <Text style={{flex:1}} />
                                <Image source={require('./assets/Icons/Heart.png')} style={{width:40,height:40,marginRight:10,marginTop:10}} />
                            </View>
                            <View style={styles.bottomCall} >
                                <ImageBackground 
                                    style={{opacity:1,borderRadius:150/2,width:40,height:40,backgroundColor:'white',marginTop:10,
                                            marginRight:10,justifyContent:"center",alignItems: 'center',}}>
                                    <Image source={require('./assets/Icons/Contact.png')} style={{width:20, height:20}} />
                                </ImageBackground>
                            </View>
                            <View style={styles.bottomProductInfo}>
                                <View style={{flexDirection:'row',flex:1}}>
                                    <Image source={require('./assets/Icons/space.png')} style={{width:20, height:20, marginTop:15,marginLeft:5}} />
                                    <Text style={{color:'white', fontFamily:'Poppins-Regular', marginLeft:5, fontSize:15, marginTop:15}} >520 sqft</Text>
                                </View>
                                <View style={{flexDirection:'row',flex:1}}>
                                    <Image source={require('./assets/Icons/2-bed.png')} style={{width:20, height:20, marginTop:15,marginLeft:5}} />
                                    <Text style={{color:'white', fontFamily:'Poppins-Regular', marginLeft:5, fontSize:15, marginTop:15}} >2 Bed</Text>
                                </View>
                                <View style={{flexDirection:'row',flex:1}}>
                                    <Image source={require('./assets/Icons/Bath.png')} style={{width:20, height:20, marginTop:15,marginLeft:5}} />
                                    <Text style={{color:'white', fontFamily:'Poppins-Regular', marginLeft:5, fontSize:15, marginTop:15}} >3 Bath</Text>
                                </View>
                                <Image source={require('./assets/Icons/Whatsappbg.png')} style={{width:40,height:40,marginTop:10,marginRight:10}} />
                            </View>
                        </ImageBackground>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailPage')} style={{textAlign:'left',alignSelf:'stretch'}}>
                            <Text style={styles.GridViewInsideTextItemStyle} > Luxury Apartment for Sale</Text>
                            <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, alignSelf: 'stretch', paddingLeft:5}}>
                                <Image source={require('./assets/Icons/Location-Blue.png')} style={{width:15, height:15}} />
                                <Text style={styles.textLocation}>124 Saint Road Lahore</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                >
                </FlatList>
                </View>
                <TouchableOpacity style={{
                    borderWidth:0, height:42, width:"40%",justifyContent:'center', alignItems:'center', borderRadius:50, 
                    backgroundColor:"#29aae3", alignSelf:'center', textAlign:'center',bottom:15,position: 'absolute', flexDirection:'row'}}  >
                    {/* <MapSvg width='20' height='20' /> */}
                    <Image source={require('./assets/Icons/Map-view.png')} style={{width:20, height:20}} />
                    <Text style={{color:"white", fontFamily:'Poppins-SemiBold'}}> Map View </Text>
                </TouchableOpacity>

                <View style={{position:'absolute',top:0,right:0,left:0}}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{height:150,marginLeft:15,marginTop:10,marginBottom:5}} >
                        <DropDownPicker
                            items={[
                                {label: '2 Bed', value: '2Bed'},
                                {label: '3 Bed', value: '3Bed'},
                                {label: '4 Bed', value: '4Bed'},
                            ]}
                            defaultValue={this.state.bed}
                            containerStyle={{height: 40, minWidth:90,marginRight:10}}
                            style={{backgroundColor: '#ffffff'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                        }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                        <DropDownPicker
                            items={[
                                {label: 'Family', value: 'Family'},
                                {label: 'Chary', value: 'Chary'},
                                {label: 'Hostel', value: 'Hostel'},
                            ]}
                            defaultValue={this.state.family}
                            containerStyle={{height: 40,minWidth:90,marginRight:10}}
                            style={{backgroundColor: '#ffffff'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                        <DropDownPicker
                            items={[
                                {label: 'Transportation', value: 'Transportation'},
                                {label: 'Non-Transportation', value: 'Non-Transportation'},
                            ]}
                            defaultValue={this.state.transportation}
                            containerStyle={{height: 40,minWidth:90,marginRight:10}}
                            style={{backgroundColor: '#ffffff'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                        <DropDownPicker
                            items={[
                                {label: 'Transportation', value: 'Transportation'},
                                {label: 'Non-Transportation', value: 'Non-Transportation'},
                            ]}
                            defaultValue={this.state.transportation}
                            containerStyle={{height: 40,minWidth:90,marginRight:10}}
                            style={{backgroundColor: '#ffffff'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({

    MainContainer:{
        flex:1, 
        backgroundColor:'white',
    },
    Image:{
        flex:1,
        width:win.width - 20,
        resizeMode: 'cover',
    },
    GridViewBlockStyle: {
        alignItems: 'center',
        height: 260,
        marginTop: 5,
        backgroundColor: '#FFFFFF',
    },
    GridViewInsideTextItemStyle: {
        paddingLeft: 5,
        paddingTop:5,
        fontSize: 20,
        fontFamily:'Poppins-Bold',
        textAlign:'left',
        alignSelf: 'stretch',
    },
    loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    textLocation: {
        alignSelf: "center", 
        paddingLeft:5, 
        fontFamily:'Poppins-Light', 
        color:'grey' 
    },
    locationImage:{
        width: 15, 
        height: 15, 
        borderRadius:70,
    },
    heart:{
        justifyContent: "flex-end",
        width:35,
        height:35,
        marginTop:10,
        marginRight:10,
        position:'relative',
        borderRadius:150/2
    },
    AmountText:{
        backgroundColor:'#29aae3',
        fontSize:30,
        height:'70%',
        marginTop:10,
        color:'white',
        fontFamily:'Poppins-SemiBold'
    },
    bottomCall: {
        flexDirection:'row',
        position: 'absolute',
        bottom: 55,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
      },
      bottomProductInfo:{
        flexDirection:'row',
        position: 'absolute',
        bottom: 5,
        justifyContent: 'flex-start',
        width: '100%',
      },
      map: {
        flex:0.8,
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginRight:10,
     }
});