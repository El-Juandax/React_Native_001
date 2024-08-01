import React, { Component } from 'react'
import { Text, View, StyleSheet,} from 'react-native'
import { ProgressBar } from '@react-native-community/progress-bar-android'

export const Inicio = () => {

    return (
      <View style={styles.body}>
        <Text style={styles.titulo}>  MyApp </Text>
        <ProgressBar styleAttr="Horizontal"/>
      </View>
    )
  }

  const styles = StyleSheet.create({
    titulo:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginTop: 30
    },

    body:{
        backgroundColor: "#04bc7d",
        width: "100%",
        height: "100%",
        alignItems: "center"
    },
  })

export default Inicio
