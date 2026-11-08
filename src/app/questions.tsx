import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import {useState, useEffect} from 'react';
import { useRouter } from 'expo-router';

interface Question {
    question: string;
    options: string[];
    answer: string;
}

export default function Questions() {
    const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Rome", "Berlin"],
    answer: "Paris"
  }

  
];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const activeQuestion = questions[currentQuestion];
    const [correctAnswer, setCorrectAnswer] = useState(true);

    function isCorrect(selected: string) {
        if (selected === activeQuestion.answer) {
            setCorrectAnswer(true)
        }
        else {
            setCorrectAnswer(false)
        }
    }

    function next() {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    function back() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    async function getQuestions() {
        //const [questions, setQuestions] = useState<Question[]>([]);
       // const responses = await fetch("https://opentdb.com/api.php?amount=10")
       // const data = await responses.json();

    }

    return (
        <View style={{backgroundColor: "white", height: "100%", width: "100%"}}>
            <Text style={styles.question}>{activeQuestion.question}</Text>
            {activeQuestion.options.map((option, index) => (
                <View>
                <TouchableOpacity style={styles.optionButton} key={index} onPress={() => isCorrect(option)}>
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
                </View>
            ))}
            {correctAnswer ? (
                    <Text style={styles.correct}>Correct!</Text>
                ) : (       
                    <Text style={styles.incorrect}>Incorrect!</Text>
                )}
            <View style={{flexDirection: "row"}}>
            <TouchableOpacity style = {styles.back} onPress={() => back()}>
                <Text style={styles.optionText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.next} onPress={() => next()}>
                <Text style={styles.optionText}>Next</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    question: {
        fontSize: 50,
        textAlign: "center",
        marginTop: 100
    },

    optionButton: {
        backgroundColor: "black",
        marginTop: 20,
        width: "200",
        height: "50",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 10
    },

    optionText: {
        fontSize: 20,
        color: "white",
        fontFamily: "sans-serif",
        alignSelf: "center"
    },

    correct: {
        fontSize: 20,
        color: "green",
        fontFamily: "sans-serif",
        alignSelf: "center",
        marginTop: 20
    },

    incorrect: {
        fontSize: 20,
        color: "red",
        fontFamily: "sans-serif",
        alignSelf: "center",
        marginTop: 20
    },

    next: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        alignSelf: "flex-end",
        marginLeft: 150,
        marginTop: 20,
        width: 100,
        height: 50,
        borderRadius: 10,
        flexDirection: "row"
    },

    back: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        alignSelf: "flex-start",
        marginLeft: 20,
        marginTop: 20,
        width: 100,
        height: 50,
        borderRadius: 10
    }
})