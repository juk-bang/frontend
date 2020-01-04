//axios import
import axios from "axios";

//Base Url
const allApi = axios.create({
  baseURL: "https://api.codingnome.dev"
});

//커뮤니티
//커뮤니티 게시글 리스트 얻기
export const getCommunityList = async univid => {
  const List = await allApi.get(`/community/${univid}`);
  return List;
};
//커뮤니티 게시글 올리기
export const postCommunityPost = async (univid, title, body) => {
  await allApi.post(`/community/${univid}`, {
    writer: localStorage.getItem("userId"),
    title: title,
    body: body
  });
};
//커뮤니티 상세보기
export const getCommunityPost = async (univid, postid) => {
  const Post = await allApi.get(`/community/${univid}/${postid}`);
  return Post;
};

//방
//방 리스트 얻기
export const getRoomList = async univid => {
  const List = await allApi.get(`/roomdata/${univid}`);
  return List;
};
