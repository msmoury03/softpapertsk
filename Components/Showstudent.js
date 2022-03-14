import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'
import AttendanceTime from '../data/Detailsday'
import attendanceTime from '../data/Detailsday'



const Showstudent = () => {
    
    const Studentdata = attendanceTime.studentDetails


  return (
      <ScrollView>
    <View>
      
      <View>
      {Studentdata.map((x,index)=>
      <View key={index} style={{flexDirection:'row',backgroundColor:'white',margin:5,padding:5,borderRadius:5}}>

          <View style={{flexDirection:'row',alignItems:'center',width:170,justifyContent:'space-around'}}>
              <Image style={{width:22,height:22}} source={{uri:'https://icons-for-free.com/iconfiles/png/512/client+person+photo+picture+profile+user+icon-1320184631024101186.png'}}/>

          <View >
              <Text style={{fontSize:15}}>{x.studentName}</Text>
          <Text style={{fontSize:12}}>{x.rollNumber}</Text>
          </View>

          <View style={{borderWidth:1,padding:3,borderRadius:10}}>
              <Text style={{fontWeight:'bold'}}>{x.overAllPercentage}%</Text>
          </View>
          </View>
      </View>)}


      </View>

    </View>
      </ScrollView>
  )
}

export default Showstudent

const styles = StyleSheet.create({})