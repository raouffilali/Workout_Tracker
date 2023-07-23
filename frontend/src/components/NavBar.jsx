import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <header>
        <div className="container">
            <Link to="/">
                <h1>Workout Tracker</h1>
            </Link>
        </div>
    </header>
  )
}

export default NavBar
