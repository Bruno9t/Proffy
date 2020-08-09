import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#8257E5",
        padding:40
    },
    banner:{
        width:"100%",
        resizeMode:"contain"
    },
    title:{
        fontFamily:"Poppins_400Regular",
        color:"#fff",
        fontSize:20,
        lineHeight:30,
        marginTop:50
    },
    titleBold:{
        fontFamily:"Poppins_600SemiBold"
    },
    buttonsContainer:{
        flexDirection:"row",
        marginTop:40,
        justifyContent:"space-between"
    },
    button:{
        height:150,
        width:"48%",
        backgroundColor:"#333",
        borderRadius:8,
        padding:24,
        justifyContent:"space-between",
        alignItems:"center"
 
    },
    buttonText:{
        color:"white",
        fontFamily:"Archivo_700Bold",
        fontSize:18
    },
    buttonPrimary:{
        backgroundColor:"#9871f5"

    },
    buttonSecondary:{
        backgroundColor:"#04d361"
    },
    totalConnections:{
        fontFamily:"Poppins_400Regular",
        color:"#d4c2ff",
        lineHeight:20,
        maxWidth:160,
        marginTop:40,
        marginBottom:"5%"
    }
})


export default styles