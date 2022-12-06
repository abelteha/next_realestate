import { Box } from "@mui/material";
import Head from "next/head";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
type Props = { children: ReactNode };
const Layout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          <Navbar />
        </header>
        <main>{props.children}</main>
        <footer>footer</footer>
      </Box>
    </>
  );
};

export default Layout;
