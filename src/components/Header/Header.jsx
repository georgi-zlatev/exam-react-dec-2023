import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
        <h1>
          <Link className="home" to="/">Local Food Events</Link>
        </h1>
        <nav>
          <Link to="/">Home</Link>
  
          {/* <div id="user">
            <Link to="/games/create">Create Game</Link>
            <Link to="/logout">Logout</Link>
          </div> */}
        </nav>
      </header>
    )
}