import { View, Text, Image } from '@tarojs/components'
import { Component } from '@tarojs/taro'
import bookPng from '../../asset/images/book.png'
import draftPng from '../../asset/images/draft.png'

import eyePng from '../../asset/images/eye.png'
import livePng from '../../asset/images/live.png'
import recentPng from '../../asset/images/recent.png'
import starPng from '../../asset/images/star.png'
import zhiPng from '../../asset/images/zhi.png'
import './more.scss'

export default class More extends Component {
  config = {
    navigationBarTitleText: '我的'
  }

  render () {
    return (
      <View className='more'>
        <View className='user flex-wrp'>
          <View className='avatar flex-item'>
            <Image className='userinfo-avatar' src='https://image.ibb.co/nKV5Cy/default_avatar.jpg' backgroundSize='cover'></Image>
          </View>
          <View className='user-info flex-item'>
            <Text className='userinfo-nickname'>阿集</Text>
            <Text className='edit'>查看或编辑个人主页</Text>
          </View>
        </View>
        <View className='my'>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item'>
              <Image class='myitem-img' src={eyePng}></Image>
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的关注</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item'>
              <Image class='myitem-img' src={starPng}></Image>
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的收藏</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item'>
              <Image class='myitem-img' src={draftPng}></Image>
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的草稿</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item'>
              <Image class='myitem-img' src={recentPng}></Image>
            </View>
            <View className='myitem-name flex-item'>
              <Text>最近浏览</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item'>
              <Image class='myitem-img' src={bookPng}></Image>
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的书架</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item'>
              <Image class='myitem-img' src={livePng}></Image>
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的 Live</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item'>
              <Image class='myitem-img' src={zhiPng}></Image>
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的值乎</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

