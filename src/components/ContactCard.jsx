import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const ContactCard = () => {
  return (
    <div className="contact-section px-4">
      
      {/* Map Section */}
      <div className="map-section p-5">
        <iframe
          title="Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999866486034!2d2.292292615674684!3d48.85837307928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fddf0e5e4f3%3A0x40b82c3688c9460!2sTallard%2C%20France!5e0!3m2!1sen!2sus!4v1702383620123!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="info-section p-5 mt-5">
        <h2>Contact Us</h2>
        <div className="contact-item">
          <FiMail className="icon" />
          <span className="text">drinks@gmail.com</span>
        </div>
        <div className="contact-item">
          <FiMapPin className="icon" />
          <span className="text">Tallard, France</span>
        </div>
        <div className="contact-item">
          <FiPhone className="icon" />
          <span className="text">+33 787 984 09</span>
        </div>
      </div>

    </div>
  );
};

export default ContactCard;
