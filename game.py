'''making a simple rock paper scissor game using python'''

import random  # import the random module

# making a list of all the valid moves

moves = ['rock', 'paper', 'scissors']


print('welcome to a simple game of rock paper scissors\n')

while True:
    # picking up a random move for the computer from the list

    c=random.choice(moves)

    # taking user input for the player's move
    p=input('make a move (rock/paper/scissors): ')

    if p=='rock':
        if c=='paper':
            print('oops, {} gets covered by {}'.format(p,c))

        elif c=='scissors':
            print("congrats, you've won the game, {} crushes {}".format(p,c))

        else:
            print("it's a tie")

    elif p == 'paper':
        if c == 'paper':
            print("it's a tie ")

        elif c == 'scissors':
            print("oops, {} gets cut by the {}".format(p,c))

        else:
            print("congrats, you've won the game, {} covers the {}".format(p,c))


    elif p=='scissors':
        if c == 'paper':
            print("congrats, you've won the game, {} cuts the {}".format(p,c))

        elif c == 'scissors':
            print("it's a tie")

        else:
            print("oops, {} crushes the {}".format(c,p))

    p=input("would you like to play the game again (y/n): ")

    if p=='y':
        continue
    else:
        print("thank you for playing")
        break

