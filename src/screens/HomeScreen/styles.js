import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    backGround:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
     wrapperLogoTripPlanner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapperLogo:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 35
    },
    pin:{
        marginTop: 16,
        marginBottom: 16
    },
    arrow:{
        marginTop: 16
    },  
    buttonBackGround:{
        backgroundColor: 'white',
        paddingBottom: 16,
        paddingTop: 20,
        alignItems: 'center'
    },
    buttonText:{ 
        textAlign: 'center', fontSize: 28
    }
})