import streamlit as st
import cv2
import numpy as np
from PIL import Image  

st.title("Sheets Counter")
st.subheader("Upload an image to count the number of sheets")

uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])

def count(image):
    #Converting image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)    
    #Applying edge detection
    edges = cv2.Canny(gray, 10, 1000, apertureSize=3)    
    #Using Hough Line Transform to detect lines
    lines = cv2.HoughLinesP(edges, 1, np.pi / 180, threshold=80, minLineLength=100, maxLineGap=10)    
    num_lines = len(lines) if lines is not None else 0
    return num_lines

if uploaded_file is not None:
    image = Image.open(uploaded_file)
    st.image(image, caption='Uploaded Image.', use_column_width=True)
    st.write("")
    st.write("Processing image...")
    opencv_image = np.array(image)
    opencv_image = cv2.cvtColor(opencv_image, cv2.COLOR_RGB2BGR)  
    sheet_count = count(opencv_image)
    st.write(f"Number of sheets: {sheet_count}")



