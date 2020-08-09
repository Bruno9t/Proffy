import React, { useCallback, useEffect, useState } from 'react'
import { AsyncStorage, ScrollView } from 'react-native'
import { View } from 'react-native'
import {useFocusEffect} from '@react-navigation/native'


import PageHeader from '../../components/PageHeader'
import TeacherItem,{TeacherItemProps} from '../../components/TeacherItem'


import styles from './styles'

function Favorites(){

    const [favoritedTeachers,setFavoritedTeachers] = useState<TeacherItemProps[]>([])

    function loadFavoritesTeachers(){

        AsyncStorage.getItem('favorites').then(response=>{
            if(response){
                const favoritesTeachersArray = JSON.parse(response)

                setFavoritedTeachers(favoritesTeachersArray)

            }

        })

    }

    useFocusEffect(
        React.useCallback(() => {
          loadFavoritesTeachers();
        }, [])
      )
    

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />

            <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal:10,
                paddingBottom:18,
            }}
            showsHorizontalScrollIndicator={true}
            horizontal
            >

                {
                    favoritedTeachers.map((favoritedTeacher=>(
                        <TeacherItem key={favoritedTeacher.id} teacher={favoritedTeacher} favorited />
                    )))
                }
                
            </ScrollView>

        </View> 
    )
}

export default Favorites