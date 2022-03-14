import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PieChart } from "react-native-gifted-charts"
import Canvas from 'react-native-canvas'



const Piechart = () => {

    const pieData = [
        {value: 54, color: '#177AD5', text: '54%'},
        {value: 30, color: '#79D2DE', text: '30%'},
        {value: 26, color: '#ED6665', text: '26%'},
        ];
  return (
    <View style={{width:50,height:20,maxWidth:50,maxHeight:50}}>
      <PieChart
        donut
        showText
        textColor="black"
        innerRadius={70}
        showTextBackground
        textBackgroundColor="white"
        textBackgroundRadius={22}
        data={pieData}
        centerLabelComponent={()=>{
            return <Text>jhgh</Text>
        }}
        />

        
    </View>
  )
}

export default Piechart

const styles = StyleSheet.create({})