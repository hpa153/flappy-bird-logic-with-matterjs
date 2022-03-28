import { Dimensions } from "react-native";

export const Constants = {
  MAX_WIDTH: Dimensions.get("screen").width,
  MAX_HEIGHT: Dimensions.get("screen").height,
  GAP_SIZE: 200,
  PIPE_WIDTH: 100,
};

export const Images = {
  bird: require("./assets/images/bird.png"),
  pileTop: require("./assets/images/pillar-top.png"),
  pileBottom: require("./assets/images/pillar-bottom.png"),
  background: require("./assets/images/background.png"),
}