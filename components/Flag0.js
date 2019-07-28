import React from 'react';
import { AppRegistry, asset, StyleSheet, Image, Text, View } from 'react-360';

export default class Flag0 extends React.Component {
    render() {
        const { flag } = styles;
        const { txt } = styles;
        return(
        <View style={target} > 
          <Text>button 1</Text>
          <Image  source={asset(this.props.image)} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    target: {
        height: 400,
        width: 600
    }
  
});
