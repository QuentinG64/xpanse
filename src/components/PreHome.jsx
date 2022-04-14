import React from "react"
import Button from "./Button"
import { Link } from 'react-router-dom'

const Prehome = () => {
    return (
        <div>
            <div className="bg-main-1">
                <div className="w-screen flex flex-col items-center">
                    <img className="mt-5 w-1/2" src="../assets/images/xpanseLogoMainPage.png" alt="Logo"></img>
                    <h3 className="text-main-2"> Spatial recruitment plateform</h3>
                </div>
                <div className="flex">
                    <div className="filter grayscale hover:filter-none w-1/2 h-screen bg-cover bg-[url('../assets/images/FreelanceMainPic3.png')]">
                        <div className=" mt-28 ml-60 ">
                            <h3 className="text-main-2 "> I am a</h3>
                            <Button as={Link} to="/FreelancePage.jsx" text="Freelancer" />
                        </div>
                    </div>
                    <div className="filter grayscale hover:filter-none ml-40 w-1/2 h-screen bg-cover bg-[url('../assets/images/recruiterMainPic.png')]">
                        <div className=" mt-28 mr-60">
                            <h3 className="text-main-2 "> I am more a</h3>
                            <Button as={Link} to="/RecruiterPage.jsx" text="Recruiter"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Prehome;