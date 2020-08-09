import React from 'react'
import { Text, View,Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'


import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'

import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'

import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

interface TeacherItemProps {

}


const TeacherItem:React.FC<TeacherItemProps> = ({}) => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                style={styles.avatar}
                source={{uri:"https://images.unsplash.com/photo-1596718802962-2b4225d41955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"  }} />

            <View style={styles.profileInfo}>
                <Text style={styles.name} >Bruno</Text>
                <Text style={styles.subject} >Matemática</Text>
            </View>
            </View>
            <Text style={styles.bio} >
            Nem sempre um usuário vai se lembrar da sua senha 
            </Text>

            <View style={styles.footer}>

                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>
                        R$ 200,00
                    </Text> 
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton,
                    styles.favorited
                    ]}>
                            <Image source={heartOutlineIcon}/>
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                            <Image source={whatsappIcon}/>

                            <Text style={styles.contactButtonText} >Entrar em contato</Text>
                    </RectButton>
                </View>

            </View>
        </View>
    )
}

export default TeacherItem