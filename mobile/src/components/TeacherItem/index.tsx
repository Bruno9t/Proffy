import React, { useState } from 'react'
import { Text, View,Image,Linking, AsyncStorage } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'


import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'

import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'

import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

export interface TeacherItemProps {
    avatar: string
    bio: string
    id:number
    cost: number
    name: string
    user_id:number
    subject: string
    whatsapp: string
}

interface TeacherProps {
    teacher:TeacherItemProps
    favorited:boolean
}


const TeacherItem:React.FC<TeacherProps> = ({
    teacher,
    favorited
}) => {

    const [isFavorited,setIsFavorited] = useState(favorited)

    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorite(){
        const favorites = await AsyncStorage.getItem('favorites')

        let favoritesArray = []

            if(favorites){
                favoritesArray = JSON.parse(favorites)
            }

        if(isFavorited){
            const favoriteIndex = favoritesArray.findIndex((teacherItem:TeacherItemProps)=>{
                return teacherItem.id === teacher.id
            })


            favoritesArray.splice(favoriteIndex,1)

            setIsFavorited(false)
        }else{

            favoritesArray.push(teacher)

            setIsFavorited(true)
        }

        await AsyncStorage.setItem('favorites',JSON.stringify(favoritesArray))
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                style={styles.avatar}
                source={{uri: teacher.avatar }} />

            <View style={styles.profileInfo}>
            <Text style={styles.name} >{teacher.name}</Text>
            <Text style={styles.subject} >{teacher.subject}</Text>
            </View>
            </View>
            <Text style={styles.bio} >
                {teacher.bio}
            </Text>

            <View style={styles.footer}>

                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>
                        R$ {teacher.cost}
                    </Text> 
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton onPress={handleToggleFavorite} 
                    style={[styles.favoriteButton,
                    isFavorited ? styles.favorited : {}
                    ]}>

                            {
                                isFavorited ? (
                                    <Image source={heartOutlineIcon}/>
                                ):(
                                    <Image source={unfavoriteIcon}/>
                                )
                            } 
                    </RectButton>
                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                            <Image source={whatsappIcon}/>

                            <Text style={styles.contactButtonText} >Entrar em contato</Text>
                    </RectButton>
                </View>

            </View>
        </View>
    )
}

export default TeacherItem