import random

nums = [i for i in range(1, 7)]

run = True

print('welcome the the dice roller\n')

while run:
    a = input("roll the dice (y/n): ")

    if a == 'Y' or a == 'y':
        print(random.choice(nums))

    else:
        print("thanks for using the dice roller")
        break
    a = input("would you like to roll the dice again (y/n)")
    if a == "y" or a == 'Y':
        continue

    else:
        print("thanks for using the dice roller")
        break
