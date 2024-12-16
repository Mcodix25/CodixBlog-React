const Navbar = () => {
    return ( 
        <nav className = "navbar">
            <h1> Mc Rod Blog</h1>
            <div className=" links">
                <a href="/"> home</a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }} >Create new blog</a>

            </div>

        </nav>

     );
}
 
export default Navbar;