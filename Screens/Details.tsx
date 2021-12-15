import { View, Text, StyleSheet, TextInput, Button,ImageBackground,
    TextInputChangeEventData, ActivityIndicator,FlatList,Platform,TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import Users  from '../resources/Json/Users.json'
import Restaurants from '../resources/Json/rests.json';
import { ImageComp } from "../Components/ImageComp/ImageComp";






export default function Details({navigation,route}:{navigation:any,route:any}) {

  const {itemid} = route.params;
  
const[restName,setRestName]= useState("");
const[restAddress,setAddress]= useState("");
const[restImage,setImage]= useState("");
const[type,setType]= useState("");
const [restNeighbor,setrestNeighbor]=useState<string>();
const [isLoding, setLoading] = useState(true);

const[menuItems,setMenuItems]=useState<any>([]);

useEffect(()=>{
Restaurants.rests.forEach((item)=>{
  if(item.id === itemid){
setAddress(item.address);
setRestName(item.name);
setType(item.cuisine_type);
setImage(item.photograph);
setrestNeighbor(item.neighborhood);
setMenuItems(item.items)
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
    
    
         
<ImageComp props={restImage}/>
           <Text style={styles.text}> {restName}</Text>
           <Text style={styles.text}> {type}</Text>
           <Text style={styles.text}> {restNeighbor}</Text>
           <Text style={styles.text}> {restAddress}</Text>
<Text>Menu</Text>
           <FlatList  
         data={menuItems}
         keyExtractor={({ name }, index) => name} 
         renderItem={({ item }:{item:any}) => (

           <View style={styles.item} >
            <TouchableOpacity  onPress={() => {
        navigation.push("FoodOrder", { itemid: itemid , foodName: item.name });
      }}
      >
           <Text style={[styles.text,{fontWeight:"bold"}]}>
             {item.name}
           </Text>
           <Text style={[styles.text,{fontWeight:"bold"}]}>
             {item.price}
           </Text>
           
           <Text style={[styles.text]}>
             {item.description===""?" ":item.description}
           </Text>
           </TouchableOpacity>
           </View>
         )}
       />

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
  },
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
