import Contact from "../../Component/Contact";
import Education from "../../Component/Education";
import Experience from "../../Component/Experience";
import Hero from "../../Component/Hero";
import Project from "../../Component/Project";
import Skills from "../../Component/Skills";
import Footer from "../Shered/Footer";
import Navbar from "../Shered/Navbar";

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Skills></Skills>
            <Experience></Experience>
            <Project></Project>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default Home;