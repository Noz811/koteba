import { StyleSheet, Text, View,Image, LogBox,Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Header } from 'react-native/Libraries/NewAppScreen'






const index = () => {
  return (
    <View style={styles.container}>

     <Text style={styles.txt}>Name: koteba jbara</Text>
      <Text style={styles.koteba}>B.D: 12/12/1998</Text>
      <Text style={styles.ui}>My Frist UI </Text>

   <View style={styles.box}>
    </View> 
      
      
     


    
<Image source={require('/RN/koteba/assets/images/react-logo.png')}
      style={{width:100,height:100}}/>
    </View>
 )
}

export default index

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    flex:1 , 
    alignItems: "center",
    justifyContent:"center",
    backgroundColor:'rgba(0,0,0,0.5)' , 
    paddingTop: 100,
    borderWidth:1.5,
    borderColor:'black',
    borderRadius:30,
    margin:40,
  },
  

  txt:{
    color: "black",
    fontSize: 20 , 
    marginLeft: 100 ,
    bottom:150,
    
    
  },
  box:{
    width:100,
    height:100,
    backgroundColor: "blue",
    bottom:330,
    marginRight:240,
    marginLeft: 50 ,


    },
    koteba:{
      color: "black",
    fontSize: 20 , 
    marginLeft: 80 ,
    bottom:150,
},
ui:{
  color: "black",
fontSize: 40 , 
},

})