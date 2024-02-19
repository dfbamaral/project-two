const Navbar = (props) => {
  return (
    <header
      id="header"
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        padding: "10px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: "orange",
      }}
    ></header>
  );
};

export default Navbar;
