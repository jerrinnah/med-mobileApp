import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react'

const Two = ({ setStage }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
        <Text>Page Two</Text>
        <Pressable onPress={() => setStage(1)} style={{ width: '70%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue', marginTop: 20 }}>
            <Text style={{ color: 'white' }}>Page One</Text>
        </Pressable>
    </View>
    )
}

export default Two;