import React from "react";
import { Link } from "react-router-dom";
import "./MarqueeAnnouncement.css";

const MarqueeAnnouncement = () => {
  // Two items per group ensure total track width (~3400px) exceeds any screen width (desktop & mobile)
  // preventing sudden jumps, flickering, or blank spaces while keeping speed slow and smooth at 35-45s.
  const announcementItems = [0, 1];

  return (
    <div
      className="marquee-announcement-bar ad"
      role="region"
      aria-label="Admissions Announcement"
    >
      <div className="marquee-announcement-track">
        {/* Primary marquee group */}
        <div className="marquee-group">
          {announcementItems.map((index) => (
            <span className="marquee-item" key={`item-${index}`}>
              <span className="marquee-text-segment">
                Admission Opens For Session 2025-2026
              </span>
              <span className="marquee-separator">|</span>
              <span className="marquee-text-segment">
                100% Job Placements Assistance
              </span>
              <span className="marquee-separator">|</span>
              <span className="marquee-text-segment">
                Admissions Open For New Batches
              </span>
              <span className="marquee-separator">|</span>
              <Link
                to="/contact"
                className="marquee-register-link"
                title="Navigate to Contact Us"
              >
                Register Now!
              </Link>
              <span className="marquee-separator marquee-separator-end">|</span>
            </span>
          ))}
        </div>

        {/* Seamless duplicate group for continuous infinite loop */}
        <div className="marquee-group" aria-hidden="true">
          {announcementItems.map((index) => (
            <span className="marquee-item" key={`dup-${index}`}>
              <span className="marquee-text-segment">
                Admission Opens For Session 2025-2026
              </span>
              <span className="marquee-separator">|</span>
              <span className="marquee-text-segment">
                100% Job Placements Assistance
              </span>
              <span className="marquee-separator">|</span>
              <span className="marquee-text-segment">
                Admissions Open For New Batches
              </span>
              <span className="marquee-separator">|</span>
              <Link
                to="/contact"
                className="marquee-register-link"
                tabIndex={-1}
                title="Navigate to Contact Us"
              >
                Register Now!
              </Link>
              <span className="marquee-separator marquee-separator-end">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeAnnouncement;
