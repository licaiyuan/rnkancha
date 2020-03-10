/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import pxToDp from './zsy'
import md5 from 'js-md5';
// import LinearGradient from 'react-native-linear-gradient'
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
import imgarr from './imgarr'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { getqq, postqq } from './serve'
const App: () => React$Node = () => {
  useEffect(() => {
    console.log('zxczx')
  }, [])
  const [srkzsj, setsrkzsj] = useState([{ placrhoder: '请输入账号', value: 'zh', icon: 'zhtb' }, { placrhoder: '请输入密码', value: 'mm', icon: 'mmtb' }])
  const login = async () => {
    let { data: { content } } = await postqq({ password: md5(zhmmdata.mm), username: zhmmdata['zh'] }, 'login')
    console.log(content)
  }
  const [zhmmdata, setzhmmdata] = useState({ zh: '', mm: '' })
  const onChangeText = (text, val) => {

    let data = Object.assign({}, zhmmdata, { [val]: text })

    setzhmmdata(data)
    console.log(text)
    console.log(val)
    console.log(zhmmdata)
  }
  return (
    <>
      <StatusBar barStyle="light-content" />

      <Image
        style={{ width: '100%', height: pxToDp(400) }}
        source={require('./img/loginbg.png')}
      />
      <Text style={styles.xckcbt}>现场勘察管理</Text>
      <View style={styles.srkz}>
        <Text style={{ fontSize: pxToDp(28) }}>登录</Text>
        {
          srkzsj.map((item, index) => (
            <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderColor: '#efeff4', borderWidth: 1, borderRadius: 10, paddingLeft: pxToDp(12) }}>
              <Image

                style={{ width: pxToDp(33), height: pxToDp(33) }}
                source={imgarr[item.icon]}

              />
              <TextInput

                style={{ height: 40, width: pxToDp(350) }}
                onChangeText={text => onChangeText(text, item.value)}
                value={zhmmdata[item.value]}
              />
            </View>
          ))
        }
        {/* <LinearGradient colors={['#9f678c', '#718697', '#2b4963']} > */}
        <View style={styles.dlan}>
          <TouchableOpacity
            onPress={login}
          >
            <Text style={{ textAlign: 'center', color: Colors.white }}>登录</Text>
          </TouchableOpacity>
        </View>
        {/* </LinearGradient> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  xckcbt: {
    fontSize: pxToDp(40),
    color: Colors.white,
    position: 'absolute',
    // top: pxToDp(30),
    marginTop: pxToDp(120),
    marginLeft: pxToDp(170),
    zIndex: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: pxToDp(10)


  },
  srkz: {
    width: pxToDp(500),
    flex: 1,
    flexDirection: 'column',
    marginLeft: pxToDp(80),
    position: 'absolute',
    top: pxToDp(320),
    backgroundColor: Colors.white,
    padding: pxToDp(20),
    borderRadius: pxToDp(20),
    justifyContent: 'space-between',
    height: pxToDp(330)
  },
  dlan: {

    width: pxToDp(450),
    height: 40,
    borderRadius: 20,
    backgroundColor: '#006569',
    justifyContent: 'center',
    overflow: 'hidden',



  }

});

export default App;
