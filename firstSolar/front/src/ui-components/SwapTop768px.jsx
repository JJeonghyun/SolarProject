/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import { useMediaQuery } from "react-responsive";
export default function SwapTop768px(props) {
  const { overrides, ...rest } = props;

  const isDesktop = useMediaQuery({
    query: "(min-width:481px)",
  });

  const lastTimeStamp = props?.oracleiddata[0]?.lastHarvest;
  const date = new Date(lastTimeStamp * 1000);
  const dateString = date.toLocaleDateString();

  return (
    <>
      {isDesktop && (
        <Flex
          gap="49px"
          direction="column"
          width="688px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="35px"
          padding="69px 99px 58px 99px"
          backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
          {...getOverrideProps(overrides, "AddLiquidityTop768px")}
          {...rest}
        >
          <Flex
            gap="25px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 120")}
          >
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 122")}
            >
              <Image
                src={props?.oracleiddata[0]?.mainNetLogo}
                width="30px"
                height="30px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="35px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "ghrgclzzd 1040162888")}
              ></Image>
              <Text
                fontFamily="Inter"
                fontSize="28px"
                fontWeight="800"
                lineHeight="21.784090042114258px"
                textAlign="center"
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
                children={props?.oracleiddata[0]?.network}
                {...getOverrideProps(overrides, "TokenName40162892")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="25px"
              fontWeight="600"
              lineHeight="30.25568199157715px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="center"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="-"
              {...getOverrideProps(overrides, "-")}
            ></Text>
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 123")}
            >
              <Image
                width="30px"
                height="30px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="35px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                src={props?.oracleiddata[0]?.platformLogo}
                {...getOverrideProps(overrides, "ghrgclzzd 1040162899")}
              ></Image>
              <Text
                fontFamily="Inter"
                fontSize="28px"
                fontWeight="600"
                lineHeight="21.784090042114258px"
                textAlign="center"
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
                children={props?.oracleiddata[0]?.platformId}
                {...getOverrideProps(overrides, "TokenName40162900")}
              ></Text>
            </Flex>
            <Flex
              marginTop="23px"
              marginBottom="15px"
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 123")}
            >
              <Flex
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
              >
                <Image
                  width="21px"
                  height="21px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="35px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={props?.oracleiddata[0]?.mainNetLogo}
                  {...getOverrideProps(overrides, "ghrgclzzd 1040162899")}
                ></Image>
                <Text
                  fontFamily="Inter"
                  fontSize="21px"
                  fontWeight="600"
                  lineHeight="21.784090042114258px"
                  textAlign="center"
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
                  children={props?.oracleiddata[0]?.assets[0]}
                  {...getOverrideProps(overrides, "TokenName40162900")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="25px"
                fontWeight="600"
                lineHeight="30.25568199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="center"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="-"
                {...getOverrideProps(overrides, "-")}
              ></Text>
              <Flex
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
              >
                <Image
                  width="21px"
                  height="21px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="35px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={props?.oracleiddata[0]?.platformLogo}
                  {...getOverrideProps(overrides, "ghrgclzzd 1040162899")}
                ></Image>
                <Text
                  fontFamily="Inter"
                  fontSize="21px"
                  fontWeight="600"
                  lineHeight="21.784090042114258px"
                  textAlign="center"
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
                  children={props?.oracleiddata[0]?.assets[1]}
                  {...getOverrideProps(overrides, "TokenName40162900")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="15px"
              padding="13px 13px 13px 13px"
              backgroundColor="rgba(255,226,0,0.35)"
              {...getOverrideProps(overrides, "Frame 119")}
            >
              <Text
                fontFamily="Inter"
                fontSize="21px"
                fontWeight="600"
                lineHeight="25.414772033691406px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={`${
                  Math.round(props?.oracleiddata[0]?.apy * 10000) / 10000
                } %`}
                {...getOverrideProps(overrides, "99.99%")}
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
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            border="3px SOLID rgba(234,0,50,0.45)"
            borderRadius="35px"
            padding="47px 47px 47px 47px"
            backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
            {...getOverrideProps(overrides, "Frame 11140132818")}
          >
            <Text
              fontFamily="Inter"
              fontSize="31px"
              fontWeight="900"
              lineHeight="29.045454025268555px"
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
              children="ToTal Tokens Locked"
              {...getOverrideProps(overrides, "ToTal Tokens Locked40132805")}
            ></Text>
            <Flex
              gap="172px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-end"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 10940132812")}
            >
              <Flex
                gap="7px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 10840132811")}
              >
                <Image
                  width="30px"
                  height="30px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="15px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={props?.oracleiddata[0]?.mainNetLogo}
                  {...getOverrideProps(overrides, "ghrgclzzd 940132806")}
                ></Image>
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
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={props?.oracleiddata[0]?.assets[0]}
                  {...getOverrideProps(overrides, "TokenName40132808")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="18px"
                fontWeight="700"
                lineHeight="21.784090042114258px"
                textAlign="center"
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
                children="99,99M"
                {...getOverrideProps(overrides, "99,99M40132809")}
              ></Text>
            </Flex>
            <Flex
              gap="172px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-end"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 11040132813")}
            >
              <Flex
                gap="7px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 10840132814")}
              >
                <Image
                  width="30px"
                  height="30px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="15px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={props?.oracleiddata[0]?.platformLogo}
                  {...getOverrideProps(overrides, "ghrgclzzd 940132815")}
                ></Image>
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
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={props?.oracleiddata[0]?.assets[1]}
                  {...getOverrideProps(overrides, "TokenName40132816")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="18px"
                fontWeight="700"
                lineHeight="21.784090042114258px"
                textAlign="center"
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
                children="99,99M"
                {...getOverrideProps(overrides, "99,99M40132817")}
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
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            border="3px SOLID rgba(0,136,153,0.59)"
            borderRadius="35px"
            padding="47px 47px 47px 47px"
            backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
            {...getOverrideProps(overrides, "Frame 121")}
          >
            <Text
              fontFamily="Inter"
              fontSize="31px"
              fontWeight="900"
              lineHeight="29.045454025268555px"
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
              children="ToTal Infomation"
              {...getOverrideProps(overrides, "ToTal Tokens Locked40652644")}
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
              {...getOverrideProps(overrides, "Frame 116")}
            >
              <Text
                fontFamily="Inter"
                fontSize="21px"
                fontWeight="700"
                lineHeight="25.414772033691406px"
                textAlign="center"
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
                {...getOverrideProps(overrides, "TVL")}
              ></Text>
              <Flex
                gap="172px"
                direction="row"
                width="390px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-end"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 11040132831")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="18px"
                  fontWeight="700"
                  color="rgba(234,0,50,0.45)"
                  lineHeight="21.784090042114258px"
                  textAlign="center"
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
                    Math.round(props?.oracleiddata[0]?.tvl * 10000) / 10000
                  } `}
                  {...getOverrideProps(overrides, "16.82%")}
                ></Text>
              </Flex>
            </Flex>
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
              {...getOverrideProps(overrides, "Frame 117")}
            >
              <Flex
                gap="172px"
                direction="row"
                width="390px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-end"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 112")}
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
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Daily TVl Rate"
                  {...getOverrideProps(overrides, "Volume 24H")}
                ></Text>
              </Flex>

              <Flex
                gap="172px"
                direction="row"
                width="390px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-end"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 113")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="18px"
                  fontWeight="700"
                  color="rgba(234,0,50,0.45)"
                  lineHeight="21.784090042114258px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={`${
                    Math.round(props?.oracleiddata[0]?.dailyTvlRate * 10000) /
                    10000
                  } %`}
                  {...getOverrideProps(overrides, "262.40%")}
                ></Text>
              </Flex>
            </Flex>
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
              {...getOverrideProps(overrides, "Frame 118")}
            >
              <Flex
                gap="172px"
                direction="row"
                width="390px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-end"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 114")}
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
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Last Harvest"
                  {...getOverrideProps(overrides, "Fees 24H")}
                ></Text>
              </Flex>
              <Flex
                gap="172px"
                direction="row"
                width="390px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-end"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 115")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="18px"
                  fontWeight="700"
                  color="rgba(234,0,50,0.45)"
                  lineHeight="21.784090042114258px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={dateString}
                  {...getOverrideProps(overrides, "$99.99M40132843")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
}