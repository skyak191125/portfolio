import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    Swal.fire({
      title: "Sending Message...",
      text: "Please wait...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    emailjs
      .sendForm(
        "service_lmdlqpf",
        "template_cnb1yh5",
        form.current,
        "adRPdX8JEndJZEMTV"
      )
      .then(() => {
        setLoading(false);

        Swal.fire({
          icon: "success",
          title: "Message Sent 🎉",
          text: "Thank you for contacting me. I'll reply soon.",
          timer: 2500,
          showConfirmButton: false,
        });

        form.current.reset();
      })
      .catch((error) => {
        console.error(error);

        setLoading(false);

        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: "Something went wrong. Please try again.",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <section className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
        <p>
          Have a project or want to work together?
          Feel free to contact me.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="info-box">
            <FaPhoneAlt />
            <div>
              <h3>Phone</h3>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>youremail@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <h3>Location</h3>
              <p>India</p>
            </div>
          </div>

          <div className="social-links">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="contact-form">

          <form ref={form} onSubmit={sendEmail}>

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
            >
              <FaPaperPlane />

              {loading ? "Sending..." : "Send Message"}

            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;