import Matter from "matter-js";
import { Image } from "react-native";

import { Images } from "../Constants";

const Bird = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  return (
    <Image style={{
      position: 'absolute',
      left: xBody,
      top: yBody,
      width: widthBody,
      height: heightBody,
    }}
      resizeMode="stretch"
      source={Images.bird}
    />
  )
}

export default (world, color, pos, size) => {
  const initialBird = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: 'Bird',
      frictionAir: 0,
      angularVelocity: 0,
      mass: 1,
      friction: 0,
      frictionStatic: 0,
    }
  )

  Matter.World.add(world, initialBird);

  return {
    body: initialBird,
    color,
    pos,
    renderer: <Bird />
  }
}
