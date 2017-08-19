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
import State from './State'
import index from './index.ios'
export default class Long extends Component {
    constructor(props){
        super(props);
        this.state={
            size:80
        }
    }

    render() {
        return (
            <View>
                <Text
                    style={{fontSize: 20, marginTop: 30}}
                    onPress={() => {
                        this.setState({
                            size: this.state.size + 20
                        })
                    }}
                >变大</Text>
                <Text
                    style={{fontSize: 20, marginTop: 30}}
                    onPress={() => {
                        this.setState({
                            size: this.state.size - 20
                        })
                    }}
                >变小</Text>
                <Image
                    style={{width: this.state.size, height: this.state.size}}
                    source={require('./img/a.png')}
                />
        </View>
        );
    }
}



