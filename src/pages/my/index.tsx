import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';

import type CustomTabBar from '../../custom-tab-bar';

export default class Index extends Component {
    // pageCtx = Taro.getCurrentInstance().page

    // componentDidShow() {
    //     const tabbar = Taro.getTabBar<CustomTabBar>(this.pageCtx);
    //     tabbar?.setSelected(3);
    // }

    render() {
        return (
            // eslint-disable-next-line react/react-in-jsx-scope
            <View className="index">
                <Text>我是个人中心</Text>
            </View>
        );
    }
}
