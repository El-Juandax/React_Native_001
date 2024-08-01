import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { Component } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const RegisterComponent = () => {
  const [text, onChangeText] = React.useState('')
    return (
    <View style={styles.body}>
        <View style={styles.contenedor}>
          
          <Text style={styles.titulo}>Registro</Text>
          <View style={{backgroundColor: '#04bc7d', width: 100, height: 2, marginBottom: 10}}></View>
          <TextInput style={styles.cajaTexto} placeholder='Nombre' onChangeText={onChangeText}/>
          <TextInput style={styles.cajaTexto} placeholder='Correo' onChangeText={onChangeText}/>
          <TextInput secureTextEntry={true} style={styles.cajaTexto} placeholder='Contraseña' onChangeText={onChangeText}/>
          <Pressable style={styles.botonRegistro}> <Text style={{color: "white", fontSize: 20}}>Registrarse</Text> </Pressable>
          <Pressable style={styles.botonLogin}><Text style={{fontSize: 20}}>Login</Text></Pressable>

        </View>
    </View>


    )

  }

  const styles = StyleSheet.create({
    botonLogin:{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
      left: 90,
      width: 150,
      height: 50,
      backgroundColor: "white",
      borderRadius: 10,
        },


    botonRegistro:{
      top: 30,
      justifyContent: "center",
      alignItems: "center",
      right: 90,
      width: 150,
      height: 50,
      backgroundColor: "#04bc7d",
      borderRadius: 10,
        },


    cajaTexto:{
      color: "white",
      marginBottom: 8.5,
      width: 340,
      height: 35,
      margin: 12,
      borderWidth: 0,
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#515966",
    },


    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Color de fondo de la pantalla
      },

    contenedor: {
      alignItems: "center",
      width: 380,
      height: 420,
      display: "flex",
      color: 'white',
      backgroundColor: '#2c2f36',
      justifyContent: "center",
      borderRadius: 50,
    
    },

    titulo:{
      marginBottom: 10,
      fontSize: 25,
      fontWeight: "bold",
      color: "white"
    }
  }) 

export default RegisterComponent