import React from "react"
import Button from "./Button"
import {useNavigate} from 'react-router-dom'
import { Phrase, Char } from "animatedtxt";


const Prehome = () => {
    let navigate=useNavigate();
    const freelancer = () => {
        navigate("/freelance");
    };
    const recruiter = () => {
        navigate("/RecruiterPage");
    };

    return (
        <div>
            <div className="bg-main-1">
                <div className="w-screen flex flex-col items-center">
                    <h1>
                    <Phrase margin={50} size={80} color="white">
              <Char char="X" delay={0} />
              <Char char="P" delay={0.9} />
              <Char char="A" delay={0.6} />
              <Char char="N" delay={0.8} />
              <Char char="S" delay={0.8} />
              <Char char="E" delay={1} />
            </Phrase>{" "}
                    </h1>
                    {/* <img className="mt-5 w-1/2" src="../assets/images/xpanseLogoMainPage.png" alt="Logo"></img> */}
                    <h3 className="font-title-second text-main-3 mt-6"> Spatial recruitment plateform</h3>
                </div>
                <div className="flex">
                    <div className="filter grayscale hover:filter-none w-1/2 h-screen bg-cover bg-[url('../assets/images/FreelanceMainPic3.png')]">
                        <div className=" mt-48 ml-96 ">
                            <h3 className="text-main-2 "> I am a</h3>
                            <div onClick={()=>{freelancer()}}>
                            <Button text="Freelancer" />
                            </div>
                        </div>
                    </div>
                    <div className="filter grayscale hover:filter-none ml-64 w-1/2 h-screen bg-cover bg-[url('../assets/images/recruiterMainPic.png')]">
                        <div className=" mt-48 mr-auto">
                            <h3 className="text-main-2 "> I am more a</h3>
                            <div onClick={()=>{recruiter()}}>
                            <Button text="Recruiter"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Prehome;