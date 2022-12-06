import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { height } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Home, Key, Search, Shop } from "@mui/icons-material";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <AppBar elevation={0} sx={{ bgcolor: "white" }}>
      <Toolbar
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: "white",
          borderBottom: "1px solid",
          borderColor: "#9e9e9e",
          height: "80px",
          mx: 10,
        }}
      >
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography variant="h4" color="#03a9f4" fontWeight={600} pl={5}>
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

              <Box p={2} width="300px" textAlign="center">
                <Link href="/" passHref>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    mb={1}
                    sx={{ "&:hover": { bgcolor: "#e1f5fe" } }}
                    p={2}
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
