import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { Worship } from "src/components/Worship";
import { dataType, languageType } from "src/types";

interface IProps {
    chosenCategoryKey: string;
    data: dataType;
    language: languageType;
}

const Notices: React.FC<IProps> = ({ chosenCategoryKey, data, language }) => (
    <Box
        sx={{
            padding: 2,
            marginTop: 1,
            marginBottom: 1,
        }}
    >
        {data[chosenCategoryKey][language].contents!.map((content) => (
            <Card key={content.item_name} sx={{ margin: 1, padding: 1 }}>
                <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    align="center"
                    color="secondary"
                >
                    {content.item_name}
                </Typography>
                <Typography variant="body2" align="center">
                    {content.item_content}
                </Typography>
                {content.contact_name && (
                    <>
                        <Typography
                            variant="body2"
                            align="center"
                            color="text.secondary"
                        >
                            {`${language === "kor" ? "문의" : "Contact"}: ${
                                content.contact_name
                            }`}
                        </Typography>
                        <Typography
                            variant="body2"
                            align="center"
                            color="text.secondary"
                        >
                            {`${language === "kor" ? "카카오" : "Kakao"}: ${
                                content.contact_kakao
                            }`}
                        </Typography>
                    </>
                )}
            </Card>
        ))}
    </Box>
);

export const Contents: React.FC<IProps> = ({
    chosenCategoryKey,
    data,
    language,
}) =>
    chosenCategoryKey === "worship" ? (
        <Worship />
    ) : (
        <div
            style={{
                flex: 1,
                overflowY: "auto",
            }}
        >
            <Notices {...{ chosenCategoryKey, data, language }} />
        </div>
    );
