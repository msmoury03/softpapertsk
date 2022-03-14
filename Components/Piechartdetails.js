import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { PieChart } from 'react-native-gifted-charts';
import Slider from '@react-native-community/slider';


const Piechartdetails = ({ item }) => {

    const Presentstu = item.attendanceDetails[0].countVal
    const Absentstu = item.attendanceDetails[1].countVal
    const Leavestu = item.attendanceDetails[2].countVal

    const pieData = item.attendanceStatus == "attendance-taken" ? [
        { value: Presentstu, color: '#00D817', },
        { value: Absentstu, color: '#FE3233', },
        { value: Leavestu, color: '#FFBE0B', },
    ] : [{ value: 100, color: '#177AD5', },]


    let outerRadius = (120 * 0.95) / 2;

    const [student, setstudent] = useState(item.totalStudent)

    const starttime = item.attendanceTime.startTime
    const endtime = item.attendanceTime.endTime

    return (
        <View style={styles.maincontaier}>
            <View style={styles.piec}>
                <Text style={{color:'#969696'}}>Class:<Text style={{color:'black'}}>{item.class.name}</Text></Text>
                <Text>18-01-2022</Text>
                <PieChart
                    textColor="black"
                    innerRadius={outerRadius - 10}
                    radius={outerRadius}
                    textSize={10}
                    data={pieData}
                    centerLabelComponent={() => {
                        return <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>{student}</Text>
                            <Text style={{ fontSize: 10 }}>Total Students</Text>
                        </View>
                    }}
                />
            </View>

            <View style={styles.slidecard}>
                <Text>Today At </Text>
                <Text>{starttime}-{endtime}</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:10}}>Present Students:<Text style={{fontWeight:'700',fontSize:11}}>{Presentstu}</Text></Text>
                <Slider
                    style={{ width: 150, height: 30 }}
                    minimumValue={0}
                    maximumValue={student}
                    minimumTrackTintColor="#00D817"
                    maximumTrackTintColor="#87a38f"
                    thumbTintColor='#00D817'
                    value={Presentstu}
                />
                </View>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:10}}>Present Students:<Text style={{fontWeight:'700',fontSize:11}}>{Absentstu}</Text></Text>

                <Slider
                    style={{ width: 150, height: 30 }}
                    minimumValue={0}
                    maximumValue={student}
                    minimumTrackTintColor="#FE3233"
                    maximumTrackTintColor="#87a38f"
                    thumbTintColor='#FE3233'
                    value={Absentstu}
                />
                </View>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:10}}>Present Students:<Text style={{fontWeight:'700',fontSize:11}}>{Leavestu}</Text></Text>
                <Slider
                    style={{ width: 150, height: 30 }}
                    minimumValue={0}
                    maximumValue={student}
                    minimumTrackTintColor="#FFBE0B"
                    maximumTrackTintColor="#87a38f"
                    thumbTintColor='#FFBE0B'
                    value={Leavestu}
                />
                </View>


            </View>
        </View>
    )
}

export default Piechartdetails

const styles = StyleSheet.create({
    maincontaier: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    slidecard:{
        
        width:'70%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    piec:{
        width:'30%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
})