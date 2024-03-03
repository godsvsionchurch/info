import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { fetchData } from "src/data";
import { LanguageSwitch } from "src/components/LanguageSwitch";
import { Menu } from "src/components/Menu";
import { Loading } from "src/components/Loading";
import { Contents } from "src/components/Contents";
import { Logo } from "src/components/Logo";
import { Box, useTheme } from "@mui/material";
import { dataType, languageType } from "src/types";

export const App = () => {
    const [chosenCategoryKey, setChosenCategoryKey] =
        useState<string>("teams_recruit");
    const [language, setLanguage] = useState<languageType>("kor");
    const [data, setData] = useState<dataType | null>(null);

    const theme = useTheme();

    useEffect(() => {
        fetchData(setData);
    }, []);

    return (
        <Container maxWidth="sm">
            <Box
                top={0}
                position="sticky"
                bgcolor={theme.palette.background.default}
                padding={1}
                zIndex={1}
            >
                <Logo />
                <LanguageSwitch {...{ language, setLanguage }} />
                {data ? (
                    <Menu
                        {...{
                            data,
                            language,
                            chosenCategoryKey,
                            setChosenCategoryKey,
                        }}
                    />
                ) : (
                    <Loading language={language} />
                )}
            </Box>
            {data && <Contents {...{ chosenCategoryKey, data, language }} />}
        </Container>
    );
};
