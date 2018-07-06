const React = require("react-native");

const { StyleSheet } = React;
import { Button, 
  Container,
  Header,
  Title,
  Content,
  ListItem,
  Icon,
  Left,
  Right,
  Body,
  List,
  } from 'native-base';
export default {
  
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
    marginTop: 10
  },
  mb15: {
    marginBottom: 20
  },
  mt15: {
    marginTop: 15
  },
  mb20: {
    marginBottom: 20
  },
  iconButton: {
    color: "#007aff"
  },
  margin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFF"
  },
  mf: {
    flexGrow: 1,
    alignSelf: "center",
    alignItems: "center"
  },
  Searchbar: {
    backgroundColor: "#FFF",
    width : 500,
  },
  col: {
    backgroundColor:'white',
    width:'80%',
    alignItems: "center"
    
  },
  col1: {
    backgroundColor:'blue',
    width:'20%'
  },
  row: {
    paddingBottom: 5,
  },
 
  iconText: {
    fontSize: 12,
  },
  mbl15:{
    marginBottom : 20,
    backgroundColor: 'red',
    width: 80,
    height: 50
  },
  contentpenjualan:{ 
    backgroundColor: 'white', 
    padding:0, 
    opacity : 120 ,
  
  },
  mb: {
    marginBottom: 15
  },
  imageicon:{
    width: 24,
    height: 24
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  drawerImage:{
    height:190,
    width:280,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textmenu: {
    fontSize : 21,
    fontWeight : 'bold',
  },
  keranjang: {
    paddingBottom: 3

  },
  imageproduk: {
    width: 200,
    height: 200,
  },
  contentpicture: {
    flex : .5,
    flexDirection : 'row',
    justifyContent : 'center',
    borderBottomWidth : 1,
  },
  text: {
    fontSize: 18,
    paddingLeft : 5,
    margin : 0,
    padding : 0
  },
  textdetail: {
    fontSize : 18,
  },
  itembody: {
    borderColor : 'hidden', 
  },
  textleft : {
    alignSelf: 'flex-start',
    fontSize : 18,
    justifyContent : 'center',
    float : 'left'
  },
  textright: {
    alignSelf: 'flex-end',
    fontSize : 18,
    justifyContent : 'center',
    float : 'left'
  },
  pad : {
    paddingBottom : 15
  },
  riwayatitem: {
    marginTop : 0,
    marginBottom : 0,
    paddingBottom : 0,
    backgroundColor : 'transparent',
    paddingTop : 0,
  },
  headerback : {
    backgroundColor : 'pink'
  
  },

};
