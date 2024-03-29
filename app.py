import os 
from flask_cors import CORS
from flask import Flask,jsonify, request
import  json
# import numpy as np
import pickle as p
import joblib
import traceback
import pandas as pd
from sklearn.tree import DecisionTreeClassifier 
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
# from pytime 
import time


app = Flask(__name__)
CORS(app)

@app.route('/rank', methods=['GET'])
def rank():
    
    ds = joblib.load("model/model.pkl") # Load "model.pkl"
    print ('Model loaded')
    model_columns = joblib.load("data/data.pkl") # Load "model_columns.pkl"
    print ('Model columns loaded')
    json_=request.get_data()  

            # print(model_columns) 
    json_=json.loads(json_)          
    print(json_)
    query = pd.get_dummies(pd.DataFrame(json_, index=list(0)))
    print(query)
       
    query = query.reindex(columns=model_columns, fill_value=0)
    print(query)

    prediction = list(ds.predict(query))
    return jsonify({'prediction': str(prediction)})


@app.route('/search', methods=['GET'])
def search():
    patient = request.args.get('patient')
    ds = joblib.load("model/model1.pkl") # Load "model.pkl"
    print ('Model loaded')
    model_columns = joblib.load("model/model_columns1.pkl") # Load "model_columns.pkl"
    print ('Model columns loaded')
    json_=request.get_data()  
            # print(model_columns) 
    json_=json.loads(json_)          
    print(json_)
    query = pd.get_dummies(pd.DataFrame(json_, index=list(0)))
    print(query)
       
    query = query.reindex(columns=model_columns, fill_value=0)
    print(query)

    prediction = list(ds.predict(query))

    return jsonify({'prediction': str(prediction)})
      
  

@app.route('/uploadpatients', methods=['POST'])
def uploadPatients():
    uploaded_file = request.files['file']
    filename = uploaded_file.filename
    file_path = os.path.join('data', filename)
    if os.path.exists(file_path):
        # generate a new filename by appending a timestamp
        timestamp = str(int(time.time()))
        new_filename = f"{os.path.splitext(filename)[0]}_{timestamp}{os.path.splitext(filename)[1]}"
        os.rename(file_path, os.path.join('data', new_filename))
    response= uploaded_file.save(file_path)
    # return 'File uploaded successfully!'
    # You can add the test cases you made in the previous function, but in our case here you are just testing the POST functionality
    if response:
        return jsonify({
           
            "Message": "uploaded sucesefully!",
            # Add this option to distinct the POST request
            "METHOD": "POST"
        })
    else:
        return jsonify({
            "ERROR": "not uploaded"
        })

@app.route('/uploadmodel', methods=['POST'])
def upload_model():
    uploaded_file = request.files['file']
    filename = uploaded_file.filename
    file_path = os.path.join('model', filename)
    if os.path.exists(file_path):
        # generate a new filename by appending a timestamp
        timestamp = str(int(time.time()))
        new_filename = f"{os.path.splitext(filename)[0]}_{timestamp}{os.path.splitext(filename)[1]}"
        os.rename(file_path, os.path.join('model', new_filename))
    response= uploaded_file.save(file_path)
    # return 'File uploaded successfully!'
    # You can add the test cases you made in the previous function, but in our case here you are just testing the POST functionality
    if response:
        return jsonify({
           
            "Message": "uploaded sucesefully!",
            # Add this option to distinct the POST request
            "METHOD": "POST"
        })
    else:
        return jsonify({
            "ERROR": "not uploaded"
        })


@app.route('/')
def index():
    # A welcome message to test our server
    return "<h1>Welcome To TRIAGE API!</h1>"


if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    
    
    port = 12345 
    # If you don't provide any port the port will be set to 12345
    app.run(threaded=True,port=port, debug= True)
