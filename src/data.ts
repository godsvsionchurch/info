import Papa from "papaparse";
import { dataType, stringObjectType } from "./types";

type rowsType = stringObjectType[]
type csvsType = {[key: string]: rowsType}
type languageType = "kor" | "eng"

export const fetchData = async (setCategories: (category: dataType) => void) => {
    const csvs: csvsType = {};
    const decoder = new TextDecoder("utf-8");

    const csvsArray = await Promise.all(
        [
            [
                "data",
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7giEwAym5W8D-FX9I13fJo3xDS7QkGWAzi1c9WT8hkPx1R5qbr-3PicaW7kxegFywMytm1NOmqBdZ/pub?gid=1740377975&single=true&output=csv",
            ],
            [
                "categoryNames",
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7giEwAym5W8D-FX9I13fJo3xDS7QkGWAzi1c9WT8hkPx1R5qbr-3PicaW7kxegFywMytm1NOmqBdZ/pub?gid=352505193&single=true&output=csv",
            ],
        ].map(async ([key, url]) => {
            const response = await fetch(url);
            const csvEncoded = response.body
            if (csvEncoded) {
                const csvEncodedRead = await csvEncoded.getReader().read()
                const csvDecoded = decoder.decode(csvEncodedRead.value); // the csv text
                const data: rowsType = Papa.parse<stringObjectType>(csvDecoded, { header: true }).data; // array of objects
                return { key, data };
            } else {
                const data: rowsType = [];
                return {key, data}
            }
        })
    );

    csvsArray.forEach(({ key, data }) => {
        csvs[key] = data;
    });

    const categoryNames: {[key: string]: stringObjectType} = {};
    csvs["categoryNames"].forEach((item) => {
        categoryNames[item["category_key"]] = {
            categoryKor: item["category-kor"],
            categoryEng: item["category-eng"],
        };
    });

    const data: dataType = {};
    csvs["data"].forEach((item) => {
        const { category_key, ...content } = item;

        if (!data[category_key])
            data[category_key] = {
                kor: {
                    name: categoryNames[category_key]["categoryKor"],
                    contents: [],
                },
                eng: {
                    name: categoryNames[category_key]["categoryEng"],
                    contents: [],
                },
            };

        const contents: {[key in languageType]: stringObjectType} = { kor: {}, eng: {} };
        Object.keys(content).forEach((key) => {
            const [keyName, language] = key.split("-");
            contents[(language as languageType)][keyName] = content[key];
        });
        const languages: languageType[] = ["kor", "eng"]
        languages.forEach((l) => {
            data[category_key][l].contents!.push(contents[l]);
        });
    });
    setCategories(data);
};
