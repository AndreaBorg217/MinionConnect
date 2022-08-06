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
 import {View, StyleSheet, Image, FlatList, TouchableOpacity, Alert, Text, Modal} from 'react-native';
 import Sound from 'react-native-sound';  

 Sound.setCategory('playback');  

 var kingbob = new Sound('kingbob.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load kingbob', error);
    return;
  }
  console.log('Success');
});

var purple = new Sound('evil.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load purple', error);
    return;
  }
  console.log('Success');
});

 const Game = ({navigation}) => {
  const [grid, setGrid] = useState(
    [
      [{id: 0, color: '#0C457A', content: 0}, {id: 7, color: '#0C457A', content: 0}, {id: 14, color: '#0C457A', content: 0}, {id: 21, color: '#0C457A', content: 0}, {id: 28, color: '#0C457A', content: 0}, {id: 35, color: '#0C457A', content: 0}, {id: 42, color: '#0C457A', content: 0}],
      [{id: 1, color: '#0C457A', content: 0}, {id: 8, color: '#0C457A', content: 0}, {id: 15, color: '#0C457A', content: 0}, {id: 22, color: '#0C457A', content: 0}, {id: 29, color: '#0C457A', content: 0}, {id: 36, color: '#0C457A', content: 0}, {id: 43, color: '#0C457A', content: 0}],
      [{id: 2, color: '#0C457A', content: 0}, {id: 9, color: '#0C457A', content: 0}, {id: 16, color: '#0C457A', content: 0}, {id: 23, color: '#0C457A', content: 0}, {id: 30, color: '#0C457A', content: 0}, {id: 37, color: '#0C457A', content: 0}, {id: 44, color: '#0C457A', content: 0}],
      [{id: 3, color: '#0C457A', content: 0}, {id: 10, color: '#0C457A', content: 0}, {id: 17, color: '#0C457A', content: 0}, {id: 24, color: '#0C457A', content: 0}, {id: 31, color: '#0C457A', content: 0}, {id: 38, color: '#0C457A', content: 0}, {id: 45, color: '#0C457A', content: 0}],
      [{id: 4, color: '#0C457A', content: 0}, {id: 11, color: '#0C457A', content: 0}, {id: 18, color: '#0C457A', content: 0}, {id: 25, color: '#0C457A', content: 0}, {id: 32, color: '#0C457A', content: 0}, {id: 39, color: '#0C457A', content: 0}, {id: 46, color: '#0C457A', content: 0}],
      [{id: 5, color: '#0C457A', content: 0}, {id: 12, color: '#0C457A', content: 0}, {id: 19, color: '#0C457A', content: 0}, {id: 26, color: '#0C457A', content: 0}, {id: 33, color: '#0C457A', content: 0}, {id: 40, color: '#0C457A', content: 0}, {id: 47, color: '#0C457A', content: 0}],
      [{id: 6, color: '#0C457A', content: 0}, {id: 13, color: '#0C457A', content: 0}, {id: 20, color: '#0C457A', content: 0}, {id: 27, color: '#0C457A', content: 0}, {id: 34, color: '#0C457A', content: 0}, {id: 41, color: '#0C457A', content: 0}, {id: 48, color: '#0C457A', content: 0}],
    ]
  );

  const [turn, setTurn] = useState(80)
  const [showAlert, setShowAlert] = useState(false)
 const [currentRow, setCurrentRow] = useState(Array(7).fill(7))
 const [bobWinModal, setBobWinModal] = useState(false)
 const [evilWinModal, setEvilWinModal] = useState(false)

 
  const changeTurn = () => {
    if(turn == 80){
      setTurn(290);
    }
    else{
      setTurn(80);
    }
  }

  const checkWinner = (num) => {
    let win = "" + num + num + num + num
    //horizontal
    for(let i = 0; i<7; i++){
      for(let j = 0; j<4; j++){
        if( grid[i][j].content == num && grid[i][j+1].content == num &&  grid[i][j+2].content == num && grid[i][j+3].content == num){
          return true;
      }
      }
    }
    //vertical
    for(let i = 0; i<4; i++){
      for(let j = 0; j<7; j++){
        if(grid[i][j].content == num && grid[i+1][j].content == num &&  grid[i+2][j].content == num && grid[i+3][j].content == num){
          return true;
        }
      }
    }
    //diagonal
    for(let i = 0; i<4; i++){
      for(let j = 0; j<4; j++){
        if(grid[i][j].content == num && grid[i+1][j+1].content == num && grid[i+2][j+2].content == num && grid[i+3][j+3].content == num){
          return true;
      }
      }
    }
    for(let i = 6; i>2; i--){
      for(let j = 0; j<4; j++){
        if(grid[i][j].content == num && grid[i-1][j+1].content == num && grid[i-2][j+2].content == num && grid[i-3][j+3].content == num){
          return true;
        }
      }
    }
    return false;
  }

  const restart = () => {
    setGrid( [
      [{id: 0, color: '#0C457A', content: 0}, {id: 7, color: '#0C457A', content: 0}, {id: 14, color: '#0C457A', content: 0}, {id: 21, color: '#0C457A', content: 0}, {id: 28, color: '#0C457A', content: 0}, {id: 35, color: '#0C457A', content: 0}, {id: 42, color: '#0C457A', content: 0}],
      [{id: 1, color: '#0C457A', content: 0}, {id: 8, color: '#0C457A', content: 0}, {id: 15, color: '#0C457A', content: 0}, {id: 22, color: '#0C457A', content: 0}, {id: 29, color: '#0C457A', content: 0}, {id: 36, color: '#0C457A', content: 0}, {id: 43, color: '#0C457A', content: 0}],
      [{id: 2, color: '#0C457A', content: 0}, {id: 9, color: '#0C457A', content: 0}, {id: 16, color: '#0C457A', content: 0}, {id: 23, color: '#0C457A', content: 0}, {id: 30, color: '#0C457A', content: 0}, {id: 37, color: '#0C457A', content: 0}, {id: 44, color: '#0C457A', content: 0}],
      [{id: 3, color: '#0C457A', content: 0}, {id: 10, color: '#0C457A', content: 0}, {id: 17, color: '#0C457A', content: 0}, {id: 24, color: '#0C457A', content: 0}, {id: 31, color: '#0C457A', content: 0}, {id: 38, color: '#0C457A', content: 0}, {id: 45, color: '#0C457A', content: 0}],
      [{id: 4, color: '#0C457A', content: 0}, {id: 11, color: '#0C457A', content: 0}, {id: 18, color: '#0C457A', content: 0}, {id: 25, color: '#0C457A', content: 0}, {id: 32, color: '#0C457A', content: 0}, {id: 39, color: '#0C457A', content: 0}, {id: 46, color: '#0C457A', content: 0}],
      [{id: 5, color: '#0C457A', content: 0}, {id: 12, color: '#0C457A', content: 0}, {id: 19, color: '#0C457A', content: 0}, {id: 26, color: '#0C457A', content: 0}, {id: 33, color: '#0C457A', content: 0}, {id: 40, color: '#0C457A', content: 0}, {id: 47, color: '#0C457A', content: 0}],
      [{id: 6, color: '#0C457A', content: 0}, {id: 13, color: '#0C457A', content: 0}, {id: 20, color: '#0C457A', content: 0}, {id: 27, color: '#0C457A', content: 0}, {id: 34, color: '#0C457A', content: 0}, {id: 41, color: '#0C457A', content: 0}, {id: 48, color: '#0C457A', content: 0}],
    ]);
    setTurn(80);
    setCurrentRow(Array(7).fill(7));
  }

  const winnerAction = () => {
    if(checkWinner(1) == true){
      kingbob.setVolume(1);
      kingbob.setSpeed(1)
      kingbob.play();
      setBobWinModal(!bobWinModal)
      restart();
      }
      else if(checkWinner(2) == true){
        purple.setVolume(1);
        purple.setSpeed(1)
        purple.play();
        setEvilWinModal(!evilWinModal)
        restart();
      }
    }
  
  const changeColor = (column) => {
    if(turn == 80){
     grid[column][currentRow[column]-1].color = '#fbdb11';
     grid[column][currentRow[column]-1].content = 1;
      currentRow[column]--;
    }
    else{
      grid[column][currentRow[column]-1].color = '#7647bb';
      grid[column][currentRow[column]-1].content = 2;
      currentRow[column]--;
    }
  }

  const handleClick = (column) => {
    if(currentRow[column] != 0){
      changeColor(column);
      changeTurn();
      winnerAction();
    }
  }

  const Cell = ({column, color}) => {
    return(
    <View style = {styles.square}>
      <TouchableOpacity
        style = {[styles.circle, {backgroundColor: color}]} 
        onPress = {() => handleClick(column)}
      />
     </View>);
  }

  const BobWinModal =() =>{
    return (
      <Modal animationType = {"fade"} transparent = {true}
      visible = {bobWinModal}
      onRequestClose = {() => { console.log("Modal has been closed.") } }>
        <View style = {styles.bobmodal}>
          <Text style = {styles.bobwintext}>BOB HAS WON!</Text>
          <View style = {styles.btnContainer}>

          <TouchableOpacity style = {styles.bobbutton} 
          onPress = {() =>  {
            kingbob.stop(); 
            setBobWinModal(!bobWinModal)
            }
          }>
            <Text style = {styles.bobbtntext}>New Game</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.bobbutton} 
          onPress = {() =>  {
            kingbob.stop(); 
            setBobWinModal(!bobWinModal)
            navigation.navigate('Home')}
          }>
            <Text style = {styles.bobbtntext}>Quit</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
  }
 
  const EvilWinModal = () =>{
    return (
    <Modal animationType = {"fade"} transparent = {true}
    visible = {evilWinModal}
    onRequestClose = {() => { console.log("Modal has been closed.") } }>
      <View style = {styles.evilmodal}>
        <Text style = {styles.evilwintext}>PURPLE HAS WON!</Text>

        <View style = {styles.btnContainer}>
        <TouchableOpacity style = {styles.evilbutton}
        onPress = {() =>  {
            purple.stop(); 
            setEvilWinModal(!evilWinModal)
            }
          }>
          <Text style = {styles.evilbtntext}>New Game</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.evilbutton}
         onPress = {() =>  {
            purple.stop(); 
            setEvilWinModal(!evilWinModal)
            navigation.navigate('Home')}
          }>
          <Text style = {styles.evilbtntext}>Quit</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
  }

   return(
     <View style = {styles.container}>
     <EvilWinModal />
     <BobWinModal />
      <View style = {styles.header}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <TouchableOpacity  onPress = {() => restart()}>
            <Image style = {styles.restart} source={require('../assets/undo.png')}/>
          </TouchableOpacity>
      </View>
        <View style = {styles.table}>
            <FlatList 
                      data={grid[0]}
                      renderItem={({ item }) => <Cell column = {0} color = {item.color}/>}
                      keyExtractor={cell => cell.id}
            />
            <FlatList 
                      data={grid[1]}
                      renderItem={({ item }) => <Cell column = {1} color = {item.color}/>}
                      keyExtractor={cell => cell.id}
            />
            <FlatList 
                      data={grid[2]}
                      renderItem={({ item }) => <Cell column = {2} color = {item.color}/>}
                      keyExtractor={cell => cell.id}
            />
            <FlatList 
                      data={grid[3]}
                      renderItem={({ item }) => <Cell column = {3} color = {item.color}/>}
                      keyExtractor={cell => cell.id}
            />
            <FlatList 
                      data={grid[4]}
                      renderItem={({ item }) => <Cell column = {4} color = {item.color}/>}
                      keyExtractor={cell => cell.id}
            />
            <FlatList 
                      data={grid[5]}
                      renderItem={({ item }) => <Cell column = {5} color = {item.color}/>}
                      keyExtractor={cell => cell.id}
            />
            <FlatList 
                      data={grid[6]}
                      renderItem={({ item }) => <Cell column = {6} color = {item.color}/>}
                      keyExtractor={cell => cell.id}
            />
        </View>
        <View style = {[styles.turn, {transform: [{translateX: turn}, { translateY: 150 }],}]}/>
        <View style = {styles.playerContainer}>
          <Image source={require('../assets/bob.png')} style={styles.player}/>
          <View style = {styles.purpleContainer}><Image source={require('../assets/purple.png')} style={styles.player}/></View>
        </View>
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
     alignItems: 'space-between',
     justifyContent: 'center'
   },
   playerContainer:{
    backgroundColor: '#0C457A',
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    marginTop: 80,
    position: 'absolute',
    justifyContent: 'space-between',
    transform: [{ translateY: 290 }]
   },
   player:{
    width: 200,
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
   },
   square:{
    backgroundColor: 'white',
    height: 52,
    width: 52,
    paddingTop: 1,
    alignItems: 'center',
   },
   purpleContainer:{
    transform: [{ translateY: -20 }]
   },
   turn:{
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'lime',
    position: 'absolute',
    transform: [{ translateY: 140 }],
   },
   table:{
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#0C457A',
    padding: 15,
    marginBottom: 300
   },
   circle:{
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white'
   },
   header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 4,
    borderBottomColor: 'white',
    width: '100%',
    paddingRight: 15,
    marginBottom: 15,
    marginTop: 390,
   },
   restart:{
    width: 40,
    height: 40,
    transform: [{ translateY: -5 }]
   },
   text:{
    fontSize: 30,
    paddingLeft: 15,
    fontWeight: 'bold',
    transform: [{ translateY: -5 }],
    color: 'white'
   },
   logo:{
    width: 200,
    height: 40,
    transform: [{ translateY: -5 }],
    marginLeft: 5
   },
   evilmodal:{
    width: 300,
    height: 200,
    borderColor: 'black',
    borderWidth: 8,
    backgroundColor: '#7647bb',
    transform: [{translateX: 50}, { translateY: 200 }],
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
   },
   evilwintext:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
   },
   evilbutton:{
    borderColor: 'white',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    borderRadius: 10
   },
   evilbtntext:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5
   },
   btnContainer:{
    flexDirection: 'row',
    transform: [{ translateY: 30 }],
   },
   bobmodal:{
    width: 300,
    height: 200,
    borderColor: 'black',
    borderWidth: 8,
    backgroundColor: '#fbdb11',
    transform: [{translateX: 50}, { translateY: 200 }],
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
   },
   bobwintext:{
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
   },
   bobbutton:{
    borderColor: 'black',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15, 
    borderRadius: 10
   },
   bobbtntext:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5
   },
  });
 
 export default Game;
 