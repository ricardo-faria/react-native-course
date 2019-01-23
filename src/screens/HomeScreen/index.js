import React,{Component} from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import assets from './assets'
import styles from './styles'


class HomeScreen extends Component{
    state = {
        show: true
    }

    handleCounter = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render(){
        return(
            <ImageBackground 
                source={ assets.backGround }
                imageStyle={{ resizeMode :'stretch'}}
                style={styles.backGround}
            >
            <View style={styles.wrapperLogoTripPlanner}>
                <Image source={assets.logoTripPlanner} />
            </View>

            <View style={styles.wrapperLogo}>
                <Image source={assets.wrapperLogo} />
            </View>
            
            {
                !this.state.show ? 
                <TouchableWithoutFeedback onPress={ this.handleCounter}>
                    <View style={styles.buttonBackGround}>  
                        <Text style={styles.buttonText}>Começar </Text>    
                    </View>
                </TouchableWithoutFeedback>
                : 
                <TouchableWithoutFeedback onPress={ this.handleCounter}>
                    <View style={styles.buttonBackGround}>  
                        <Image source={assets.pin} style={styles.pin}/>
                        <Text style={styles.buttonText}>Vamos planejar sua primeira viagem?</Text> 
                        <Image source={assets.arrow} style={styles.arrow}/>
                    </View>
                </TouchableWithoutFeedback>
            }            
        </ImageBackground>
        )
    }
}

export default HomeScreen