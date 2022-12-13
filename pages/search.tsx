import { FilterList } from "@mui/icons-material";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import Property from "../components/Property";
import SearchFilters from "../components/SearchFilters";
import noresult from "../assets/images/noresult.svg";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Search: FC<{ properties: any }> = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const matches = useMediaQuery("(min-width:600px)");
  console.log(searchFilters);

  const router = useRouter();
  const handleClick = () => {
    setSearchFilters((prev) => !prev);
  };
  return (
    <Box mt={10}>
      <Stack
        sx={{
          cursor: "pointer",
          bgcolor: "#f5f5f5",
          borderBottom: "1px",
          borderColor: "#eeeeee",
          p: 2,
          fontWeight: 800,
          fontSize: 15,
        }}
        direction="row"
        alignItems="center"
        onClick={handleClick}
        justifyContent="center"
        mx={matches ? 0 : 0}
      >
        <Typography fontWeight={800} fontSize={17}>
          Search Property By Filters
        </Typography>
        <FilterList sx={{ ml: 2 }} />
      </Stack>
      {searchFilters && <SearchFilters />}
      <Typography fontSize={25} fontWeight={800} mt={3} mx={matches ? 10 : 3}>
        Properties {router.query.purpose}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          justifyContent: "center",
          mt: 5,
          // alignItems: "center",
        }}
      >
        {properties.map((property: any) => (
          <Property property={property} key={property.id} />
        ))}
      </Box>
      {properties.length === 0 && (
        <Stack
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt={5}
        >
          <Image alt="no result" src={noresult} />
          <Typography variant="h5" mt={2}>
            No Results Found
          </Typography>
        </Stack>
      )}
    </Box>
  );
};
export async function getServerSideProps({ query }: any) {
  console.log(query);
  const purpose = query.purpose || "for-rent"; //the double or (||) referes the default value for each consts
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";
  const furnishingStatus = query.furnishingStatus || "furnished";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&furnishingStatus=${furnishingStatus}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
