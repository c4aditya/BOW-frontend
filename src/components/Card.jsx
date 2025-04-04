import { useState } from 'react';
import Counter from './Counter';
import { useNavigate } from 'react-router-dom';

// this id ,discripction ,image commes from data.jsx 


function Card({id, title, description, image }) {
 
  const nevigate = useNavigate();
  function  detailhandler(){
  //  console.log("button is clicked")
    // console.log(cardDetails)
    nevigate(`/details/${id}`);
    
  }
  const maxLength =320;
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDescription = description.length > maxLength ? description.substring(0, maxLength) + "..." : description;

  const handleReadMore = () => {
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setIsExpanded(false);
  };

  return (
  
    <div >

      
      <div className="cards">
        <div className="content">
          <img
            className="images"
            src={image}
            style={{ height: "200px", width: "100%", objectFit: "cover" }}
            alt="Card"
          />
         
          <h2>{title}</h2>
          <p>
            {isExpanded ? description : truncatedDescription}
            {description.length > maxLength && !isExpanded && (
              <span onClick={handleReadMore} style={{ color: '#BB2D3B', cursor: 'pointer' }}> Read More</span>
            )}
            {isExpanded && (
              <span onClick={handleShowLess} style={{ color: 'blue', cursor: 'pointer' }}> Show Less</span>
            )}
          </p>
          <button onClick={detailhandler} className="btn-en">Course Details </button>
         
        </div>
      
         
   
     
    </div>
      </div>

  
     
  
    
  );
}

export default Card;
