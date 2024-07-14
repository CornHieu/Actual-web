from website import create_app
#Delve deeper to see whether can import def other than init
#Yes i can

app = create_app()

if __name__ == '__main__':
    app.run(debug = True)