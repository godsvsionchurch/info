import React from "react";
import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { SizeMe } from "react-sizeme";
import "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();
export const Worship = () => {
    const [numPages, setNumPages] = useState<number>();
    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };
    return (
        <SizeMe monitorHeight refreshRate={128} refreshMode={"debounce"}>
            {({ size }) => (
                <Document
                    file="https://raw.githubusercontent.com/godsvsionchurch/worship/main/Worship.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array(numPages)
                        .fill(null)
                        .map((_, pageZeroIndex) => (
                            <Page
                                key={pageZeroIndex}
                                pageNumber={pageZeroIndex + 1}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                width={size.width!}
                            />
                        ))}
                </Document>
            )}
        </SizeMe>
    );
};
