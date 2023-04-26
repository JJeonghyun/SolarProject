/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, SearchField, Text, View } from "@aws-amplify/ui-react";
import { connectThunk } from "../modules/connect.js";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./images/logo_new.png";

import LoginAccount from "./LoginAccount.jsx";
import ConnectModal from "./ConnectModal.jsx";
import LoadingButton from "./LoadingButton.jsx";
import ConnectButton from "./ConnectButton.jsx";
import { Web3Button } from "@web3modal/react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import { useMediaQuery } from "react-responsive";

export default function BeforeHeadCom1024px(props) {
  const { overrides, ...rest } = props;
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
  const login = useSelector(state => state.login.login.login);
  const [view, setView] = React.useState(false);
  const dispatch = useDispatch();
  const connect = useSelector(state => state.connect.connect.connect);
  const navigate = useNavigate();
  const { address, isConnecting, isDisconnected } = useAccount();
  const { pathname } = useLocation();
  const ref = React.useRef();

  React.useEffect(() => {
    setView(false);
  }, [pathname]);

  React.useEffect(() => {
    const checkIfClickedOutside = e => {
      if (view && ref.current && !ref.current.contains(e.target)) {
        setView(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [view]);

  const isDesktop = useMediaQuery({
    query: "(min-width:992px)",
  });

  return (
    <>
      {isDesktop ? (
        <View
          width="90vw"
          height="60px"
          display="flex"
          alignItems="unset"
          justifyContent="space-between"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "BeforeHeadCom1024px")}
          {...rest}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <Flex
              gap="24px"
              direction="row"
              width="221px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              // position="absolute"
              top="13.33%"
              bottom="11.67%"
              left="0%"
              right="78.42%"
              padding="0px 14px 0px 14px"
              {...getOverrideProps(overrides, "Menu39912868")}
            >
              <Image
                src={logo}
                width="45px"
                height="45px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="50px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "unsplash:PfBvNnGIhmQ")}
              ></Image>
            </Flex>
          </Link>
          <SearchField
            width="264px"
            height="unset"
            placeholder="Search"
            justifyContent="center"
            alignItems="center"
            // position="absolute"
            top="23.33%"
            bottom="21.67%"
            left="40.04%"
            right="34.18%"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            onSubmit={() => {
              // 검색 버튼을 누르거나 엔터를 눌렀을 때 작동합니다.
            }}
            {...getOverrideProps(overrides, "SearchField")}
          ></SearchField>
          <Cover>
            <div className="Header_right">
              {connect ? (
                login ? (
                  <LoginAccount></LoginAccount>
                ) : address ? (
                  <Web3Button></Web3Button>
                ) : (
                  <>
                    <ConnectModal></ConnectModal>
                    <LoadingButton></LoadingButton>
                  </>
                )
              ) : (
                <div className="Header_connect">
                  <Flex
                    gap="10px"
                    direction="row"
                    width="133px"
                    height="35px"
                    justifyContent="flex-end"
                    alignItems="center"
                    // position="absolute"
                    top="21.67%"
                    bottom="20%"
                    left="85.64%"
                    right="1.37%"
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    borderRadius="45px"
                    padding="19px 11px 19px 11px"
                    backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
                    onClick={() => {
                      dispatch(connectThunk({ connect: true }));
                    }}
                    {...getOverrideProps(overrides, "Connect39912872")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="18px"
                      fontWeight="700"
                      color="rgba(239,239,239,1)"
                      lineHeight="21.784090042114258px"
                      textAlign="center"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="unset"
                      height="29px"
                      gap="unset"
                      alignItems="unset"
                      grow="1"
                      shrink="1"
                      basis="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="Connect"
                      {...getOverrideProps(overrides, "Connect39912873")}
                    ></Text>
                  </Flex>
                </div>
              )}
            </div>
          </Cover>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const Cover = styled.div`
  display: flex;
  align-items: center;

  .Header_connect {
    cursor: pointer;
  }
  .Header_connect:hover {
    transform: scale(1.01);
  }
`;