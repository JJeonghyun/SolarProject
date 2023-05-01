/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/Font.css";

export default function SwapCompo320px(props) {
  const { overrides, ...rest } = props;
  const navigate = useNavigate();
  return (
    <Flex
      display="flex"
      gap="33px"
      direction="column"
      width="88vw"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="18px"
      padding="30px 50px 30px 50px"
      {...getOverrideProps(overrides, "SwapCompo320px")}
      {...rest}
    >
      <motion.div
        style={{
          width: "55vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(234,0,50,0.55)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{ borderRadius: "13px", scale: 1.1, opacity: 0.88 }}
      >
        <Flex
          onClick={() => {
            navigate(`/swap?${props.props.item.oracleId}`);
          }}
          gap="10px"
          direction="row"
          width="unset"
          height="50px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="45px"
          padding="19px 25px 19px 25px"
          {...getOverrideProps(overrides, "Connect40052837")}
        >
          <Text
            fontFamily="ffProMedium"
            fontSize="24px"
            fontWeight="700"
            color="rgba(239,239,239,1)"
            lineHeight="29.045454025268555px"
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
            children="Swap"
            {...getOverrideProps(overrides, "Swap")}
          ></Text>
        </Flex>
      </motion.div>
      <motion.div
        style={{
          width: "55vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(255,226,0,0.35)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{ borderRadius: "13px", scale: 1.1, opacity: 0.88 }}
      >
        <Flex
          onClick={() => {
            navigate(`/addliquidity?${props.props.item.oracleId}`);
          }}
          gap="10px"
          direction="row"
          width="unset"
          height="50px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="45px"
          padding="19px 25px 19px 25px"
          overflow="hidden"
          {...getOverrideProps(overrides, "Connect40052839")}
        >
          <Text
            fontFamily="ffProMedium"
            fontSize={{ base: "19px", small: "24px" }}
            fontWeight="700"
            lineHeight="29.045454025268555px"
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
            children="Add Liquidity"
            {...getOverrideProps(overrides, "Add Liquidity")}
          ></Text>
        </Flex>
      </motion.div>
    </Flex>
  );
}