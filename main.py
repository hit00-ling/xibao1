def on_gesture_logo_up():
    pass
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_button_pressed_ab():
    basic.show_icon(IconNames.YES)
    basic.show_icon(IconNames.NO)
    music.play(music.string_playable("G C5 B E D G A E ", 112),
        music.PlaybackMode.UNTIL_DONE)
    for 值 in list2:
        basic.show_string("" + (值))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.B, on_button_pressed_b)

hongwai = 0
list2: List[str] = []
basic.show_icon(IconNames.HEART)
list2 = ["a", "b", "c", "v"]

def on_forever():
    pass
basic.forever(on_forever)

def on_forever2():
    global hongwai
    hongwai = 0
    if hongwai != -1:
        basic.show_string("" + str(hongwai))
basic.forever(on_forever2)

def on_every_interval():
    pass
loops.every_interval(3600000, on_every_interval)
