import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { Matter } from 'matter-js';

import Bird from './components/Bird';
import entities from './entities';
import Physics from './Physics';
import { Constants, Images } from './Constants';

export default function App() {
  const [gameEngine, setGameEngine] = useState(null);
  const [running, setRunning] = useState(false);
  const [points, setPoints] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        source={Images.background}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      <Text style={styles.points}>{points}</Text>
      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          switch(e.type) {
            case 'game_over': {
              setRunning(false);
              gameEngine.stop();
              break;
            }
            case 'new_point' : {
              setPoints(points + 1);
              break;
            }
          }
        }}
        style={styles.gameContainer}
      >
      <StatusBar style="auto" hidden={true} />
      </GameEngine>

      {
        !running ?
        <View style={styles.home}>
          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => {
            setPoints(0);
            setRunning(true);
            gameEngine.swap(entities());
          }}>
            <Text style={styles.buttonText}>START GAME</Text>
          </TouchableOpacity>
        </View> :
        null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
  },
  gameContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT,
  },
  points: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 20,
    zIndex: 100,
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
