import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate,Outlet} from 'react-router-dom';
import { MdOutlineStars} from "react-icons/md";
import { MdOutlineFullscreen} from "react-icons/md";
import { IoGlobeOutline} from "react-icons/io5";
import { IoTimer} from "react-icons/io5";
import { GrDocumentText} from "react-icons/gr";
import { CgProfile} from "react-icons/cg";
import { HiOutlineShare} from "react-icons/hi";
import { TiStarburstOutline} from "react-icons/ti";


function Corporate() {

    const nav=useNavigate();

    const standardPolicyHandler=()=>{
        nav("standardPolicy")
      }
    
      const flatIconsHandler=()=>{
        nav("flatIcons")
      }
    
      const partnerLogosHandler=()=>{
        nav("partnerLogos")
      }
    
      const corporateLogosHandler=()=>{
        nav("corporateLogos")
      }
    
      const documentsHandler=()=>{
        nav("documents")
      }
    
      const virtualMeetingsHandler=()=>{
        nav("virtualMettings")
      }
    
      const socialSharesHandler=()=>{
        nav("socialShares")
      }
    
      const othersHandler=()=>{
        nav("others")
      }



  return (
    <div className='componentsbg'>
      <br/>
<Card className='card1'>
      <Card.Header style={{'backgroundColor':'white'}}><h3>Coporate Standards</h3></Card.Header>
      <Card.Body>

        <Row>
            <Col   lg={3} >
          <div className="navitems">

            <Button variant="light" onClick={standardPolicyHandler} className='buttons'><MdOutlineStars/>Standard Policy</Button>
            <Button variant="light" onClick={flatIconsHandler} className='buttons'><MdOutlineFullscreen/>Flat Icons</Button>
            <Button variant="light" onClick={partnerLogosHandler} className='buttons'><IoGlobeOutline/>Partner Logos</Button>
            <Button variant="light" onClick={corporateLogosHandler} className='buttons'><IoTimer/>Corporate Logos</Button>
            <Button variant="light" onClick={documentsHandler} className='buttons'><GrDocumentText/>Documents</Button>
            <Button variant="light" onClick={virtualMeetingsHandler} className='buttons'><CgProfile/>Virtual Meetings</Button>
            <Button variant="light" onClick={socialSharesHandler} className='buttons'><HiOutlineShare/>Social Shares</Button>
            <Button variant="light" onClick={othersHandler} className='buttons'><TiStarburstOutline/>Others</Button>

          </div>

          <div className="navitems1">
<Row>
  <Col>
<button variant="light" onClick={standardPolicyHandler} className='buttons1'><MdOutlineStars/>Standard Policy</button>
  </Col>
  <Col>
<button variant="light" onClick={flatIconsHandler} className='buttons1'><MdOutlineFullscreen/>FlatIcons</button>
  </Col>
</Row>
<Row>
<Col>
<button variant="light" onClick={partnerLogosHandler} className='buttons1'><IoGlobeOutline/>Partner Logos</button>
</Col>
<Col>
<button variant="light" onClick={corporateLogosHandler} className='buttons1'><IoTimer/>Corporate Logos</button>
</Col>
</Row>
<Row>
<Col>
<button variant="light" onClick={documentsHandler} className='buttons1'><GrDocumentText/>Documents</button>
</Col>
<Col>
<button variant="light" onClick={virtualMeetingsHandler} className='buttons1'><CgProfile/>Virtual Meetings</button>
</Col>
</Row>
<Row>
<Col>
<button variant="light" onClick={socialSharesHandler} className='buttons1'><HiOutlineShare/>SocialShares</button>
</Col>
<Col>
<button variant="light" onClick={othersHandler} className='buttons1'><TiStarburstOutline/>Others</button>
</Col>
</Row>

</div>

            </Col>
        <Col   md={9} className='col2'>
    <Outlet/>
    </Col>
    </Row>
      </Card.Body>
    </Card>
    </div>
      )
}

export default Corporate