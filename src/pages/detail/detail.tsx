/*
 * @Author: 吴华彬
 * @Date: 2022-10-13 16:49:47
 * @LastEditTime: 2022-10-13 23:33:27
 * @LastEditors: 吴华彬
 * @Note:
 */
import { Component, PropsWithChildren } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import DetailBg from '../../static/detail_bg.jpeg'
import { AtSearchBar } from 'taro-ui'

import 'taro-ui/dist/style/components/button.scss' // 按需引入

export default class Detail extends Component<PropsWithChildren> {
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
        <Image src={DetailBg} style="position:absolute;top:0;width:100%;height:100%;" />
        <View style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' ,textAlign:'center'}}>
          <Text>
            Most dogs enjoy small pieces of cheese as treats. Just make sure your dog isn't lactose intolerant before
            feeding them cheese. If you do decide to give your dog cheese, feed them low fat, low sodium cheese like
            mozzarella or cottage cheese. Camembert, Brie, Blue Cheese, and all other moldy varieties as well as
            anything else enriched with cream should be off limits to your dog.
          </Text>
        </View>
      </View>
    )
  }
}
