import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../Data.jsx';

function Card({ id, title, description, image, courseDetails, pointsMessages, price }) {
  const navigate = useNavigate();

  function detailhandler() {
    navigate(`/details/${id}`);
  }

  // Resolve additional data from props or Data.jsx fallback
  const fallbackItem = data.find((c) => c.id === id);
  const details = courseDetails || fallbackItem?.CourseDetails;
  const points = pointsMessages || fallbackItem?.pointsMessages;
  const coursePrice = price || fallbackItem?.price;

  // Clean format for duration
  const formatDuration = (val) => {
    if (!val) return '3–6 Months';
    return val.replace(/monts/gi, 'Months').replace(/months/gi, 'Months');
  };

  const durationText = details?.Duration ? formatDuration(details.Duration) : '3–6 Months';
  const salaryText = details?.SalaryPackage ? details.SalaryPackage.trim() : '5 – 8 LPA';
  const levelText = details?.courseLevel || 'Intermediate';
  const modeText = details?.mode ? (details.mode.charAt(0).toUpperCase() + details.mode.slice(1).toLowerCase()) : 'Online';

  return (
    <div className="card-wrapper">
      <div className="cards">
        <div className="card-image-wrapper">
          <img
            className="images"
            src={image}
            alt={title || "Course thumbnail"}
          />
          <span className="card-badge">Certified</span>
        </div>
        <div className="content">
          <div className="content-top">
            <h2 className="course-card-title">{title}</h2>

            {/* Course Meta Highlights Grid with Monochrome Aligned Icons */}
            <div className="card-meta-grid">
              <div className="card-meta-item" title="Course Duration">
                <span className="meta-icon-wrapper">
                  <svg className="meta-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="meta-text">
                  <span className="meta-label">Duration</span>
                  <span className="meta-val">{durationText}</span>
                </div>
              </div>

              <div className="card-meta-item" title="Expected Salary Package">
                <span className="meta-icon-wrapper">
                  <svg className="meta-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </span>
                <div className="meta-text">
                  <span className="meta-label">Salary Scope</span>
                  <span className="meta-val">{salaryText}</span>
                </div>
              </div>

              <div className="card-meta-item" title="Course Level">
                <span className="meta-icon-wrapper">
                  <svg className="meta-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </span>
                <div className="meta-text">
                  <span className="meta-label">Level</span>
                  <span className="meta-val">{levelText}</span>
                </div>
              </div>

              <div className="card-meta-item" title="Learning Mode">
                <span className="meta-icon-wrapper">
                  <svg className="meta-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <line x1="2" y1="20" x2="22" y2="20" />
                  </svg>
                </span>
                <div className="meta-text">
                  <span className="meta-label">Mode</span>
                  <span className="meta-val">{modeText}</span>
                </div>
              </div>
            </div>

            {/* Direct Course Description - Equal Height */}
            <p className="course-card-desc">{description}</p>
          </div>

          <div className="content-bottom">
            <div className="card-info-row">
              <span className="info-tag">{modeText} Training</span>
              <span className="info-tag">Placement Assistance</span>
              {coursePrice && (
                <span className="info-tag price-tag">₹{coursePrice}</span>
              )}
            </div>
            <button onClick={detailhandler} className="btn-en">
              Course Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
