import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { languageType } from "src/types";

export const Loading: React.FC<{language: languageType}> = ({ language }) => (
    <Box
        position="fixed"
        top="0"
        left="0"
        height="100vh"
        width="100vw"
        zIndex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
    >
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress />
            <Typography margin={2}>
                {language === "kor" ? "로딩중..." : "Loading data..."}
            </Typography>
        </Box>
    </Box>
);
