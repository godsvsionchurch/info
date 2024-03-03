import React from "react";
import { Grid, Switch, Typography } from "@mui/material";
import { languageType } from "src/types";

export const LanguageSwitch: React.FC<{
    language: languageType;
    setLanguage: React.Dispatch<React.SetStateAction<languageType>>;
}> = ({ language, setLanguage }) => (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item>
                <Typography>한글</Typography>
            </Grid>
            <Grid item>
                <Switch
                    color="default"
                    checked={language === "eng"}
                    onChange={() =>
                        setLanguage(language === "kor" ? "eng" : "kor")
                    }
                />
            </Grid>
            <Grid item>
                <Typography>ENG</Typography>
            </Grid>
        </Grid>
);
