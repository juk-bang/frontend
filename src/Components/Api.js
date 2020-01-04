//axios import
import axios from "axios";

//Base Url
const allApi = axios.create({
  baseURL: "http://10.16.131.62:8080"
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
//게시글 삭제하기
export const deleteCommunityPost = async (univid, postid) => {
  await allApi.delete(`/community/${univid}/${postid}`);
};
//게시글 수정하기
export const postCommunityPut = async (univid, postid, title, body) => {
  const writer = localStorage.getItem("userId");
  await allApi.put(`/community/${univid}/${postid}`, {
    title: title,
    body: body,
    writer: writer
  });
};

//커뮤니티 댓글
//댓글 불러오기
export const getCommunityComments = async (univid, postid) => {
  const List = await allApi.get(`/community/comments/${univid}/${postid}`);
  return List;
};
//댓글 삭제하기
export const deleteCommunityComments = async (univid, postid, commentId) => {
  await allApi.delete(`/community/comments/${univid}/${postid}/${commentId}`);
};
//댓글 작성하기
export const postCommunityComments = async (body, univid, postid) => {
  const writer = localStorage.getItem("userId");
  await allApi.post(`/community/comments/${univid}/${postid}`, {
    writer: writer,
    body: body
  });
};
//댓글 수정
export const putCommunityComments = async (univid, postid, commentId, body) => {
  const writer = localStorage.getItem("userId");
  await allApi.put(`/community/comments/${univid}/${postid}/${commentId}`, {
    body: body,
    writer: writer
  });
};

//방
//방 리스트 얻기
export const getRoomList = async univid => {
  const List = await allApi.get(`/roomdata/${univid}`);
  return List;
};

//판매자
//판매자 매물 올리기

export const postManagerRoom = async (body, pictureList, univid, history) => {
  const sellerid = localStorage.getItem("userId");
  const roomid = await allApi.post(`/manager/manageroom/${sellerid}`, body);
  let PictureCount = 0;
  await pictureList.map(async each => {
    let fd = new FormData();
    await fd.append("file", each);
    const imageurl = await allApi.post(
      `/manager/manageroom/uploadimg/${univid}/${
        roomid.data
      }/${pictureList.indexOf(each)}`,
      fd
    );
    PictureCount = PictureCount + 1;
    await allApi.post(`http://10.16.131.62:8080${imageurl.data}`);
  });
  await history.push("/manager");
};
