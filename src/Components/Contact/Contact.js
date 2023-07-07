import React from 'react';
import '../Contact/Contact.css';
import { MdMail, MdSend , MdLocationOn} from 'react-icons/md';

const Contact = () => {
    return (
      <section className="contact-sectionbg-gray-100 pt-20 container mx-auto px-4 lg:px-8">
        <h2 className="section-title text-4xl lg:text-2xl xl:text-4xl mb-8 text-center font-sans">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-info">
              <p className="info-text text-2xl lg:text-3xl font-bold mb-4 font-sand">
              Finedge revolutionizes the way of transactions. Got a pressing 
              inquiry or an ingenious idea to share with our team? Don’t hesitate to get in touch! We’re always up for a chat and eager to engage.
              </p>
              <div className="contact-details">
                <div className="detail-item mt-5">
                  <MdMail className="detail-icon" />
                  <span className="detail-text font-bold lg:text-lg text-gray-800 mt-4 font-sand">FinEdge@pay.co.in</span>
                </div>
                <div className="detail-item mt-5">
                  <MdLocationOn className="detail-icon" />
                  <span className="detail-text font-bold lg:text-lg text-gray-800 mt-4 font-sand">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right ">
            <div className="contact-form">
            <form>
                <div className="form-group">
                    <div className='form-grid'>
                        <div className='form-content'>
                            <label htmlFor="firstName" className="label-field font-sand">Name</label>
                            <input type="text" id="firstName" className="input-field" placeholder="" required />
                        </div>
                        <div className="form-content">
                            <label htmlFor="lastName" className="label-field" >Last Name</label>
                            <input type="text" id="lastName" className="input-field" placeholder="" required />
                        </div>
                    </div>   
                        <div className="form-content">
                            <label htmlFor="project" className="label-field">Project</label>
                            <input type="text" id="project" className="input-field" placeholder=" " required />
                        </div>
                        <div className="form-content">
                            <label htmlFor="message" className="label-field">Message</label>
                            <textarea id="message" className="input-field textarea-field" placeholder=" " required></textarea>
                        </div>
                </div>
                <button type="submit" className="bg-emerald-800 submit-button flex flex-row font-sand font-bold">
                  Send Message <MdSend className="send-icon" />
                </button>
            </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;