import React from "react";

export interface OgpInfo {
  title: string;
  date: string;
  style: string;
}

const OgpTemplate: React.FC<OgpInfo> = ({ title, date, style }) => (
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
          {/* eslint-disable-next-line @next/next/no-img-element, no-secrets/no-secrets */}
          <img src={"https://res.cloudinary.com/re-taro/image/upload/v1652619915/ogp/rintaro_vlrzsy.webp"} alt="icon" width={100} height={100} />
          <h2 id="Host">
            <p>re-taro.dev</p>
          </h2>
        </div>
        <h2 id="Date">
          <p>{date}</p>
        </h2>
      </div>
    </body>
  </html>
);

export { OgpTemplate };
