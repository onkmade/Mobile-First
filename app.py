from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

all_subs = []

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('username')
        age = request.form.get('age')
        img = request.files.get('image')

        img_filename = None
        if img:
            img_filename = img.filename
            img.save('static/' + img_filename)

        all_subs.append({
            'name': name,
            'age': age,
            'img': img_filename
        })

        return redirect(url_for('result'))

    return render_template('index.html')


@app.route('/result')
def result():
    return render_template('result.html', submissions=all_subs)


if __name__ == '__main__':
    app.run(debug=True)
