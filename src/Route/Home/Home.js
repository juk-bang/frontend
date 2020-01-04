import React from "react";
import {
  MainLogo,
  Container,
  MainQuestion,
  SelectUniv,
  OptionUniv
} from "./style";

const Home = () => {
  const handleChangeUniv = e => {
    if (e.target.value === "숭실대") {
      localStorage.setItem("Univ", "1");
      document.location.href = "/roomlist/1";
    } else if (e.target.value === "고려대") {
      localStorage.setItem("Univ", "2");
      document.location.href = "/roomlist/1";
    }
  };

  return (
    <Container>
      <div class="container">
        <MainLogo></MainLogo>
        <MainQuestion>
          당신의 <b style={{ color: "#54dea6" }}>학교이름</b>은 무엇입니까?
        </MainQuestion>
        <SelectUniv onChange={handleChangeUniv}>
          <OptionUniv>-</OptionUniv>
          <OptionUniv>숭실대</OptionUniv>
          <OptionUniv>고려대</OptionUniv>
        </SelectUniv>
      </div>
    </Container>
  );
};

export default Home;
