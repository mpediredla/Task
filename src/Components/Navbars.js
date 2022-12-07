import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import Sonnet from '../../components/Sonnet';
import { FiUser } from 'react-icons/fi';
import { IoIosHome} from 'react-icons/io';
import { TiArrowBackOutline} from 'react-icons/ti';
import { BiBox} from 'react-icons/bi';
import { BiCalendarEvent} from 'react-icons/bi';
import { RiGovernmentLine} from 'react-icons/ri';
import { VscGlobe} from 'react-icons/vsc';
import { HiOutlineMailOpen} from 'react-icons/hi';
import { MdWebAsset} from 'react-icons/md';
import { VscDeviceCameraVideo} from 'react-icons/vsc';
import { HiOutlineDocumentText} from 'react-icons/hi';
import { IoBulbOutline} from 'react-icons/io5';
import { TbScreenShareOff } from "react-icons/tb";
import { TiMessages} from "react-icons/ti";
import { HiOutlineBookOpen} from "react-icons/hi";
import { HiOutlineCube} from "react-icons/hi";
import { RiBookMarkLine} from "react-icons/ri";
import { IoMdAppstore} from "react-icons/io";
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Outlet} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { VscTypeHierarchy} from "react-icons/vsc";



function Navbars() {

  const nav=useNavigate();

  const homeHandler=()=>{
    nav("employee")
  }

  const logoutHandler=()=>{
    nav("/")
  }

  const employeeHandler=()=>{
    nav("employee")
  }

  const dashboardHandler=()=>{
    nav("employee/dashboard")
  }

  const referralsHandler=()=>{
    nav("employee/referrals")
  }

  const suggestionsHandler=()=>{
    nav("employee/suggestions")
  }
  
  const upcomingEventsHandler=()=>{
    nav("employee/upcomingEvents")
  }

  const hierarchyHandler=()=>{
    nav("employee/hierarchy")
  }

  const standardsHandler=()=>{
    nav("standards")
  }

  const corporateHandler=()=>{
    nav("standards/corporate")
  }

  const socialPolicyHandler=()=>{
    nav("standards/socialPolicy")
  }

  const emailSignatureHandler=()=>{
    nav("standards/emailSignature")
  }

  const resourcesHandler=()=>{
    nav("resources")
  }

  const liabraryAssetsHandler=()=>{
    nav("resources/liabraryAssets")
  }

  const internalDepotHandler=()=>{
    nav("resources/internalDepot")
  }

  const documentsHandler=()=>{
    nav("resources/documents")
  }

  const ideaHubHandler=()=>{
    nav("resources/ideaHub")
  }

  const cerificationsHandler=()=>{
    nav("resources/certifications")
  }

  const hubbleHandler=()=>{
    nav("https://hubble.miraclesoft.com")
  }

  const yourAppsHandler=()=>{
    nav("yourApps")
  }
  
  const mtalkHandler=()=>{
    nav("yourApps/mtalk")
  }

  const blogHandler=()=>{
    nav("yourApps/blog")
  }

  

  return (

    <>
    <div className='navbarsBG'>
      <div className='homeNav'>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
      <img className='img' src='https://blog.miraclesoft.com/wp-content/uploads/2018/02/miraclewhite-1.png'/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Button variant="dark" onClick={homeHandler} className='elecronicsButton'>Home</Button>
            <Nav.Link href="https://hubble.miraclesoft.com">Hubble</Nav.Link>
            <Nav.Link href="https://mapi.miraclesoft.com/#1">Email</Nav.Link>
            <NavDropdown title="Manikanta Pediredla" id="collasible-nav-dropdown" className='dropodown'>
              <button  className='logout'>Password Reset</button>
              <button  onClick={logoutHandler} className='logout'>Logout</button>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>



<div className='tabs'>
    <Tabs 
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home"  title={ <span className='navtittles' onClick={employeeHandler} ><FiUser size={25} />{"Employee"}</span>}>


      <Navbar className='lastnav'>
        <Container>
          <Nav className="lastnavLinks">
            <Row>
              <Col>
          <Button variant="" onClick={dashboardHandler} className='lastnavButtons'><IoIosHome className='iconPosition'/>Dashboard</Button>
          </Col>
          <Col>
            <Button variant="" onClick={referralsHandler} className='lastnavButtons'><TiArrowBackOutline className='iconPosition'/>Referrals</Button>
            </Col>
            <Col>
            <Button variant="" onClick={suggestionsHandler} className='lastnavButtons'><BiBox className='iconPosition'/>Suggestions</Button>
            </Col>
            <Col>
            <Button variant="" onClick={upcomingEventsHandler} className='lastnavButtons'><BiCalendarEvent className='iconPosition'/>UpcomingEvents</Button>
            </Col>
            <Col>
            <Button variant="" onClick={hierarchyHandler} className='lastnavButtons'><VscTypeHierarchy className='iconPosition'/>Hierarchy</Button>
            </Col>
            </Row>
          </Nav>
        </Container>
      </Navbar>

      </Tab>

      <Tab eventKey="Standads" title={ <span className='navtittles' onClick={standardsHandler}><HiOutlineCube size={25}/>{"Standards"}</span>} >


      <Navbar className='lastnav'>
        <Container>
          <Nav className="lastnavLinks">
            <Row>
              <Col>
          <Button variant="" onClick={corporateHandler} className='lastnavButtons'><RiGovernmentLine className='iconPosition'/>Corporate</Button>
          </Col>
          <Col>
            <Button variant="" onClick={socialPolicyHandler} className='lastnavButtons'><VscGlobe className='iconPosition'/>Social Policy</Button>
            </Col>
            <Col>
            <Button variant="" onClick={emailSignatureHandler} className='lastnavButtons'><HiOutlineMailOpen className='iconPosition'/>Email Signature</Button>
            </Col>
            </Row>

          </Nav>
        </Container>
      </Navbar>


      </Tab>
      <Tab eventKey="Resources" title={ <span className='navtittles' onClick={resourcesHandler}><RiBookMarkLine size={25}/>{"Resources"}</span>}>

      <Navbar  className='lastnav'>
        <Container>
          <Nav className="lastnavLinks">
            <Row>
              <Col>
            <Button variant="" onClick={liabraryAssetsHandler} className='lastnavButtons'><MdWebAsset className='iconPosition'/>Liabrary Assets</Button>
            </Col>
            <Col>
            <Button variant="" onClick={internalDepotHandler} className='lastnavButtons'><VscDeviceCameraVideo className='iconPosition'/>Internal Depot</Button>
            </Col>
            <Col>
            <Button variant="" onClick={documentsHandler} className='lastnavButtons'><HiOutlineDocumentText className='iconPosition'/>Documents</Button>
            </Col>
            <Col>
            <Button variant="" onClick={ideaHubHandler} className='lastnavButtons'><IoBulbOutline className='iconPosition'/>Idea Hub</Button>
            </Col>
            <Col>
            <Button variant="" onClick={cerificationsHandler} className='lastnavButtons'><IoBulbOutline className='iconPosition'/>Certifications</Button>
            </Col>
            </Row>
          </Nav>
        </Container>
      </Navbar>

      </Tab>
      <Tab eventKey="Your Apps" title={ <span className='navtittles' onClick={yourAppsHandler}><IoMdAppstore size={25}/>{"Your Apps"}</span>}>

      <Navbar  className='lastnav'>
        <Container>
          <Nav className="lastnavLinks">

            <Row>
              <Col>
              <Button variant="" className='lastnavButtons' href="https://hubble.miraclesoft.com"><TbScreenShareOff className='iconPosition'/>Hubble</Button>

          </Col>
          <Col>
            <Button variant="" onClick={mtalkHandler} className='lastnavButtons'><TiMessages className='iconPosition'/> mTalk</Button>
            </Col>
            <Col>
            <Button variant="" onClick={blogHandler} className='lastnavButtons'><HiOutlineBookOpen className='iconPosition'/>Blog</Button>
            </Col>
            </Row>

          </Nav>
        </Container>
      </Navbar>

      </Tab>

    </Tabs>
    </div>
    <Outlet/>
    </div>
   </>
  )
}

export default Navbars