from flask import Flask, request, jsonify
from keras.models import load_model
import numpy as np
import cv2
from io import BytesIO
from PIL import Image
from flask_cors import CORS  # Import CORS

# Initialize the Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model (ensure the correct path to your model)
model = load_model('model/lung_disease_detector_final.h5')

# Define the prediction route
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the file from the request
        file = request.files['file']
        
        # Open the image from the uploaded file
        img = Image.open(BytesIO(file.read()))
        
        # Convert the image to grayscale (if your model expects grayscale images)
        img = img.convert('L')  # 'L' mode is for grayscale
        
        # Resize the image to match the input size of your model (224x224)
        img = img.resize((224, 224))
        
        # Convert the image to a numpy array and normalize
        img_array = np.array(img) / 255.0  # Normalize to [0, 1]
        
        # Reshape to match the expected input shape (1, 224, 224, 1)
        img_array = img_array.reshape(1, 224, 224, 1)
        
        # Predict using the model
        prediction = model.predict(img_array)

        # Extract the scalar value and avoid deprecation warning
        confidence = float(prediction[0][0])  # Assuming binary classification with shape (1, 1)

        # Return the prediction result (assuming binary classification)
        if confidence > 0.5:
            result = 'Pneumonia'
        else:
            result = 'Normal'

        return jsonify({'prediction': result, 'confidence': confidence})

    except Exception as e:
        return jsonify({'error': str(e)})


