import React, { useState, useEffect } from 'react';
import { createAppContainer } from 'react-navigation'
import AppRouter from './AppRouter'
import { ColorContext, Color } from './publicState';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';
const Luwt = () => {

    const AppStackContainer = createAppContainer(AppRouter);
    return (
        <View>
            {/* <Color> */}
            <AppStackContainer />
            {/* </Color> */}
        </View>
    )
}
export default Luwt