import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React from 'react'
import { useState, prevState } from "react";

//--------------------------Funciones para validar datos ingresados ------------------------------//////

//Determina si se trata de una cadena alfabetica para determinar si realmente es un nombre.
function esPalabra(string_ingresado) {
  const regex = /^[A-Za-z]*$/;
  const esCadenaAlfabetica = regex.test(string_ingresado);
  return esCadenaAlfabetica;
}

//Determina si un telefono ingresado es valido. ( o sea si son todos numeros y si son entre 8 y 10 caracteres)
function telefonoValido(unTelefono) {
  if (esNumero(unTelefono) && unTelefono.length>=8 && unTelefono.length<=10)return true;
  else return false;
}

function esNombreValido(unNombre){
  if (esPalabra(unNombre) && unNombre.length>=2 && unNombre.length<=15) return true;
  else return false;
}

//Determina si una cadena es numerica.
function esNumero(string_ingresado) {
  const regex = /^[0-9,]*$/;
  const esCadenaNumerica = regex.test(string_ingresado);
  return esCadenaNumerica;
}


//-------------------------- Componente  ------------------------------//////
const FormularioIngresoDatos = (props) => {
  
  //Estados
  const [nombreIngresado, setNombreIngresado] = useState("");
  const [telefonoIngresado, setTelefonoIngresado] = useState("");
  
  //Funciones
  const capturarNombreIngresado = (text) => setNombreIngresado(text);
  const capturarTelefonoIngresado = (text) => setTelefonoIngresado(text); //Faltara luego agregar validaciones que sean numeros.
  //const getValorInput = () => alert(nombreIngresado + " " + telefonoIngresado);
  
  const ingresarDatos = ()=>{

    if (telefonoValido(telefonoIngresado) && esNombreValido(nombreIngresado)) 
       props.funcionAgregarDatos('id',nombreIngresado,telefonoIngresado); //Id lo dejamos al azar xq ahora la lista lo asigna solo.
    else alert("Ingrese datos validos!\n Nota: 2 a 15 carateres, telefonos 8 a 10 digitos.");   //Aca iria el box de aviso
  
      }

  return (

    <View style={styles.Formulario}>
    
    <TextInput
    style={styles.InputBox}
    placeholder="Nombre"
    value={nombreIngresado}
    onChangeText={capturarNombreIngresado}
  />

  <TextInput
  style={styles.InputBox}
  placeholder="Telefono"
  value={telefonoIngresado}
  onChangeText={capturarTelefonoIngresado}
/>

<Button style={styles.BotonFormulario} title="Ingresar" onPress={ingresarDatos} />
    

</View>
    
  )
}

export default FormularioIngresoDatos;

const styles = StyleSheet.create({

    
    Formulario:{

      flex: 1,
      backgroundColor: '#008080',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 200,


    },
    InputBox: {

        backgroundColor: "#C0C0C0",
        borderColor: "#000000",
        borderRadius: 6,
        borderWidth: 1,
        width: "80%",
        marginVertical:4,
        maxHeight: 40,
        paddingHorizontal: 10,
      
      },
      BotonFormulario:{
        marginTop: 100,
      }
})