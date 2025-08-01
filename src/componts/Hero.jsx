import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiUser,
  FiTag,
} from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#121212] text-white py-20 px-6 md:px-20 snap-start"
    >
      <h2 className="text-4xl font-syncopate font-bold mb-12 border-b-4 border-blue-600 inline-block">
        Contact
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Infos de contact avec icônes */}
        <div className="flex flex-col justify-center space-y-8 max-w-md">
          <p className="text-gray-400 mb-4">
            N’hésitez pas à me contacter pour discuter d’un projet, d’une opportunité ou simplement échanger.
          </p>

          <div className="flex items-center space-x-4">
            <FiPhone className="text-blue-500 text-2xl" />
            <span className="text-lg font-medium">+33 780 76 12 05</span>
          </div>

          <div className="flex items-center space-x-4">
            <FiMail className="text-blue-500 text-2xl" />
            <span className="text-lg font-medium">lydiahamza.hs@gmail.com</span>
          </div>

          <div className="flex items-center space-x-4">
            <FiMapPin className="text-blue-500 text-2xl" />
            <span className="text-lg font-medium">Paris, France</span>
          </div>
        </div>

        {/* Formulaire */}
        <form className="space-y-8 max-w-md mx-auto">
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-blue-600 mb-2 font-semibold font-syncopate"
            >
              Nom
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder="Votre nom"
                className="w-full pl-12 p-4 bg-[#1c1c1c] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="block text-blue-600 mb-2 font-semibold font-syncopate"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Votre email"
                className="w-full pl-12 p-4 bg-[#1c1c1c] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="subject"
              className="block text-blue-600 mb-2 font-semibold font-syncopate"
            >
              Sujet
            </label>
            <div className="relative">
              <input
                type="text"
                id="subject"
                placeholder="Sujet"
                className="w-full pl-12 p-4 bg-[#1c1c1c] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <FiTag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="message"
              className="block text-blue-600 mb-2 font-semibold font-syncopate"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Votre message"
              className="w-full p-4 bg-[#1c1c1c] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-pink-700 text-white font-bold py-4 rounded-lg transition-colors duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
