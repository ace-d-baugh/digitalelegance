// pages/Resume/Resume.tsx

import Education from "../../components/layout/Resume/Education/Education";
import Experience from "../../components/layout/Resume/Experience/Experience";
import Header from "../../components/layout/Resume/Header/Header";
import Recognition from "../../components/layout/Resume/Recognition/Recognition";
import Skills from "../../components/layout/Resume/Skills/Skills";
import Summary from "../../components/layout/Resume/Summary/Summary";
import Work from "../../components/layout/Resume/Work/Work";
import './Resume.css';

function Resume() {
    return (
        <div className="Resume">
            <div>
                <Header />
                <Summary />
                <Skills />
                <Work />
                <Education />
                <Experience />
                <Recognition />
            </div>
        </div>
    );
}

export default Resume