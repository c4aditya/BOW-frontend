import { useNavigate } from "react-router-dom";

function Seemore(){

    const navigate = useNavigate()

    return(
        <div>
            <div className='seemore-course'>
             <button className='seemore-btn' onClick={()=> navigate("/course")}>See More</button>
              </div>
        </div>
    )
}

export default Seemore;