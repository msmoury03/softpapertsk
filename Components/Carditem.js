import { FlatList, StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import data from '../data/maindata.js'
import Card from './Card.js'

const Carditem = ({navigation}) => {


   

    
  return (
      <ScrollView >
    <View >
      <View style={{flexDirection:'row',flexWrap:'wrap',backgroundColor:'white',justifyContent:'center'}}>
      {data.map((x,index)=>{
           return <Card item={x} key={index} navigation={navigation}/>
       })}

       
      </View>
    </View>
      </ScrollView>
  )
}

export default Carditem

const styles = StyleSheet.create({})