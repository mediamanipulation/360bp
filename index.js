import React from 'react';
import { AppRegistry, asset, StyleSheet, View, Image } from 'react-360';
import Flag0 from './components/Flag0';
import Flag1 from './components/Flag1';
import Flag2 from './components/Flag2';
import Flag3 from './components/Flag3';

export default class travelVR extends React.Component {
    render() {
        const { mainView } = styles;

        return <View style={mainView} />;
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: 4680,
        height: 600,
        opacity: 0.3,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

AppRegistry.registerComponent('travelVR', () => travelVR);
AppRegistry.registerComponent('Flag0', () => Flag0);
AppRegistry.registerComponent('Flag1', () => Flag1);
AppRegistry.registerComponent('Flag2', () => Flag2);
AppRegistry.registerComponent('Flag3', () => Flag3);
