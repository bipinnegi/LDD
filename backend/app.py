from flask import Flask, request, jsonify
from keras.models import load_model
import numpy as np
import cv2
from io import BytesIO
from PIL import Image
from flask_cors import CORS  # Import CORS

# Initialize the Flask app
app = Flask(__name__)

# Enable CORS only for your frontend domain
CORS(app, resources={r"/*": {"origins": "https://ldd-frontend.onrender.com"}})

# Load the trained model
model = load_model('model/lung_disease_detector_final.h5')

# Define the prediction route
@app.route('/predict', methods=['POST'])
def predict():
    try:
        file = request.files['file']
        img = Image.open(BytesIO(file.read()))
        img = img.convert('L')  # Grayscale
        img = img.resize((224, 224))
        img_array = np.array(img) / 255.0
        img_array = img_array.reshape(1, 224, 224, 1)

        prediction = model.predict(img_array)
        confidence = float(prediction[0][0])  # scalar

        if confidence > 0.5:
            result = 'Pneumonia'
        else:
            result = 'Normal'

        return jsonify({'prediction': result, 'confidence': confidence})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
