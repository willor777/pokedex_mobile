import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useState, useEffect } from "react";
import {View, Text, Button} from "react-native";
import {getPokemonWithCallback, getPokemonWithPromise} from "./Repo.js"



const Stack = createNativeStackNavigator();


export default function App() {
    console.log("Started")

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
                <Stack.Screen name="PokedexScreen" component={PokedexScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

/** Display greeting animation to user.
 * Show button to navigate to next screens
 */
function HomeScreen( {navigation}) {

    return (
        <View>
            <Text>"Dash Screen"</Text>
            <Button title="go to profile screen" onPress={ () => navigation.navigate("ProfileScreen")}/>
            <Button title="go to pokedex screen" onPress={ () => navigation.navigate("PokedexScreen")}/>

        </View>
    )
}

/**
 * Displays list of pokemon showing simple data + picture
 */
function PokedexScreen( {navigation}) {

    let [getPokedex, setPokedex] = useState("")

    // componentWillMount() Called when component is first added to screen
    useEffect(
        () => {
            console.log("I have been added to the screen!")
        }
    )

    // componentDidUpdate() Called when PokedexScreen Component itself changes state (anything at all)
    useEffect(
        () => {
            console.log("PokedexScreen Component has changed state!")
        },
        []                  // Empty Array of Dependencies
    )

    // componentDidUpdate() Called when getPokedex has changed state
    useEffect(
        () => {
            console.log("getPokedex value has changed state!")
        },
        [getPokedex]        // Array of Dependencies that includes getPokedex 
    )

    // componentWillUnmount() Called when PokedexScreen Component has been destroyed
    useEffect(
        () => {
            return () => {
                console.log("PokedexScreen Component has been destroyed!")
            }
        }
    )

    return (
        <View>
            <Text>"Pokedex Screen"</Text>
            <Button title="go to home screen" onPress={ () => navigation.navigate("HomeScreen")}/>
            <Button title="go to profile screen" onPress={ () => navigation.navigate("ProfileScreen")}/>
        </View>
    )
}

/**
 * Displays user's favorite pokemon + username
 */
function ProfileScreen( {navigation} ) {
    return (
        <View>
            <Text>"Profile Screen"</Text>
            <Button title="go to pokedex screen" onPress={ () => navigation.navigate("PokedexScreen")  }/>
            <Button title="go to dash screen" onPress={ () => navigation.navigate("HomeScreen")  }/>
        </View>
    )
}

const uiState = {
    username : "",
    pokedex : [],

}