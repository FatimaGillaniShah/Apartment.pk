import React,{Component} from 'react';
import {View,Text,ImageBackground,StyleSheet,Dimensions,Image,TouchableOpacity,ScrollView,FlatList } from 'react-native';
import MapView from 'react-native-maps';

export default class DetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Data:[
                require('./assets/Images/Apartment.jpg'),
                require('./assets/Images/Apartment.jpg'),
                require('./assets/Images/Apartment.jpg'),
                require('./assets/Images/Apartment.jpg'),
                require('./assets/Images/Apartment.jpg'),
            ],
            images:false,
            videos:false,
            textValue: 'Change me Change me Change me Change me',
            selectedButton:'OverView',
        }
    }

    render() {

        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1}} >
            <View style={styles.MainContainer}>
                <View style={styles.GridViewBlockStyle}>
                    <ImageBackground  style={styles.Image} imageStyle={{borderRadius:6}} 
                        source={require('./assets/Images/Apartment.jpg')} >  
                        <View style={{flexDirection: 'row' }}  >
                            <Text style={styles.AmountText}> PKR 10,000,000 </Text>
                            <Text style={{flex:1}} />
                            <Image source={require('./assets/Icons/Heart.png')} style={{width:40,height:40,marginTop:10,marginRight:10}} />
                            <Image source={require('./assets/Icons/Sharebg.png')} style={{width:40,height:40,marginTop:10,marginRight:10}} />
                        </View>
                    </ImageBackground>

                        <Text style={{paddingLeft: 5,paddingTop:5,fontSize: 10,fontFamily:'Poppins-Bold',textAlign:'left',alignSelf: 'stretch', color:'#2aaae1'}} > New Construction </Text>

                        <Text style={styles.GridViewInsideTextItemStyle} > Luxury Apartment for Sale</Text>
                        <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, alignSelf: 'stretch', paddingLeft:5,marginBottom:0}}>
                            <Image source={require('./assets/Icons/Location-Blue.png')} style={{width:15, height:15}} />
                            <Text style={styles.textLocation}>124 Saint Road Lahore</Text>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',flex:1}}>
                                <Image source={require('./assets/Icons/space.png')} style={{width:20, height:20,marginTop:'25%',marginLeft:5}} />
                                <Text style={{color:'gray',fontFamily:'Poppins-Regular',marginLeft:5,fontSize:15,marginTop:'25%'}} >520 sqft</Text>
                            </View>
                            <View style={{flexDirection:'row',flex:1}}>
                                <Image source={require('./assets/Icons/2-bed.png')} style={{width:20, height:20,marginTop:'25%',marginLeft:5}} />
                                <Text style={{color:'gray',fontFamily:'Poppins-Regular',marginLeft:5,fontSize:15,marginTop:'25%'}} >2 Bed</Text>
                            </View>
                            <View style={{flexDirection:'row',flex:1}}>
                                <Image source={require('./assets/Icons/4-bed.png')} style={{width:20, height:20,marginTop:'25%',marginLeft:5}} />
                                <Text style={{color:'gray',fontFamily:'Poppins-Regular',marginLeft:5,fontSize:15,marginTop:'25%'}} >3 Bath</Text>
                            </View>
                            <MapView style={styles.map}
                                initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0,
                                longitudeDelta: 0.0,
                                }}
                            />
                        </View> 
                </View>

                <View  style={{height:70}}></View>

                {this.state.images == false && this.state.videos === false ? 
                    <View style={{flexDirection:'row',textAlign: 'left',alignSelf:'stretch'}} >
                        {this.state.videos === false ? 
                        <View style={{flexDirection:'column',textAlign: 'left',alignSelf:'stretch'}} >
                            <Text style={{marginLeft:5,fontFamily:'Poppins-SemiBold'}} >Video Tour</Text>
                            <ImageBackground source={require('./assets/Images/Apartment.jpg')} imageStyle={{borderRadius:5}}
                                style={{width:110, height:80, marginLeft:5,}}>
                                <View style={{flex:1, justifyContent:'center',alignItems:'center', backgroundColor: 'rgba(0,0,0,0.5)',borderRadius:5}} >
                                    <Image source={require('./assets/Icons/play.png')}
                                        style={{width:35, height:35,}} >
                                    </Image>
                                </View>
                            </ImageBackground>
                        </View>
                        : null}
                        <View style={{flexDirection:'column', textAlign: 'left',alignSelf:'stretch'}} >
                            <Text style={{marginLeft:5,fontFamily:'Poppins-SemiBold'}} >Images</Text>
                            <FlatList 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={this.state.Data}
                                renderItem = {({item,index,}) => (
                                    <View style={{justifyContent: 'center',flex:1,alignItems: 'center',}}>
                                        <Image source={item}
                                            key={index}
                                            style={{width:110, height:80, borderRadius:5,borderWidth:10,marginLeft:8}} >
                                        </Image>
                                    </View>
                                )}
                                >
                            </FlatList>
                        </View>
                    </View>
                    : null }
                    <Text style={{fontFamily:'Poppins-SemiBold', marginLeft:5, fontSize:20,marginTop:10}} > Details </Text>
                    <View style={{height:35}} >
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} 
                        >
                        <TouchableOpacity style={{marginLeft:5, borderRadius:5, backgroundColor:this.state.selectedButton === 'OverView'? '#2aaae1':'white',paddingVertical: 10,paddingHorizontal: 10,}} 
                            onPress={()=>this.setState({selectedButton:'OverView'})}>

                            <Text style={{color:this.state.selectedButton === 'OverView' ? 'white':'black',fontFamily:'Poppins-SemiBold'}}> OverView </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:5, borderRadius:5, backgroundColor:this.state.selectedButton === 'Features'? '#2aaae1':'white',paddingVertical: 10,paddingHorizontal: 10,}} 
                            onPress={()=>this.setState({selectedButton:'Features'})}>

                            <Text style={{color:this.state.selectedButton === 'Features' ? 'white':'black',fontFamily:'Poppins-SemiBold'}}> Features </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:5, borderRadius:5, backgroundColor:this.state.selectedButton === 'Property Type'? '#2aaae1':'white',paddingVertical: 10,paddingHorizontal: 10,}} 
                            onPress={()=>this.setState({selectedButton:'Property Type'})}>

                            <Text style={{color:this.state.selectedButton === 'Property Type' ? 'white':'black',fontFamily:'Poppins-SemiBold'}}> Property Type </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:5, borderRadius:5, backgroundColor:this.state.selectedButton === 'Floor Plan'? '#2aaae1':'white',paddingVertical: 10,paddingHorizontal: 10,}} 
                            onPress={()=>this.setState({selectedButton:'Floor Plan'})}>

                            <Text style={{color:this.state.selectedButton === 'Floor Plan' ? 'white':'black',fontFamily:'Poppins-SemiBold'}}> Floor Plan </Text>
                        </TouchableOpacity>
                    </ScrollView>
                    </View>
                    <View style={{marginTop:5,marginLeft:5,marginRight:10}} >
                        <ScrollView showsVerticalScrollIndicator={false} >
                            {this.state.selectedButton === 'OverView' ?
                                <Text style={{fontFamily:'Poppins-Light',color:'gray'}} > {this.state.textValue} </Text> 
                            : this.state.selectedButton === 'Features' ? 
                                <Text style={{fontFamily:'Poppins-Light',color:'gray'}} > Features </Text>
                            : this.state.selectedButton === 'Property Type' ? 
                                <Text style={{fontFamily:'Poppins-Light',color:'gray'}} > Property Type </Text> 
                            : this.state.selectedButton === 'Floor Plan' ? 
                                <Text style={{fontFamily:'Poppins-Light',color:'gray'}} > Floor Plan </Text>     
                            : null }
                        </ScrollView>
                    </View>
            </View>
            </ScrollView>
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
        width:win.width - 20,
        height:200,
        resizeMode: 'cover',
    },
    GridViewBlockStyle: {
        alignItems: 'center',
        height: 260,
        margin: 5,
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
        justifyContent: "flex-start",
        backgroundColor:'#29aae3',
        justifyContent:'center',
        fontSize:30,
        height:'70%',
        marginTop:10,
        color:'white',
        fontFamily:'Poppins-SemiBold'
    },
    map: {
        flex:0.8,
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginRight:10,
    },
});