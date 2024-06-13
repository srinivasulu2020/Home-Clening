import React from 'react';
import {Marker} from 'react-native-maps';
import {View, Image, StyleSheet,Text,ScrollView} from 'react-native';
import { ProdectType } from '@/app/home/product_type';
import homeservice from '../home';
import Typeservices from '../home/type service';
import { } from '../home/product_type';
const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      backgroundColor:'white',
      opacity:0.7,
      flex: 1
    },
   
    logo: {
      width:400,
      height: 108,
      borderRadius:20,
      overflow:'hidden',
      backgroundColor:'green'
      
    } ,
    prodectType:{
      textTransform:'capitalize',fontStyle:'italic',fontSize:30,color:'green',opacity:0.7
    }
  });

const  Home=()=> {
    return (
        <ScrollView style={styles.container}>
            <View style={{flex: 1}}>
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
                <Text style={{}}>Commercial cleaning</Text>
                <Text style={styles.prodectType}>Residential cleaning</Text>
                <Text style={styles.prodectType}>Window cleaning</Text>
                <Text style={styles.prodectType}>Carpet cleaning</Text>
                <Text style={styles.prodectType}>Medical cleaning </Text>
                <Text style={styles.prodectType}>Pressure Washing</Text>
                <Text style={styles.prodectType}>Bathroom cleaning</Text>
                <Text style={styles.prodectType}>Kitchen</Text>
                <Text style={styles.prodectType}>School cleaning</Text>
                <Text style={styles.prodectType}>Floor Care</Text>
                <Text style={styles.prodectType}>Event cleaning</Text>
                <Text style={styles.prodectType}>Event cleaning</Text>
                <Text style={styles.prodectType}>Event cleaning</Text>
                <Text style={styles.prodectType}>Event cleaning</Text>
            </View>
            </View>
            <ProdectType />
            


        </ScrollView>
      );
    };
export default Home