import SideNavbar from "../Components/sideNavbar";
import HomePage from "../Components/HomePage";
import './Home.css'

function Home({sideNavbar}){
    return (
        <>
        <div className="home">
            <SideNavbar sideNavbar={sideNavbar} />
            <HomePage sideNavbar={sideNavbar} />
        </div>
        </>
    )
}

export default Home;