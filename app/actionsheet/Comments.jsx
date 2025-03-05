import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { hp, wp } from "../../helpers/common";
import Icon from "../../assets/icons";
import Avatar from "../../components/Avatar";
import theme from "../../constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const CommentSection = ({ loadingI }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([
    { id: "1", text: "This is the first comment!" },
    { id: "2", text: "Great post, thanks for sharing!" },
    { id: "3", text: "Great post, thanks for sharing!" },
    { id: "4", text: "Great post, thanks for sharing!" },
  ]);

  const handleAddComment = () => {
    if (newComment.trim() === "") return; // Don't add empty comments
    const comment = {
      id: (comments.length + 1).toString(),
      text: newComment,
    };
    setComments([...comments, comment]);
    setNewComment(""); // Clear the input field
  };

  const [newComment, setNewComment] = useState("");

  const toggleCommentSection = () => {
    setIsVisible(!isVisible);
  };

  const handleCommentSubmit = () => {
    console.log("Comment submitted:", comment);
    setComment("");
    toggleCommentSection();
  };
  const colorMode = "light";

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View>
          <FontAwesome5 name="bookmark" size={20} color="black" />
        </View>
        <View style={styles.icons}>
          <Text style={styles.likes}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={24}
              color="black"
            />
          </Text>
          <TouchableOpacity onPress={toggleCommentSection}>
            <FontAwesome5 name="comment" size={20} color="black" />
          </TouchableOpacity>
          <FontAwesome6 name="share-from-square" size={20} color="black" />
        </View>
      </View>

      <Modal
        isVisible={isVisible}
        style={styles.modal}
        backdropOpacity={0.7}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.commentContainer}
        >
          <View style={styles.commentHeader}>
            <TouchableOpacity onPress={toggleCommentSection}>
              <Text style={styles.closeButton}>
                <MaterialIcons name="arrow-back-ios" size={20} color="black" />
              </Text>
            </TouchableOpacity>
            <Text style={styles.commentHeaderText}>Comments</Text>
            <Text style={styles.commentHeaderText}>
              <Entypo name="dots-three-horizontal" size={20} color="black" />
            </Text>
          </View>

          {/* Comment Input */}
          <View style={styles.commentAll}>
            <FlatList
              showsVerticalScrollIndicator={false} // Hides vertical scrollbar
              showsHorizontalScrollIndicator={false} // Hides horizontal scrollbar
              style={styles.commentItem}
              data={comments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.comment}>
                  <View style={styles.header}>
                    <View style={styles.userInfo}>
                      <Avatar
                        size={hp(4.5)}
                        src={require("../../assets/images/cute.png")}
                        rounded={theme.borderRadius.large}
                      />
                      <View style={{ gap: 5 }}>
                        <Text style={styles.name}>Kent Jey Abarquez</Text>
                        <Text style={styles.date}>2025-20-10</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.description}>
                    <Text>
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nostrum tempore laudantium non quos, reiciendis autem
                      aliquid unde veniam alias sint quasi eos, ab, itaque
                      natus? Quod eaque laborum voluptatem earum?"
                    </Text>
                  </View>
                  <View style={styles.footer}>
                    <View style={styles.icon2}>
                      <TouchableOpacity>
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Reply</Text>
                      </TouchableOpacity>
                      <Text style={styles.likes}>
                        <MaterialCommunityIcons
                          name="heart-outline"
                          size={22}
                          color="black"
                        />
                      </Text>
                    </View>
                  </View>
                </View>
              )}
              contentContainerStyle={styles.commentsList}
            />
          </View>
          <View style={styles.containerfooter}>
            <TextInput
              style={styles.input}
              placeholder="Write a comment..."
              value={comment}
              onChangeText={setComment}
              multiline
            />
            <TouchableOpacity style={styles.sendButton}>
              <Text>
                <Ionicons name="send-outline" size={24} color="#576F72" />
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerfooter: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderTopColor: "#ccc",
  },
  commentAll: {
    flex: 1,
  },
  sendButton: {
    borderRadius: 10,
    // backgroundColor: '#000',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderWidth: 1,
    // borderColor: '#ccc',

    borderColor: "#EEE",
  },
  container: {
    flex: 1,
    // width: ,
    marginTop: 20,
    marginHorizontal: wp(1),
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  commentContainer: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: 650,
  },
  commentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  commentHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  comment: {
    // backgroundColor: '#000',
    flex: 1,
  },
  closeButton: {
    color: "#007BFF",
    fontSize: 16,
  },

  submitButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 16,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp(2),
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    marginBottom: 5,
  },
  icon2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  commentsList: {
    paddingBottom: 20,
  },
  commentItem: {
    backgroundColor: "#FFF",
    padding: 1,
    marginBottom: 8,
    borderColor: "#EEE",
  },
  commentText: {
    fontSize: 14,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    // borderColor: '#ccc',

    borderColor: "#EEE",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    // maxHeight: 120,
  },

  addButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  header: {
    // marginHorizontal: wp(3),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    // padding: 5,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-start",
    gap: 6,
    padding: 5,
  },
  description: {
    marginHorizontal: wp(2),
    marginTop: 3,
    marginBottom: 10,
  },

  name: {
    fontWeight: theme.fonts.bold,
  },
  date: {
    fontSize: hp(1.5),
    marginTop: -4,
  },
});

export default CommentSection;
