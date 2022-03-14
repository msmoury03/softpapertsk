import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carditem from '../Components/Carditem'

const Home = ({ navigation }) => {
  return (
    <View>

      <Carditem navigation={navigation}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})