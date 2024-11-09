import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props:any) => {
    const{name,year,point}=props
  return (

    <View>
      <Text style={styles.name}>{name}</Text>
      <Text>{year}</Text>
      <Text>{point}</Text>


    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    name:{
        fontSize:25,
        color:'yellow'
    }
})