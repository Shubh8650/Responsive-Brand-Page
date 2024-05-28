const Navigation = () => {
  return (
    <nav className="navigation container">
      <div className="nav-logo">
        <img src="../../public/Images/brand_logo.png" alt="Brand_logo" />
      </div>

      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Navigation;
