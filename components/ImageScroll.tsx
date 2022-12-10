import { Box, Button, IconButton, Stack } from "@mui/material";
import React, { FC, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { ArrowCircleRight } from "@mui/icons-material";
import Image from "next/image";
import { photos } from "../model/scrollbar";

const ImageScrollbar: FC<{ data: photos }> = ({ data }) => {
  return (
    <Box mt={10}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box width="910px" overflow="hidden" p="1">
            <Image
              alt="property"
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width={900}
              height={500}
              sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            />
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Stack justifyContent="center" alignItems="center" mr={1}>
      <IconButton onClick={() => scrollPrev()}>
        <ArrowCircleLeftIcon />
      </IconButton>
    </Stack>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Stack justifyContent="center" alignItems="center" ml={1}>
      <IconButton onClick={() => scrollNext()}>
        <ArrowCircleRight />
      </IconButton>
    </Stack>
  );
};

export default ImageScrollbar;
