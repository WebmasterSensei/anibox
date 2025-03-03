import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../constants/theme";
import Home from "./Home";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";
import HeartIcon from "./HeartIcon";
import PlusIcon from "./PlusIcon";
import ProfileIcon from "./ProfileIcon";
import ThreeDots from "./ThreeDots";
import Comments from "./Comments";
import ShareIcon from "./ShareIcon";
import HeartIconSolid from "./HeartIconSolid";
import SentIcon from "./SentIcon";
import LogoutIcon from "./Logout";

const icons = {
    home: Home,
    arrowLeft: ArrowLeft,
    heart: HeartIcon,
    plus: PlusIcon,
    profile: ProfileIcon,
    threedots: ThreeDots,
    comments: Comments,
    share: ShareIcon,
    solidheart: HeartIconSolid,
    sent: SentIcon,
    logout: LogoutIcon
}

const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];
  return (
  <IconComponent 
  height={props.size || 24} 
  width={props.size || 24} 
  strokeWidth={props.strokeWidth || 1.9} 
  color={theme.colors.light}
  {...props}
  />
);
};

export default Icon;

const styles = StyleSheet.create({});
