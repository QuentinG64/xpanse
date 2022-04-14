import React from "react"
import Button from "./Button"
import {useNavigate} from 'react-router-dom'


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
                    <img className="mt-5 w-1/2" src="../assets/images/xpanseLogoMainPage.png" alt="Logo"></img>
                    <h3 className="text-main-2"> Spatial recruitment plateform</h3>
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