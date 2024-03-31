import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from 'emailjs-com';
import contact from '../img/contact.svg';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;

const ContactForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const handleSubmit = (values) => {
    emailjs.send(serviceId, templateId, {
      from_name: values.name,
      from_email: values.email,
      message: values.message
    }, userId)
      .then(() => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 5000); // Hide success message after 5 seconds
      })
      .catch((error) => {
        console.log(error.text);
        setShowErrorMessage(true);
        setTimeout(() => setShowErrorMessage(false), 5000); // Hide error message after 5 seconds
      });
  };

  return (
    <div id='contact' className="bg-gradient-to-b from-yellow-300 to-green-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-9">
        <div className="md:flex items-center">
          {/* Left Section (Image) */}
          <div data-aos="fade-right" className="md:w-1/2 ">
            <img
              src={contact}
              alt="Your Name"
              className="rounded-full w-160 h-160 mx-auto"
            />
          </div>
          {/* Right Section (Form) */}
          <div data-aos="flip-down" className="md:w-1/2 md:pl-4 bg-gradient-to-b from-yellow-300 to-green-100 rounded-2xl p-5">
            <div className="text-5xl font-extrabold text-white font-mono py-3">Contact Me</div>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = 'Name is required';
                }
                if (!values.email) {
                  errors.email = 'Email is required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = 'Invalid email address';
                }
                if (!values.message) {
                  errors.message = 'Message is required';
                }
                return errors;
              }}
            >
              <Form className="mt-4">
                <div className="mb-4"> 
                  <Field
                    type="text"
                    name="name"
                    placeholder='Name'
                    className="w-full rounded-2xl p-2 focus:outline-none focus:ring focus:border-yellow-300"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4"> 
                  <Field
                    type="email"
                    name="email"
                    placeholder='Email'
                    className="w-full rounded-2xl p-2 border border-gray-300 focus:outline-none focus:ring focus:border-yellow-300"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <Field
                    as="textarea"
                    name="message"
                    rows="5"
                    placeholder='Message...'
                    className="w-full rounded-2xl p-2 border border-gray-300 focus:outline-none focus:ring focus:border-yellow-300"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                </div>
                <button
                  type="submit"
                  className="bg-yellow-400 text-white py-2 px-6 rounded-lg font-semibold hover:bg-yellow-500"
                >
                  Send
                </button>
              </Form>
            </Formik>
            {showSuccessMessage && (
              <div className="bg-green-500 text-white p-3 mt-3 rounded-lg">
                Message sent successfully!
              </div>
            )}
            {showErrorMessage && (
              <div className="bg-red-500 text-white p-3 mt-3 rounded-lg">
                Error sending message. Please try again later.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
