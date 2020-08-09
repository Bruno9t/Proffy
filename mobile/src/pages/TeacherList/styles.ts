import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f0f0f7"
    },
    teacherList:{
        marginTop:-40,
    },
    searchForm:{
        marginBottom:50,  
    },
    label:{
        color:"#d4c2ff",
        fontFamily:"Poppins_400Regular"
    },
    input:{
        backgroundColor:"#FFF",
        borderRadius:8,
        height:50,
        justifyContent:"center",
        paddingHorizontal:16,
        marginTop:4,
        marginBottom:16
    },
    inputGroup:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    inputBlock:{
        width:"48%"
    },
    filter:{
        backgroundColor:'#9871f5',
        flex:1,
        flexDirection:"row",
        borderRadius:50,
        width:50,
        justifyContent:"center",
        alignItems:"center",
        height:50
    },
    textFilter:{
        color:"#fff",
        fontSize:18,
        fontFamily:"Archivo_700Bold",
    },
    submitButton:{
        backgroundColor:"#04d361",
        height:56,
        borderRadius:8,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginRight:8
    },
    submitButtonText:{
        color:"#fff",
        fontFamily:"Archivo_700Bold",
        fontSize:18
    }
})

export default styles