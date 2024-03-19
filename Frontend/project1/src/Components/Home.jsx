import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import Footer from './Footer';
const Home = () => {
  return (
    <div>
      <div className='Homeback1'>
        <Navbar />
        <div>
          <h1 className="intro-text1">Welcome to Our Agriculture Loan Portal</h1>
          <p className="intro-text2"> At AgriFunds, we understand the importance of agriculture in our society and the challenges that farmers face in sustaining and growing their livelihoods. That's why we offer a range of tailored loan solutions to support farmers at every stage of their journey.</p>
          <p className="intro-text3">Explore our services:</p>
        </div>
        <div className="loan-container1">
          <img  className="img1"src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg" alt="Crop Loan" />
          <div className="loan-description">
            <h2>Crop Loan</h2>
            <p>Access quick funds tailored for seasonal needs through our Crop Loans. Benefit from flexible repayment options and competitive interest rates, empowering you to meet your agricultural requirements efficiently and effectively.</p>
          </div>
        </div>
        <div className="loan-container2">
          <img  className="img2"src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?cs=srgb&dl=pexels-%C3%A1kos-szab%C3%B3-440731.jpg&fm=jpg" alt="Land Loan" />
          <div className="loan-description">
            <h2>Land Loan</h2>
            <p>Embark on land development or expansion projects with our Land Loans. We offer customized loan amounts and extended repayment tenures, supported by expert guidance in land valuation and legal documentation, ensuring a seamless financing experience for your agricultural endeavors.</p>
          </div>
        </div>
        <div className="loan-container3">
          <img className="img3"src="https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-d-series-tractor.jpg" alt="Tractor Loan" />
          <div className="loan-description">
            <h2>Tractor Loan</h2>
            <p>Invest in essential mechanization equipment with our Tractor Loans. Enjoy competitive rates and flexible terms, coupled with expert assistance in selecting the right tractor model for your farming needs. Increase efficiency and productivity on your farm while reducing labor costs with our tailored tractor financing solutions.</p>
          </div>
        </div>
      </div>
   <Footer></Footer>
    </div>
  );
}

export default Home;

