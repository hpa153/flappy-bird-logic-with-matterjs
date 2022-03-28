import Matter from "matter-js";
import { Dimensions } from "react-native";

import Bird from "../components/Bird";
import Floor from "../components/Floor";
import Obstacle from "../components/Obstacle";
import { getPipeSizePosPair } from "../utils/random";
import { Images } from "../Constants";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default restart => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0.4;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.5);
  const pipeSizePosC = getPipeSizePosPair(windowWidth);

  return {
    physics: { engine, world },
    Bird: Bird(world, 'green', {x: 50, y: 200}, {height: 40, width: 40}),
    ObstacleTop1: Obstacle(world, 'ObstacleTop1', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size, {image: Images.pileTop}),
    ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size, { image: Images.pileBottom}),
    ObstacleTop2: Obstacle(world, 'ObstacleTop2', pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size, {image: Images.pileTop}),
    ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size, { image: Images.pileBottom}),
    ObstacleTop3: Obstacle(world, 'ObstacleTop3', pipeSizePosC.pipeTop.pos, pipeSizePosC.pipeTop.size, {image: Images.pileTop}),
    ObstacleBottom3: Obstacle(world, 'ObstacleBottom3', pipeSizePosC.pipeBottom.pos, pipeSizePosC.pipeBottom.size, { image: Images.pileBottom}),
    Floor: Floor(world, 'green', {x: windowWidth / 2, y: windowHeight}, {height: 50, width: windowWidth})
  }
}
