import Image from 'next/image'

const Home = () => (
  <div style={{ color: "#222", margin: "0 auto", maxWidth: "700px" }}>
    <h1>This is OGP Server for Rintaro!</h1>
    <ul style={{ background: "#f6f6f6", padding: "30px" }}>
      <li>
        GitHub:
        <a href="https://github.com/re-taro/ogp.re-taro.dev" target="_blank" rel="noreferrer">
          https://github.com/re-taro/ogp.re-taro.dev
        </a>
      </li>
    </ul>
    <h2>Sample</h2>
    <p>https://ogp.re-taro.dev/api/ogp?title=ogp.re-taro.dev</p>
    <Image src={"https://ogp.re-taro.dev/api/ogp?title=ogp.re-taro.dev"} width={"100%"} />
  </div>
);

export default Home;
