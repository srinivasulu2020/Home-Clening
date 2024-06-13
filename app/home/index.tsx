import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import Layout from '@/app/home/layout'
import {Home} from './home'
import {ProdectType} from './product_type' 


export default function homeservice() {
  return (
    <ScrollView  style={{flex: 1}}>
      <Home />
      <ProdectType />
      <Text>Home SERVICE</Text>
      <Layout/>
    </ScrollView>
  )
}