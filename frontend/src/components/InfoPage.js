import React from 'react';
import './infopage.css';

const InfoPage = ({ onStart }) => {
  return (
    <div>
      <div id="info-page" className="background-gradient">
        <h1>Welcome</h1>
        <h1>Lung Disease Detector</h1>
        <p>
          This tool helps identify lung conditions like pneumonia from chest X-ray images.
        </p>
        <p>Upload an X-ray image, and the model will predict the result.</p>
        <button id="start-button" onClick={onStart}>
          Start
        </button>
      </div>
      <div>
        <div id="about">
          <h2 id="win-heading" className="n-heading">What is Pneumonia?</h2>
          <p id="win-para1" className="winpara">
            Pneumonia is a respiratory infection that inflames the air sacs in one or both lungs.
          </p>
          <p id="win-para2" className="winpara">
            These air sacs, known as alveoli, can fill with fluid or pus, causing symptoms such as coughing, fever, chills, and difficulty breathing.
          </p>

          <h2 id="con" className="n-heading">Causes of Pneumonia</h2>
          <p id="con-para1" className="con-para">
            Bacteria: Streptococcus pneumoniae is the most common bacterial cause.
          </p>
          <p id="con-para2" className="con-para">
            Viruses: Influenza, respiratory syncytial virus (RSV), and SARS-CoV-2 (the virus causing COVID-19) can also lead to pneumonia.
          </p>
          <p id="con-para3" className="con-para">
            Fungi: More common in individuals with weakened immune systems.
          </p>
          <p id="con-para4" className="con-para">
            Aspiration: When food, drink, or saliva enters the lungs instead of being swallowed properly.
          </p>

          <h2 id="son" className="n-heading">Symptoms of Pneumonia</h2>
          <p id="son-para1" className="son-para">Cough (with phlegm or pus)</p>
          <p id="son-para2" className="son-para">Fever and chills</p>
          <p id="son-para3" className="son-para">Shortness of breath</p>
          <p id="son-para4" className="son-para">Chest pain when breathing or coughing</p>
          <p id="son-para5" className="son-para">Fatigue and muscle aches</p>

          <h2 id="ourt" className="n-heading">How Does Our Tool Help?</h2>
          <p id="ourt-para1" className="ourt-para">
            Our tool uses advanced machine learning algorithms to analyze chest X-ray images and provide a quick prediction of whether pneumonia is present.
          </p>
          <p id="ourt-para2" className="ourt-para">
            This can assist doctors in making faster decisions and improve outcomes for patients.
          </p>
        </div>
      </div>
      <footer id="footer-infopage">
        <div id="footer-div">© Lung Disease Detector</div>
      </footer>
    </div>
  );
};

export default InfoPage;
