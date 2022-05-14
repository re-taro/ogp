import React from "react";

export interface OgpInfo {
  title: string;
  icon: string;
  style: string;
}

const OgpTemplate: React.FC<OgpInfo> = ({ title, icon, style }) => (
  <html lang="ja">
    {/* eslint-disable-next-line @next/next/no-head-element */}
    <head>
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </head>
    <body>
      <div id="Wrapper">
        <h1 id="Title">
          <p>{title}</p>
        </h1>
        <div id="Name">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/webp;base64,${icon}`} alt="haxicon" width={100} height={100} />
          <h2 id="Host">
            <p>re-taro.dev</p>
          </h2>
        </div>
      </div>
    </body>
  </html>
);

export { OgpTemplate };
