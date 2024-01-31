from flask import Flask, render_template, request

app = Flask(__name__)

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def submit():
    name = request.form['name']
    address = request.form['address']
    email = request.form['email']

    with open('data.txt', 'a') as file:
        file.write(f"{name}, {address}, {email}\n")

    return "Data submitted successfully thanks for donation we will collect clothes from given address!"

if __name__ == '__main__':
    app.run(debug=True)
