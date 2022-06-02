import * as React from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { View, ScrollView } from "react-native";
import { useState } from "react";

function DefaultLayout({children}) {
  const [toggle, setToggle] = useState(false);

  function updateToggle() {
    setToggle(!toggle);
    console.log(toggle);
  }
  return (
    <View style={{height: '100%', backgroundColor: 'red'}}>
      <Navbar updateToggle={updateToggle} />
      <Sidebar toggle={toggle} updateToggle={updateToggle} />
      {children}
    </View>
  );
}

export default DefaultLayout;
