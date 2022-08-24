import {Text, StyleSheet, View, Image, TouchableOpacity,SafeAreaView} from 'react-native';
import React, {Component} from 'react';


export default class Header extends Component {
  render() {
    return (
      <SafeAreaView style={{width: '100%', flexDirection: 'row',backgroundColor:'#4CE5B1'}}>
        <TouchableOpacity
         onPress={this.props.onClick}
          style={{
            width: '10%',
            height:40,
            borderRadius:5,
            alignItems:'center',
            justifyContent:'center',
            marginHorizontal:'3%',
            marginBottom:10,
            marginTop:10,
            backgroundColor:'#4CE5B1',
          }}>
          <Image
            style={{
              width: '100%',
              height: 25,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/back.png')}
          />
        </TouchableOpacity>
        <View
            style={{
              alignItems: 'flex-start',
              width: '100%',
              paddingHorizontal: '5%',
              justifyContent:'center',
            }}>
            <Text style={styles.viewText}>{this.props.txt}</Text>
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: '50%',
    height: 70,
    resizeMode: 'contain',
  },
  viewText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 25,
    lineHeight: 30,

  },
});