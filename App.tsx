import * as React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import Home from '@/screens/home'
import PostDetails from '@/screens/post-details'

const App = () => {
    const options = {
        headerShown: false
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={options} name='Home' component={Home} />
                    <Stack.Screen options={options} name='PostDetails' component={PostDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App
