import {
  BaseToast,
  ErrorToast,
  ToastConfigParams,
} from "react-native-toast-message";
import { MaterialIcons } from "@expo/vector-icons";

const toastConfig = {
  success: (props: ToastConfigParams<any>) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green", backgroundColor: "#1E1E1E" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
      }}
      text2Style={{
        fontSize: 16,
        color: "#fff",
      }}
      renderLeadingIcon={() => (
        <MaterialIcons name="check-circle" size={24} color="green" />
      )}
    />
  ),
  error: (props: ToastConfigParams<any>) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: "red",
        backgroundColor: "#1E1E1E",
        padding: 4,
        height: 64,
        width: "80%",
      }}
      text1Style={{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
      }}
      text2Style={{
        fontSize: 16,
        color: "#fff",
      }}
      renderLeadingIcon={() => (
        <MaterialIcons name="error" size={24} color="red" />
      )}
    />
  ),
  info: (props: ToastConfigParams<any>) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "blue", backgroundColor: "#1E1E1E" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
      }}
      text2Style={{
        fontSize: 16,
        color: "#fff",
      }}
      renderLeadingIcon={() => (
        <MaterialIcons name="info" size={24} color="blue" />
      )}
    />
  ),
};

export default toastConfig;
