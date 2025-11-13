import React from "react";
import { SizeMe } from "react-sizeme";

export const Worship: React.FC = () => {
  const src = "https://docs.google.com/document/d/e/2PACX-1vSXBxKugrhH52Z9BQxrgzxR6Uv8wUjfiTULXAQ9c-tsVyMsOeWhWiiSy5GCCgo7FjDPgsIx9IR7OPb9/pub?embedded=true";

  return (
    <SizeMe monitorHeight refreshRate={128} refreshMode="debounce">
      {({ size }) => {
        
        const width =
          typeof size.width === "number" && size.width > 0 ? size.width : 800;

        // A4 Ratio
        const height = Math.round(width * 1.414);

        return (
          <div style={{ width: "100%", height, overflow: "hidden" }}>
            <iframe
              src={src}
              title="Worship Lyrics"
              style={{ width: "100%", height: "100%", border: 0 }}
              allowFullScreen
            />
          </div>
        );
      }}
    </SizeMe>
  );
};