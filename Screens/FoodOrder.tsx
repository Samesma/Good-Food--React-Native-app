import { View, Text, StyleSheet, TextInput, Button,ImageBackground,
    TextInputChangeEventData, ActivityIndicator,FlatList,Platform,TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Users  from '../resources/Json/Users.json'
import Restaurants from '../resources/Json/rests.json';
import { ImageComp } from "../Components/ImageComp/ImageComp";






export default function FoodOrder({navigation,route}:{navigation:any,route:any}) {

  const {itemid,foodName} = route.params;


const[price,setPrice]=useState<string>();
const[desc,setDesc]=useState<string>();

const[message,setMessage]=useState<string>();

useEffect(()=>{
  Restaurants.rests.forEach((item)=>{
    if(item.id === itemid){
  
      item.items.forEach((i)=>
      {
        if(i.name ===foodName ){
        setPrice(i.price);
        setDesc(i.description);
      }
      
     }
      )


    }
  })
  
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
<View style={styles.item}>
    
    
      
           <Text style={styles.text}> {foodName}</Text>
           <Text style={styles.text}> {price}</Text>
           <Text style={styles.text}> {desc}</Text>
           <Button title="Add to order" onPress={()=>{setMessage("The placing order  feature will be added to the app very soon.")}}/>
             <Text style={[styles.text,{marginTop:5}]}>{message}</Text>
           

           </View>
           </View>
      
   );

};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    //height: Platform.OS === 'android' ? 400 : 200,
    //color: Platform.OS === 'web' ? "black" : "black",
    color:"black",
    fontSize:18
   
    
  },
  item:{
    backgroundColor:'#f9c2ff',
    padding:20,
    marginVertical:8,
    marginHorizontal:16,
    fontSize: 26,
    borderColor:"black",
    borderWidth:1,
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
  
}
});