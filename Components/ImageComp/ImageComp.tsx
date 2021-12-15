
import React from 'react';
import { Platform, StyleSheet, TouchableOpacityBase } from 'react-native';

import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image,View,Text } from 'react-native';



export  function ImageComp({props}:{props:any}) {


    
    return (
      <View>
{/* <Text>{props}</Text> */}
        <Image source={{uri:props}} style={{width:300,height:200}} />
      </View>
    )
  }

  