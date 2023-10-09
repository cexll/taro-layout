import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { CoverView, CoverImage, View } from '@tarojs/components';

import './index.scss';

export default class Index extends Component {
    state = {
        selected: 0,
        color: '#000000',
        selectedColor: '#DC143C',
        list: [
            {
                pagePath: '/pages/index/index',
                selectedIconPath: '../assets/images/tabbar_home_on.png',
                iconPath: '../assets/images/tabbar_home.png',
                text: '首页'
            },
            {
                pagePath: '/pages/cate/index',
                selectedIconPath: '../assets/images/tabbar_cate_on.png',
                iconPath: '../assets/images/tabbar_cate.png',
                text: '分类'
            },
            {
                pagePath: '/pages/cart/index',
                selectedIconPath: '../assets/images/tabbar_cart_on.png',
                iconPath: '../assets/images/tabbar_cart.png',
                text: '购物车'
            },
            {
                pagePath: '/pages/my/index',
                selectedIconPath: '../assets/images/tabbar_my_on.png',
                iconPath: '../assets/images/tabbar_my.png',
                text: '个人中心'
            }
        ]
    }

    switchTab(index, url) {
        this.setSelected(index);
        Taro.switchTab({ url });
    }

    setSelected(idx: number) {
        this.setState({
            selected: idx
        });
    }

    render() {
        const { list, selected, color, selectedColor } = this.state;

        return (
            <CoverView className="tab-bar" style={{ height: '55px' }}>
                <CoverView className="tab-bar-border" />
                {list.map((item, index) => {
                    return (
                        <CoverView key={index} className="tab-bar-item" onClick={this.switchTab.bind(this, index, item.pagePath)} >
                            <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} style={{ height: '25px', width: '25px' }} />
                            <CoverView style={{ color: selected === index ? selectedColor : color, fontSize: '14px' }}>{item.text}</CoverView>
                        </CoverView>
                    );
                })}
            </CoverView>
        );
    }
}
