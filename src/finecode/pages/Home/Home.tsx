// pages/Home/Home.tsx

import Hero from '../../components/layout/Hero/Hero'
import ShortBio from '../../components/layout/ShortBio/ShortBio';
import Showcase from '../../components/layout/Showcase/Showcase';
import Testimonials from '../../components/layout/Testimonials/Testimonials';
import Skills from '../../components/layout/Resume/Skills/Skills';
import Contact from '../Contact/Contact';
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <Hero />
            <ShortBio />
            <Showcase />
            <Skills />
            <Testimonials />
            <Contact />
        </div>
    );
}

export default Home