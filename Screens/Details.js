import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Studentdetails from '../Components/Studentdetails'
import Piechartdetails from '../Components/Piechartdetails'

const Details = ({route}) => {

  const {item} = route.params

 
  
  return (
    <ScrollView>
    <View>
      <Piechartdetails item={item}/>


      <Studentdetails/>
    </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({})