import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Button, FlatList, ScrollView, Image} from 'react-native';

const styles = StyleSheet.create({
    button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state= {
        current: ""
    }

    this._onChangeText = this._onChangeText.bind(this);
    this._addTodo = this._addTodo.bind(this);
  }

  _onChangeText = (text) => {
      this.setState({current : text})
  }

  _addTodo = () => {
      if(this.state.current !== undefined && this.state.current !== ""){
        this.props.addTodo(this.state.current);
        this.setState({current : ""})
      }
  }

  _deleteTodo = (id) => {
    this.props.deleteTodo(id);
  }

  render() {
    const { todos, add } = this.props;

    return (
        <ScrollView>
          <View style={{flex: 1, marginTop: 45,    flexDirection: 'column', textAlign:"center", justifyContent: 'center'}}>
              <Text style={{fontSize:40, textAlign:"center"}}>myTodoApp</Text>
              <View>
                <TextInput
                  style={{height: 30, textAlign: 'center', borderColor: 'gray', borderWidth: 1, marginTop:45}}
                  onChangeText={(text) => this._onChangeText(text)}
                  value={this.state.current}
                />
              </View>
              <Button onPress={() => this._addTodo()} title="Add this todo" color="#841584" accessibilityLabel="Add this todo"/>
                <FlatList
                data={todos}
                renderItem={({item}) => 
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text>{item.text}</Text>
                  <TouchableOpacity onPress={(text) => this._deleteTodo(item.id)}>
                    <Image style={{height : 20, width: 20}} source={{uri: "https://cdn0.iconfinder.com/data/icons/typicons-2/24/times-512.png"}} />
                  </TouchableOpacity>
                </View>}
              />

          </View>
        </ScrollView>
    );
}
}