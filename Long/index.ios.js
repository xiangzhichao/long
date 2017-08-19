/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image
} from 'react-native';
import State from './State';
import Wenzi from './Wenzi'
export default class Long extends Component {
    constructor(props){
        super(props);
        this.state=({
            _size:0
        })
    }
  render(){
      const size=this.state.size
    return (
        <View style={{padding:10}}>
            <View style={{alignItems:'center'}}>
                <Image
                    style={{width:100,height:100}}
                    source={require('./img/b.png')}
                ></Image>
            </View>
            <View style={{alignItems: 'center',justifyContent:'flex-end'}}>
                <Text style={{color:'red',fontSize:50}}>
                    欢迎
                </Text>
            </View>
            <Text
                style={{fontSize:30,marginTop:10,alignItems:'center'}}
                onPress={()=>{
                    this.setState({
                        _size:size
                    });
                }}
            >大小:{this.state._size}</Text>
            <State />
        </View>
    );
  }
}


AppRegistry.registerComponent('Long', () => Long);
