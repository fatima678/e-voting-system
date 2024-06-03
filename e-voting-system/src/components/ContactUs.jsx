import React from "react";

export default function ContactUs() {
  function sendEmail(e){
    e.preventDefault();
    
    emailjs.sendForm('service_bl2l688','template_1lsnlq4', e.target,'aJm51R7fLjdL-za_o').then(res=>{console.log(res)}).catch(err=> console.log(err));

  }
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-xl text-gray-600 mt-4">
            We would love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <form onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-gray-600 font-semibold mb-2" htmlFor="firstName" >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-600 font-semibold mb-2" htmlFor="lastName" >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2" 
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div className="mt-6">
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32"
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Additional Contact Information Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Ways to Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">211400133@gift.com</p>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+92 300023445</p>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">Satelitown, Gujranwala, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
