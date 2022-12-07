import React, { useState } from 'react';
import "./Screen1.css";
import { Chart } from 'primereact/chart';
import { GiHospitalCross} from 'react-icons/gi';
import { MdDateRange} from 'react-icons/md';
import { FaLaptopMedical} from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css"; 
import { Bar } from "react-chartjs-2";
import { FaUser} from 'react-icons/fa';
import { FaDollarSign} from 'react-icons/fa';
// import { CiClock2} from 'react-icons/ci';
import { BsClock } from "react-icons/bs";
import { GMap } from 'primereact/gmap';
import { width } from '@mui/system';
// import img1 from './location.png'

function Example() {

    const [basicData] = useState({
        labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: [65, 59, 45, 50, 56, 55, 40,49,55, 56, 55, 40,49,55,38,65, 59, 40, 60, 56, 55, 40,49,52, 56]
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'coral',
                data: [20, 15, 10, 5, 15, 20, 25,10,5, 25, 20, 15,10,20,25,15, 5, 10, 15, 25, 10, 5,10,15, 10]
            }
        ]
    });

    const [basicData1] = useState({
        labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: [5, 10, 10, 5, 10, 15, 20,30,35, 25, 40, 50,55,60,65,65, 60, 55, 50, 45, 35, 20,15,10, 5]
            },
        ]
    });



    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        let basicOptions1 = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };



        return {
            basicOptions,
            basicOptions1
        }
    }

    const { basicOptions,basicOptions1 } = getLightTheme();



    



  return (
    <div className='background1'>
        <div className='firstRow'>
            <GiHospitalCross size={60} className='doctorIcon'/>
            <div className='pageHeadline'>
            <h3 style={{'color':'deepskyblue','marginTop':'0%'}}>Cayman lslands HSA</h3>
            <strong >Traffic Dashboard-September2022</strong>
            </div>
            <FaLaptopMedical size={65} className='medicalIcon'/>
            <MdDateRange size={65} className='dateIcon'/>
        </div>
        <hr
   style={{
   backgroundColor: "blue",
   height: "5px",
   border: "none",
   marginTop:'0%',
//    width: '10cm'
   }}
/>

<div className='firstRow1'>
<Card className='dataCards' >
      <Card.Body className='cardBody' style={{'backgroundColor':"steelblue"}}>
        <h1>1278</h1>
        <strong>Total Patients</strong>
      </Card.Body>
    </Card>
    <Card className='dataCards'>
      <Card.Body className='cardBody' style={{'backgroundColor':"rgb(128, 117, 199)"}}>
      <h1>37%</h1>
        <strong>Admission Rate</strong>
      </Card.Body>
    </Card>
    <Card className='dataCards'>
      <Card.Body className='cardBody' style={{'backgroundColor':"lightcoral"}}>
      <h1>42 min</h1>
        <strong>Waiting Time (min)</strong>
      </Card.Body>
    </Card>
    <Card className='dataCards'>
      <Card.Body className='cardBody' style={{'backgroundColor':"sandybrown"}}>
      <h1>1.2 Days</h1>
        <strong>Average LOS</strong>
      </Card.Body>
    </Card>
    <Card className='dataCards'>
      <Card.Body className='cardBody' style={{'backgroundColor':"olivedrab"}}>
      <h1>$3.5K</h1>
        <strong>Average Treatment Cost</strong>
      </Card.Body>
    </Card>
</div>



<div className='firstRow2'>
    <Row>
        <Col>
<Card className='dataCards1' >
      <Card.Body className='cardBody' style={{'backgroundColor':"steelblue"}}>
        <h1>1278</h1>
        <strong>Total Patients</strong>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className='dataCards1'>
      <Card.Body className='cardBody' style={{'backgroundColor':"rgb(128, 117, 199)"}}>
      <h1>37%</h1>
        <strong>Admission Rate</strong>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className='dataCards1'>
      <Card.Body className='cardBody' style={{'backgroundColor':"lightcoral"}}>
      <h1>42 min</h1>
        <strong>Waiting Time (min)</strong>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    <Row>
    <Col>
    <Card className='dataCards1'>
      <Card.Body className='cardBody' style={{'backgroundColor':"sandybrown"}}>
      <h1>1.2 Days</h1>
        <strong>Average LOS</strong>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className='dataCards1'>
      <Card.Body className='cardBody' style={{'backgroundColor':"olivedrab"}}>
      <h1>$3.5K</h1>
        <strong>Average Treatment Cost</strong>
      </Card.Body>
    </Card>
    </Col>
    </Row>
</div>



<div className='mainBlock'>

<div>
<div className='firdtBlock'>
            <div >
                <Card className="bar1">
                <Card.Header style={{'textAlign':'center','backgroundColor':'skyblue','color':'white'}}><strong>Patient VS Admission</strong></Card.Header>
                <Chart type="bar" data={basicData} options={basicOptions} style={{'height':'270px'}}/>
                </Card>
            </div>
            <div >
                <Card className="bar2">
                <Card.Header style={{'textAlign':'center','backgroundColor':'skyblue','color':'white'}}><strong>Daily Traffic Patterns</strong></Card.Header>
                <Chart type="bar" data={basicData1} options={basicOptions1} style={{'height':'270px'}}/>
                </Card>
            </div>
 </div>

<div className='secondBlock'>
            <div>
            <Card className='refferalsCard'>
            <Card.Header style={{'textAlign':'center','backgroundColor':'skyblue','color':'white'}}><strong>Top Inbound Refferals</strong></Card.Header>
                <Card.Body>
                    
        <Row className='refferalData'>
            <Col lg='7'>
            {/* <strong>St.George Clinic</strong> */}
            </Col>
            <Col lg='2'>
            <strong><FaUser size={30} className='userIcon'/></strong>
            </Col>
            <Col lg='2'>
            <strong><FaDollarSign size={30} className='userIcon'/></strong>
            </Col>
        </Row>

        <Row className='refferalData'>
            <Col lg='7'>
            <strong>St.George Clinic</strong>
            </Col>
            <Col lg='2'>
            <strong>240</strong>
            </Col>
            <Col lg='3'>
            <strong>37.5k</strong>
            </Col>
        </Row>
        <Row className='refferalData'> 
            <Col lg='7'>
            <strong>Rapid Care</strong>
            </Col>
            <Col lg='2'>
            <strong>217</strong>
            </Col>
            <Col lg='3'>
            <strong>44.5k</strong>
            </Col>
        </Row>
        <Row className='refferalData'>
            <Col lg='7'>
            <strong>Town Clinic</strong>
            </Col>
            <Col lg='2'>
            <strong>146</strong>
            </Col>
            <Col lg='3' >
            <strong >21k</strong>
            </Col>
        </Row>
        <Row className='refferalData'>
            <Col lg='7'>
            <strong>Dr.Andrew Chin</strong>
            </Col>
            <Col lg='2'>
            <strong>67</strong>
            </Col>
            <Col lg='3'>
            <strong>12.5k</strong>
            </Col>
        </Row>
                </Card.Body>
            </Card>
            </div>
            <div>
            <Card className='mapCard'>
            <Card.Header style={{'textAlign':'center','backgroundColor':'skyblue','color':'white'}}><strong>Localization</strong></Card.Header>
                <img className='mapImg' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxgYGBcXGBgbHRcYGBgXGBsYGhgYHSggGholGxcYIjEhJyktLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUHBv/EAEEQAAECAwQGCAQDBwQDAQAAAAECEQADIRIxQVEEBWFxgZETIjJSobHB0QZCYvBykuEHFBUjgqLCM1Oy8UNz0hb/xAAbAQACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EADsRAAEDAQUFBwQBAwIHAQAAAAEAAgMRBBIhMUEFUWFxgRMikaGxwfAUMtHhQgZScpLxMzRDYoKy0iP/2gAMAwEAAhEDEQA/AOiHSpvfH5kQv3qd3x+ZEVdFZClKZ6ADImtW2A02iGSKOyQHbGpZ8N45x57sm7klff8A3HxVqtKmgPbo7UKTXhui/VukTFzACokAEm7d5kQLpNEpTTFRZ8aC/YPGDtSS6KVmW5f9+ECna1gKLCXOkpU780ZNWbTPQDxP6NzhrRzMDTtLSlyQCSSWrdcHY0oBAc3SVKuZI2E+JJhjtbPAxsbm3n0rdABd13DiSFpNic7HIbytCZpSUhTqL0AAv2nkRflAUzT1q7LgfeNwgVNkYOfDwqfCC5Or1qv6rVb5uCfdoRdLJajdiYBwYASP8pCLreTbxTHZsjFXefs3PxohFHElz93k/e2L5OirUO6k4mj7herxg+RIQn5XPeLFQOwEMD9vFwlk1HWzOPF6iG4Nkayno2uP+Tz3z0uhDfaf7R4+wyHmhZWhoGBUdvokerwWmgYkvhZqeIu8jDBr3f8ACWH5vbnCMx6kCuKaeBLGNOOywMbdaxvgPnjilnPc7ElIve5IzGG8XjjDWzmYeyRUF2xD03i8eUOF8CfmSK8h6NFvp4v7R4BdUp7KmJJIA3vyw4tEOkOFRkavxF26sSVJKaksxvTU+jcfGHMzZZJ+ZLPxu8GjnWaEihaPBRUoWfoCFGnUVl+kDTtHmp6qEsNhv/EacqCDpiaZpcORtOOIO+M3Xuv5UpLdOgH5glQKhwS5EZk8boJA1hOO/MY78/mqj6btfsaSdzRU+ASVoU5ms0vYFIG9gb4eRq1Zqrqjbfyjzp+LZQNFzTtH6mNfRfi/RVosrmWVN8ySzi4uKPdApO2OJx40JPnmiN2RaM3QyDmD+KrakSUI7ID95Xv/ANDbE1u/WvyPoMd8Q0OemaAZakrGaCCOYghaSgMQ4OY6g/XlfGrFZI4+9md5x/Q6Kn292nTJZuuNVp0mSqWrgruKFxc+IxBMci1pq9ciYqXMDFPIjAjMGO2hSjQV2MGbdcB9vHmf2gaoSvR+kA/mSxapUFFbQBNT3sWaLyxgtvDRbmxNpGCUQv8AscfAnXlodKcseYyZRWQlIKlEsAKkk3ACOq/CWoxosrrMZi2KyLg3yg5BzvJMYH7O9VgBekLwNhGw0tKG2oHFUe6WthaX1QMfmOyn6mAB7Im3nnkNTyCZ2/tBz3mzM+0fdxO7kPXkFIO/Vv8ADj9vFc3SpQUxNcSBR8j7F4G1tPKR0aeqSHLXgHBx8x2XDeIygGoIbs2y3Wg9tL3NwbS9zJpTpjxXlZJ7po1ael6EtRthfSZXUGQFzbozFkgsxfF6Nvh5OkqSXSqyBft4GjRty7S0POlgDAmhO5N4+6RL7babOXQtpJTWlCOYyJ+Y4hAFyQ93A+IWEEuWLkm4AX7gKmDxoIQAZyrAwQKrPoB90jT0eSED+Wzm8/O2TnDZSK5+jpmFlJdWYorncRv5wnG8Wg1kfeduNRTp+qK7LLTF6zla4KWTKSEIGF5P4ifvbB2gT+kD2CgD5vk8ajg8Qk6slIU5JmZC5I33ufCDFVxfJNA2wC7lWG2g6/PZM90CgCVQMxzH6eBiKl0rQZCg5YmHlgmqabaj9TD2gLhaViaelOULSWtoNyPvO3D3KkDekxIdRYZm/n7vuENbGCSRnT1rCIJxtbLiP6fUPD9Erunm3hFPpXy4zO6DIfldUDJZWk9YBgKuo1HaUfYDnEBLKglNk0pRQqSb7tw4RQVpy8YlLnAFwK4V2XwsXAmp6/KLKqCcU2mzhaUp2SKucEpDA8hHndK+PShNiRLDD5lu5cuSAkhuJ5QV8SKP7suzfTk9fSOc6RaYWfCOZGJMXb167+nNnQTRPtMovY3Q3oD1zoOA106DqL4kRNVYWmys9liyScndwdmOceilylLuw5DYBHJdBtW0N27SfzOG8Y7jo0kAoSLnHh1vTxgTdmMe+7lHmWivedXCpzI19E1tqGOyua6PC9XA/wAabudfGqYSEy1FKMAHViSa34BmuaJNTBhiaAcfswFputEhaghNtTmqrnuokVVdjAc+TOmMqYbIwtkJA3J9hGyA1vdYMBkBl0ovOY5uPijtJ1qgBh/MV3qgDY96ozZms5pINqy1wTQDgL+MIaPKHaWpWxCf8lt5RILli6U+1ayfBNkQw2zTv0p5ftUM0bdVadcluwm13sN9m59sW6NrYKpMDHvpH/JOO8QP+9EdlKE7kJ/yBML99mf7iuBb/i0HFglOZCGbQzQLZCTRQqMFJ+3G4xK3wf5kgAneBeNzRgjSZh/8kw/1q94P0bRJxqqYtI/Gp/OkCtMcVmbelkA9TyGahkpfk1GtZ6woO8m7d+hjI1/8QStGT1u2eyhN6hmU/INtNxij4j+JEaNLZJMyaXCLRKgM1EnAZC+6OWaVpClqUtaipSi6lG8n7wwjLdO9xoAWjiMT008+i9JsjY/1Q7WX7OH8v1vPQLU1x8ST55LrKU91JIDZFi6uNNkZBJN5hoUDJqvawwRwtuRgAbh89cUoUKFHIqv0TTZkpVuWtSFd5BIPheNhj3eof2ikCxpKbRuC0sPzAU4jljHPYUXZI5hqEnbNnwWttJW1O/UdfY1HBdXnaxXNACWsm5KLi+7tQdo2hLShSZqmQpJBl0U4Iq4uTSOffB3xIrRl2FH+WssS1U3VBvCcwN99/Th8tKEguKg4u4zgv1DG4uONK7l4XaFgksclw5HI7/wRrms/U2ijRdFlpUBaAqBipRKjXEuTXAeMdHmmbPl269e7AWQVBuKRBmtJKlqADUD1IF527oDGgzAQpNl0kEddN4L53RnwMkeRK4E5eA0HJY9sllllJIzNTxJNSqNKWTMmE39IsflUUjwSBwikh6OzkB8nID8Hg/W2j2V9IOws1YvZWb0lszXeTscBQcNnHuInBzAQlXA1IK9TNWlJCUoT1GAJF1BROVCIpNTfU4K8gr0LQLoWmiYwWqyu5zcvI7FbMfIq01ACk4v2jxwG7nGHIxzHUcnmkEYJLlM1pwcAL+dwEMVveARllxx8IcFqYZGo5GEkJN5KfEe48RC0sEcv3D8+KvWiYAG417p9/wDuJ9GA1qpNww8b+MNMuZmScb7WTq9IjbI2jI/b+cKTWeel1ri5u7I/6tVYEI1Giv2jwHqbzFczQiOyXGRp4xBE8po9k91X3T7pENImKPaoMhdxOPGDQS2dg7MC6dxwPjkfFVoVVfE7R7x5A+JrDExLoz9I2KUx5Q0AVxVsi1aBJNkOT1nwyB48IoE1Rq6q1vNHq3CKv3yWErBWHUwoFnq4/LfU+EVK0+Xgoncg/wCREG7KUjAFU7RgzIVOujaAQokgu4JJBFzMd5jmPxDqgyFuHKFOxya9JOY8RxjoukzgtRUHa4Oz03E4k4xkfEGimdJMsAOFhQLVcmz5Ex5l1oc63zFzqMYADrjUNHW853Sq9Hsi1fTOjGjzj5mvQDzWf8B6i66Z6w7AqQKUHfJNMac8o9ydYoll3tliAE3VapVdhg8YiZYACQKJAA2NFsjR1r7KSRnh+Y08Y9HsiAS2Vs8ppeqaZUBPdx/xosXa1vktFpcTyHAbvmas/e1DsASx9PaO9ZqeDQOo1clycSXJ4m+NSVqcsFLLg3CXXmpqDcDBcuSUA2JZTTBKnOwqNfKNI2mGIUjHh+VnCN78XFZMvQJh+WyM19XwNfCCEasHzLJ/CPVXtGrpEtTpDKNlADsS5N9eA5xXYV3VflPtCz7ZMcsERsDNUtF1PJKQohRcA1UcfwtF03QpKBSUgk0Dh+ZOEQSVgAC2wpcfaEgqKjaegDPS8n/5EJWq1yRxOeCa6eiI2Ntcgmk6OArqpFo3lgGHDDZjzMU6bMCLZWrqpDm0EsAEhRLEbYtBVaUU2rwKA4AHLMmPOfH+sFy9FUku81SUVDUFpSuBZI/qhOzRBsYmdi441OPzDVNWeAzzNhH8iB+T0C5xrrWJ0icuYQACeqkABgLgw8dpMBQiYUVJJNSvpscbY2hjBQDADglChRXNmhIrEKxIAqVZCgI6WfpicrSsDTbFiwoDbVGTSqKhQiIUVTCQMdH/AGfa8K5ZkLLmW1l/9slIZ3+UnkRHOI1PhjTOi0mUolk20pV+EqD+fhFXta5pDgs/allFpszmajEcx+cuq7HNoq69ObXHdth0WTRmOFaHeWpyhTwbSatRQvbunDdDOe//AHmD2A1s7evqvnLkxYOCi8MUqLgjaGY74zZ+rcZZ/oUa/wBKjRW4sY35MsKQkK6zYgvdS+94HmaIQ7nq7nVuZm4+EaUckkZq1Cc1rs15laWLEEHIhjyOEXSdMWkMC47qg44YjgRG1MUFAApSUi4KFriScd0BTtXJPZJQci6k8+0PFodbbI3ikg9x86IBhe3FqUrWKT2gUbe0n/6HjBYNLQIKe8C45i7jGLpEhSGtBgblCqTuUPVjEZU1SS6SUnMY7xcRviH2KN4rGfwpbO4HvL0OjylK7NBicDw+aCl6Iw6jBWfmB3X2Rm6DrwUE0BP1C7iPl33boN0jW0tCrKgp7xShGYOIhKRnY/fgidq0itUMpLUIY4g47du+HSoi7lh+kKbreQoMbXK7dA379L7yvyfrCcnYPFHEEcx+VYTM3otFXKeqr02e4iu0BQuDu9cd8Dq02X31fku/ugzR5gmJtM+GV0Z8kr7N9hvN3E1I88kRr2PyKxf3Gaf/ABq5N5wytBmAEkAMHqpHkDG0uWokkpLknA8MMmgTWS7KbNxOGz7pHoZtqOhY6QgADHVBZZg43arKApEloskgF2LOzXUucxOSauflrvOA5tyMQCSaCpNOJj50e0Nmu/zmfXmBXHlecfCui3cL9dGj55ALT0GQAkGylzVyATsvcCjYQRNUWJLlq19MotWhKDYCXYCto8uTc4i47v8AccOEe4ay40M0AA8MFkk1Nd6s0lABSlx1UgMQedAchFQlgkB01IwVn+HKHWokknE+gHpEtFS8xOxz4N/kIvUEqqbSC61b2HAD1eIEDZDIL1zJP5iT6xdohAW6sqPmT4Gg5xGZU5BRTo6jUI8h5xLR0MVOGLgYZA4b41Iz0Fyo5qV4Gz6QjtQXYOZH5XMNShQkFy6e0bynAtjujwX7TVVkpcN11UIPasJwx6p5x72UaA51519Y8F+02UbUheCukHFKh7wctpCBwHstfYf/AD7K/wDd/wCpXiYUKFCy+gJQBpSnUdlIPgHS0MXwMXjzSlsBuYb/AJ5qiFChGDrNWhoynSItiuQhkgRZCxzW1GCGAHOiUOm+Gh0mIRG5hdzkr6REtWJSlVxPaTkN/hE+hO38iov1PLCZSE4pQkKe9wkCvKNCC2exFsYpIelKdKgr5O5+OCx5mlqlSyUpt3kEXByS5GVcPCPPL06YV2ys2sCMNgGWyPUzgApk/wBQwH6mMjSZeihRCixxAtMOVIF9S+N5if3iMi0acQrtpmn0XWaF0WyFd75VbxgdsYmuPjeRJUUS0mcoXqcWH+lntb2O+Mr470+UlKJUgl1glZ63ZuCeJd922PDkwb6gltQKc8/wvSbK2JHPGJp60OQy6k58gCPRe80f9or/AOpJIBvZQUGyKFAAjiI3dEXK0hBmaMp27Uo3j8L1G48MH5GiYDcY0tQ60Vo85MxJLAi0BiMRvy2wWG1yROqmrf8A09Zpoq2cUcMsSQeGNc/9wQuiAxfIngCwsWpeQvQe8jLaMeb6U6XJUDNU7EpdQBYks1AMXFdoiltHzV/f7RoO2nHKyjoZCP8ACvuvB9iQcwgtJkFBAcKSQ6FC5Sc99Q+/bFca8oSVgSkkkOVBPWobyQSKXmm07YqbRs1cle0ecnFx+DHgaVaQVR1nxwc3xWZBsmXOSOqihrh7wRJVo6VAglxc4U3iI1YVfNd08UaCzjO94LM0uelDhutk12/2jPCSokk7zgPvAQ1kC/kPU4RKXLUsskYuwuGD+F8KW60yTupLlpGMTzeRlyOI3DNbMTAwVb/qPsorIJAAphmdpbE/pGpq/QFBSSpJdwT9IFebgRVouigByklX4TTw8YN0YhJUqyXCadU1Jq12wc409nWJsb+2ncC/QVFGjcOOnjniSvNNUXGZeqmuUoqUbJqThgKDwAiPQq7p5RUmWAALJ/KfaFYHd/tPtGv2se8eKWoVb0Ku6eUWyZShbNkvYZO0l38kwNYHd/tPtBOr1hIU7h1d05AZbDEtkjr9w8VBBoqkyFClk8oXQq7p5QdM0kNQEnAMRzJFBAek6TZDrUdgFH3AX8YDNaYosMzuGKnFISl5K8feGkqaWD9NrnWADrRH+35RoaJpCVpdOFGyjLttoMrR3aAHeD6Lo3sJwKplILADAAObv1jz3x5q+3orpJKpaiv+ljbHjaz6sejVMJJBoxZhzvh5SAXlkdVQLDI303h+W0w/Gyach73UGgHudfmSPBObPK2VuYNfnPJcJIhRt/FupDo04gVlKJsqalD1k70mm5oxIqQQaFfS4J2TxiSPI4hKIqD3xKFEIpFUMdEHeVFkuQBFsKJLihNhjaagJQoUKIRUo1vhXV5naTLSxIBtqbJNWrnQcYyAI6x8H6l/dZBtAifMDqKQl5aWojrUtVcjM7BBImXnLK2xbRZbOSPudUN9z09ab1sT9PShVlQdQFSg0BOD03tDfxlOS+f6xXI1TLJshcwUJrZzD1zcxBOrpZD2pvJEB+kkH2Gg0AcfyvmhdPuCL0ucRJK0UJAO3rM531jzMensDoCmrBKht6rjnSL5WopIwKt59mjtnsJvjUOxThcAuQ/F6SJoJuKA3Aq++Mee0hBKWEdr+LvhlGkyLMsJTMluZZZgXvQWwUwrmAY45PkKQopUCFJJBBoQReDDErCx1V7jYtrjtNlEX8mihHDQ8is/RpRtOzQcLxvho9X8E/DpmrE+aAmRLLm1cogg2WN4zwwzEUAMjgAtCWWKwwmR5wHmdAOJp8C9xo6SnQEhV9iSj+oJlg8iD+UwDBOsNM6UgJDS09kMznvEYXlhtL1LAWPUWSExx0K+UTydpIXfN6I1b/ryvxH/AIKfweI6aAJkxrrS/FRJ8XgvUcnrGcrsocDas0LbgW3q2RdL1SlSj1y5tKqkVdTm5WZ8YydrNMrg1un7VDG5zMAsiLZc9YDBRAycwanVyCHtmv0p/wDqL06loCmYWIB7Ix4xjiySnIDxVRDKMvVDJ0As5NcAMzQOY0dIUJUslIAa4bSW4wgnrJG83g3bjmRygXXkyiU5knlT18ITns0UMjYYm0AxPHXFakszi0ucUP8AxaZ9PI+8L+LTPp5H3gCNDQ5BsFTC2SLFpqjEpCqExdkDXmgHksxs0pNLytmaesS0Ko6iqjUYUzzin+LTPp5H3i/REzCpplUsXSSCTS5Kb33RlGLSQMaAaU6bteql00gANSj/AOLTPp5H3hv4tM+nkfeBZEhSyyQ/kN5jSkauQiswucsOV5+6QBwjbgR5K8ZnfkcFLQNMmLVVIs4kBm5mu6LtY6H0jMWIe+4u3tFnSP1QQjJ8dgwTx5RAoYsQQd5c8cRB47DK7v4N4fmmXzBN3RduuNVmjVczZzjS0TRhKSS7m88MAIQBJYWicgT70iQXYoS4xZzZ3nHzETNY5wyuB4CvuojiYw1CgC7nOvDCL9DS6rRuTj9Ro3I+IiCpWIdryBj+E4fd0QUq0BdZFyRcPc/ecaFkmjewXNNN364q5BQWttVpny1SZoYk2nF6VEkhSeJO8OM45HrfVq9HmKlrDEYi4jBQ2GO1hYZlu2CsU+4+92V8T6hRpEoJURbDmUsCgOLnunIb8HgskV4VC2NkbVNkfck+w58DvHv+Vx6FFul6MqWtUtYsqSWIyPti+RiqE170EOFRklChQo5SlCEKPSfCnw2uf/NKXQD2XDqNMCXKQb8yGzi8cZkcGhLWu1x2WIyyZDxJ3Dif3kEd8D6oQlQnzgQb5YsuLWC1JvLYBtuUdBkm0OqQvOyoE8Re/CMAhixBByIY8jWGIEegGzmBoDT+18xtm05bVMZJOg3DcPmJxXptEpMTQihFQRtx3RSgYZEjkSPSMeXpkxN0xY3l/BTiLBrGZiUq/EhPoBAnWB9MCEuLQNy2dHDhQ2kcwD6wfoqnQg5pHlGRqmcVhbhILjshhc13CBJ2sZqSpAUwBIDAXPS94ybFA4WyaLXPz/aK94uBy9RHPf2nakQUDSUsFpYKFHWk0CmxKS3DdGhM02artTFncbP/ABaBJ8lK0qSRRQIO0ENGy6wF7SCf99PNWse0DZZ2yt0OPEajwXPNT6CZ00JwFVHIC/23tHRweqlNAlAASgUSkDIepc7Y858JaHYExSu1aKOV7c0/lj1knV8xVbNkd5fVHI18Irs+JkUQkfQE793zHqtL+pLY6e19i01azDmSKk+dOiHgnQdAVMFo9WWKleJGSBjvuyeDkatRLPWHSK+oMjgn5uL8IKVNVeVHgSOAAi81uGTPFYjIK4uUaMAkWUJolPqdsTkKZaTtY7jTzblCUVgObYG0nxY04wpa1FSQFGpGJuFT4ecZ1TVM6KKxZJGRLbjUeBHKCtCULLEsxIG68ebcIpnTiVqYlgWDEi6+7a44RDpFd5XM+8dgDgupVPowqo7hyqfPwjO1hKK5hNEpDC0bqVLYkuTdlGpJohztJfbUx5uZMKi5xJO5y8YAeHzPecdB7eQ4c0K1OowA/KIjpUp7Ac95Q8k3c3geYsqLkknMwkIJLAOchGlo+q8ZhbYPU+0Wkkw72Xz5qUmyN8mAGHks6TKUoskEnZhxwjY/dHAVOIJF5u/McYMkSKMhIAzw5Xn7rBBSiWLSzd8yvTLhBobNNIP7Wnfmenv+05HAxmePosWdrZCWShLjMUDbBiYKk2Vi1LVbzB7SeGX3WMbWk6UpbykkZm4HaE4fdIp0GVMUodEDaGIw3nCHYYI4T3RXjr4pkio3L0Dg0vwbHc18Wg2Qy6jBF5G1/l57solKmUsrUOkbrLQOyB3lXDw4RXMllN7MfmFx2nL7rDVKYoVaplLLNQDIY7zeYaWkmiQ/kN5whROTOUigqO6fQ4fd0QM8VbTBWjRlIDg2s0jD8Pt5Y1Llv1k3+B35GD5E9K7r8jePvOBNMISrq9rEC4jM5Hz8QnabGa9tDg71+efPFc12hQwP6jKJoUwYh0m9OW1ORiZAWHBYjw2ERUkVZRsgczsTn90ibLahL3Tg4afPTNSQvN/HHw500rppYdaEkuGdSBUpUMVCpHEUeOXmO8dKbkgJT3WBf8WZ3HnHJfjXVXQaQSkNLmdZIFwcl0jccMARF52D7gvVf05bya2Z/NvuPcdVgwoUIBy0Lr1i0NRatM5bXJFVHIUu2m7nlHQJGjpQAlIYJZtjBr90Z/w5oHRyRTrK6x2OB1eA8XjUhZ76lfLtv7TNstJa09xlQOJ1d104bqlEJ02YzE2x3VgLHjXxh+llm+U21KyOSFOIGhQWO1zx/a8rEvu3omzKNy1p/ElKv+BhugRhOB3y5ifQwPChtu17SNQeintOA+dVraoSEqUAtKnAPVejHFwM4jpWhWpizaCai8KPyjACKdTKaZvSR5H0jUmA2ywJoDQE94YbhALPa3m3GXCrm+lP/lPx0kiFVnJ1WMZr7pZHipTQTo2rJRUEnpC79pQF34Gi9QIvBG8EecPLLKQfqHi6f8o2DapScSu7Fm5UaFo6ZdoS0pQ6lEsK2iov1lOb4sUa1LnB6ng8XTrIUoWSa4qYOetRr78YiJpFzJ/CAH3kvADxRa6p5aFAVACMQug4YgxMWR/p1VhavA+l74HFTiTxUfeJql98hOw1VwSI4FQVELINCq1xcnaPekECYEXgGYRUpAoDmbn84YaS1ADc1okW9+UUiXR09YbO0/1A1fbE5ZLs80kS8El9hofGijxhFCsjyMTHVvYzMBggZnb57nMRtK7yuZiMFNVLTQoy1BIckNzvv2PGbo2qiaroMhf+kPoGmzCsJJtAu9BTbSNHTBQDM86F/CvCPNsa5rhGNTn85KgDJqP3ISdpsqSLKA5yHqqKNB1wLf8ANTTAj5eGO++Dp6ETBZmi65YoRv8AttgjF0/Va5de0k3KTtufKNiKyMhN4YnefmHqigg4FbGna/SKSxaPeN3uYwZs2ZOVUlasB7AXRoaDqJSutMNhOWP6cYzfiP4jToiQmSgBSg4e8pBa2rEBwWF5Y3NDRqRedgESCF0rxFEKuPzNaUjVISR0pJUbpaKqO84D7eDgaWQAEi9CCwH/ALJvoI5lK+NtIBqEFJLqSxFrYVA2jxJj3+odaStIlCYA5BYyqBMtQ2DtZg1vwiY5Izkmbbsu1WVofKBTeDWnPL8I6XLKhQApGJFmUnaE3rO00i9M+yCEkre9Srv6UjDlxiC1FXaL7MBuENiwqchFi/cs67vUkpSrs9VXdPZP4Thu8IiaFiGOR+6w6kAUXU9wf5Kw3ecSmTye2kKGQoRuOfL0iCFKqI+8txhUH391izoiaoNsclDYQW9PWJosoPWqrIVCPc+PrF1TVVlDdYkgkdVIvP4nuT930iSVhXVUGPgTsOfjDdES6gbeZF/FOG4coqUoMX4+zZ7IWtNlZLicDv1XAqxcsjaPHljHmvjjV3TaMpaQ5lG2T9NyhyIU30x6jR0qArdgDhxinSpEqclSFXKDFqWh/kOYjPZbXNqx/eA/kEzZpjBM2VuhB/I6hcMjU+GdWmfpCEAPUKIJZ0pLkcQw4wDp2imXMXLVehSknaUkh/CPR/Bui9Vc04mwODKp/byhpgDive7TtPZWR72nMUB/ywB6Vr0XrZiFJLKSUnI47jceDxAloJ0TWE0tLbpQaWFh34mN7R9Uy0m2EspqAkqSknEP95M8T9FePdOHH9Zr5Y+ylpABWZomrgGXODn5Zef1L9sNpoCF6LLN8pP9BUjyvgqZoyw5ItPeR7egiq0OV70be90NiJrG3QMEw2FgFKVQi9XS8FLTvsEehhl6nYBXShjcDLU/K0/hB4SAApY/CjFRzOQ+8ogXJtKLk8gMhsipgipi0enooMEZ0Qei6EULSq2k1agUDUEYjbGxIP8AMG1J8Cn3MAzLnyKTyUDBE+YUlJDO5Fcik+oEIva2K1RluAP7HuisYGsoEXpyAUFyzMXZ7iDcIz1WRUrNK0QrCuJ2RZOnrUCksxoWBu4mKyI1HEFcAiNMCbfzORgzU31+xFFoYIT/AFEq8C0Sm1RKVjZsnewP+JiEc44rgpCcrvNkAAByhyLTkBl3lPe2p27P+4hCI/Q5RFV1EwMOL3FDmIdawb6L8FgbBj97AyJSjf1Rwf2HjAZpo4hV5/PgrAEpFVo3dfMXH8Y9b6RIaMPmFo5k+WyHKgkGyHYEkDc7k/Zitia2jwujPc60WvFgut9fz8zUigUkKQjspYHFvPExKZLtMpJq1MiPvEeMMJjdgN9Rqo7hckfbRWHTUHaQTQ7XwO2LyWEx0fC43hvpj1oPPxXA706SPme13BTiVYjdFg0lSWZmuCQGG4NV/tocFKxUEYsaEbR7iKloKcS2Kkjr7nNEjaPCDWe3Bzuzk7rvXx91BbuV+sdJeXYSD0iw1nEA3ktdSOU/tBkrTpZthh0csoDuyQmyz7wrnHT0Fh1eqL+qanaVXqMZ3xFqpGlyrExgsVRMa45K+k44Y0YQ5KL7boWhsi2NslpEjx3SKHhWmPl4LikuWq0STSOifsxQoCebkEoTsJFonj1vER5bVWpFzdI6DslJIWTcgIoonddtJGcdb1dokuRLTLkpYJHaVe+JAzOZ8YBG0k3ty9Bt21xxQfTNxL6HPIVrnxpQePMno8VGyMO8dww48okifZ7KAE4h+sdtrP7eGVMCu3Q3BY/yGXhfdEZiCntXYKFx9t3nDOWIXjeacSgzo6wF6fmTwx898Qluosmp8t+UPLQSXBsgXry2DPy8os0ifaoKJ8Vb8hs55R1BSq5OU2Euir0UsMWbAAXC/d4xQnZEkEguksfPeMYSyFdkMu8gdk7T3fu+Kuc0CpNAFwUVGovfBr+Bi6z88wgkC+lBy8YZkoFpRrifQbNkQmpV2lCl4aoG0kY7bsszlufJayWR4M1O/wCbvHRXwCcvMuZu4aKO1jhs55RFQwIrkR9vDplBQclkC9WexPvyrdZM0gn5QU4JVfvfA840ooWRMutw9+aqSSuVfH2h9HpRIumJSrixSfFL8Y938JaOJeiSkKS5WLZDO5X1qjYG5RifH+relMgykqKiSghipgWYuH6rvfnHs+j6EBKb2AtkUAFAlPt5wB9mbIS12QxwW7brbf2fZ4wcca/+OA8lGQiWkmwyFXEBgc2ZQpygzp1junmPGsA2cITAbNzjygYs87P+HKeRxWHgcwtEaScU8iD5tFekaQlnKCoi4WXrvqBviGj6Koh1KIyFKb3HhFHSqchxQkXHAkZxe/bW5hp+dFFGqu0SbSrzmCGGQe4QgXLJZ/IZxb0yshzI9IdM+ocM+LvXlAJLRag0ns+tQfJXACjNsSw6q76l9g9oGOtkXWVNw94lrfRVLAKas9N7XcoxVBqGm+M5rRILzsSlZ5pGOo0YL0Egy5gdBbdRt4uiKixZTDbgfvKAtUSFW7TEJY8XjXt9YJFSQTfgMfEQeGeSKS4zvcKo7HF7KuFEP0iTKZw6V0D4FXso8oYHYeR9Yom65SklJSpwSDdeC2cR/jiO4vw94bdabScovnkr3UV0ajg28+zxPoe8rlTxvgL+OI7i/D3hfxxHcX4e8LPktr9Kcvzn5qaIyXMR8jHa48VG/wAYuSlJ7UxO5Kv8r+TRmfx1HdV4e8GStJtSxMCeqS19QXs14x0MbmG8YS47y79flQ7mtBK5YDApAycRkImABrYDUvGFPSCVaQwJs3bYuIXl4iHjabQf+ifH9KlANULgTRheolgOPoIrXOCRacAYLWL/AP1y71HaYp0hTW5kw20yyEpTcFTDQAAXJBI84y5sxSlFSy6jjkMgMBs9awxPM2HiUtLPdwGaJn6cSeoCPrVVZ9EjYPCDtD1mDRdDngfaMZ6gByTcAHJ3AXxoyNVtWcWylpLqP4lCiRu5xmujfajU+O5ChlkLsMfT9LTmSMU8sD7GK0KTiCpXdNAnf3vEboSCU9kAJ7j3bicfDzizqzBtHNJ9PWObLNZDSTvN0O75uPQrQwcsjQNXdHpc+fZSekSkM2b2wMnspO2Nfogay65oN43fe4xUsFPau73vl5boRoxqDgRfuGe6NKKRj21aahWle55q7cB0AoE4V4X4Nvyi3RzZBKqINAk/MTkMPWp2xKYoAAzEgzMAPAqw863RQSSXUXPlsAwEFyQs1avrtYpZH+mWHENT03RSDhiLwbxwiRH3luOEIEzAHuFy7lHYGw23bMYFLKyNt55p78FIGiiHJYcTgPc7ItcIDCpPMnMwlLCeqkVywG0/dfGKwMbzifvCM0MkthvOwZoN/wA35blbAJqkub/LYIlLJT2S2647xd6woUajWhgAbgAqqyZOCmtuGuKajin/AL3iGEhR7NlQPzA0G8egfhEUSyosKAXqwHufvfIzWpLcJvtYqOdcPPdffiVHJJSwAUoOLKXiSMBl6YZxBM0pFDTI1G5r+AiSpoPbS/1JoeIx+6Rb0aUdYrFog2LQoKXsL79nCJzxBXYBD6RMloCbahKUr5bwNpA7I20FYL0TRxRRIV3WLjeMzt+zir1YVEqVPQVG8lBr40GyJaPq5SC6NISk4sksd4JYwISSXsWYcxX1S4fLXFuC9PGPN7ax9XmAfWCtDn0AWtBVc6QUg8CT5xTpEsW1G2kOQWINOqBns8YM7EI7VVCIh7A/3E8j7xNUlgCZiWNxY1o+eUUoVNVWhahcXGR9/wDuCJS7QBiiwP8AcTyPvE9F7JDuylV4k+sZG0rOxjA9ooa0w5FXaVAzyXYAVIc1uJF3DOFIpMScSWJ3pLeLRFKQ6hbA61xBxAOe2J2A4PSJoQbjgQc9kO2WCNjA9gzAKhxOSwdcy7M9Y2vzAPrENC0Fc0kIajO5a+NnWegomrtiaE0AayTc9b4nqnQRKmOJoU4IZm257DDNzvcFN7urO/8Az876ef6Qv/z876ef6R62FF+yaqdoV4HSJJQopVeCxjb1Cq1Jmy8RUbyKeKYt1rqxK5hV0oSSBQpe6j37IlqfQhKW/ShVoMzNtz2GKNYQ5WLgWp0qcA51jR1eXlp2dX8pb0gLogklPSJDG5jQXgX5ERORNShx0qal7jkBnsi7ahVOKx9aKsypKCb7Uwngwf8AP/bEdF1ctQtK/lo7yrz+FN/PkYUKFTE2Sd5dpRJBoklIK09GCZf+mkDNS6qVvOA8shFtkLJKKKvUg47QfW7cYeFDLdG6JygaMFEywO2SMkJvO84D7eILLkEMlrglqbzj5ecKFHPaPt0UjKqnKn4KvzwL+W48Hh+jKXUgB2Zjh+HLyuh4UYNoH0soMRphX5+0XPNUJN974ve+373RImFCjaYbzQTqqKSJRVU0Tlnv2bP+ouZSnCML1YDZtPl4FoUZFmH1do//AFxABw0zpTlv3qXG6MFQtBR2g228H+r3aHhQo23CmCqlEpMsr2JF6vQbduEKFHNFSoOAU50snqpsBAwtX76feMR6BWaPzfpDwovdBValRVo6mNUfm/SL9KkE2GKaAipa+zdTZChR10KaqnoFZo/N+kLoFZo/N+kPCjrgUVSGjq6tUUUk9rIg5RZpMg2yQU1a8tsyhQom6KKaqroFZo/N+kS0hBEuWC1FAU/CoQ0KKkUBouqq4lovzfiB/tHtChRnbQFYDzHqiNzTGWStTNck1LXuMvpiXQKzR+b9IeFDNiaDZ2E7vcqjjinOjK+n836QkyFWkl0UUD2uBwyJhoUM3Aq3qrSMwC8jnDdKnvDmIUKLqEHpku0oFJTQEFy17N5HnFIkKcF0UIPayNcMnh4UULQSrVS0xLTD9QB4ih8AmK4UKBuzUjJf/9k=' />
            </Card>
            </div>
 </div>
 </div>

            <div>
            <Card className='DivisionsCard'>
            <Card.Header style={{'textAlign':'center','backgroundColor':'skyblue','color':'white'}}><strong>Divisions</strong></Card.Header>
                <Card.Body>
                <Row className='refferalData'>
            <Col lg='4'>
            </Col>
            <Col lg='6'>
            <strong><FaUser size={30} className='userIcon'/></strong>
            </Col>
            <Col lg='2'>
            <strong><BsClock size={30} className='userIcon'/></strong>
            </Col>
        </Row>

        <Row className='refferalData'>
            <Col lg='4'>
            <strong>Cardiology</strong>
            </Col>
            <Col lg='6'>
            <Card className='subCard'>52</Card>
            </Col>
            <Col lg='2'>
            <strong>21</strong>
            </Col>
        </Row>
        <Row className='refferalData'> 
            <Col lg='4'>
            <strong>Orthopedics</strong>
            </Col>
            <Col lg='6'>
            <Card className='subCard1'>33</Card>
            </Col>
            <Col lg='2'>
            <strong>67</strong>
            </Col>
        </Row>
        <Row className='refferalData'>
            <Col lg='4'>
            <strong>Gynecology</strong>
            </Col>
            <Col lg='6'>
            <Card className='subCard2'>14</Card>
            </Col>
            <Col lg='2' >
            <strong>44</strong>
            </Col>
        </Row>
        <Row className='refferalData'>
            <Col lg='4'>
            <strong>Neurology</strong>
            </Col>
            <Col lg='6'>
            <Card className='subCard3'>49</Card>
            </Col>
            <Col lg='2'>
            <strong>49</strong>
            </Col>
        </Row>
        <Row className='refferalData'>
            <Col lg='4'>
            <strong>Surgery</strong>
            </Col>
            <Col lg='6'>
            <Card className='subCard4'>29</Card>
            </Col>
            <Col lg='2'>
            <strong>23</strong>
            </Col>
        </Row>

        <Row className='refferalData'>
            <Col lg='4'>
            <strong>Emergency</strong>
            </Col>
            <Col lg='6'>
            <Card className='subCard5'>21</Card>
            </Col>
            <Col lg='2'>
            <strong>88</strong>
            </Col>
        </Row>
        <Row className='refferalData'> 
            <Col lg='4'>
            <strong>Dermatology</strong>
            </Col>
            <Col lg='6'>
            <Card className='subCard6'>37</Card>
            </Col>
            <Col lg='2'>
            <strong>34</strong>
            </Col>
        </Row>
        <Row className='refferalData'>
            <Col lg='4'>
            <strong>Ohptamology</strong>
            </Col>
            <Col lg='6'>
            <Card className='subCard7'>27</Card>
            </Col>
            <Col lg='2' >
            <strong >45</strong>
            </Col>
        </Row>
        <Row className='refferalData'>
            <Col lg='4'>
            <strong>Pediatrics</strong>
            </Col>
            <Col lg='6'>
            <Card className='subCard8'>48</Card>
            </Col>
            <Col lg='2'>
            <strong>55</strong>
            </Col>
        </Row>
        <Row className='refferalData'>
            <Col lg='4'>
            <strong>Hematology</strong>
            </Col>
            <Col lg='6'>
            <Card className='subCard9'>36</Card>
            </Col>
            <Col lg='2'>
            <strong>25</strong>
            </Col>
        </Row>
        <Row className='refferalData'>
            <Col lg='4'>
            <strong>Urology</strong>
            </Col>
            <Col lg='6'>
            <Card className='subCard10'>41</Card>
            </Col>
            <Col lg='2'>
            <strong>63</strong>
            </Col>
        </Row>

                </Card.Body>
            </Card>
            </div>

</div>
 </div>
  )
}

export default Example