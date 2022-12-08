import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { height } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Home, Key, Search, Shop } from "@mui/icons-material";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const matches = useMediaQuery("(min-width:600px)");
  const handleClick = () => {
    setIsDrawerOpen(false);
  };
  return (
    <AppBar elevation={matches ? 0 : 1} sx={{ bgcolor: "white" }}>
      <Toolbar
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: "white",
          borderBottom: "1px solid",
          borderColor: matches ? "#9e9e9e" : "#fff",
          height: "80px",
          mx: matches ? 10 : 0,
        }}
      >
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography
            variant="h4"
            color="#03a9f4"
            fontWeight={600}
            pl={matches ? 5 : 2}
          >
            <Link href="/"> Realtor</Link>
          </Typography>

          <Box>
            <IconButton
              aria-label="menu"
              onClick={() => setIsDrawerOpen(true)}
              size="large"
              sx={{
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box textAlign="left">
                <IconButton
                  aria-label="close"
                  onClick={() => setIsDrawerOpen(false)}
                  size="large"
                  sx={{
                    color: "black",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              <Box p={2} width={matches ? "300px" : "250px"} textAlign="center">
                <Link href="/" passHref>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    mb={1}
                    sx={{ "&:hover": { bgcolor: "#e1f5fe" } }}
                    p={2}
                    onClick={handleClick}
                  >
                    <Home color="info" />
                    <Typography>Home</Typography>
                  </Stack>
                </Link>
                <Link href="/search" passHref>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    mb={1}
                    sx={{ "&:hover": { bgcolor: "#e1f5fe" } }}
                    p={2}
                    onClick={handleClick}
                  >
                    <Search color="info" />
                    <Typography>Search</Typography>
                  </Stack>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    mb={1}
                    sx={{ "&:hover": { bgcolor: "#e1f5fe" } }}
                    p={2}
                    onClick={handleClick}
                  >
                    <Shop color="info" />
                    <Typography>Buy Property</Typography>
                  </Stack>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    mb={1}
                    sx={{ "&:hover": { bgcolor: "#e1f5fe" } }}
                    p={2}
                    onClick={handleClick}
                  >
                    <Key color="info" />
                    <Typography>Rent Property</Typography>
                  </Stack>
                </Link>
              </Box>
            </Drawer>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
