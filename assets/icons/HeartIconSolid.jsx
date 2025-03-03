import React from "react";
import Svg, { Path } from "react-native-svg";

const HeartIconSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 20"
    width={25}
    height={25}
    fill={props.color || "#FF0000"} // Default red color
    {...props}
  >
    <Path d="M12 21c-.58 0-1.16-.2-1.65-.6C5.4 16.7 2 13.28 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C13.09 4.81 14.76 4 16.5 4 19.58 4 22 6.42 22 9.5c0 3.78-3.4 7.2-8.35 10.9-.49.4-1.07.6-1.65.6z" />
  </Svg>
);

export default HeartIconSolid;