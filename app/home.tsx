import React from 'react';
import {View, Image, StyleSheet,Text,ScrollView} from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      backgroundColor:'white',
      opacity:0.7
      
    },
   
    logo: {
      width:400,
      height: 108,
      borderRadius:20,
      overflow:'hidden',
      backgroundColor:'green'
      
    } 
  });

export const  Home=()=> {
    return (
        <View style={styles.container}>
            <ScrollView>
          <Image
            style={styles.logo}
            source={require('@/assets/images/clening.jpg')}
          />
          <View style={{padding:10}}>
            <Text style={{fontSize:25,color:'green',textDecorationStyle:'dashed',textDecorationLine:'underline',textAlign:'center',padding:10}}>@- Home cleaning services -@</Text>
            <Text style={{textTransform:'capitalize',fontSize:30,textDecorationLine:'underline',textShadowRadius:20,color:'blue',opacity:0.7}}>boost your mood, help you move your body more, improve focus, and help you feel more in control of your surroundings.</Text>
          </View>
          <Text style={{textDecorationLine:'underline',fontSize:20,textAlign:'center',color:'red'}}>-: TYPE OF CLENING :-</Text>
            <View style={{alignItems:'center',paddingLeft:20,backgroundColor:'white',opacity:2.0}}>
                <Text style={{textTransform:'capitalize',fontStyle:'italic',fontSize:30,color:'green',opacity:'0.9'}}>Commercial cleaning</Text>
                <Text style={{textTransform:'capitalize',fontStyle:'italic',fontSize:30,color:'green',opacity:'0.9'}}>Residential cleaning</Text>
                <Text style={{textTransform:'capitalize',fontStyle:'italic',fontSize:30,color:'green',opacity:'0.9'}}>Window cleaning</Text>
                <Text style={{textTransform:'capitalize',fontStyle:'italic',fontSize:30,color:'green',opacity:'0.9'}}>Carpet cleaning</Text>
                <Text style={{textTransform:'capitalize',fontStyle:'italic',fontSize:30,color:'green',opacity:'0.9'}}>Medical cleaning </Text>
                <Text style={{textTransform:'capitalize',fontStyle:'italic',fontSize:30,color:'green',opacity:'0.9'}}>Pressure Washing</Text>
                <Text style={{textTransform:'capitalize',fontStyle:'italic',fontSize:30,color:'green',opacity:'0.9'}}>Bathroom cleaning</Text>
                <Text style={{textTransform:'capitalize',fontStyle:'italic',fontSize:30,color:'green',opacity:'0.9'}}>Kitchen</Text>
                <Text style={{textTransform:'capitalize',fontStyle:'italic',fontSize:30,color:'green',opacity:'0.9'}}>School cleaning</Text>
                <Text style={{textTransform:'capitalize',fontStyle:'italic',fontSize:30,color:'green',opacity:'0.9'}}>Floor Care</Text>
                <Text style={{textTransform:'capitalize',fontStyle:'italic',fontSize:30,color:'green',opacity:'0.9'}}>Event cleaning</Text>
            </View>
            </ScrollView>
        </View>
      );
    };
