import { View, Text, TextInput } from 'react-native';
import { useState } from 'react'

// components
import One from './One'
import Two from './Two'

const Parent = () => {
    const [stage, setStage] = useState(3);
    const [email, setEmail] = useState('');

    const switcher = () => {
        switch(stage) {
            case 1: {
                return <One setStage={setStage} />
            }
            case 2: {
                return  <Two setStage={setStage} />
            }
            default: {
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Invalid Page</Text>
                    </View>
                )
            }
        }
    }

    const numbers = [1, 2, 3, 4, 5];

    return (
        <View style={{ flex: 1, backgroundColor: 'gold', paddingTop: 80 }}>
           <TextInput value={email} onChangeText={(e) => setEmail(e)} style={{ width: '100%', height: 50, backgroundColor: 'grey' }} />
        </View>
    )
}

export default Parent;