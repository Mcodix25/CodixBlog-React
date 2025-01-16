import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className = "navbar">
            <h1> Codix Blog2</h1>
            <div className=" links">
                <Link to="/"> home</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }} >Create new blog</Link>

            </div>

        </nav>

     );
}
 
export default Navbar;