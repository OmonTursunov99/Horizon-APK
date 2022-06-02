import { StyleSheet } from "react-native";
import GlobalVars from "./global-vars";
const LayoutStyles = StyleSheet.create({
  navbar: {
    wrapper: {
      paddingHorizontal: GlobalVars.spacer,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: GlobalVars.blue,
    },
    title: {
      fontSize: 20,
      color: GlobalVars.white,
    },
    actions: {
      flexDirection: 'row',
    },
    button: {
      padding: 7,
    }
  },
  sidebar: {
    wrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      zIndex: 20,
      backgroundColor: GlobalVars.gray,
      flexDirection: 'column',
      transition: '500ms'

    },
    notActive: {
      position: 'absolute',
      top: 0,
      left: '-100%',
      bottom: 0,
      width: '100%',
      height: '100%',
      zIndex: 20,
      backgroundColor: GlobalVars.gray,
      flexDirection: 'column',
      transition: '500ms'
    },
    heading: {
      paddingHorizontal: GlobalVars.spacer,
      paddingVertical: 12,
      fontSize: 20,
      lineHeight: 20,
      color: GlobalVars.white,
      backgroundColor: GlobalVars.blue
    },
    items: {
      spacerTop: {
        marginTop: 'auto',
      },
      wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 9,
        backgroundColor: GlobalVars.white,
        borderBottomColor: GlobalVars.gray,
        borderBottomWidth: 1,
      },
      icon: {
        marginRight: 12,
        width: 40,
        height: 40,
      },
      title: {
        fontSize: 18,
        lineHeight: 18,
        fontWeight: '300',

      }
    }
  }
})

export default LayoutStyles;
