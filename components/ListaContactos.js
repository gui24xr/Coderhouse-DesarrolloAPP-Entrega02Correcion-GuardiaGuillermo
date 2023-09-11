import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CardsContactos from './CardsContactos'

const ListaContactos = ({agenda,funcionRenderizadora}) => {



  return (
    <View>
     
    <Text style={styles.AgendaHeader}>Mis Contactos</Text>
    
      
    <FlatList
    style={styles.ListaContactos}
    data={agenda}
    renderItem = {funcionRenderizadora}
    
    
     />

    </View>
  )
}

export default ListaContactos

const styles = StyleSheet.create({
AgendaHeader:{
    backgroundColor: "#C0C0C0",
    width: "100%",
    alignSelf: 'center',
    color: 'white',
    fontSize: 30,
},
ListaContactos:{

    flex:1,
    
    backgroundColor: "#C0C0C0",
    borderColor: "#000000",
    borderRadius: 0,
    borderWidth: 0,
    width: "100%",
    maxHeight: 400,
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginTop: 10,
},


})