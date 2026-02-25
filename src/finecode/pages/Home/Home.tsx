// pages/Home/Home.tsx

import Hero from '../../components/layout/Hero/Hero'
import HomeNavbar from '../../components/layout/HomeNavbar/HomeNavbar';
import ShortBio from '../../components/layout/ShortBio/ShortBio';
import Showcase from '../../components/layout/Showcase/Showcase';
import Testimonials from '../../components/layout/Testimonials/Testimonials';
import Skills from '../../components/layout/Resume/Skills/Skills';
import Contact from '../Contact/Contact';
import './Home.css'
import LogoScroll from '../../components/layout/LogoScroll/LogoScroll';

function Home() {
    return (
        <div className="Home">
            <Hero />
            <HomeNavbar />
            <ShortBio />
            <Showcase />
            <Skills />
            <Testimonials />
            <LogoScroll />
            <Contact />
        </div>
    );
}

export default Home
