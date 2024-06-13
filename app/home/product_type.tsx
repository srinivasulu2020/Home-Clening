import { View, Text, Image,ScrollView ,StyleSheet} from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        color:'red'
    }
})

export  const ProdectType=()=> {
  return (
    <View style={{ flex: 1}}>
       <View style={{
    flex: 1
       }}>
                <Text style={styles.text}>APPLIANCES REPAIR SERVICES</Text>
                    <View style={{display:'flex',flexDirection:'row', flex: 1}}>
                       <ScrollView  horizontal={true} style={{ backgroundColor: 'pink',
                                              paddingVertical: 20, flex: 1}}>
                            <View>
                                <Image
                                    style={{height:80,width:100}}
                                    source={require('@/assets/images/APPLIANCES/AC.jpg')}
                                /> 
                                <Text style={{textAlign:'center'}}>AC</Text>
                            </View>
                            <View>
                                <Image
                                    style={{height:80,width:100}}
                                    source={require('@/assets/images/APPLIANCES/CC TVCAMERA.jpg')}
                                /> 
                                <Text style={{textAlign:'center'}}>CC TVCAMERA</Text>
                            </View>
                            <View>
                                <Image
                                    style={{height:80,width:100}}
                                    source={require('@/assets/images/APPLIANCES/KITCHEN CHIMNEY.jpg')}
                                /> 
                                <Text style={{textAlign:'center'}}>KITCHEN CHIMNEY</Text>
                            </View>
                            <View>
                                <Image
                                    style={{height:80,width:100}}
                                    source={require('@/assets/images/APPLIANCES/DEEP FRIDGE.webp')}
                                /> 
                                <Text style={{textAlign:'center'}}>DEEP FRIDGE</Text>
                            </View>

                            <View>
                                <Image
                                    style={{height:80,width:100}}
                                    source={require('@/assets/images/APPLIANCES/DISHWASHER.jpg')}
                                /> 
                                <Text style={{textAlign:'center'}}>DISHWASHER</Text>
                            </View>
                            <View>
                                <Image
                                    style={{height:80,width:100}}
                                    source={require('@/assets/images/APPLIANCES/FRIDGE.jpg')}
                                /> 
                                <Text style={{textAlign:'center'}}>FRIDGE</Text>
                            </View>
                            <View>
                                <Image
                                    style={{height:80,width:100}}
                                    source={require('@/assets/images/APPLIANCES/GEYSER REPAIR.jpg')}
                                /> 
                                <Text style={{textAlign:'center'}}>GEYSER REPAIR</Text>
                            </View>
                         </ScrollView>    
                    </View>
                <Text>HANDYMAN SERVICES</Text>
                <Text>CLEANING AND PEST CONTROL</Text>
                <Text>CONTRACTOR SERVICES</Text>
                <Text>IT SERVICES</Text>
            </View>
    </View>
  )
}