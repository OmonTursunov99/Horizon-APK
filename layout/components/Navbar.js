import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import LayoutStyles from "../../styles/layout-styles";

function Navbar({updateToggle}) {
  function handleToggle() {
    updateToggle()
  }
  return(
    <View style={LayoutStyles.navbar.wrapper}>
      <TouchableOpacity onPress={handleToggle}>
        <Image style={{width: 30, height: 30}} source={require('../../assets/images/menu.png')} />
      </TouchableOpacity>
      <Text style={LayoutStyles.navbar.title}>Horizon</Text>
      <View style={LayoutStyles.navbar.actions}>
        <TouchableOpacity style={LayoutStyles.navbar.button}>
          <Image style={{width: 30, height: 30}} source={require('../../assets/images/settings.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={LayoutStyles.navbar.button}>
          <Image style={{width: 30, height: 30}} source={require('../../assets/images/errors.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Navbar;
