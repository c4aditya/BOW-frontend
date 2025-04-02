
import "./instructors.css"
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
function Instructors() {

    const ourInstructors = [
        {
            id: 1,
            name: "Roshan Rashtogi",
            deg:"Associate Professor",
            image: "https://acelearningtraining.com/wp-content/uploads/2024/04/successful-businessman-1414x1536.jpg"
        },

        {
            id: 2,
            name: "Arvind Chauchan",
            deg:"Professor",
            image: "https://acelearningtraining.com/wp-content/uploads/2024/04/successful-businessman-1414x1536.jpg"
        },

        {
            id: 3,
            name: "Raju Rastogii",
            deg:"Associate Professor",
            image: "https://acelearningtraining.com/wp-content/uploads/2024/04/successful-businessman-1414x1536.jpg"
        },
    ]

    return (
        <div>
            <h1 className="heading-instructors">Our Instructros</h1>                
            <div className="main-image-our-instructors">

                {ourInstructors.map(({ id, name, image,deg }) => (

                    <div>
                        <div className="image-our-instructors">
                            <img src={image} />

                         <div className="parant-name">
                            <div className="more-about-instructors-name">
                                <p>{name}</p>
                                <p>{deg}</p>
                            </div>

                            </div>


                            <div className="social-meadia-links-instructors">
                            <ul>
                                <li><a href="https://linkedie.com"><CiLinkedin /></a></li>
                                <li><a href="https://facebook.com"> <CiInstagram/> </a></li>
                                <li><a href="https://twitter.com"><CiTwitter/></a></li>
                                
                            </ul>
                            </div>

                        </div>

                        
                    </div>




                ))}
            </div>

        </div>
    )
}

export default Instructors

