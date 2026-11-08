import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import {useState} from 'react';
import { useRouter } from 'expo-router';

export default function Home() {
    const [name, setName] = useState("");
    const [nameScreen, setNameScreen] = useState(true);
    const router = useRouter();
    return (
        nameScreen ? (
    <View style={styles.container1}>
            <TextInput 
            style={styles.namebox}
            placeholder = "What is your name?"
            value = {name}
            onChangeText = {setName}
            />
            <Pressable style={styles.submitbutton} onPress={() => setNameScreen(false)}>
                <Text style = {{color: "white", fontSize: 30, textAlign: "center"}}>Submit</Text>
            </Pressable>
        </View>
        ) : (
            <View style={styles.container2}>
                <Text style={styles.greeting}>Hi {name}!</Text>
                <Text style={styles.text}>Ready to answer some questions?</Text>
                <TouchableOpacity style={{marginTop: 20}} onPress={() => router.push('/questions')}>
                    <Text style={styles.questionButton}>Go to Questions</Text>
                </TouchableOpacity>
            </View>
            ) 
          )}

const styles = StyleSheet.create({
    container1: {
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        justifyContent: "center"
    },

    container2: {
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        justifyContent: "flex-start"
    },

    greeting: {
        marginTop: 60,
        fontSize: 50,
        alignSelf: "center"
    },

    text: {
        marginTop: 20,
        alignSelf: "center",
        fontSize: 30,
        textAlign: "center"
    },

    namebox: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        fontSize: 30
    },

    submitbutton: {
        backgroundColor: "black",
        marginTop: 20,
        width: 200,
        alignSelf: "center",
        borderRadius: 10
    },

    questionButton: {
        backgroundColor: "black",
        color: "white",
        fontSize: 30,
        width: 300,
        textAlign: "center",
        borderRadius: 10,
        padding: 10,
        alignSelf: "center"
    }
})