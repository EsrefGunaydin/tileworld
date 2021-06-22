import Link from "next/link";

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Tile World
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link href="/">
                <a className="nav-link active">Home</a>
              </Link>
              <Link href="./walltiles">
                <a className="nav-link">Wall Tiles</a>
              </Link>
              <Link href="./subwaytiles">
                <a className="nav-link">Subway Tiles</a>
              </Link>
              <Link href="./pooltiles">
                <a className="nav-link">Pool Tiles</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
