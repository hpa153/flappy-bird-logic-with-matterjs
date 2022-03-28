import Matter from "matter-js";
import { Image } from "react-native";

const Obstacle = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  return (
    <Image style={{
      position: 'absolute',
      left: xBody,
      top: yBody,
      width: widthBody,
      height: heightBody,
    }}
      resizeMode="stretch"
      source={props.extraOptions.image}
    />
  )
}

export default (world, label, pos, size, extraOptions) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label,
      isStatic: true,
    }
  )

  Matter.World.add(world, initialObstacle);

  return {
    body: initialObstacle,
    pos,
    extraOptions,
    renderer: <Obstacle />
  }
}
