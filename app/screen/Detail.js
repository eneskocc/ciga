import { Text, View, SafeAreaView, Image } from "react-native";
import React, { Component } from "react";
import Header from "../component/Header";

export class Detail extends Component {
  render() {
    const data = this.props.route.params.data;
    return (
      <View>
        <Header
          onClick={() => this.props.navigation.goBack()}
          txt={data.firstName}
        />
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image
            style={{
              width: "100%",
              height: 100,
              resizeMode: "contain",
              marginHorizontal: 5,
            }}
            source={{ uri: data.image }}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 20,
            }}
          >
            <Text>{data.firstName} </Text>
            <Text>{data.lastName}</Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 5,
            }}
          >
            <Text>age {data.age} </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 5,
            }}
          >
            <Text>company {data.company.name} </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 5,
            }}
          >
            <Text>company address {data.company.address.address} </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 5,
            }}
          >
            <Text>company postal Code {data.company.address.postalCode} </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 5,
            }}
          >
            <Text>company state {data.company.address.state} </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Detail;
