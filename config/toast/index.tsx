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
      style={{
        borderLeftColor: "green",
        backgroundColor: "#1E1E1E",
        width: "95%",
        padding: 16,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        flexWrap: "wrap", // Permite que o texto quebre em várias linhas
      }}
      text2Style={{
        fontSize: 16,
        color: "#fff",
        flexWrap: "wrap", // Permite que o texto quebre em várias linhas
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
        height: "auto", // Permite que a altura se ajuste ao conteúdo
        width: "95%",
        padding: 16,
      }}
      text1Style={{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        flexWrap: "wrap",
      }}
      text2Style={{
        fontSize: 16,
        color: "#fff",
        flexWrap: "wrap",
      }}
      renderLeadingIcon={() => (
        <MaterialIcons name="error" size={24} color="red" />
      )}
    />
  ),
  info: (props: ToastConfigParams<any>) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: "blue",
        backgroundColor: "#1E1E1E",
        width: "95%",
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        flexWrap: "wrap",
      }}
      text2Style={{
        fontSize: 16,
        color: "#fff",
        flexWrap: "wrap",
      }}
      renderLeadingIcon={() => (
        <MaterialIcons name="info" size={24} color="blue" />
      )}
    />
  ),
};

export default toastConfig;
