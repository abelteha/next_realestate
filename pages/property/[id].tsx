import { Box } from "@mui/material";
import React, { FC } from "react";
import ImageScrollbar from "../../components/ImageScroll";
import ImageSlider from "../../components/ImageSlider";
import { propertyDetails } from "../../model/scrollbar";
import { baseUrl, fetchApi } from "../../utils/fetchApi";

const PropertyDetails: FC<{ propertyDetails: propertyDetails }> = ({
  propertyDetails,
}) => {
  return (
    <Box maxWidth="1000px" margin="auto" p={4}>
      {propertyDetails.photos && <ImageSlider data={propertyDetails.photos} />}
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
