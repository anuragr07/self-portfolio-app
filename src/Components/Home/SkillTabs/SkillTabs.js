import { useState } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import HeadingMain from "../../Heading/HeadingMain/HeadingMain";
import Skills from "../Skills/Skills";
import SkillsGraph from "../SkillsGraph/SkillsGraph";


export default function SkillTabs(){

    // useState set to grid view
    const [tab, setTab] = useState('grid');

    // These functions will change the state of the the tab
    const setGrid = () => {
      setTab('grid');
    }
    const setGraph = () => {
      setTab('graph');
    }

    // To get the type of tab
    const getTab = () => {
      switch(tab){
        case 'grid': return <Skills></Skills>
        case 'graph': return <SkillsGraph></SkillsGraph>
        default: return <>Default</>
      }
    }


    return (
      <>
      <Container>
        <Navbar>
          <Container className="tabs-nav">
            <Navbar.Brand>
                <HeadingMain name="Skills"></HeadingMain>  
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link onClick={setGrid}>Grid</Nav.Link>
              <Nav.Link onClick={setGraph}>Graph</Nav.Link>
              {/* Add this line to the avtive nav links -- className="border border-dark rounded mb-0" -- */}
            </Nav>
          </Container>
        </Navbar>
      </Container>

      <Container>
        {getTab()}
      </Container>
      </>
    );
}