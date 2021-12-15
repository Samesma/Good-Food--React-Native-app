import { View, Text, StyleSheet, TextInput, Button,ImageBackground,
    TextInputChangeEventData, ActivityIndicator,FlatList,Platform,TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Users  from '../resources/Json/Users.json'
import Restaurants from '../resources/Json/rests.json';
import { ImageComp } from "../Components/ImageComp/ImageComp";






export default function Account({navigation,route}:{navigation:any,route:any}) {

  
const img='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';



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
        <Text style={[{textAlign: "center", color:"black"}]}>Restaurants</Text>
        </TouchableOpacity></View>
        <View style={styles.df} > 
        <TouchableOpacity  onPress={() => {
        navigation.push("Account");
      }}
      >
        <Text style={[{textAlign: "center", color:"black"}]}>Account</Text>
  </TouchableOpacity>
          </View>
      </View>
<View style={styles.item}>
    
    
      <ImageComp props={img}/>
           <Text style={styles.text}> Joe Smith</Text>
           <Text style={styles.text}> jsmith@mail.com</Text>
           <Text style={styles.text}> 1526 Road Lane, NY, NY 99999</Text>
           <Button title="Logout" onPress={()=>
            { navigation.popToTop();}}/>
             
           

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