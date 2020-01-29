import React, { Component } from 'react';

import { View, WebView } from 'react-native';

export default class Browser extends Component{
  render(){
    return(
      <View style={{flex:1}}>
      <WebView
        source={{this.props.navigation.state.params.url}} 
        style={{flex:1}}
        />
      </View>
    );
  }
}