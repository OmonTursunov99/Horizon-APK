import React from 'react';
import { Button, Text, View } from "react-native";
import DefaultLayout from "../layout/default";

function HomeScreen({ navigation }) {
  return (
    <DefaultLayout>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </DefaultLayout>
  );
}

export default HomeScreen;
