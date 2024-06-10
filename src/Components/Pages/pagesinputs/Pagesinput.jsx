import React from 'react';
import './Pagesinput.css'; // Import your custom CSS for styling

const EmailWaitlist = () => {
  return (
    <>
    <div className="waitlist-container ">
      <h2 className='h2in'>Join our waitlist for early access to new features</h2>
      <form className="waitlist-form">
        <div className="input-container">
          <input type="email" placeholder="Your Email" className="email-input" required />
          <button type="submit" className="waitlist-button">Join waiting list</button>
        </div>
      </form>
      <p className="privacy-terms">By continuing, you accept Privacy & Terms</p>
    </div>
    </>
  );
};

export default EmailWaitlist;
