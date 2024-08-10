import React, { Component } from 'react'
import { Text, View, StyleSheet, Pressable, Image} from 'react-native'
import * as Progress from 'react-native-progress';


export const Inicio = () => {

    return (
      <View style={styles.body}>
        <Text style={styles.titulo}>  TuHojaDeVida </Text>
        <Text style={styles.subtitulo}>Por favor para continuar dele click al boton</Text>
        
        <Pressable> <Image style={styles.imagen} source={require('C:/Users/LENOVO/Desktop/App/React_Native_001/src/img/chulo.png')} /></Pressable>

      </View>
    )
  }

  const styles = StyleSheet.create({
    imagen:{
      borderRadius: 50,
      width: 100,
      height: 100,
      marginTop: 30,
      backgroundColor: "white",
    },
    subtitulo:{
      fontSize: 15,
      color: 'white',
      marginTop: 20
    },
    titulo:{
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginTop: 180
    },

    body:{
        backgroundColor: "#04bc7d",
        width: "100%",
        height: "100%",
        alignItems: "center"
    },
  })

export default Inicio
