import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";





const CardsContactos = (props) => {
  const seleccionarItem = () => {
    //Ejecuto el setItemSeleccionado a travez del prop.alPresionar boton que de esa forma ejecuto  el estado 'ItemSeleccionado'.
    props.funcionSeleccionadora(props.id);
    //Aca iria el box de aviso

    //Aca llamo a la funcion eliminadora.
    props.funcionEliminadora(props.id);
    
    
  };

  return (
    
    <View style={styles.CardsContactos} > 
        <Image source={require("../assets/persona1.png")} style={styles.fotoPerfil}/>
        <Text style={styles.textCard}>{props.id}</Text>
        <Text style={styles.textCard}>{props.nombre}</Text>
        <Text style={styles.textCard}>{props.telefono}</Text>
        <Button title="Eliminar" onPress={seleccionarItem} />
   </View>
    
    
 
  );
};

export default CardsContactos;

const styles = StyleSheet.create({
  CardsContactos: {
    backgroundColor: "#4169E1",
    width: "100%",
    borderRadius: 11,
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    fontWeight: "bold",
    
    paddingHorizontal:15,
    paddingVertical: 15,
    paddingVertical:8,
    marginVertical: 3,
  },
  fotoPerfil: {
    width: 35,
    height: 35,
    alignSelf: "stretch",
    backgroundColor: "#00000000",
    alignItems: "flex-start",
  },
  fotoContainer: {
    backgroundColor: "#3CB371",
    width: "10%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  datosContainer: {
    flexDirection: "column",
  },
  textCard: {
    color: "#FFFFFF",

    marginBottom: 5,
  },
});
