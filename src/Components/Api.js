//axios import
import axios from "axios";

//Base Url
const allApi = axios.create({
  baseURL: "https://api.codingnome.dev"
});

//커뮤니티 리스트
export const getCommunityList = async univid => {
  const List = await allApi.get(`/Community/${univid}`);
  return List;
};

//
export const getRoomList = async univid => {
  const List = await allApi.get(`/roomdata/${univid}`);
  return List;
};
