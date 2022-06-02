import { StyleSheet } from "react-native";
import GlobalVars from "./global-vars";

const AuthStyles = StyleSheet.create({
  login: {
    heading: {
      wrapper: {
        paddingVertical: 30,
        backgroundColor: GlobalVars.blue,
        paddingHorizontal: GlobalVars.spacer,
      },
      title: {
        color: GlobalVars.white,
        fontSize: 22,
      },
      description: {
        color: GlobalVars.white,
        fontSize: 30,
      },
    },
    form: {
      wrapper: {
        padding: GlobalVars.spacer,
      },
      actions: {
        marginBottom: GlobalVars.spacer
      },
      label: {
        fontSize: 14,
        color: GlobalVars.blue
      },
      input: {
        borderBottomWidth: 1,
        borderBottomColor: GlobalVars.red,
        fontSize: 20,
      },
      inputSuccess: {
        borderBottomWidth: 1,
        borderBottomColor: GlobalVars.green,
        fontSize: 20,
      },
      button: {
        width: '100%',
        paddingVertical: 10,
        backgroundColor: GlobalVars.blue,
        borderRadius: 16,
        marginBottom: GlobalVars.spacer,
      },
      buttonTitle: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 18,
        color: GlobalVars.white,
      },
      link: {
        marginTop: GlobalVars.spacer,
        fontSize: 18,
        textAlign: 'center',
        color: GlobalVars.blue,
      }
    }
  }
})

export default AuthStyles;
