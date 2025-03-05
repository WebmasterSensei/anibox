import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  RefreshControl,
  InteractionManager,
} from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import theme from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import Icon from "../../assets/icons";
import PostCard from "../../components/PostCard";
import axios from "react-native-axios/lib/axios";
import { useRouter } from "expo-router";
import Loading from "../../components/LoadingScreen";

const Dashboard = () => {
  const router = useRouter();
  const url = "http://172.16.42.143:8900/posts";
  const [post, setPost] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true); // Start loading
    try {
      const res = await axios.get(url);
      const allPosts = res.data.posts;

      const randomPosts = allPosts
        .sort(() => Math.random() - 0.5) // Shuffle array
        .slice(0, 10); // Take first 10 elements

      setPost(randomPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchPosts();
    setRefreshing(false);
  };
  
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>AniBox</Text>
          <View style={styles.icon}>
            <Pressable>
              <Icon name="heart" strokeWidth={2} color="black"></Icon>
            </Pressable>
            <Pressable>
              <Icon name="plus" strokeWidth={2} color="black"></Icon>
            </Pressable>
            <Pressable onPress={() => router.push("../profile/profileview")}>
              <Icon name="profile" strokeWidth={2} color="black"></Icon>
            </Pressable>
            <Pressable onPress={() => router.push("../welcome")}>
              <Icon name="logout" strokeWidth={2} color="black"></Icon>
            </Pressable>
          </View>
        </View>
        {loading}
        <View style={styles.listStyle}>
          {!loading ? (
            <FlatList
              showsVerticalScrollIndicator={false} // Hides vertical scrollbar
              showsHorizontalScrollIndicator={false} // Hides horizontal scrollbar
              data={post} // Pass the data array
              keyExtractor={(item) => item.id} // Unique key for each item
              renderItem={({ item }) => <PostCard item={item} />} // Render each item
              contentContainerStyle={styles.flatListContent} // Optional styling for the list container
              refreshControl={
                <RefreshControl
                  refreshing={refreshing} // Controlled by the `refreshing` state
                  onRefresh={onRefresh} // Function to call when refreshing
                  colors={["#FF0000", "#00FF00", "#0000FF"]} // Customize the loading spinner colors (Android only)
                  tintColor="#FF0000" // Customize the loading spinner color (iOS only)
                />
              }
            />
          ) : (
            <Loading />
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp(4),
    marginBottom: -10,
  },
  flatListContent: {
    paddingBottom: 20, // Add padding at the bottom if needed
  },
  title: {
    color: theme.colors.dark,
    fontSize: hp(3.2),
    fontWeight: theme.fonts.bold,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },
  listStyle: {
    paddingTop: 20,
    // paddingHorizontal: wp(4),
  },
  skeletonContainer: { marginTop: 10 },
  skeletonItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  skeletonAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ddd",
  },
  skeletonTextContainer: { marginLeft: 10 },
  skeletonText: {
    width: 150,
    height: 20,
    backgroundColor: "#ddd",
    marginBottom: 5,
  },
  skeletonTextSmall: { width: 100, height: 15, backgroundColor: "#ddd" },
  postItem: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    marginVertical: 5,
    borderRadius: 5,
  },
  postText: { fontSize: 16, fontWeight: "bold" },
});
