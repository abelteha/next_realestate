import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Property from "../components/Property";

import { baseUrl, fetchApi } from "../utils/fetchApi";

const Banner: FC<{
  purpose: string;
  imageUrl: string;
  title1: string;
  title2: string;
  desc1: string;
  desc2: string;
  linkName: string;
  buttonText: string;
}> = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => (
  <Stack
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    my={5}
    direction={"row"}
  >
    <Box width="400px">
      <Image
        src={imageUrl}
        width={500}
        height={300}
        alt="banner"
        layout="responsive"
      />
    </Box>

    <Box p={5}>
      <Typography color="#424242" fontSize={15} fontWeight={100} gutterBottom>
        {purpose}
      </Typography>
      <Typography variant="h4" fontWeight={700}>
        {title1}
        <br />
        {title2}
      </Typography>
      <Typography color="#424242" fontSize={17} pt={1} pb={3}>
        {desc1}
        <br />
        {desc2}
      </Typography>
      <Button
        variant="contained"
        size="large"
        disableElevation
        sx={{
          fontSize: 15,
          bgcolor: "#e1f5fe",
          color: "black",
          "&:hover": { bgcolor: "#b3e5fc" },
        }}
      >
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Stack>
);

const Home: FC<{ propertiesForSale: any[]; propertiesForRent: any[] }> = ({
  propertiesForSale,
  propertiesForRent,
}) => {
  console.log(propertiesForSale, propertiesForRent);

  return (
    <Box mt={12}>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Box>
      <Banner
        purpose="BUY A HOME"
        title1="Find,Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          justifyContent: "center",
        }}
      >
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Box>
    </Box>
  );
};

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
