import { View, Text, StyleSheet, TextInput, Button,ImageBackground,
     TextInputChangeEventData, ActivityIndicator,FlatList,Platform ,TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Users  from '../resources/Json/Users.json'
import Restaurants from '../resources/Json/rests.json';
import { ImageComp } from "../Components/ImageComp/ImageComp";






const RestList = ({navigation}:{navigation:any}) => {

const[restCount,setRestCount]= useState(0);
const [isLoding, setLoading] = useState(true);


useEffect(()=>{
setRestCount(Restaurants.rests.length);
},[])


    return (

 
          <View style={styles.container}>
<View style={{
        display: "flex",
        flexWrap:"nowrap",
        flexDirection:"row"
        
      }}>
        <View style={styles.df} >
           <TouchableOpacity  onPress={() => {
        navigation.push("RestList");
      }}
      >
        <Text style={[{textAlign: "center", color:"black",fontSize:16,fontWeight:"bold"}]}>Restaurants</Text>
        </TouchableOpacity></View>
        <View style={styles.df} > 
        <TouchableOpacity  onPress={() => {
        navigation.push("Account");
      }}
      >
        <Text style={[{textAlign: "center", color:"black",fontSize:16,fontWeight:"bold"}]}>Account</Text>
  </TouchableOpacity>
          </View>
      </View>
            
            <Text style={styles.text}>Total Restaurants: {restCount}</Text>
     
            
            <FlatList  
          data={Restaurants.rests}
          keyExtractor={({ id }, index) => id} 
          renderItem={({ item }:{item:any}) => (

            <View style={styles.item} >
              <TouchableOpacity  onPress={() => {
        navigation.push("Details", { itemid: item.id });
      }}
      >
                <ImageComp props={item.photograph}/>
            <Text style={[styles.text,{fontWeight:"bold"}]}>
              {item.name}
            </Text>
            <Text style={[styles.text,{fontWeight:"bold"}]}>
              {item.cuisine_type}
            </Text>
            
            <Text style={[styles.text]}>
              {item.address}
            </Text>
            </TouchableOpacity>
            </View>
          )}
        />
     
            </View>
       
    );

};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    text: {
      //height: Platform.OS === 'android' ? 400 : 200,
     // color: Platform.OS === 'web' ? "blue" : "grey",
      fontSize:16,
      color:"black"
    },
    item:{
      backgroundColor:'#f9c2ff',
      padding:20,
      marginVertical:8,
      marginHorizontal:16,
      fontSize: 30,
      color:"black"
    }
  ,
  df:{
    backgroundColor: "#90ee90",
    width: "50%",
    height:40,
    margin: 1,
    textAlign:"center",
    justifyContent:"center",
    color:"black"
    ,
    fontSize:16
  }
  });
  

export default RestList;