
import { useNavigate } from 'react-router-dom';

// this id ,discripction ,image commes from data.jsx 


function Card({ id, title, description, image }) {

  const nevigate = useNavigate();
  function detailhandler() {
    nevigate(`/details/${id}`);

  }

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
            {description}
          </p>
          <button onClick={detailhandler} className="btn-en">Course Details </button>

        </div>




      </div>
    </div>





  );
}

export default Card;
