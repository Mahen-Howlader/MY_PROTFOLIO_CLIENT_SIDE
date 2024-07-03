import Contact from "../../Component/Contact";
import Hero from "../../Component/Hero";
import Skills from "../../Component/Skills";
import Footer from "../Shered/Footer";
import Navbar from "../Shered/Navbar";

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default Home;