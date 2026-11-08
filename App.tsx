import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import {useState} from 'react';
import { useRouter } from 'expo-router';

export default function App() {
  const [showMCQ, setShowMCQ] = useState(false);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Hello, User!</Text>
      </View>
      <TouchableOpacity style={{marginTop: 20}} onPress={() => router.push('/question')}>
        <Text style={styles.question}>Go to Questions</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 10, marginLeft: 10,fontSize: 20, alignSelf: "flex-start", textAlign: "right"}}>
        Please complete this survey:
      </Text>
      <Pressable style={styles.option1} onPress={() => alert("Button pressed!")}>
        <Text style = {{color: "black", fontSize: 30}}>Press me!</Text>
      </Pressable>
      <Pressable style={styles.option2} onPress={() => alert("Hey, it's me. It's Verity!")}>
        <Text style = {{color: "black", fontSize: 30}}>:)</Text>
      </Pressable>
      <Slider style={styles.slider}
        minimumValue = {0}
        maximumValue = {10}
        step = {1}
        value = {5}
        minimumTrackTintColor="#2563EB"
        maximumTrackTintColor="#000000">
        </Slider>
        <Pressable style={styles.MCQ} onPress={() => setShowMCQ(true)}>
          <Text style = {{color: "white", fontSize: 30}}>Add new question</Text>
        </Pressable>
        {showMCQ && <MCQ />}
    </View>
  );
}

function MCQ() {
  const [question, setQuestion] = useState("");
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  return (
    <View>
    <TextInput style={styles.question}
      placeholder="What is your question?"
      value={question}
      onChangeText={setQuestion}
    />
    {options.map((option, index) => (
      <TextInput style={styles.option}
      key={index}
      placeholder={option}
      />
    ))}
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "flex-start",
    alignItems: "center"
  },

  greetingContainer: {
    marginTop: 60,
    width: 300,
    height: 60,
    backgroundColor: "red",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },

  greeting: {
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: "black",
    textAlign: "center",
    letterSpacing: 1
  },

  option1: {
    backgroundColor: "orange",
    height: 60,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 50,
    alignSelf: "flex-start",
    marginLeft: 10
  },

  option2: {
    backgroundColor: "yellow",
    height: 60,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    alignSelf: "flex-start",
    marginLeft: 10
  },

  MCQ: {
    backgroundColor: "black",
    height: 60,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    alignSelf: "flex-start",
    marginLeft: 10
  },

  question: {
    marginTop: 20,
    marginLeft: 10,
    alignSelf: "flex-start",
    fontSize: 20
  },

  option: {
    marginTop: 20,
    marginLeft: 10,
    alignSelf: "flex-start",
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    padding: 7,
    borderRadius: 10,
    width: 300
  },

  slider: {
    width: 250,
    height: 40,
    marginTop: 20
  }
});
