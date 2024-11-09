import { StyleSheet, Text, View,LogBox } from 'react-native'
import React from 'react'
import Card from '@/components/Card'

const _layout = () => {
  return (
    <View style={styles.screen}>
    
      <View style={styles.card}>
      <View style={styles.logbox}></View>
        <View>

      <Text style={styles.txt}>Name: koteba jbara</Text>
      <Text style={styles.txt2}>B.D: 12/12/1998</Text>
      <Text style={styles.txt3}>My Frist UI</Text>
      </View>
      


        

      </View>
      <Card name ='koteba'year='1998'point='100'/>
      <Card name ='yosef'year='1995'point='50'/>

    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    
  },
  card:{
    borderWidth:2,
flexDirection:'row',    marginLeft: 10 ,
    width:350,
    height:200,
    borderColor: 'red'
    
    
    
  },
    
    txt:{
      fontSize: 25 , 
      // marginLeft: 100 ,
      color:'black',
      
    },
    
    txt2:{
      fontSize: 30 , 
      // marginLeft: 100 ,
      color:'black',
    },
    
    txt3:{
      fontSize: 50 , 
      // marginLeft: 20 ,
      color:'black',
    },
    
    logbox:{
      borderColor:'blue',
      width:100,
      height:80,
      backgroundColor:'#3C3D37',
      
      
      
      

  


  }

})