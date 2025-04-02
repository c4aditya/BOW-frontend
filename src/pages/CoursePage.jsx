import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import posterImg from "../images/coursePoster.jpg";
import data from "../Data.jsx"; // Ensure this contains course details
import "./coursePage.css"
function CoursePage() {
  const navigate = useNavigate();

  function enrolHandler(courseName) {
    navigate("/enrollment", { state: { courseName } });
  }

  return (
    <div>
      <div className="poster">
        <div className="text">OUR COURSES</div>
        <img src={posterImg} alt="Course Poster" />
      </div>

      <div className="ad">
              <marquee>Admission Opens For Session 2024- 2025 | 100% Job Placements Assistance | Admissions Open For New Batches | Register Now!</marquee>
        </div>

      <div className="course-container">
        {data.map((course) => (
          <Card className="cards"
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CoursePage;
