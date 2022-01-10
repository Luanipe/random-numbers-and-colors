import React, { useState } from "react"
import { SafeAreaView, Text, StyleSheet } from "react-native"
import Button from "./components/Button"

export default App = () => {
    
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const randomColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
        return `#${randomColor}`
    }

    const [number, setNumber] = useState(0)

    const novoValor = () => {
        setNumber(randomNumber(1, 100))
    }

    return(
        <SafeAreaView style={[styles.app, {backgroundColor: randomColor()}]}>
            <Text style={[styles.number, {color: randomColor()}]}>{number}</Text>
            <Button label="Random" onClick={novoValor}/> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    number: {
        fontSize: 80,
        marginBottom: 20
    }
})
