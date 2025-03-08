import { Link } from "react-router"

const NavMenu: React.FC = () => {
    return (
       <nav className="bg-amber-50 py-2">
        <div className="container mx-auto">
            <ul className="flex flex-row flex-wrap gap-5 justify-center uppercase">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/weather">Weather</Link>
                </li>
            </ul>
        </div>
       </nav>
    )
}

export default NavMenu