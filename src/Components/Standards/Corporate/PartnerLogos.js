import React from 'react'
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
// import { saveAs } from 'file-saver'

function PartnerLogos() {

    const ar=[{'img':'https://talk.miraclesoft.com/file-upload/wyjXfgkEJ9NDDkRCD/1.png'},
    {'img':'https://talk.miraclesoft.com/file-upload/qkTNbMcSZ3EBEvoin/8.png'},
    {'img':'https://talk.miraclesoft.com/file-upload/QXSCdmPK8TcNj67Nf/2.png'},
    {'img':'https://talk.miraclesoft.com/file-upload/LGBYpTSqzabF2qYuR/3.png'},
    {'img':'https://talk.miraclesoft.com/file-upload/HvfgRn6WmNrixpMHT/4.png'},
    {'img':'https://talk.miraclesoft.com/file-upload/tijzLhtqgcw9wMsJ6/6.png'},
    {'img': 'https://talk.miraclesoft.com/file-upload/zb8PBrT9dp5d3zL73/7.png'},
    {'img':'https://talk.miraclesoft.com/file-upload/csvZFbzsox8EzWurY/9.png'},
    {'img':'https://talk.miraclesoft.com/file-upload/SPZRwqYzGyioLMCPk/10.png'},
    {'img':'https://talk.miraclesoft.com/file-upload/W4F9WAYzfM2NiHiJE/11.png'},
    {'img':'https://talk.miraclesoft.com/file-upload/RhmFJAkzcMjTaZcpw/12.png'},
    {'img':'https://talk.miraclesoft.com/file-upload/F5v8wALhc77WL9mWu/14.png'},
    {'img':'https://talk.miraclesoft.com/file-upload/L9QsjbutiGqMXCxNm/15.png'},
    {'img':'https://talk.miraclesoft.com/file-upload/GWptPTnhJKYSYAfeC/16.png'}
                        ]

                        // const downloadHandler = (e) => {
                        //     saveAs({e}, 'image.jpg') // Put your image url here.
                        //   }


    //  const [isLoading, setIsLoading] = useState(false);

    //  const handleFetch = () => {
    //     setIsLoading(true);
    //     fetch("https://reqres.in/api/users?page=0")
    //       .then((respose) => respose.json())
    //       .then((respose) => {
    //         setUsers(respose.data)
    //      });
    //  };


  return (
    <div>
        {/* <Spinner animation="border" />
        <button onClick={handleFetch}>Fetch Users</button> */}

        <div className='allcards'>

    {ar.map((e)=>{
        return(
            <>
            <Card className='cardStyle'>
            <div >
            <div className='png'>
            <a href={e.img} download>
                <img src={e.img}  className="logo" />
            </a>
            </div>
                <button className='pngButton' >PNG</button>
            </div>
        </Card>
            </>
        )
    })}
        </div>

    </div>
  )


}

export default PartnerLogos