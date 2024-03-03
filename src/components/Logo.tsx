import { Box } from "@mui/material";
import LogoPath from "src/assets/gods_vision_church_logo.svg";
import React from "react";

export const Logo: React.FC = () => (
    <>
        <Box  display="flex" justifyContent="center">
            <img
                style={{
                    maxWidth: "25%",
                }}
                src={LogoPath}
                alt="GVC Logo"
            />
        </Box>
    </>
);
