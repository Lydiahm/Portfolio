import { useState } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_lyjxnlj',      // Ton SERVICE_ID
        'template_x2ac9sn',     // Ton TEMPLATE_ID
        e.target,                // Le formulaire
        'mJJymZSqx9VzfMqmZ'     // Ta PUBLIC KEY (USER_ID)
      )
      .then(
        (result) => {
          console.log('Message envoyé avec succès:', result.text);
          alert('Message envoyé avec succès!');
        },
        (error) => {
          console.error('Erreur lors de l\'envoi:', error.text);
          alert('Une erreur est survenue. Veuillez réessayer.');
        }
      );
  };

  return (
    <section className="bg-black text-white py-20 px-12 md:px-28 min-h-screen flex flex-col md:flex-row gap-16 items-center justify-center">
      {/* Left Side - Contact Info */}
      <div className="md:w-2/5 w-full space-y-6">
        <h2 className="text-4xl font-bold">Contact</h2>
        <div className="w-16 h-1 bg-blue-600 mb-4" />

        <p className="text-gray-300">
          N’hésitez pas à me contacter pour discuter de projets,
          d’opportunités d’alternance ou simplement pour échanger sur les
          technologies.
        </p>

        <div className="space-y-4 mt-6">
          <ContactItem icon={<Phone className="w-5 h-5" />} text="+33 780 76 12 05" />
          <ContactItem icon={<Mail className="w-5 h-5" />} text="lydiahamza.hs@gmail.com" />
          <ContactItem icon={<MapPin className="w-5 h-5" />} text="Paris" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-2/5 w-full space-y-8">
        {/* Top Gradient Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-pink-500 mb-6" />

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <FormField
            label="NOM"
            placeholder="Votre nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
          <FormField
            label="EMAIL"
            placeholder="Votre email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            label="SUJET"
            placeholder="Sujet de votre message"
            name="sujet"
            value={formData.sujet}
            onChange={handleChange}
          />
          <FormField
            label="MESSAGE"
            placeholder="Votre message"
            isTextarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-2 rounded-full hover:brightness-110 transition"
          >
            ENVOYER
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-[#1F1F1F] p-3 rounded-full">{icon}</div>
      <span className="text-white">{text}</span>
    </div>
  );
}

function FormField({ label, placeholder, isTextarea = false, name, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-blue-500 uppercase text-sm mb-1">{label}</label>
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="bg-[#1A1A1A] text-white p-3 rounded-md resize-none min-h-[120px]"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="bg-[#1A1A1A] text-white p-3 rounded-md"
        />
      )}
    </div>
  );
}
