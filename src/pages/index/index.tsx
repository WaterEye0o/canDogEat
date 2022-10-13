/*
 * @Author: 吴华彬
 * @Date: 2022-10-13 16:49:47
 * @LastEditTime: 2022-10-13 23:03:49
 * @LastEditors: 吴华彬
 * @Note:
 */
import { Component, PropsWithChildren } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import HomeBg from '../../static/home_bg.jpeg'
import { AtSearchBar } from 'taro-ui'

import 'taro-ui/dist/style/components/button.scss' // 按需引入
import './index.scss'
import Taro from '@tarojs/taro'

export default class Index extends Component<PropsWithChildren> {
  state = {
    value: ''
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onChange() {}

  render() {
    return (
      <View className="index">
        <Image src={HomeBg} style="position:absolute;top:0;width:100%;height:100%;filter:blur(1px)" />
        <View onClick={()=>{
          Taro.navigateTo({
            url: '/pages/detail/detail'
          })
        }} style="position:absolute;top:40%;width:90%;height:45px;background-color:#fff;box-shadow: 0px 5px 50px #999;margin:0 5%;display:flex;align-items:center;">
          <View style={{flex:1}}>
          </View>
          <View style={{backgroundColor:'#5f5f54',width:60,height:30,marginRight:5,alignItems:'center',justifyContent:'center',display:'flex'}}>
          <Text style="color:#fff;text-align:center;font-size:12px">搜 索</Text>
          </View>
        </View>
        
      </View>
    )
  }
}
