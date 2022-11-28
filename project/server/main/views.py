# project/server/main/views.py

import os
import json
from flask import render_template, Blueprint
from flask import request



main_blueprint = Blueprint("main", __name__)


@main_blueprint.route("/")
def home():
    return render_template("main/home.html")


@main_blueprint.route("/about/")
def about():
    return render_template("main/about.html")



@main_blueprint.route("/upload", methods=['POST'])
def uploadhc():


    isthisFile=request.files.get('file')
    print (isthisFile, request)
    return json.dumps({'file': "success"})