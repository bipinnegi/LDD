Lung Disease Detector Web App

 This project is a web application for detecting lung diseases like pneumonia using chest X-ray images. It leverages a machine learning model trained on chest X-ray datasets to predict whether the X-ray indicates pneumonia or normal lung conditions.

Features

 Upload X-ray Images Users can upload chest X-ray images for analysis.
 Real-Time Predictions The app provides instant predictions with confidence percentages.
 User-Friendly Interface Intuitive and clean UI for seamless user interaction.
 Informative Welcome Page Educates users about pneumonia and how the app works.



Technologies Used

Frontend

React For building the user interface.
Framer Motion For smooth animations.
CSS For styling components.


Backend

Flask Python web framework for handling API requests.
Keras For loading and using the trained machine learning model.
NumPy For numerical computations.
Pillow (PIL) For image processing.
Machine Learning
Model A Convolutional Neural Network (CNN) trained on a dataset of chest X-ray images.


Prerequisites

Before running the application, ensure you have the following installed

 Node.js For running the React frontend.
 Python For running the Flask backend.
 Virtual Environment (Optional) For managing Python dependencies.

Acknowledgements
 This project was inspired by the need for accessible healthcare solutions and uses public datasets for training the machine learning model.