import React from 'react'
import { View, Image, Text } from 'react-native'
import Cars_Style from './Cars_Style'



const Cars = ({ car }) => {
    console.log(car)
    return (
        <View style={Cars_Style.container}>
            <Image source={{ uri: car.imageUrl }} style={Cars_Style.image} />
            <View>
                <Text style={Cars_Style.title}>{car.model}</Text>
                <Text style={Cars_Style.inner_text}>{car.description}</Text>
            </View>
        </View>
    )
}

export default Cars