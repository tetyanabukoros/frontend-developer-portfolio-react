import './contacts.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Contacts = () => {
  return (
    <section className="section contacts">
      <div className="container">
        <h1>Contacts</h1>

        <div className="contacts-grid">
          <div className="contact-card skeleton-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h2>Location</h2>
            <p>Ukraine | Ready to work remotely</p>
          </div>

          <div className="contact-card skeleton-card">
            <FaPhoneAlt className="contact-icon" />
            <h2>Telegram / Viber / WhatsApp</h2>
            <p><a href="tel:+380978780280">+380 97 87 80 280</a></p>
          </div>

          <div className="contact-card skeleton-card">
            <FaEnvelope className="contact-icon" />
            <h2>Email</h2>
            <p><a href="mailto:tetyana.bukoros@gmail.com">tetyana.bukoros@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
