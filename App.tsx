import * as React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import Home from '@/screens/home'

const App = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{
                            headerShown: false
                        }}
                        name='Home'
                        component={Home}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App
