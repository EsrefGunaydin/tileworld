import Head from "next/head";
import Navbar from "./navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Tile World</title>
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
        <h1 className="display-5 text-center">Welcome to Tile World!</h1>

        <figure class="text-center container">
          <p>
            Tile is a popular material for home improvement projects. There are many different types
            of tiles to choose from, but they all serve different purposes and have their own unique
            benefits. In these blog posts, we'll discuss the types of tile you can use in your
            bathroom, kitchen, or living room - as well as why it's important to match your tile
            style with the aesthetic you're trying to create!{" "}
          </p>
          <p>
            Quartz Countertops are an{" "}
            <Link href="https://www.marblesystems.com/quartz-countertops/"> important </Link> part
            of creating a sleek, modern kitchen. Quartz is resistant to stains and scratches - which
            makes it the most sought-after countertop material on the market! There are many
            different colors of quartz available; however white will go with any color scheme in
            your kitchen. White will never dissapoints.***
          </p>
        </figure>

        <div className="container card p-4">
          <a href="./walltiles">
            <h3>Wall Tiles &rarr;</h3>
          </a>
          <p>
            Covering the walls with tile lately is not only specific to bathrooms. It is now
            frequently preferred as decoration. However, people may find it challenging to choose.
            There are so many options, and it's hard to find a compatible option. In our article, we
            will tell you how to choose a suitable tile for your walls.
          </p>
        </div>
        <div className="container card p-4">
          <a href="./subwaytiles">
            <h3>Subway Tiles &rarr;</h3>
          </a>
          <p>
            Subway tiles continue to be used no matter how long time passes. Of course, there are
            reasons for using it so much. In our article, we will tell you both these reasons and
            how to make the right choice. You will choose to change the whole design of your
            bathroom or kitchen or add luxury.
          </p>
        </div>
        <div className="container card p-4">
          <a href="./pooltiles">
            <h3>Pool Tiles &rarr;</h3>
          </a>
          <p>
            {" "}
            Pools appear as indispensable parts of many homes. So what types of tiles are used in
            pools? Or which types should you prefer? You have more options than you think. We will
            tell you about swimming pool tiles in our article.
          </p>
        </div>
      </main>
    </div>
  );
}
