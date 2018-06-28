const React = require("react-native");

const { StyleSheet } = React;

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
          // paddingHorizontal: 5,
          backgroundColor:'white',
          width:'80%'
      },
    col1: {
      // paddingHorizontal: 1,
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
        opacity : 120 
      },
  imageicon:{
      width: 24,
      height: 24
  },
  container: {
    flex: 1,
    justifyContent: 'center',
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
};
