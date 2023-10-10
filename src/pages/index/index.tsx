import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import type CustomTabBar from '../../custom-tab-bar';
import { View } from "@tarojs/components";
import { Calculator } from "@components";

export default class Index extends Component {
    // pageCtx = Taro.getCurrentInstance().page
    // // systemInfo = Taro.getSystemInfoSync()

    // componentDidShow() {
    //     const tabbar = Taro.getTabBar<CustomTabBar>(this.pageCtx);
    //     tabbar?.setSelected(0);
    // }

    render() {
        return (
            <Calculator />
        );
    }
}
