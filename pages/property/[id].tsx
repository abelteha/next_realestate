import { Avatar, Box, Stack, Typography, useMediaQuery } from "@mui/material";
import millify from "millify";

import React, { FC } from "react";

import ImageSlider from "../../components/ImageSlider";
import { propertyDetails } from "../../model/scrollbar";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import VerifiedIcon from "@mui/icons-material/Verified";

import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GridViewIcon from "@mui/icons-material/GridView";

const PropertyDetails: FC<{ propertyDetails: propertyDetails }> = ({
  propertyDetails,
}) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box maxWidth="1000px" margin="auto" p={4}>
      {propertyDetails.photos && <ImageSlider data={propertyDetails.photos} />}
      <Box width="100%" px={matches ? 5 : 1}>
        <Stack
          py={1}
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
              {propertyDetails.isVerified && (
                <VerifiedIcon sx={{ fontSize: 20 }} />
              )}
            </Box>

            <Typography fontWeight={600} fontSize={18}>
              AED {millify(propertyDetails.price)}
              {propertyDetails.rentFrequency &&
                `/${propertyDetails.rentFrequency}`}
            </Typography>
          </Stack>
          <Box>
            <Avatar src={propertyDetails.agency?.logo?.url} />
          </Box>
        </Stack>

        <Stack
          alignItems="center"
          justifyContent="space-between"
          width={matches ? 300 : 250}
          sx={{ color: "#1e88e5" }}
          direction="row"
        >
          {propertyDetails.rooms} <HotelIcon /> | {propertyDetails.baths}{" "}
          <BathtubIcon /> | {millify(propertyDetails.area)} sqft{" "}
          <GridViewIcon />
        </Stack>
        <Box my={2}>
          <Typography fontWeight={700} fontSize={25}>
            {propertyDetails.title}
          </Typography>
          <Typography lineHeight={2} color="#757575">
            {propertyDetails.description}
          </Typography>
        </Box>
        <Stack
          direction="row"
          flexWrap="wrap"
          textTransform="uppercase"
          justifyContent="space-between"
          gap={2}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            width="400px"
            border="1px solid #f5f5f5"
            p={3}
            borderRadius="10px"
          >
            <Typography>Type</Typography>
            <Typography fontWeight={700}>{propertyDetails.type}</Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            width="400px"
            border="1px solid #f5f5f5"
            p={3}
            borderRadius="10px"
          >
            <Typography>Purpose</Typography>
            <Typography fontWeight={700}>{propertyDetails.purpose}</Typography>
          </Stack>
          {propertyDetails.furnishingStatus && (
            <Stack
              direction="row"
              justifyContent="space-between"
              width="400px"
              border="1px solid #f5f5f5"
              p={3}
              borderRadius="10px"
            >
              <Typography>Furnished Status</Typography>
              <Typography fontWeight={700}>
                {propertyDetails.furnishingStatus}
              </Typography>
            </Stack>
          )}
        </Stack>
        <Box mt={5}>
          {propertyDetails.amenities.length ? (
            <Typography fontWeight={700} fontSize={25}>
              Amenities
            </Typography>
          ) : (
            ""
          )}
          <Stack direction="row" flexWrap="wrap" gap={1} mt={2}>
            {propertyDetails.amenities.map((item: any) =>
              item.amenities.map((amenities: any) => (
                <Typography
                  key={amenities.text}
                  bgcolor="#eeeeee"
                  p={1}
                  color="#42a5f5"
                  borderRadius={1}
                >
                  {amenities.text}
                </Typography>
              ))
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
export async function getServerSideProps({ params: { id } }: any) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  return {
    props: {
      propertyDetails: data,
    },
  };
}
export default PropertyDetails;
