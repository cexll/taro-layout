import React, { } from 'react';
import { ScrollView, View, Image } from "@tarojs/components";
import './index.scss';

const Index = () => {

    const onTouchStart = (e) => {
        console.log("console.log", e);
        // console.log("console.log onTouchStart", e.touches[0]);
    };


    return (
        <View className="map">
            <ScrollView
                className="map"
                scrollX
                scrollY
                bounces
                enhanced
                scrollWithAnimation
                showScrollbar={false}
                scrollAnchoring
                onTouchStart={onTouchStart}
                style={{
                    height: "100%",
                    position: "relative",
                    width: "100vw"
                }}
            >
                <View style={{ width: 200, height: 200 }}>
                    <Image
                        className="box-image"
                        src="https://yry-cdn.weicun.qq.com/admin/地图 4_20230911102244.png"
                        mode="aspectFit"
                        style={{
                            left: 0,
                            position: "absolute",
                            top: 0,
                            width: 200, height: 200
                        }}
                    />
                </View>
            </ScrollView>

        </View>
    );
};

export default Index;
