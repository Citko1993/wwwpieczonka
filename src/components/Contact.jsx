'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    reason: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const reasons = [
    { value: '', label: 'Wybierz powód kontaktu' },
    { value: 'book', label: 'Zakup książki z dedykacją' },
    { value: 'interview', label: 'Propozycja wywiadu' },
    { value: 'event', label: 'Zaproszenie na wydarzenie' },
    { value: 'other', label: 'Inny powód' },
  ];
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Imię jest wymagane';
    if (!formData.email.trim()) errors.email = 'Email jest wymagany';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email jest nieprawidłowy';
    if (!formData.subject.trim()) errors.subject = 'Temat jest wymagany';
    if (!formData.reason) errors.reason = 'Wybierz powód kontaktu';
    if (!formData.message.trim()) errors.message = 'Wiadomość jest wymagana';
    
    return errors;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Czyścimy błąd pola po edycji
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      // Tutaj byłoby faktyczne wysłanie formularza (np. do API)
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        reason: '',
        message: '',
      });
    } else {
      setFormErrors(errors);
    }
  };
  
  return (
    <section id="contact" className="section bg-deep-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">Zostaw Wiadomość</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Chcesz się ze mną skontaktować? Masz pytanie dotyczące mojej pracy lub książek?
            Wypełnij formularz, a odpowiem tak szybko, jak to możliwe.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <a 
              href="mailto:kontakt@jaroslaw-pieczonka.pl" 
              className="inline-flex items-center text-lg text-white"
            >
              <FaEnvelope className="text-red-accent mr-2" />
              kontakt@jaroslaw-pieczonka.pl
            </a>
          </div>
          
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-dark-bg p-8 text-center border border-red-accent"
            >
              <h3 className="text-2xl font-oswald mb-4">Dziękuję za wiadomość!</h3>
              <p className="text-gray-300">
                Twoja wiadomość została wysłana. Postaram się odpowiedzieć tak szybko, jak to możliwe.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-300">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 bg-dark-bg border ${
                      formErrors.name ? 'border-red-accent' : 'border-light-gray'
                    } focus:border-red-accent focus:shadow-red-glow transition-colors`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-red-accent text-sm">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 bg-dark-bg border ${
                      formErrors.email ? 'border-red-accent' : 'border-light-gray'
                    } focus:border-red-accent focus:shadow-red-glow transition-colors`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-red-accent text-sm">{formErrors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-300">
                  Temat
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-3 bg-dark-bg border ${
                    formErrors.subject ? 'border-red-accent' : 'border-light-gray'
                  } focus:border-red-accent focus:shadow-red-glow transition-colors`}
                />
                {formErrors.subject && (
                  <p className="mt-1 text-red-accent text-sm">{formErrors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="reason" className="block mb-2 text-gray-300">
                  Powód kontaktu
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className={`w-full p-3 bg-dark-bg border ${
                    formErrors.reason ? 'border-red-accent' : 'border-light-gray'
                  } focus:border-red-accent focus:shadow-red-glow transition-colors`}
                >
                  {reasons.map((reason) => (
                    <option key={reason.value} value={reason.value}>
                      {reason.label}
                    </option>
                  ))}
                </select>
                {formErrors.reason && (
                  <p className="mt-1 text-red-accent text-sm">{formErrors.reason}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 bg-dark-bg border ${
                    formErrors.message ? 'border-red-accent' : 'border-light-gray'
                  } focus:border-red-accent focus:shadow-red-glow transition-colors`}
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-red-accent text-sm">{formErrors.message}</p>
                )}
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary w-full"
              >
                Wyślij Wiadomość
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
} 