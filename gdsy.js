
import React, { useState, useEffect } from 'react';
import pxToDp from './zsy'
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
    Button,
    ImageBackground
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Gdsy = () => {
    const dbyb = [{ name: '待办', flag: 0 }, { name: '已办', flag: 1 }]
    const [xzdzt, setxzdzt] = useState(0)
    const choosezt = (val) => {
        setxzdzt(val)

    }
    return (
        <>

            <ImageBackground
                style={styles.dbdh}
                source={{ uri: 'http://ops.xmrtc.com/api/fs/files/657238908416954368/0' }}>

                <View style={styles.btxzpyh}><Text style={styles.title}>勘察工单</Text><Text style={styles.zj}>增加</Text></View>
                <View style={styles.btxzpyhxm}>{
                    dbyb.map(item => (
                        <View style={styles.dbyb} key={item['flag']}>
                            <Text style={xzdzt == item['flag'] ? styles.dbybzt : styles.dbybzt2} onPress={() => { choosezt(item['flag']) }}>{item['name']}</Text>

                        </View>
                    ))
                }</View>
            </ImageBackground>

        </>
    )
}
const styles = StyleSheet.create({
    dbdh: {
        paddingTop: pxToDp(48),
        paddingBottom: pxToDp(8)
    },
    btxzpyh: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    btxzpyhxm: {
        display: "flex",
        flexDirection: 'row',
        marginTop: pxToDp(28),
        justifyContent: 'space-around'
    },
    title: {
        fontSize: pxToDp(38),
        color: Colors.white,
        textAlign: "center",




    },
    zj: {
        position: 'absolute',
        right: pxToDp(18),
        color: Colors.white,
        top: pxToDp(18)
    },
    dbyb: {
        color: Colors.white,
        // width: '50 %',
        textAlign: 'center',




    },

    dbybzt: {
        borderBottomColor: Colors.white,
        borderBottomWidth: pxToDp(3),
        textAlign: 'center',
        fontSize: pxToDp(25),
        color: Colors.white,
        paddingBottom: pxToDp(10)
    },
    dbybzt2: {

        textAlign: 'center',
        fontSize: pxToDp(25),
        color: 'rgba(255, 255, 255, 0.5)',
        paddingBottom: pxToDp(10)
    }

})
export default Gdsy