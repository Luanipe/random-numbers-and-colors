import React  from "react"
import { Text, TouchableHighlight, StyleSheet } from "react-native"

export default props => {
    return(
        <TouchableHighlight style={styles.button} underlayColor={"#FCBA6F"} onPress={props.onClick}>
            <Text style={{fontSize: 25, color: "white"}}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 130,
        height: 65,
        backgroundColor: "#6D8CFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    }
})