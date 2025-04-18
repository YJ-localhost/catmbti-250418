import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { resultdata } from "../assets/resultdata";

const Wrapper = styled.div``;

const Header = styled.div``;

const Contents = styled.div``;

const Title = styled.div``;

const LogoImg = styled.div``;

const Desc = styled.div``;

const ButtonGroup = styled.div``;

const Result = () => {
  const [resultData, setResultData] = useState();

  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/");
  };
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");

  useEffect(() => {
    const result = resultData.find((item) => item.best === mbti);
    setResultData(result);
  }, [mbti]);

  console.log(resultData);
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과보기😘</Title>
        <LogoImg>
          <img src={resultData?.image} alt="mainCat" />
        </LogoImg>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는
          <br /> {resultData.best}형 {resultData.name} 입니다.
        </Desc>
        <Button variant="warning" onClick={handleClickButton}>
          테스트 시작하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;
