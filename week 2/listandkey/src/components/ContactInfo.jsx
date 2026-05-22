import { sanitizePhone } from '../utils/sanitizePhone';

const ContactInfo = ({ email, phone, website }) => {
  const userPhone = sanitizePhone(phone);
  return (
    <div className='info-group'>
      <div className='info-item'>
        <span className='info-icon'>📧</span>
        <span className='info-text'>
          <a href={`mailto:${email}`}>{email}</a>
        </span>
      </div>
      <div className='info-item'>
        <span className='info-icon'>📞</span>
        <span className='info-text'>
          <a href={`tel:${userPhone}`}>{phone}</a>
        </span>
      </div>
      <div className='info-item'>
        <span className='info-icon'>🌐</span>
        <span className='info-text'>{website}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
