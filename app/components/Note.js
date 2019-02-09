import React, { Component } from "react";
import { CheckBox } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";


export default class Note extends Component {
  render() {

  
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>

        <CheckBox title={this.props.val.note} 
                  checked={true}
                  onPress={this.props.onChecked} />

        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}
        >
          <Text style={styles.noteDeleteText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: "relative",
    backgroundColor: "white",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  noteText: {
    color: '#6a11cb',
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63",
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    color: 'red',
    padding: 10,
    margin: 45,
    right: 2,

  },
  noteDeleteText: {
    color: "white",
    fontSize: 20
  }
});
