import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { emailjsConfig } from '../../utils/emailjs-setup';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      // Using the imported EmailJS credentials
      const { serviceId, templateId, publicKey } = emailjsConfig;

      // Get the form data and prepare it for sending

      // Create a template params object with all the form data
      const templateParams = {
        from_name: data.from_name,
        from_email: data.from_email,
        subject: data.subject,
        message: `Email: ${data.from_email}\n\n${data.message}`,
        reply_to: data.from_email
      };

      console.log('Sending email with:', { serviceId, templateId, publicKey, templateParams });

      // Send the email using EmailJS with template parameters
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      // Set a more detailed error message
      setSubmitStatus('error');
      // Log the error details to help with debugging
      if (error.text) {
        console.error('EmailJS error details:', error.text);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'akshanverma0310@gmail.com',
      link: 'mailto:akshanverma0310@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+91 8448702639',
      link: 'tel:+918448702639',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Delhi, India',
      link: 'https://maps.google.com/?q=Delhi,India',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Feel free to reach out if you have any questions or want to work together
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-700 mb-8">
                I'm currently available for freelance work or full-time positions.
                If you have a project that needs some creative work, feel free to contact me.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-gray-700 hover:text-primary transition-colors"
                        target={info.title === 'Location' ? '_blank' : undefined}
                        rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your name"
                      name="from_name"
                      {...register('from_name', { required: 'Name is required' })}
                    />
                    {errors.from_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.from_name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your email"
                      name="from_email"
                      {...register('from_email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        }
                      })}
                    />
                    {errors.from_email && (
                      <p className="text-red-500 text-sm mt-1">{errors.from_email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Subject"
                    name="subject"
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your message"
                    name="message"
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <FaPaperPlane className="mr-2" /> Send Message
                    </span>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-md">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-md">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
