/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SwapCompo1440px(props) {
  const { overrides, ...rest } = props;
  const navigate = useNavigate();

  return (
    <Flex
      display={{
        base: "none",
        small: "none",
        medium: "flex",
        large: "flex",
        xl: "flex",
        xxl: "flex",
      }}
      gap="30px"
      direction="row"
      width="90vw"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="18px"
      padding="30px 50px 30px 50px"
      {...getOverrideProps(overrides, "SwapCompo1440px")}
      {...rest}
    >
      <motion.div
        style={{
          width: "45vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(234,0,50,0.55)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{
          borderRadius: "13px",
          scale: 1.03,
          opacity: 0.88,
        }}
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
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="19px 25px 19px 25px"
          {...getOverrideProps(overrides, "Connect40052819")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(249,249,249,1)"
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
          width: "45vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(255,226,0,0.35)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{
          borderRadius: "13px",
          scale: 1.03,
          opacity: 0.88,
        }}
      >
        <Flex
          onClick={() => {
            navigate(`/addliquidity?=${props.props.item.oracleId}`);
          }}
          gap="10px"
          direction="row"
          width="unset"
          height="50px"
          justifyContent="flex-end"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="19px 25px 19px 25px"
          {...getOverrideProps(overrides, "Connect40052821")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
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
