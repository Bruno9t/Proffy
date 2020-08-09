import React, { useState } from 'react'
import { View , ScrollView, Text} from 'react-native'
import { BorderlessButton, TextInput, RectButton } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import {Feather} from '@expo/vector-icons'


import styles from './styles'
import { sub } from 'react-native-reanimated'
import api from '../../services/api'


function TeacherList(){
    const [isFilterVisible,setFilterVisible] = useState(false)
    const [teachers,setTeachers] = useState([])

    const [subject,setSubject] = useState('')
    const [week,setWeek] = useState<string>('')
    const [time,setTime] = useState('')



    function handleToggleFilterVisible(){
        setFilterVisible(!isFilterVisible)
    }

    async function filterTeachers(){

        enum Week {
            domingo,
            segunda,
            terça,
            quarta,
            quinta,
            sexta,
            sábado,
        }

        const {data} =  await api.get('classes',{
            params:{
                subject,
                week_day:Week[(week.toLowerCase()) as keyof typeof Week] || '1',
                time
            }
        })

        console.log({
            subject,
            week_day:Week[(week.toLowerCase()) as keyof typeof Week] || '1',
            time
        })

        setTeachers(data)
    }


    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" headerRight={
            (
                <RectButton activeOpacity={0.7} style={styles.filter} onPress={handleToggleFilterVisible}>
                    <Text style={styles.textFilter}><Feather name='filter' size={20} color="#fff" />{"  "}Filtro</Text>
                </RectButton>
            )
            } >

               {isFilterVisible && <View style={styles.searchForm}>
                    <Text style={styles.label}>
                        Matéria
                    </Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Qual matéria ?"
                    placeholderTextColor="#c1bccc"
                    onChangeText={(text)=>setSubject(text)}
                    value={subject}
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>
                                Dia da semana
                            </Text>
                            <TextInput
                            style={styles.input}
                            placeholder="Qual dia ?"
                            placeholderTextColor="#c1bccc"
                            onChangeText={(text)=>setWeek(text)}
                            value={week}
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>
                                Horário
                            </Text>
                            <TextInput
                            style={styles.input}
                            placeholder="Qual horário ?"
                            placeholderTextColor="#c1bccc"
                            onChangeText={(text)=>setTime(text)}
                            value={time}
                            />
                        </View>
                    </View>
                    <RectButton onPress={filterTeachers} style={styles.submitButton}>
                        <Text style={styles.submitButtonText} >Filtrar</Text>
                    </RectButton>
                </View>}
            </PageHeader>

            <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal:10,
                paddingBottom:18,
                alignItems:"center"    
            }}
            
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>

        </View> 
    ) 
}

export default TeacherList