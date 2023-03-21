import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,FlatList,ImageBackground} from 'react-native';


export default class Home extends Component{

    constructor(props){
        super(props);
 
        this.state = {
            dataSource:[],
            loading: true
        }
    }

    async componentDidMount(){
        try{
            const categoryApiCall = await fetch('http://demo.apartment.pk/api/category');
            const categories = await categoryApiCall.json();
            this.setState({dataSource: categories.result, loading: false});
        }catch(err) {
            console.log(err)
        }
    }

    render(){
        return(
            <View style={styles.MainContainer}>
                <View style={{flexDirection: 'row', margin: 30}}>
                    <Text
                        style={{
                        textAlign: 'center',
                        fontSize: 40,
                        fontFamily: 'Poppins-Bold',
                        }}>
                        We Have Hundreds of 
                        <Text style={{color: '#2aaae1'}}> Apartments</Text>
                    </Text>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.dataSource.reverse()}
                    renderItem = {({item}) => 
                        <View style={styles.GridViewBlockStyle}>
                            <ImageBackground style={{opacity:1,borderRadius:150/2,width:75,height:75,backgroundColor:'#ecf7fb',marginTop:10,
                                                marginRight:10,justifyContent:"center",alignItems: 'center',}} >
                                <Image source={{uri: item.icon}}
                                    style={{width: 25, height: 25}} /> 
                            </ImageBackground>
                            <Text style={styles.GridViewInsideTextItemStyle} > {item.name} </Text>
                        </View>
                    }
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    MainContainer:{
        flex:1, 
        justifyContent:'center', 
        marginLeft:10,
        marginRight:10,
        // backgroundColor:'white'
    },
    Image:{
        width:20,
        height:20,
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
        // shadowRadius: 4.65,
        elevation: 7,
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
