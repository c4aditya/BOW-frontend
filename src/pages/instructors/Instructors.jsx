
import "./instructors.css"
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import prof1 from "../../images/pof1.jpg"
import prof2 from "../../images/pof2.jpg"
import prof3 from "../../images/pof3.jpg"
function Instructors() {

    const ourInstructors = [
        {
            id: 1,
            name: "Roshan Rashtogi",
            deg:"Associate Professor",
            image: prof1
        },

        {
            id: 2,
            name: "Arvind Chauchan",
            deg:"Professor",
            image: prof2
        },

        {
            id: 3,
            name: "Rekha Singh",
            deg:"Associate Professor",
            image:prof3
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

