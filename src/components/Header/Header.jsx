export default function Header() {
  return (
    <>
      <header>
        <div className="logo-box">
          <img src="./public/assets/images/logo.svg" alt="Logo" />
        </div>
        <div className="dropdown-units-box">
          <button className="dropdown-units">
            <div style={{display: "flex", alignItems: "center"}}>
              <img src="./public/assets/images/icon-units.svg" alt="icon-units" />
            </div>
            Units
            <div>
              <img src="./public/assets/images/icon-dropdown.svg" alt="icon-dropdown" />
            </div>
          </button>
        </div>
      </header>
    </>
  );
}
