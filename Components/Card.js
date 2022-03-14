import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { PieChart } from 'react-native-gifted-charts';







const Card = ({ item ,navigation}) => {

    const pieData = item.attendanceStatus == "attendance-taken" ?  [
         {value: item.attendanceDetails[0].countVal, color: '#00D817', },
        {value: item.attendanceDetails[1].countVal, color: '#FE3233', },
        {value: item.attendanceDetails[2].countVal, color: '#FFBE0B', },
        ]:[ {value: 100, color: '#177AD5', },]


    let outerRadius = (120*0.95)/2;

    return (
        
            <TouchableOpacity onPress={()=>navigation.navigate('Details',{item:item})}>

<View style={[styles.maincontainer,]} >
                <Text style={{ fontWeight: '700' }}><Text style={{ color: 'grey' }}>Class:</Text> {item.class.name}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <View style={{ width:'50%' }}>
                        <PieChart 
                            textColor="black"
                            innerRadius={outerRadius-10}
                            radius={outerRadius}
                            textSize={10}
                            data={pieData}
                            centerLabelComponent={() => {
                                return <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:20,fontWeight:'700'}}>{item.totalStudent}</Text>
                                    <Text style={{fontSize:10}}>Total Students</Text>
                                </View>
                            }}
                        />
                    </View >


                    <View style={{ width: 200 }}>
                        {item.attendanceStatus == "attendance-taken" ? <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 18 }}><Text style={{ fontSize: 22, color: '#00D817', fontWeight: '700' }}>{item.attendanceDetails[0].countVal}</Text> Present Students</Text>

                            <Text style={{ fontSize: 18 }}><Text style={{ fontSize: 22, color: '#FE3233', fontWeight: '700' }}>{item.attendanceDetails[1].countVal < 10 ? `0${item.attendanceDetails[1].countVal}` : item.attendanceDetails[1].countVal}</Text> Absent Students</Text>

                            <Text style={{ fontSize: 18 }}><Text style={{ fontSize: 22, color: '#FFBE0B', fontWeight: '700' }}>{item.attendanceDetails[2].countVal < 10 ? `0${item.attendanceDetails[2].countVal}` : item.attendanceDetails[2].countVal}</Text> Leave Students</Text>



                        </View> : <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.notattend}>!</Text>
                            <Text style={{ fontWeight: '700', width: 120, textAlign: 'center' }}>No Attendence Taken Yet</Text>

                        </View>}
                    </View>


                </View>


                <View style={styles.clock}><Text style={{ color: 'grey', fontSize: 9, fontWeight: '700' }}><AntDesign name="clockcircleo" size={12} color="grey" /> {item.attendanceTime.startTime}-{item.attendanceTime.endTime}</Text></View>
            </View>
            </TouchableOpacity>
        
    )
}

export default Card

const styles = StyleSheet.create({
    maincontainer: {
        width: 370,
        height: 216,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "grey",
        shadowOffset: {
            width: 5,
            height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 15,
        paddingHorizontal: 10,
        margin: 8,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
       



    },
    cardcontainer: {
        // backgroundColor:'red',
        margin: 10,
        width: 100,
    },
    notattend: {
        backgroundColor: "#FE3233",
        width: 40,
        height: 40,
        textAlign: 'center',
        borderRadius: 50,
        color: 'white',
        fontWeight: '700',
        fontSize: 22
    },
    clock: {
        position: 'absolute',
        bottom: 10,
        right: 10,

    },
    piechart: {
        borderRadius: 50,
        backgroundColor: 'yellow',
        width: 100,
        height: 100,
    },
    charttext: {
        backgroundColor: 'red',
        borderRadius: 100,
        height: 50,
        width: 50
    },
    divone: {
        height: 100,
        width: 100,
        backgroundColor: '#00a100',
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    }

})