import { AntDesign, Entypo } from "react-native-vector-icons";

export const APP_PAGES = {
  INSTAGRAM: {
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
    HOME: "HOME",
    PROFILE: "PROFILE",
    SEARCH: "SEARCH",
    LIKEDSECTION: "LIKEDSECTION"
  }
};

export const APP_ICONS = {
  CAMERA: (
    <AntDesign
      name="camerao"
      style={{
        fontSize: 28,
        color: "#0984e3"
      }}
    />
  ),
  INBOX: (
    <AntDesign
      name="inbox"
      style={{
        fontSize: 28,
        color: "#0984e3"
      }}
    />
  ),
  LEFTARROW: (
    <AntDesign
      name="left"
      style={{
        fontSize: 28,
        color: "#0984e3"
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
  ),
  HOME: (
    <AntDesign
      name="home"
      style={{
        fontSize: 28,
        color: "#000"
      }}
    />
  ),
  SEARCH: (
    <AntDesign
      name="search1"
      style={{
        fontSize: 28,
        color: "#000"
      }}
    />
  ),
  HEART: (
    <Entypo
      name="heart-outlined"
      style={{
        fontSize: 28,
        color: "#000"
      }}
    />
  ),
  DEFAULTPROFILEPICTURE: (
    <Entypo
      name="emoji-happy"
      style={{
        fontSize: 28,
        color: "#000"
      }}
    />
  )
};

export const users = [
  {
    id: "1",
    username: "Raoul Bock",
    story: [
      "username ",
      require("Instagram_logo.svg-removebg-preview.png"),
      "dateUploaded"
    ],
    image: "require(Instagram_logo.svg-removebg-preview.png)"
  },
  {
    id: "2",
    username: "Raoul Bock",
    story: [
      "username ",
      require("Instagram_logo.svg-removebg-preview.png"),
      "dateUploaded"
    ]
  },
  {
    id: "3",
    username: "Raoul Bock",
    story: [
      "username ",
      require("Instagram_logo.svg-removebg-preview.png"),
      "dateUploaded"
    ]
  }
];
