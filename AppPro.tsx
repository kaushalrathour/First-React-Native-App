import React from "react";
import { Text, SafeAreaView, View, StyleSheet} from "react-native";

export default function AppPro():JSX.Element {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.text}>Hello World !</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    text: {
        color: "white",
    }
})