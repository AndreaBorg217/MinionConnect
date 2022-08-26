/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
  
 const Home = ({navigation}) => {
     return(
     <View style = {styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
     <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Play')}>
        <Text style = {styles.btntext}>Play</Text>
     </TouchableOpacity>
     <View style = {styles.seperator}/>
     <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Instructions')}>
        <Text style = {styles.btntext}>Instructions</Text>
     </TouchableOpacity>
      <Image style = {styles.yellow} source={require('../assets/leftimg.png')}/>
     </View>
   );
  };
 
 const styles = StyleSheet.create({
   container: {
    flex: 1,
     backgroundColor: '#0C457A',
     flexDirection: 'column',
     width: '100%',
     height: '100%',
     alignItems: 'center',
     justifyContent: 'center',
   },
   logo:{
    transform: [{ translateY: -250 }],
    position: 'absolute'
   },
   button:{
    backgroundColor: '#fbdb11',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 15,
    transform: [{ translateY: 100 }]
   },
   btntext:{
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
   },
   seperator:{
    padding: 20
   },
   yellow:{
    width: 300,
    height: 300,
    transform: [{ translateY: 195 }],   
  },
  imgcontainer:{
    flexDirection: 'row'
  },
  });
 
 export default Home;
 