import { View, Text, Pressable } from 'react-native';
import { useState } from 'react'

const One = ({ setStage }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Text>Page One</Text>
            <Pressable onPress={() => setStage(2)} style={{ width: '70%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue', marginTop: 20 }}>
                <Text style={{ color: 'white' }}>Page Two</Text>
            </Pressable>
        </View>
    )
}

export default One;