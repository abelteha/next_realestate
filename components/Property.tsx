import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import DefaultImage from "../assets/images/house.jpg";
import VerifiedIcon from "@mui/icons-material/Verified";
import millify from "millify";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GridViewIcon from "@mui/icons-material/GridView";

const Property: FC<{
  property: {
    coverPhoto: any;
    price: number;
    rentFrequency: string;
    rooms: string;
    title: string;
    baths: string;
    area: number;
    agency: any;
    isVerified: boolean;
    externalID: string;
  };
}> = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box
      sx={{
        display: "flex",
        cursor: "pointer",
        flexWrap: "wrap",
        width: `${matches ? 400 : 350}`,

        py: 3,
        pt: 0,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Link href={`property/${externalID}`} passHref>
        <Box>
          <Card>
            <CardMedia>
              <Image
                src={`${
                  coverPhoto ? coverPhoto.url : DefaultImage
                }?w=400&h=260&fit=crop&auto=enhance&dpr=1`}
                width={matches ? 400 : 350}
                height={matches ? 260 : 200}
                alt="house"
              />
            </CardMedia>
            <CardContent>
              <Stack
                pt={1}
                alignItems="center"
                justifyContent="space-between"
                direction="row"
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  justifyContent="flex-start"
                >
                  <Box pr={2} color="#43a047">
                    {isVerified && <VerifiedIcon sx={{ fontSize: 20 }} />}
                  </Box>

                  <Typography fontWeight={600} fontSize={18}>
                    AED {millify(price)}
                    {rentFrequency && `/${rentFrequency}`}
                  </Typography>
                </Stack>
                <Box>
                  <Avatar src={agency?.logo?.url} />
                </Box>
              </Stack>
              <Stack
                alignItems="center"
                p={1}
                justifyContent="space-between"
                width={matches ? 300 : 280}
                sx={{ color: "#1e88e5" }}
                direction="row"
              >
                {rooms} <HotelIcon /> | {baths} <BathtubIcon /> |{" "}
                {millify(area)} sqft <GridViewIcon />
              </Stack>
              <Typography fontWeight={100} fontSize={18}>
                {matches
                  ? title.length > 30
                    ? `${title.substring(0, 28)}...`
                    : title
                  : title.length > 28
                  ? `${title.substring(0, 28)}...`
                  : title}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Link>
    </Box>
  );
};

export default Property;
