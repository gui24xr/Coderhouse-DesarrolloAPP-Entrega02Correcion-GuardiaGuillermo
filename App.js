import { StatusBar } from "expo-status-bar";
import { useState, prevState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import ListaContactos from "./components/ListaContactos";
import CardsContactos from "./components/CardsContactos";
import FormularioIngresoDatos from "./components/FormularioIngresoDatos";

export default function App() {
  
  //Estados.-----------------------------------------------------------------------------------------------------//
  const [agenda, setAgenda] = useState([{ id: 1, nombre: "Guillermo", telefono: "1159149165" }]);
  const [itemSeleccionado, setItemSeleccionado] = useState(0);
  let id_actual=2;

  
  //Funciones manejadoras.-----------------------------------------------------------------------------------------//
 const funcionRenderizadora = ({ item }) => (
    <CardsContactos
      id={item.id}
      nombre={item.nombre}
      telefono={item.telefono}
      funcionSeleccionadora={setItemSeleccionado}
      funcionEliminadora={eliminarItemAgenda}
    />
  );

  const ingresarDatosLista = (idIngresado,nombreIngresado,telefonoIngresado) => {
    setAgenda((prevState) => [...prevState,{id: agenda.length + 1,nombre: nombreIngresado,telefono: telefonoIngresado,},]);
    
  };

  const eliminarItemAgenda = (idEliminar) => {
    let indiceElementoBuscado = agenda.findIndex((x) => x.id === idEliminar);
    let copiaAgenda = agenda; //La copio para trabajar sobre una agenda y luego meter como parametro a SetAgenda
    copiaAgenda.splice(indiceElementoBuscado, 1);
    setAgenda([...copiaAgenda]);
  };

  return (
       

    
    <View style={styles.container}>


      
    <ListaContactos
        agenda={agenda}
        funcionRenderizadora={funcionRenderizadora}
      />

      <FormularioIngresoDatos funcionAgregarDatos={ingresarDatosLista} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    
  },
  Header:{
    flex:1,
    marginTop: 10,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    height: '90%',
  }
});
