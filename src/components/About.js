import React from 'react'

export default function About(props) {

    // const [myStyle,setmyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })

    let myStyle={
        color:props.mode==="dark"?"white":"black",
        backgroundColor:props.mode==="dark"?"#2f4e6d":"white",
        border:"1px solid",
        borderColor:props.mode==="dark"?"white":"black"
    }    
  return (
    <div className='container' >
        <h2 className='my-3'style={{color:props.mode==="dark"?"white":"black"}}>About Us</h2>
        <div className="accordion " id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyze your text
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        TextUtil is your go-to application for all things text-related. Whether you're writing a report, drafting an email, or just jotting down notes, TextUtil has got you covered with a wide range of powerful features designed to make working with text effortless and efficient.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                TextMaster is a versatile and user-friendly text utility application that offers a wide range of features to assist you in your daily text editing tasks. Whether you're a student, professional, or casual writer, TextMaster has something for everyone. Best of all, it's completely free to use!
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse  " data-bs-parent="#accordionExample">
                <div className="accordion-body">
                TextEase is a versatile and user-friendly text utility application designed to streamline your text editing tasks directly within your web browser. Whether you're writing, editing, or formatting text, TextEase offers a comprehensive suite of features to enhance your productivity. Best of all, it's completely free to use and accessible from any device with an internet connection!
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
