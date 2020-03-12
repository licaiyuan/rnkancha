import React, { Component, useState } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Animated
} from 'react-native';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const { width, height } = Dimensions.get('window');

// export default class ContentList extends Component {
const ContentList = (props) => {

    const [data, setdata] = useState([{ key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4' },
    { key: '5' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '10' },])
    const [refreshing, setrefreshing] = useState(false)


    /*row*/
    const renderItem = (item) => {
        return (
            <View>
                <Text style={{
                    height: 44,
                    lineHeight: 44,
                    width: (width - 10 * 4) / 3,
                    marginLeft: 10,
                    backgroundColor: 'blue',
                    color: 'white',
                    textAlign: 'center'
                }}
                >
                    {item.key}
                </Text>
            </View>
        )
    }
    /*分割线*/
    const separatorComponent = () => {
        return <View style={{ height: 1, backgroundColor: 'red' }} />
    }

    /*底部组件*/
    const listFooterComponent = () => {
        return data.length !== 0 ? <View>
            <Text style={{ alignItems: 'center', textAlign: 'center' }}>我是底部组件</Text>
        </View> : null;
    }

    /*头部组件*/
    const listHeaderComponent = () => {
        return data.length !== 0 ? <View>
            <Text style={{ alignItems: 'center', textAlign: 'center' }}>我是头部组件</Text>
        </View> : null;
    }

    /*没有数据时显示的组件*/
    const listEmptyComponent = () => {
        return <View style={{ backgroundColor: 'red', flex: 1, height: height }}>
            <Text style={{
                alignItems: 'center',
                textAlign: 'center',
                lineHeight: height,
                color: 'white'
            }}
            >
                暂时没有数据,先等2秒
            </Text>
        </View>
    }

    /*下拉刷新*/
    const refresh = () => {

        setdata([{ key: '你好' }, { key: '再见' }])
        setrefreshing(true)
        setTimeout(() => {

            setrefreshing(false)
        }, 2000);

    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList style={{ marginTop: 20 }}
                // ref="flatList"
                // extraData={this.state}
                getItemLayout={(data, index) =>
                    // 90 是被渲染 item 的高度 ITEM_HEIGHT。
                    ({ length: 90, offset: 90 * index, index })
                }
                keyExtractor={(item, index) => String(index)}
                data={data} // 数据
                renderItem={({ item }) => renderItem(item)} // row
                ItemSeparatorComponent={separatorComponent} // 分割线
                horizontal={false} // 水平还是垂直
                ListFooterComponent={listFooterComponent} // 底部组件
                ListHeaderComponent={listHeaderComponent} // 头部组件
                ListEmptyComponent={listEmptyComponent} // 没有数据时显示的界面
                refreshing={refreshing} // 是否刷新 ，自带刷新控件
                onRefresh={() => {
                    refresh();
                }} // 刷新方法,写了此方法，下拉才会出现  刷新控件，使用此方法必须写 refreshing
                numColumns={3} // 指定多少列  等于 1 的时候，不能写 columnWrapperStyle
                columnWrapperStyle={{ borderWidth: 2, borderColor: 'black' }} // 一整行的row设置样式
            />

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
export default ContentList
