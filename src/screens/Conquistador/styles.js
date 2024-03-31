import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

  },
  navButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "lightgray",
    color: "black",
    borderRadius: 5,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"

  },
  imageForeground: {
    width: "100%",
    height:"100%",
  },
  text: {
    color: "white",
    fontSize:20 ,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 10,
    marginTop: 20,
    width: "90%",
  },
  imagem_conquistador: {
    width: 700,
    height: 500,
  marginTop: 20,
  borderRadius: 10,
  },
  titulo:{
  marginTop: 20,

  },
  icons:{
    width: 50,
    height: 50,
    margin: 10,
   backgroundColor: "white",
   borderRadius: 10,  
  },
  containerIcons:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  }

});

export default styles;

