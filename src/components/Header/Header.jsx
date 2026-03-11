export default function Header() {
  return (
    <>
      <header>
        <div className="logo-box">
          <img src="./assets/images/logo.svg" alt="Logo" />
        </div>
        <div className="dropdown-units-box">
          <details className="dropdown">
            <summary className="dropdown-units m-2 cursor-pointer">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src="./assets/images/icon-units.svg" alt="icon-units" />
              </div>
                Units{" "}
              <div>
                <img
                  src="./assets/images/icon-dropdown.svg"
                  alt="icon-dropdown"
                />
              </div>
            </summary>
            <ul className="menu dropdown-content menu-units right-0 rounded-lg z-1 p-2 shadow-sm">
              <li>
                <a className="menu-units-link rounded-lg">Item 1</a>
              </li>
              <li>
                <a className="menu-units-link rounded-lg">Item 2</a>
              </li>
            </ul>
          </details>
          {/* <button className="dropdown-units">
            <div style={{display: "flex", alignItems: "center"}}>
              <img src="./assets/images/icon-units.svg" alt="icon-units" />
            </div>
            Units
            <div>
              <img src="./assets/images/icon-dropdown.svg" alt="icon-dropdown" />
            </div>
          </button> */}
        </div>
      </header>
    </>
  );
}
