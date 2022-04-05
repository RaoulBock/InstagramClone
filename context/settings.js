import { AntDesign, Entypo } from "react-native-vector-icons";

export const APP_PAGES = {
  INSTAGRAM: {
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
    HOME: "HOME",
    PROFILE: "PROFILE"
  }
};

export const APP_ICONS = {
  CAMERA: (
    <AntDesign
      name="camerao"
      style={{
        fontSize: 28,
        color: "#000"
      }}
    />
  ),
  INBOX: (
    <AntDesign
      name="inbox"
      style={{
        fontSize: 28,
        color: "#000"
      }}
    />
  ),
  LEFTARROW: (
    <AntDesign
      name="left"
      style={{
        fontSize: 28,
        color: "#000"
      }}
    />
  ),
  VERTICALDOTS: (
    <Entypo
      name="dots-three-vertical"
      style={{
        fontSize: 28,
        color: "#000"
      }}
    />
  )
};
