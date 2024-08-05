import React from 'react';

const TermsAndPolicy = () => {
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    color: 'white', // Text color set to white
    fontFamily: 'Arial, sans-serif'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2.5em',
    fontWeight: 'bold'
  };

  const sectionStyle = {
    marginBottom: '40px'
  };

  const subHeaderStyle = {
    marginBottom: '15px',
    fontSize: '1.8em',
    fontWeight: 'bold'
  };

  const paragraphStyle = {
    lineHeight: '1.8',
    marginBottom: '15px'
  };

  const listStyle = {
    paddingLeft: '20px',
    listStyleType: 'disc',
    lineHeight: '1.8',
    marginBottom: '15px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Terms and Policy</h1>
      
      <section style={sectionStyle}>
        <h2 style={subHeaderStyle}>Terms and Conditions</h2>
        <p style={paragraphStyle}>Welcome to https://datatechalpha.in/!</p>
        <p style={paragraphStyle}>By using our EdTech website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.</p>
        
        <h3 style={subHeaderStyle}>1.1 Use of Website</h3>
        <ul style={listStyle}>
          <li>The content of this website is for your general information and educational use only. It is subject to change without notice.</li>
          <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
        </ul>
        
        <h3 style={subHeaderStyle}>1.2 Intellectual Property</h3>
        <p style={paragraphStyle}>All content included on the website, such as text, graphics, logos, images, and software, is the property of Data Tech Alpha and is protected by intellectual property laws.</p>
        
        <h3 style={subHeaderStyle}>1.3 User Accounts</h3>
        <p style={paragraphStyle}>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.</p>
        
        <h3 style={subHeaderStyle}>1.4 Limitation of Liability</h3>
        <p style={paragraphStyle}>Data Tech Alpha will not be liable for any damages arising out of or in connection with the use of this website.</p>
        
        <h3 style={subHeaderStyle}>1.5 Governing Law</h3>
        <p style={paragraphStyle}>These terms and conditions are governed by and construed in accordance with the laws of Punjab, India.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeaderStyle}>Privacy Policy</h2>
        
        <h3 style={subHeaderStyle}>2.1 Data Collection</h3>
        <p style={paragraphStyle}>We collect personal information such as name, email address, and payment details to process your orders and provide you with a better service.</p>
        
        <h3 style={subHeaderStyle}>2.2 Use of Information</h3>
        <p style={paragraphStyle}>We use the information to process transactions, send periodic emails, and improve our website.</p>
        
        <h3 style={subHeaderStyle}>2.3 Data Protection</h3>
        <p style={paragraphStyle}>We implement various security measures to protect your personal information.</p>
        
        <h3 style={subHeaderStyle}>2.4 Cookies</h3>
        <p style={paragraphStyle}>We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and interaction.</p>
        
        <h3 style={subHeaderStyle}>2.5 Third-Party Disclosure</h3>
        <p style={paragraphStyle}>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.</p>
        
        <h3 style={subHeaderStyle}>2.6 Contact Us</h3>
        <p style={paragraphStyle}>If you have any questions regarding this privacy policy, you may contact us using the information below:</p>
        <p style={paragraphStyle}>Email: datatechalpha.info@gmail.com<br />Phone: No number for now</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeaderStyle}>Refunds/Cancellations Policy</h2>
        
        <h3 style={subHeaderStyle}>3.1 Refund Eligibility</h3>
        <p style={paragraphStyle}>No refund and cancellation.</p>
        
        <h3 style={subHeaderStyle}>3.2 Refund Process</h3>
        <p style={paragraphStyle}>To initiate a refund, contact our customer support team at datatechalpha.info@gmail.com with your order details. We will process your refund within 5-7 working days, and the amount will be credited to your bank account.</p>
        
        <h3 style={subHeaderStyle}>3.3 Cancellations</h3>
        <p style={paragraphStyle}>Orders can be canceled before they are shipped. Once shipped, the cancellation policy will not apply, and the refund policy will take effect.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeaderStyle}>Pricing</h2>
        
        <h3 style={subHeaderStyle}>4.1 Course Pricing</h3>
        <p style={paragraphStyle}>All prices on the website are inclusive of taxes unless stated otherwise. Prices are subject to change without prior notice.</p>
        
        <h3 style={subHeaderStyle}>4.2 Payment Methods</h3>
        <p style={paragraphStyle}>We accept various payment methods, including credit cards, debit cards, and PayPal.</p>
        
        <h3 style={subHeaderStyle}>4.3 Errors in Pricing</h3>
        <p style={paragraphStyle}>In case of any error in pricing, we reserve the right to cancel the order and refund the amount paid.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeaderStyle}>Products/Services</h2>
        
        <h3 style={subHeaderStyle}>5.1 Course Descriptions</h3>
        <p style={paragraphStyle}>We strive to provide accurate descriptions of our courses and services. However, we do not warrant that the descriptions are completely accurate, current, or error-free.</p>
        
        <h3 style={subHeaderStyle}>5.2 Availability</h3>
        <p style={paragraphStyle}>All courses and services are subject to availability. We reserve the right to limit the quantity of courses/services we supply, discontinue any course/service, or refuse a service to anyone at any time.</p>
        
        <h3 style={subHeaderStyle}>5.3 Delivery</h3>
        <p style={paragraphStyle}>We aim to deliver the courses within the estimated time frame. However, delays might occur due to unforeseen circumstances.</p>
      </section>
    </div>
  );
};

export default TermsAndPolicy;
