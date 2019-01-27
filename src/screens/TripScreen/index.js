import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

class TripScreen extends Component {
    static navigationOptions = {
        header: null
    }
    renderItem = item => {
        return(
            <View>
                <Text>{item.item.name}</Text>
                <Text>{item.item.description}</Text>
                <Text>{item.item.price}</Text>
            </View>
        )
    }
    render(){
        const trip= {
            name: 'eurotrip 2019',
            price: 5000,
            places:[
                {id: '1', name:'Amsterdan', description:'chegada',price:100, lat:0, long:0 },
                {id: '2', name:'bruxelas',description:'hospedagem',price:100, lat:0, long:0 }
            ]
        }
        return(
            <View style={{flex:1}}>
                <View style={{
                    height: 192,
                    backgroundColor:'gray'
                }}>
                    <Text style={{
                        position:'absolute',
                        left: 16,
                        bottom:16
                    }}>{trip.name}</Text>
                    <Text style={{
                        position: 'absolute',
                        bottom: 16 ,
                        right:32,
                        textAlign: 'right',
                        backgroundColor: '#24C6DC',
                        paddingBottom: 4,
                        paddingRight: 4,
                        paddingLeft:4,
                        paddingTop:4,
                        color: 'white'
                        
                    }}>{trip.price}</Text>
                </View>
                <FlatList
                    style={{
                        flex:1
                    }}
                    data={trip.places}
                    renderItem={this.renderItem}
                    keyExtractor={ item => trip.places.id } 
                />
            </View>
        )
    }

}

export default TripScreen