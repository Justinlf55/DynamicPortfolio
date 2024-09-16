import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import emailjs from 'emailjs-com';

interface ContactProps {
  onClick: () => void;
}

const Contact: React.FC<ContactProps> = ({ onClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''
    )
    .then((result) => {
      console.log('Message sent:', result.text);
      alert('Message sent successfully');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.log('Error:', error.text);
      alert('Failed to send message');
    });
  };

  const inputStyles = 'p-2 rounded-lg mb-4 w-full';

  return (
    <Modal title='Contact Me' onClick={onClick}>
      <form className='mb-12 w-full flex flex-col' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Full Name'
          value={formData.name}
          onChange={handleChange}
          className={inputStyles}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          className={inputStyles}
          required
        />
        <textarea
          name='message'
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
          className={`${inputStyles} pb-36`}
          required
        />
        <Button label='Send' type='submit' sm liftHover/>
      </form>
    </Modal>
  );
};

export default Contact;
