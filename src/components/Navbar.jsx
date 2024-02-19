import Image from "../assets/Image.jpg";


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
        justifyContent: 'center',
        alignItems: "center",
        height: 50,
        backgroundColor: "orange",
      }}
    > 
    <img src={Image} style={{height:'40px', width:'40px', borderRadius:'5px'}} alt="" />
    <h2>MyGest App</h2>
    </header>
  );
};

export default Navbar;
