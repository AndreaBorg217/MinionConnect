/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

 const Instructions = ({navigation}) => {
    let arrow = '<---'
     return(
     <View style = {styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.text}>Instructions</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
            <Image source={require('../assets/back.png')} style={styles.arrow}/>
            </TouchableOpacity>
        </View>
        <View style = {styles.instructionsContainer}>
        <Text style = {styles.instructions}>1. Pick a player</Text>
        <Text style = {styles.instructions}>2. The players take it in turns to insert a checker into a chosen column</Text>
        <Text style = {styles.instructions}>3. Checkers are inserted at the next available row of the chosen column</Text>
        <Text style = {styles.lastline}>4. The game is won when a player forms a line of 4 checkers of the chosen colour either vertically, horizontally or diagonally</Text>
        </View>
        <Image source={require('../assets/instructions.png')} style={styles.image}/>
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
   header:{
    flexDirection: 'row',
    borderBottomWidth: 4,
    borderBottomColor: 'white',
    width: '100%',
    transform: [{ translateY: -320 }],
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
   },
   text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    transform: [{ translateX: -80 }],
   },
   arrow:{
    color: 'white',
    width: 50,
    height: 50,
    transform: [{ translateX: 80 }, {translateY: 2}],
   },
   instructionsContainer: {
    borderWidth: 4,
    borderColor: 'white',
    width: '90%',
    height: '55%',
    padding: 15,
    position: 'absolute',
    transform: [{translateY: -50}],
    alignItems: 'center',
    justifyContent: 'center'
   },
   instructions:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20
   },
   lastline:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
   },
   image:{
    width: 250,
    height: 250,
    transform: [{translateY: 270}],
   }
  });
 
 export default Instructions;
 