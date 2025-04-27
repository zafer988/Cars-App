import { StyleSheet, Dimensions } from 'react-native'
export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10


    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    inner_text: {
        padding: 5,
        fontSize: 15
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
})