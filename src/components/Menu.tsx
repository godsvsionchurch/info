import { Button, Grid } from "@mui/material";
import React from "react";
import { dataType, languageType } from "src/types";

export const Menu: React.FC<{
    data: dataType;
    language: languageType;
    chosenCategoryKey: string;
    setChosenCategoryKey: React.Dispatch<React.SetStateAction<string>>;
}> = ({ data, language, chosenCategoryKey, setChosenCategoryKey }) => {
    data["worship"] = { kor: { name: "찬양가사" }, eng: { name: "Worship" } };
    return (
        <Grid container justifyContent="center" spacing={1}>
            {Object.keys(data).map((categoryKey) => {
                const category = data[categoryKey][language];
                return (
                    <Grid item xs key={categoryKey}>
                        <Button
                            fullWidth
                            variant={
                                chosenCategoryKey === categoryKey
                                    ? "contained"
                                    : "outlined"
                            }
                            sx={{
                                background:
                                    chosenCategoryKey === categoryKey
                                        ? "default"
                                        : "white",
                                whiteSpace: "nowrap",
                            }}
                            onClick={() => setChosenCategoryKey(categoryKey)}
                        >
                            {category.name}
                        </Button>
                    </Grid>
                );
            })}
        </Grid>
    );
};
