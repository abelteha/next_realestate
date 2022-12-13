import React, { FC, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { ArrowCircleRight } from "@mui/icons-material";
import { photos } from "../model/scrollbar";
import { Box, IconButton, Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import blurryImage from "../assets/images/blur.jpg";

const ImageSlider: FC<{ data: photos }> = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;
  const sm = useMediaQuery("(min-width:700px)");
  const md = useMediaQuery("(min-width:950px)");

  const nextSlide = () => {
    setCurrent(current === length - 1 ? current : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? current : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  const convertImage = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#ddd" />
    <rect id="r" width="${w}" height="${h}" fill="url(#gg)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <Box
      mt={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={sm ? "row" : "column"}
      gap={sm ? 1 : 0}
    >
      {sm && (
        <Box>
          <IconButton onClick={() => prevSlide()}>
            <ArrowCircleLeftIcon />
          </IconButton>
        </Box>
      )}
      <Box>
        {data.map((item, index) => {
          return (
            <Box
              width={md ? 850 : sm ? 600 : 320}
              overflow="hidden"
              key={index}
            >
              {index === current && (
                <Image
                  alt="property"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    convertImage(900, 400)
                  )}`}
                  src={`${item.url}?w=900&h=500&fit=crop&auto=format&dpr=1`}
                  width={md ? 850 : sm ? 600 : 320}
                  height={md ? 500 : sm ? 400 : 200}
                  priority
                />
              )}
            </Box>
          );
        })}
      </Box>
      <Stack direction="row">
        {sm ? (
          ""
        ) : (
          <Box>
            <IconButton onClick={() => prevSlide()}>
              <ArrowCircleLeftIcon />
            </IconButton>
          </Box>
        )}
        <Box>
          <IconButton onClick={() => nextSlide()}>
            <ArrowCircleRight />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default ImageSlider;
