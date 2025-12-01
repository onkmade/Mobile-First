from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def index():
    
    if request.method == 'POST':
        name = request.form.get('username')
        return redirect(url_for('result', name=name))

    return render_template('index.html')

@app.route('/result')
def result():
    name = request.args.get('name')
    return render_template('result.html', name=name)

if __name__ == '__main__':
    app.run(debug=True)