import Head from "next/head";
import Navbar from "./navbar";

export default function WallTiles() {
  return (
    <div className="container">
      <Head>
        <title>Wall Tiles</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossorigin="anonymous"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="container">
          <p>
            Covering the walls with tile lately is not only specific to bathrooms. It is now
            frequently preferred as decoration. However, people may find it challenging to choose.
            There are so many options, and it's hard to find a compatible option. In our article, we
            will tell you how to choose a suitable tile for your walls.
          </p>
        </div>
      </main>
    </div>
  );
}
