import React , { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import Trip from './Trip/index'
import { FlatList } from 'react-native-gesture-handler';

class TripsScreen extends Component{
    static navigationOptions = {
        header: null
    }
    renderItem = item =>{
        return <Trip onPress={() => this.props.navigation.navigate('Trip')} title={item.item.name} price ={item.item.price} />
    }

    render(){
        const trips = [
            {id: '1', name: 'euroTrip2019', price:'4000'},
            {id: '2', name: 'Expedição atacama', price:'3000'}
        ]
        return(   
            <View style={{
                backgroundColor: 'blue',
                flex: 1,
                justifyContent: 'space-between'}}>  

                <View style={{
                    backgroundColor: 'red',
                    flex:1    
                }}>
                    <Text> mapa</Text> 
                </View>  
                <View>
                    <FlatList 
                        data = {trips}
                        renderItem={this.renderItem} 
                        horizontal
                        pagingEnabled
                        keyExtractor={ item => item.id}
                    />       
                </View>
            </View>
        )
    }
}

export default TripsScreen