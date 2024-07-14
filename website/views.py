from flask import Blueprint,render_template,request



views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html")
@views.route('/page/<int:page_num>')
def posts(page_num):
    return render_template("All_posts.html",page_num=page_num)

    

