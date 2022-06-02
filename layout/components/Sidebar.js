import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LayoutStyles from "../../styles/layout-styles";

function Sidebar({toggle, updateToggle}) {
  function handleToggle() {
    updateToggle()
  }
  return(
    <View style={ toggle ? LayoutStyles.sidebar.wrapper : LayoutStyles.sidebar.notActive}>
      <Text style={LayoutStyles.sidebar.heading} onPress={handleToggle}>Menu</Text>
      <TouchableOpacity style={LayoutStyles.sidebar.items.wrapper} onPress={handleToggle}>
        <Image style={LayoutStyles.sidebar.items.icon} source={require('../../assets/menu-icons/status.png')} />
        <Text style={LayoutStyles.sidebar.items.title}>Status</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LayoutStyles.sidebar.items.wrapper} onPress={handleToggle}>
        <Image style={LayoutStyles.sidebar.items.icon} source={require('../../assets/menu-icons/status.png')} />
        <Text style={LayoutStyles.sidebar.items.title}>Logs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LayoutStyles.sidebar.items.wrapper} onPress={handleToggle}>
        <Image style={LayoutStyles.sidebar.items.icon} source={require('../../assets/menu-icons/status.png')} />
        <Text style={LayoutStyles.sidebar.items.title}>DVIR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LayoutStyles.sidebar.items.wrapper} onPress={handleToggle}>
        <Image style={LayoutStyles.sidebar.items.icon} source={require('../../assets/menu-icons/status.png')} />
        <Text style={LayoutStyles.sidebar.items.title}>DOT Inspection</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LayoutStyles.sidebar.items.wrapper} onPress={handleToggle}>
        <Image style={LayoutStyles.sidebar.items.icon} source={require('../../assets/menu-icons/status.png')} />
        <Text style={LayoutStyles.sidebar.items.title}>Rules</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LayoutStyles.sidebar.items.wrapper} onPress={handleToggle}>
        <Image style={LayoutStyles.sidebar.items.icon} source={require('../../assets/menu-icons/status.png')} />
        <Text style={LayoutStyles.sidebar.items.title}>Co-driver</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LayoutStyles.sidebar.items.wrapper} onPress={handleToggle}>
        <Image style={LayoutStyles.sidebar.items.icon} source={require('../../assets/menu-icons/status.png')} />
        <Text style={LayoutStyles.sidebar.items.title}>Select Vehicle</Text>
      </TouchableOpacity>
      <View style={LayoutStyles.sidebar.items.spacerTop}></View>
      <TouchableOpacity style={LayoutStyles.sidebar.items.wrapper} onPress={handleToggle}>
        <Image style={LayoutStyles.sidebar.items.icon} source={require('../../assets/menu-icons/status.png')} />
        <Text style={LayoutStyles.sidebar.items.title}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LayoutStyles.sidebar.items.wrapper} onPress={handleToggle}>
        <Image style={LayoutStyles.sidebar.items.icon} source={require('../../assets/menu-icons/status.png')} />
        <Text style={LayoutStyles.sidebar.items.title}>Information Packet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LayoutStyles.sidebar.items.wrapper} onPress={handleToggle}>
        <Image style={LayoutStyles.sidebar.items.icon} source={require('../../assets/menu-icons/status.png')} />
        <Text style={LayoutStyles.sidebar.items.title}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Sidebar;
