import Navbar from "../components/Navbar"

const Home = (props) => {
    return(
        <div>
            <Navbar />
            <div className="container">
                <h1>Ini Halaman { props.name } </h1>
            </div>
        </div>
    )
}

export default Home