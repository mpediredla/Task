import React from 'react';
import { Tree } from 'primereact/tree';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Hierarchy = () => {

    const[state,setState]=useState([
        {
        'Name':'Venkata Ram Prasad Kandregula',
        'Designation':'Team Manager',
        'img':'data:image/jpeg;base64,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',
        },
        {
        'Name':'Jhon Vesli Chitri',
        'Designation':'Team Lead',
        'img':'data:image/jpeg;base64,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',
        },
        {
        'Name':'Manikanta Pediredla',
        'Designation':'Software Trainee',
        'img':'data:image/jpeg;base64,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',
        }
    
        ])
    

    const nodes = [
        {
            key: "0",
            label: 
            <Card className='hCard'>
            <Row>
                <Col lg='2'>
                <img src={state[0].img} className='hImg'/>
                </Col>
                
                <Col lg='10' >
                <h6 style={{'color':'white'}}>{state[0].Name}</h6>
                <h6 style={{'color':'white'}}>{state[0].Designation}</h6>
                </Col>
            </Row>
                </Card>

            ,


            children: [
                {
                    key: "1",
                    label: 
                    <Card className='hCard1'>
                    <Row>
                        <Col lg='2'>
                        <img src={state[1].img} className='hImg1'/>
                    
                        </Col>
                        <Col lg='10' >
                        <h6 style={{'color':'white'}}>{state[1].Name}</h6>
                        <h6 style={{'color':'white'}}>{state[1].Designation}</h6>
                        </Col>
                    </Row>
                        </Card>
                            ,

                    children: [

                        {
                             key: "1-0", 
                             label: 
                             <Card className='hCard2'>
                             <Row>
                                 <Col lg='2'>
                                 <img src={state[2].img} className='hImg2'/>
                             
                                 </Col>
                                 <Col lg='10' >
                                 <h6 style={{'color':'white'}}>{state[2].Name}</h6>
                                 <h6 style={{'color':'white'}}>{state[2].Designation}</h6>
                                 </Col>
                             </Row>
                                 </Card>
                                             }
                    ]
                }
        
            ]
        }
    ];

    const nodeTemplate = (node, options) => {
        let label = <b>{node.label}</b>;

        // if (node.url) {
        //     label = <a href={node.url}>{node.label}</a>;
        // }

        return (
            <span className={options.className}>
                {label}
            </span>
        )
    }

    return (
        <div>
            <div className="componentsbg">
                <Tree value={nodes} nodeTemplate={nodeTemplate} />
            </div>
        </div>
    )
}
export default Hierarchy