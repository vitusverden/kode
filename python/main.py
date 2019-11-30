import turtle as turtleModule

turtle = turtleModule.Turtle()

turtle.screen.bgcolor('red') #Set turtle screen color
turtle.left(90)      # turn turtle left by 90
turtle.speed(20)      # set speed of turtle
turtle.color('green')  #set turtle color
turtle.pensize(5)      # set turtle pensize i.e thickness of lines
turtle.screen.title("lolxd") #set turtle title


#Laver huset

turtle.goto(100,0)
turtle.goto(200,100)
turtle.goto(200,200)
turtle.goto(100,100)
turtle.goto(100,0)
turtle.setpos(100,100)
turtle.goto(0,100)
turtle.goto(0,0)
turtle.setpos(0,100)
turtle.goto(50,150)
turtle.goto(100,100)
turtle.setpos(50,150)
turtle.goto(150,250)
turtle.goto(200,200)
turtle.up()

#Laver vindue 1
turtle.goto(37.5,75)
turtle.down()
turtle.goto(62.5,75)
turtle.goto(62.5,50)
turtle.goto(37.5,50)
turtle.goto(37.5,75)
turtle.up()


def diavindue(x,y):
    turtle.up()
    turtle.goto(x,y)
    turtle.down()
    turtle.setheading(45)
    turtle.forward(25)
    turtle.setheading(270)
    turtle.forward(25)
    turtle.setheading(225)
    turtle.forward(25)
    turtle.setheading(90)
    turtle.forward(25)
    turtle.up()

diavindue(125,100)
diavindue(150,125)
turtleModule.done()
