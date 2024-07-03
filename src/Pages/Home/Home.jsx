import Contact from "../../Component/Contact";
import Hero from "../../Component/Hero";
import Footer from "../Shered/Footer";
import Navbar from "../Shered/Navbar";

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default Home;