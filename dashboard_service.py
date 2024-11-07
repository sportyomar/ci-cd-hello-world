# dashboard_service.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify(message="Hello from Flask on port 5003!")

if __name__ == '__main__':
    app.run(debug=True, port=5003)
