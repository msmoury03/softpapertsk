import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Showstudent from './Showstudent'
import DateTimePicker from '@react-native-community/datetimepicker';



const Studentdetails = () => {

    const [timestamp, settimestamp] = useState(new Date())

    const d = new Date(timestamp);
    let day = d.getDate();
    let montt = d.getMonth();
    let yearr = d.getFullYear()
    
    

    const [datee, setdatee] = useState(false)
    
    const [todate, settodate] = useState(`${day}-${montt}-${yearr}`)

    
    const handledatechnge = (val,date)=>{
        settimestamp(date)
        
        setdatee(false)
    }

    

    useEffect(()=>{
        handledatechnge()
        
        
    },[timestamp])
    
  return (
    <View>
      
      <View style={styles.maincontainer}>


      <View style={{flexDirection:'row',justifyContent:'center',marginVertical:10}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>Student Details</Text>
      </View>

      <View style={styles.monthnav}>
      <View style={{flexDirection:'row',justifyContent:'space-around',width:'65%'}}>
          <Text>Day</Text>
          <Text>Week</Text>
          <Text>Month</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent:'flex-end',width:"35%",paddingRight:15}}>
          <TouchableOpacity onPress={()=>setdatee(true)}>
          <Text>{todate}</Text>
          {datee&& <DateTimePicker 
          value={new Date()}
          onChange={handledatechnge}
          /> }
          </TouchableOpacity>
          
          
      </View>
      </View>

      <View style={{flexDirection:'row'}}>
      <View>
          <Text>Student</Text>
      </View>

      <View>
          <Text>8:30-9:00</Text>
      </View>
      </View>

      <View>

          <Showstudent/>

      </View>


      </View>

    </View>
  )
}

export default Studentdetails

const styles = StyleSheet.create({
    maincontainer:{
        backgroundColor:'#d3d3d3',
        paddingVertical:20,
        marginHorizontal:10,
        borderRadius:10
    },
    monthnav:{
        flexDirection:'row',
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:"#dcdcdc"
    }
})