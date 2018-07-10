import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Button,
  Icon,
  Item,
  Input,
  Content,
  Text
} from "native-base";


class Searchbar extends Component {
  render() {
    return (
      <Container style={styles.containersearch}>
        <Header searchBar rounded>
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );r
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'papayawhip',
    width : '80%'
  },
});

export default Searchbar;