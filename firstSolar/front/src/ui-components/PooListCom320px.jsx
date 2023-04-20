/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Image,
  Text,
  Pagination,
  usePagination,
} from "@aws-amplify/ui-react";
import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { ConnectCompo320px, SwapCompo320px } from "../ui-components";
import { getMainPoolList } from "../api";
import { useMediaQuery } from "react-responsive";

export default function PooListCom320px(props) {
  const { overrides, ...rest } = props;

  const [currentPagePoolList, setCurrentPagePoolList] = React.useState([]);
  const [pageIndex, setPageIndex] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const paginationProps = usePagination({
    totalPages: totalPages,
    currentPage: pageIndex,
    siblingCount: 1,
  });

  const isMobile = useMediaQuery({
    query: "(min-width:0px) and (max-width:480px)",
  });

  return (
    <>
      {isMobile ? (
        <Flex
          minWidth="89vw"
          height="unset"
          display="flex"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PooListCom320px")}
          {...rest}
        >
          <Flex
            gap="29px"
            direction="column"
            width="87vw"
            height="380px"
            justifyContent="flex-start"
            alignItems="flex-start"
            // position="absolute"
            top="calc(50% - 190px - 492px)"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "PoolList")}
          >
            <motion.div
              style={{
                width: "89vw",
                height: "unset",
                borderRadius: "33px",
                backgroundColor: "rgba(234,0,50,0.55)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                backgroundImage:
                  "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
              }}
              whileHover={{ borderRadius: "75px" }}
            >
              <Flex
                gap="8px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                borderRadius="15px"
                padding="25px 15px 25px 15px"
                {...getOverrideProps(overrides, "NetworksList")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="21.784090042114258px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="18px"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Networks List"
                  {...getOverrideProps(overrides, "Networks List")}
                ></Text>
                <Flex
                  gap="12px"
                  direction="column"
                  width="unset"
                  height="106px"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Networks39422981")}
                >
                  <Flex
                    gap="12px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="center"
                    alignItems="center"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 3839422982")}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2039573549")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573550"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2139573551")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573552"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2239573553")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573554"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2339573555")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573556"
                        )}
                      ></Image>
                    </Flex>
                  </Flex>
                  <Flex
                    gap="12px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="center"
                    alignItems="center"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 3939573885")}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 1939573886")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573887"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2039573888")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573889"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2139573890")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573891"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2239573892")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573893"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2339573894")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573895"
                        )}
                      ></Image>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </motion.div>

            <motion.div
              style={{
                width: "89vw",
                height: "unset",
                borderRadius: "33px",
                backgroundColor: "rgba(255,226,0,0.35)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                backgroundImage:
                  "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
              }}
              whileHover={{ borderRadius: "75px" }}
            >
              <Flex
                gap="8px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                borderRadius="15px"
                padding="25px 15px 25px 15px"
                {...getOverrideProps(overrides, "DexList")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="18px"
                  fontWeight="800"
                  lineHeight="21.784090042114258px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Dex List"
                  {...getOverrideProps(overrides, "Dex List")}
                ></Text>
                <Flex
                  gap="12px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Networks39573898")}
                >
                  <Flex
                    gap="12px"
                    direction="row"
                    width="unset"
                    height="47px"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 3839573899")}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 1939573900")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573901"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2039573902")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573903"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2139573904")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573905"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2239573906")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573907"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2339573908")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573909"
                        )}
                      ></Image>
                    </Flex>
                  </Flex>
                  <Flex
                    gap="12px"
                    direction="row"
                    width="unset"
                    height="47px"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 3939573910")}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 1939573911")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573912"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2039573913")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573914"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2139573915")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573916"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2239573917")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573918"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2339573919")}
                    >
                      <Image
                        width="22.24px"
                        height="26.11px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573920"
                        )}
                      ></Image>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </motion.div>

            <LayoutGroup>
              <motion.div
                layout
                initial={{ borderRadius: 25 }}
                transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                {currentPagePoolList.map((item, idx) => (
                  <Flex
                    key={`lpList-768-${idx}`}
                    gap="17px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                  >
                    <ItemWrap
                      onClick={toggleOpen}
                      layout
                      transition={{
                        duration: 0.2,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      }}
                    >
                      <motion.div
                        style={{
                          width: "89vw",
                          height: "unset",
                          borderRadius: "33px",
                          backgroundColor: "rgba(249,250,250,0.75)",
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                          backgroundImage:
                            "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
                        }}
                        whileHover={{ borderRadius: "75px" }}
                      >
                        <Flex
                          gap="15px"
                          direction="row"
                          width="unset"
                          height="unset"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          shrink="0"
                          alignSelf="stretch"
                          position="relative"
                          borderRadius="15px"
                          padding="21px 15px 21px 15px"
                          {...getOverrideProps(overrides, "PoolItem")}
                        >
                          <Flex
                            gap="21px"
                            direction="column"
                            width="unset"
                            height="unset"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            padding="0px 0px 0px 0px"
                            {...getOverrideProps(overrides, "Top")}
                          >
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="241px"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "lpList")}
                            >
                              <Flex
                                gap="10px"
                                direction="row"
                                width="unset"
                                height="unset"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                shrink="0"
                                position="relative"
                                borderRadius="15px"
                                padding="10px 10px 10px 10px"
                                {...getOverrideProps(overrides, "Frame 84")}
                              >
                                <Text
                                  fontFamily="Inter"
                                  fontSize="21px"
                                  fontWeight="700"
                                  lineHeight="25.414772033691406px"
                                  textAlign="left"
                                  display="block"
                                  direction="column"
                                  justifyContent="unset"
                                  width="unset"
                                  height="unset"
                                  gap="unset"
                                  alignItems="unset"
                                  shrink="0"
                                  position="relative"
                                  padding="0px 0px 0px 0px"
                                  whiteSpace="pre-wrap"
                                  children="LP List"
                                  {...getOverrideProps(overrides, "LP List")}
                                ></Text>
                              </Flex>
                            </Flex>
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "APY39433721")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children="WALLET"
                                {...getOverrideProps(overrides, "WALLET")}
                              ></Text>
                            </Flex>
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "TVL39433724")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children="DEPOSITED"
                                {...getOverrideProps(overrides, "DEPOSITED")}
                              ></Text>
                            </Flex>
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "Action39433727")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children="APY"
                                {...getOverrideProps(overrides, "APY39433728")}
                              ></Text>
                            </Flex>
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "Action39574054")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children="TVL"
                                {...getOverrideProps(overrides, "TVL39574055")}
                              ></Text>
                            </Flex>
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "Action39574056")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children="DAILY RATE"
                                {...getOverrideProps(overrides, "DAILY RATE")}
                              ></Text>
                            </Flex>
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "Action39574058")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children="Action"
                                {...getOverrideProps(
                                  overrides,
                                  "Action39574059"
                                )}
                              ></Text>
                            </Flex>
                          </Flex>
                          <Flex
                            gap="34px"
                            direction="column"
                            width="unset"
                            height="unset"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            grow="1"
                            shrink="1"
                            basis="0"
                            alignSelf="stretch"
                            position="relative"
                            padding="0px 0px 0px 0px"
                            {...getOverrideProps(overrides, "List")}
                          >
                            <Flex
                              gap="10px"
                              direction="column"
                              width="unset"
                              height="233px"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              padding="0px 0px 0px 0px"
                              {...getOverrideProps(overrides, "Frame 18")}
                            >
                              <Flex
                                gap="-6px"
                                direction="row"
                                width="unset"
                                height="48px"
                                justifyContent="center"
                                alignItems="center"
                                shrink="0"
                                position="relative"
                                padding="5px 5px 5px 5px"
                                {...getOverrideProps(overrides, "PoolImg")}
                              >
                                <Image
                                  src={item.mainNetLogo}
                                  width="15px"
                                  height="15px"
                                  display="block"
                                  gap="unset"
                                  alignItems="unset"
                                  justifyContent="unset"
                                  shrink="0"
                                  position="relative"
                                  borderRadius="15px"
                                  padding="0px 0px 0px 0px"
                                  objectFit="cover"
                                  {...getOverrideProps(
                                    overrides,
                                    "unsplash:AYOloXgqjzo39433733"
                                  )}
                                ></Image>
                                <Image
                                  src={item.platformLogo}
                                  width="38px"
                                  height="38px"
                                  display="block"
                                  gap="unset"
                                  alignItems="unset"
                                  justifyContent="unset"
                                  shrink="0"
                                  position="relative"
                                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                                  borderRadius="20px"
                                  padding="0px 0px 0px 0px"
                                  objectFit="cover"
                                  {...getOverrideProps(
                                    overrides,
                                    "unsplash:em1OiomfG3g39433734"
                                  )}
                                ></Image>
                              </Flex>
                              <Flex
                                gap="10px"
                                direction="column"
                                width="unset"
                                height="unset"
                                justifyContent="center"
                                alignItems="center"
                                shrink="0"
                                alignSelf="stretch"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                {...getOverrideProps(overrides, "LogoTitle")}
                              >
                                <Text
                                  fontFamily="Inter"
                                  fontSize="11px"
                                  fontWeight="700"
                                  lineHeight="13.3125px"
                                  textAlign="center"
                                  display="block"
                                  direction="column"
                                  justifyContent="unset"
                                  width="unset"
                                  height="25px"
                                  gap="unset"
                                  alignItems="unset"
                                  shrink="0"
                                  alignSelf="stretch"
                                  position="relative"
                                  padding="0px 0px 0px 0px"
                                  whiteSpace="pre-wrap"
                                  children={item.name}
                                  {...getOverrideProps(
                                    overrides,
                                    "Overnight Pulse Act ll"
                                  )}
                                ></Text>
                                <Flex
                                  gap="15px"
                                  direction="column"
                                  width="unset"
                                  height="unset"
                                  justifyContent="flex-start"
                                  alignItems="flex-start"
                                  shrink="0"
                                  alignSelf="stretch"
                                  position="relative"
                                  padding="0px 0px 0px 0px"
                                  {...getOverrideProps(overrides, "Frame 10")}
                                >
                                  <Flex
                                    gap="10px"
                                    direction="column"
                                    width="unset"
                                    height="unset"
                                    justifyContent="center"
                                    alignItems="center"
                                    shrink="0"
                                    alignSelf="stretch"
                                    position="relative"
                                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                                    borderRadius="19px"
                                    padding="10px 10px 10px 10px"
                                    backgroundColor="rgba(234,0,50,0.55)"
                                    {...getOverrideProps(overrides, "Frame 9")}
                                  >
                                    <Text
                                      fontFamily="Inter"
                                      fontSize="9px"
                                      fontWeight="700"
                                      color="rgba(239,239,239,1)"
                                      lineHeight="10.892045021057129px"
                                      textAlign="center"
                                      display="block"
                                      direction="column"
                                      justifyContent="unset"
                                      width="unset"
                                      height="15px"
                                      gap="unset"
                                      alignItems="unset"
                                      shrink="0"
                                      alignSelf="stretch"
                                      position="relative"
                                      padding="0px 0px 0px 0px"
                                      whiteSpace="pre-wrap"
                                      children="VELOCIMETER"
                                      {...getOverrideProps(
                                        overrides,
                                        "VELOCIMETER"
                                      )}
                                    ></Text>
                                  </Flex>
                                  <Flex
                                    gap="0"
                                    direction="row"
                                    width="unset"
                                    height="unset"
                                    justifyContent="center"
                                    alignItems="center"
                                    shrink="0"
                                    alignSelf="stretch"
                                    position="relative"
                                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                                    borderRadius="19px"
                                    padding="10px 10px 10px 10px"
                                    backgroundColor="rgba(0,136,153,0.86)"
                                    {...getOverrideProps(overrides, "Frame 8")}
                                  >
                                    <Image
                                      width="15px"
                                      height="15px"
                                      display="block"
                                      gap="unset"
                                      alignItems="unset"
                                      justifyContent="unset"
                                      shrink="0"
                                      position="relative"
                                      borderRadius="15px"
                                      padding="0px 0px 0px 0px"
                                      objectFit="cover"
                                      {...getOverrideProps(
                                        overrides,
                                        "unsplash:AYOloXgqjzo39433741"
                                      )}
                                    ></Image>
                                    <Text
                                      fontFamily="Inter"
                                      fontSize="9px"
                                      fontWeight="700"
                                      color="rgba(239,239,239,1)"
                                      lineHeight="10.892045021057129px"
                                      textAlign="center"
                                      display="block"
                                      direction="column"
                                      justifyContent="unset"
                                      width="unset"
                                      height="15px"
                                      gap="unset"
                                      alignItems="unset"
                                      grow="1"
                                      shrink="1"
                                      basis="0"
                                      position="relative"
                                      padding="0px 0px 0px 0px"
                                      whiteSpace="pre-wrap"
                                      children="STADER BOOST"
                                      {...getOverrideProps(
                                        overrides,
                                        "STADER BOOST"
                                      )}
                                    ></Text>
                                  </Flex>
                                </Flex>
                              </Flex>
                            </Flex>
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="10px"
                              padding="10px 10px 10px 10px"
                              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                              {...getOverrideProps(overrides, "APY39433743")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="10px"
                                fontWeight="700"
                                lineHeight="12.102272033691406px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children="wallet자리"
                                {...getOverrideProps(overrides, "039433744")}
                              ></Text>
                            </Flex>
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="10px"
                              padding="10px 10px 10px 10px"
                              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                              {...getOverrideProps(overrides, "TVL39433745")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="10px"
                                fontWeight="700"
                                lineHeight="12.102272033691406px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children="Deposit자리"
                                {...getOverrideProps(overrides, "039433746")}
                              ></Text>
                            </Flex>
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="10px"
                              padding="10px 10px 10px 10px"
                              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                              {...getOverrideProps(overrides, "Action39433747")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="10px"
                                fontWeight="700"
                                lineHeight="12.102272033691406px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children={`${
                                  Math.round(item?.apy * 10000) / 10000
                                } %`}
                                {...getOverrideProps(overrides, "99.99%")}
                              ></Text>
                            </Flex>
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="10px"
                              padding="10px 10px 10px 10px"
                              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                              {...getOverrideProps(overrides, "Action39574060")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="10px"
                                fontWeight="700"
                                lineHeight="12.102272033691406px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children={`$${item.tvl}`}
                                {...getOverrideProps(
                                  overrides,
                                  "$999,99939574061"
                                )}
                              ></Text>
                            </Flex>
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="10px"
                              padding="10px 10px 10px 10px"
                              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                              {...getOverrideProps(overrides, "Action39574062")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="10px"
                                fontWeight="700"
                                lineHeight="12.102272033691406px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children={`$${
                                  item.dailyTvlRate == null
                                    ? 0
                                    : Math.round(item.dailyTvlRate * 10000) /
                                      10000
                                }`}
                                {...getOverrideProps(
                                  overrides,
                                  "$999,99939574063"
                                )}
                              ></Text>
                            </Flex>
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="center"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="10px"
                              padding="10px 10px 10px 10px"
                              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                              {...getOverrideProps(overrides, "Action39574064")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="10px"
                                fontWeight="700"
                                lineHeight="12.102272033691406px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children="Add Liquidity"
                                {...getOverrideProps(
                                  overrides,
                                  "Add Liquidity"
                                )}
                              ></Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </motion.div>
                    </ItemWrap>
                    <AnimatePresence>
                      {isOpen && (
                        <SubWrap>
                          <motion.div
                            layout
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 0.25,
                              ease: [0.43, 0.13, 0.23, 0.96],
                            }}
                          >
                            <SwapCompo320px />
                          </motion.div>
                        </SubWrap>
                      )}
                    </AnimatePresence>
                  </Flex>
                ))}
              </motion.div>
            </LayoutGroup>
            <Flex
              width="80vw"
              justifyContent="center"
              padding="30px 0px 0px 0px"
            >
              <Pagination
                {...paginationProps}
                onChange={(pageNum) => {
                  setPageIndex(pageNum);
                }}
                onNext={() => {
                  setPageIndex(pageIndex + 1);
                }}
                onPrevious={() => {
                  setPageIndex(pageIndex - 1);
                }}
              />
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
}

const ItemWrap = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin-top: 38px;
`;

const SubWrap = styled(motion.div)`
  font-size: 15px;
  display: flex;
  :last-child {
    border-radius: 0 0 20px 20px;
  }
`;
