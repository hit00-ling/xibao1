def on_button_pressed_ab():
    basic.show_icon(IconNames.HAPPY)
    for 值 in list2:
        basic.show_string("" + (值))
    for index in range(5):
        music.play(music.string_playable("E E G A C5 C5 A G ", 120),
            music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    basic.show_number(randint(0, 10))
input.on_button_pressed(Button.B, on_button_pressed_b)

list2: List[str] = []
images.create_big_image("""
    . # . . . . # # . .
    # # . . . # . . # .
    . # . . . . . # . .
    . # . # . . # . . .
    . # . # . # # # # .
    """).scroll_image(1, 200)
music.set_volume(255)
list2 = ["a", "b", "c"]

def on_every_interval():
    pass
loops.every_interval(500, on_every_interval)

def on_forever():
    pass
basic.forever(on_forever)

def on_forever2():
    serial.write_numbers([0, 1, 0])
basic.forever(on_forever2)
