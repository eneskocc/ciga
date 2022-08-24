import { Text, View, ScrollView, Image, SafeAreaView ,TouchableOpacity} from "react-native";
import React, { PureComponent } from "react";
import * as $ from "../../redux/actions";
import { connect } from "react-redux";

class Home extends PureComponent {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(this.props.USER.length);
    return (
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {this.props.GET_USER_REQUEST_ERROR ? (
              <Text
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  marginTop: "50%",
                  fontSize: 20,
                }}
              >
                eneee
              </Text>
            ) : (
              this.props.USER.map((item) => (
                <TouchableOpacity
                  style={{
                    width: "45%",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={()=>this.props.navigation.navigate('Detail', {
                    data: item,
                  })}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: 100,
                      resizeMode: "contain",
                      marginHorizontal: 5,
                    }}
                    source={{ uri: item.image }}
                  />
                  <View style={{width:'100%',position:'relative',justifyContent:'center',flexDirection:'row',marginVertical:20}}>
                    <Text>{item.firstName} </Text>
                    <Text> {item.age}</Text>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { USER, GET_USER_REQUEST_ERROR } = state.default;
  return { USER, GET_USER_REQUEST_ERROR };
};

const mapDispatchToProps = (dispatch, props) => ({
  getUser: () => {
    dispatch({
      type: $.GET_USER,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
