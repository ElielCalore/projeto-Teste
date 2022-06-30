import imageNavBar from "../../assets/images/navbar.png";

export function NavBar() {
  return (
    <div>
      <div className="navbar bg-light">
        <div className="container-fluid">
          <img
            src={imageNavBar}
            alt=""
            width="100%"
            height="30%"
            className="d-inline-block align-text-top"
          />
        </div>
      </div>
    </div>
  );
}
