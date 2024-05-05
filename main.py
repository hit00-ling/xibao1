def on_button_pressed_ab():
    basic.show_icon(IconNames.HAPPY)
    for 值 in list2:
        basic.show_string("" + (值))
    for index in range(5):
        music.play(music.string_playable("E E G A C5 C5 A G ", 120),
            music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def doSomething(array: List[any], image: Image, sprite: game.LedSprite, array2: List[any], 数字: number, 布尔值: bool, 文本: str):
    pass

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_gesture_three_g():
    basic.show_leds("""
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        """)
input.on_gesture(Gesture.THREE_G, on_gesture_three_g)

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