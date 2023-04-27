import * as React from "react";
import { MyPageCompo1024px } from "../../ui-components";
import styled from "styled-components";
import "../../css/Font.css";
import { useState } from "react";

const MypageComponent = () => {
  return (
    <>
      <MypPage>
        <MyPageCompo1024px></MyPageCompo1024px>
      </MypPage>
    </>
  );
};

export default MypageComponent;

const MypPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  align-self: center;
`;
