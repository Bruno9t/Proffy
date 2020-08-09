import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#8257E5",
        padding:40
    },
    content:{
        flex:1,
        justifyContent:"center",
        position:'relative',
    },
    title:{
        fontFamily:"Archivo_700Bold",
        color:"#fff",
        fontSize:32,
        lineHeight:40,
        maxWidth:180
    },
    description:{
        marginTop:24,
        color:"#d4c2ff",
        fontSize:16,
        lineHeight:26,
        fontFamily:"Poppins_400Regular",
        maxWidth:240
    },
    button:{
        backgroundColor:"#04d361",
        marginVertical:40,
        height:58,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8
    },
    buttonText:{
        color:"#fff",
        fontSize:16,
        fontFamily:"Archivo_700Bold"
    }
})
 
export default styles
