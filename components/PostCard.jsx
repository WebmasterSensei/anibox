import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";
import React, { useRef, useState } from "react";
import theme from "../constants/theme";
import Avatar from "./Avatar";
import Icon from "../assets/icons";
import CommentSection from "../app/actionsheet/Comments";
import { hp, wp } from "../helpers/common";
import { Skeleton } from "moti/skeleton";

// import CommentDrawer from "../app/drawer/CommentDrawer";

const PostCard = ({
  item,
  currentUser,
  router,
  hasShadow = true,
  loadingI,
}) => {
  const shadowStyle = {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
  };

  const colorMode = "light";

  return (
    <View style={[styles.container, hasShadow && shadowStyle]}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Skeleton
            height={35}
            width={35}
            radius={"round"}
            colorMode={colorMode}
          >
            {loadingI ? null : (
              <Avatar
                size={hp(4.5)}
                src={require("../assets/images/cute.png")}
                rounded={theme.borderRadius.large}
              />
            )}
          </Skeleton>
          <View style={{ gap: 5 }}>
            <Skeleton colorMode={colorMode} height={17} width={"85%"}>
              {loadingI ? null : <Text style={styles.name}>{item.title} </Text>}
            </Skeleton>
            <Skeleton colorMode={colorMode} height={13} width={"50%"}>
              {loadingI ? null : (
                <Text style={styles.date}>{item.date_posted}</Text>
              )}
            </Skeleton>
          </View>
        </View>
        <Pressable>
          <Skeleton width={"25%"} height={12} colorMode={colorMode}>
            {loadingI ? null : (
              <Icon name="threedots" color="black" strokeWidth={1} />
            )}
          </Skeleton>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Skeleton colorMode={colorMode} width={"100%"} height={200}>
          {loadingI ? null : (
            <Image
              style={styles.image}
              source={require("../assets/images/sungjinwoo.jpg")}
            />
          )}
        </Skeleton>
      </View>
      <View style={styles.description}>
        <Skeleton colorMode={colorMode} height={17} width={"100%"}>
          {loadingI ? null : <Text>"{item.desc}"</Text>}
        </Skeleton>
      </View>

      <CommentSection/>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    borderCurve: "continous",
    // padding: 10,
    paddingVertical: 12,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderColor: theme.colors.gray,
    shadowColor: "#000",
  },
  header: {
    marginHorizontal: wp(1),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 30,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-start",
    gap: 6,
    padding: 5,
  },
  name: {
    fontWeight: theme.fonts.bold,
  },
  date: {
    fontSize: hp(1.5),
    marginTop: -4,
  },
  description: {
    marginHorizontal: wp(4),
    marginTop: 1,
    marginBottom: 5,
  },
  imageContainer: {
    marginTop: 5,
  },
  image: {
    width: "100%",
    marginBottom: 10,
  },
});
