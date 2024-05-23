import React, { useState } from "react";
// import locationIcon from '../assets/icon/icon.png'
import { useFormik } from "formik";
import * as Yup from "yup";
import "./contact.css";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const Contact = () => {
  const [showContactMsg, setShowContactMsg] = useState("");

  //frontend form validation using formik and yup

  const validationSchema = () => {
    return Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid Email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema(),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_REACT_APP_URL}/api/v1/contact/contactwithme`,
          values
        );
        if (res.data.success) {
          toast.success(res.data.message);
          setShowContactMsg(res.data.message);
          formik.resetForm();
          // Automatically remove the response message after 3 seconds
          setTimeout(() => {
            setShowContactMsg("");
          }, 3000);
        }
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("something went wrong");
        }
      }
    },
  });

  return (
    <>
      <div className="contactBg">
        <div className="contactNavbar">
          <Navbar />
        </div>
        <div className="contact_container">
          <div className="container contact">
            <div className="contact_content">
              <h2>GET IN TOUCH</h2>
              {/* <p className='subPara'>Reach out anytime for collaboration, <br /> ideas, or questions. Let's connect.</p> */}
              <p className="subPara">
                Feel free to reach out to us anytime. We're eager to discuss
                ideas, collaborate, <br /> or answer any questions you may have.
                Let's connect and make great <br /> things happen together.
              </p>
            </div>
            <div className="address">
              <div className="location">
                <div className="address_image">
                  <FaLocationDot className="location_icon" />
                  <div className="address_content">
                  <h2>Address</h2>
                  <p className="subPara">khumaltar,Lalitpur,Nepal</p>
                </div>
                </div>
                
              </div>
              <div className="location">
                <div className="address_image">
                  <FaPhone className="location_icon" />
                  <div className="address_content">
                    <h2>Phone</h2>
                    <p className="subPara">+977 01-5230150</p>
                  </div>
                </div>
              </div>
              <div className="location">
                <div className="address_image">
                  <MdMarkEmailUnread className="location_icon"/>
                  <div className="address_content">
                  <h2>Email</h2>
                  <p className="subPara">info@nepaltechinnov.com</p>
                </div>
                </div>
              
              </div>
            </div>

            <div className="message" data-aos="fade-right">
              <div className="left_Contact">
                <div className="location_maps">
                  <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7068.3188449049985!2d85.31542489668333!3d27.650538916960784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17000477c865%3A0xc8d8ea8f33bee317!2sNepalTech%20Innovations%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1713871169268!5m2!1sen!2snp"
                  ></iframe>
                </div>
              </div>

              <div className="right_Contact">
                <h2>Write us a message</h2>
                {/* <p className='paraForm'>Use the form to contact me, I'll be happy to hear from you!</p> */}
                <form
                  className="form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit(e);
                  }}
                >
                  <div className="input-row">
                    <div>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        className="input"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name*"
                        required
                      />
                      {formik.touched.name && formik.errors.name && (
                        <p className="errors">{formik.errors.name}</p>
                      )}
                    </div>
                    <div>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        className="input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email*"
                        required
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="errors">{formik.errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="textarea-row">
                    <div>
                      <textarea
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        onBlur={formik.handleBlur}
                        className="textarea"
                        name="message"
                        id="message"
                        placeholder="Your Message*"
                        required
                      ></textarea>
                      {formik.touched.message && formik.errors.message && (
                        <p className="errors">{formik.errors.message}</p>
                      )}
                    </div>
                  </div>
                  <p className="showcontactmsg">{showContactMsg}</p>
                  <button className="sendMsgBtn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
