import React, { Component } from 'react'
import { Text, View, StyleSheet,} from 'react-native'
import * as Progress from 'react-native-progress';


export const Inicio = () => {

    return (
      <View style={styles.body}>
        <Text style={styles.titulo}>  TuHojaDeVida </Text>
        <Text style={styles.subtitulo}>Por favor para continuar dele click al boton</Text>
        <Progress.CircleSnail style={{marginTop: 50}} color={['white']} size={80} />

      </View>
    )
  }

  const styles = StyleSheet.create({
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
