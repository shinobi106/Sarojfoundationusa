import React from 'react'
import "./footer.scss"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Our Mission</h1>
          <span> To make people aware about sanitation</span>
          <span> To serve the needs of old and physically disabled person</span>
          <span>To protect and make small children and women aware from being a victim of abuse.</span>
         
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>About Us</span>
          <span>What we Do</span>
          <span>Become a Volunteer</span>
          <span>Cookies</span>
        </div>
        <div className="item mob">
          <h1>About</h1>
          <span>
          Saroj Foundation is pledged for promotion of educational facilities to the destitute children and vocational trainings to the underprivileged women, youth, disabled and prison inmates in particular and others in general in collaboration of our Governments, Corporate and other like-minded groups, as it is a significant aspect for the progress & empowerment of communities in a holistic way.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          91-8826556784
          </span>
          <span>ritu.tyagi@sarojfoundationusa.org</span>
          <span>www.sarojfoundationusa.org</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Saroj Foundation</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}
