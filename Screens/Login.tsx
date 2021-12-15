import { View, Text, StyleSheet, TextInput, Button,ImageBackground,
     TextInputChangeEventData, NativeSyntheticEvent } from "react-native";
import React, { useState } from "react";

import Users  from '../resources/Json/Users.json';

import { ImageComp } from "../Components/ImageComp/ImageComp";




const Login = ({navigation}:{navigation:any}) => {

    const img1="dd";
const[userName,setUserName]= useState("");
const[password,setPassword]= useState("");
const[loginError,setLoginError]= useState("");
//const usersss = JSON.parse(users);
const image = { uri: "https://media.timeout.com/images/103765335/750/562/image.jpg" };
const ButtonPressHandler=()=>
{
    Users.forEach((u)=>{
        if(u.username === userName.trim() && u.password===password.trim())
        {
            navigation.navigate("RestList");
        }
     
     } );
     setLoginError("Username or password is incorrect!");
}

    return (

        <View style={styles.container}>  
         <Text style={[styles.text,{color:"black",fontSize:20}]}>Welcome to Good Food!</Text>
            <View style={[{justifyContent:"center",alignItems:"center",margin:5}]}>
            <ImageComp  props={"https://cdn.stocksnap.io/img-thumbs/960w/food-eat_KJGLHB2KF4.jpg"}/>
            </View>
            <View style={styles.view1}>
         
            <Text style={[styles.text,{color:"red"}]}>{loginError}</Text>
            <TextInput  placeholderTextColor="black" style={styles.textinput} placeholder="Enter user name" onChangeText={setUserName}></TextInput>
            <TextInput  placeholderTextColor="black" style={styles.textinput} placeholder="Enter password" secureTextEntry={true} textContentType="password" onChangeText={setPassword} ></TextInput>
            <Button onPress={ButtonPressHandler} title="Sign in"></Button>
            <View style={[{justifyContent:"center",alignItems:"center",margin:5}]}>
            <ImageComp  props={"https://static01.nyt.com/images/2020/11/04/dining/04Outdoor5/04Outdoor5-jumbo-v2.jpg"}/>
            </View>
            </View>
             {/* </ImageBackground>  */}
             
        </View>

      
    );

};


const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:"#f0e68c",
            paddingTop:50,
        flex:1
        },
        image: {
            flex: 1,
            justifyContent: "center",
           height:"100%",
           width:"100%",
           opacity: 0.5
          },

          text: {
            color: "white",
          
            fontSize:16,
            fontWeight: "bold",
            textAlign: "center",
            //backgroundColor: "#000000c0"
          }
          ,
          textinput: {
            color: "black",
            borderWidth: 1,
            borderColor:"blue",
            marginTop:5,
            fontWeight: "bold",
            fontSize:16,
            textAlign: "center",
            backgroundColor: "#fff"
          }
          , button:{
              marginTop:5
          },
          view1:{
              flex:1,
               
          }


    }
);

export default Login;