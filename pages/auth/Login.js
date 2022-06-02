import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import AuthStyles from "../../styles/auth-styles";

function Login({navigation}) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return(
    <ScrollView>
      <View style={AuthStyles.login.heading.wrapper}>
        <Text style={AuthStyles.login.heading.title}>World Trucking</Text>
        <Text style={AuthStyles.login.heading.description}>Horizon</Text>
      </View>
      <View style={AuthStyles.login.form.wrapper}>
        <View style={AuthStyles.login.form.actions}>
          <Text style={AuthStyles.login.form.label}>Username</Text>
          <TextInput style={AuthStyles.login.form.input} value={username} onChangeText={value => setUserName(value)} placeholder="Your username"/>
        </View>
        <View style={AuthStyles.login.form.actions}>
          <Text style={AuthStyles.login.form.label}>Password</Text>
          <TextInput style={AuthStyles.login.form.input} value={password} onChangeText={value => setPassword(value)}  placeholder="Your Password"/>
        </View>
        <TouchableOpacity style={AuthStyles.login.form.button} onPress={() => {
          navigation.navigate('Home')
        }}>
          <Text style={AuthStyles.login.form.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={AuthStyles.login.form.link}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Login;

