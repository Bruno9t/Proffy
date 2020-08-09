import React from 'react'
import { ScrollView } from 'react-native'
import { View } from 'react-native'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'


import styles from './styles'

function Favorites(){
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

export default Favorites