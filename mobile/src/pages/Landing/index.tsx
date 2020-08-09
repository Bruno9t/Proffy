import React, { useEffect, useState } from 'react'
import {Image, Text, View, TouchableOpacity} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'

import {useNavigation} from '@react-navigation/native'

import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'


import styles from './style'
import api from '../../services/api'

const Landing = () => {
    const {navigate} = useNavigation()
    const [totalConnections,setTotalConnections] = useState(0)


    useEffect(()=>{
        api.get('connections').then(({data:{total}})=>{
            setTotalConnections(total)
        })
    },[])


    function handleNavigateToGiveClasses(){
        navigate("GiveClasses")
    }

    function handleNavigateToStudyPage(){
        navigate("Study")
    }

    return (
        <View style={styles.container}>
            <Image source={landingImage} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem vindo, {"\n"}
                <Text style={styles.titleBold}>O que deseja fazer ?</Text>
            </Text>

            <View style={styles.buttonsContainer}>

                <RectButton onPress={handleNavigateToStudyPage} style={[styles.button,styles.buttonPrimary]} >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>
                        Estudar
                    </Text>
                </RectButton>

                <RectButton onPress={handleNavigateToGiveClasses} activeOpacity={0.7} style={[styles.button,styles.buttonSecondary]} >
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>
                        Dar aulas
                    </Text>
                </RectButton>

            </View>


        <Text style={styles.totalConnections}>
            Total de {totalConnections} conexões realizadas! {" "}
            <Image source={heartIcon} />
        </Text>
        </View> 
    )
}

export default Landing

