import React, { useState } from "react";
import "./uploaderpage.css";

const XrayUploader = () => {
  const [file, setFile] = useState(null); // To store the uploaded file
  const [previewUrl, setPreviewUrl] = useState(null); // To store the preview URL
  const [prediction, setPrediction] = useState(null); // To store the prediction result
  const [confidence, setConfidence] = useState(null); // To store the confidence level
  const [error, setError] = useState(null); // To store any error message

  // Handle file input change
  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile); // Set the selected file
      setPreviewUrl(URL.createObjectURL(selectedFile)); // Create a preview URL for the file
    }
  };

  // Handle form submission (sending file to backend)
  const onSubmit = async (e) => {
    e.preventDefault();

    // Check if file is selected
    if (!file) {
      setError("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Send the image to the backend
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      // Handle error from backend
      if (data.error) {
        setError(data.error);
      } else {
        setPrediction(data.prediction); // Set the prediction result
        setConfidence(data.confidence); // Set the confidence level
        setError(null); // Clear any previous errors
      }
    } catch (err) {
      setError("Error uploading the file. Please try again.");
    }
  };

  return (
    <div id="upload-div">
      <h2>Upload Chest X-Ray Image for Prediction</h2>

      <form onSubmit={onSubmit} id="upload-form">
        <div className="upload-container">
          <label htmlFor="upload-input" className="upload-box">
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="preview-image" />
            ) : (
              <div>
                <div className="upload-icon">⬆</div>
                <p>Upload Chest X-ray Image</p>
              </div>
            )}
          </label>
          <input
            type="file"
            id="upload-input"
            onChange={onFileChange}
            accept="image/*"
            hidden
          />
        </div>
        <br />
        <button id="submit-button" type="submit">
          Submit
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {prediction && (
        <div id="result-div">
          <h3>Prediction: {prediction}</h3>
          <h4>
            Confidencee:{" "}
            {confidence ? (confidence * 100).toFixed(2) + "%" : "N/A"}
          </h4>
        </div>
      )}
    </div>
  );
};

export default XrayUploader;
