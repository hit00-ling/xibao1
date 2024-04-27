list2: List[number] = []

def on_button_pressed_ab():
    basic.show_icon(IconNames.HAPPY)
    music.play(music.string_playable("G C5 B E D G A E ", 120),
        music.PlaybackMode.UNTIL_DONE)
    for 值 in list2:
        basic.show_string("" + str((值)))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_ir_button_pressed():
    pass
makerbit.on_ir_button(IrButton.ANY, IrButtonAction.PRESSED, on_ir_button_pressed)

def on_gesture_free_fall():
    basic.show_leds("""
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        """)
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

def on_ir_datagram():
    if makerbit.ir_button() == 162:
        basic.show_leds("""
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            """)
    elif makerbit.ir_button() == 98:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
    elif makerbit.ir_button() == 226:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
    elif makerbit.ir_button() == 34:
        basic.show_leds("""
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            """)
    elif makerbit.ir_button() == 2:
        basic.show_leds("""
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            """)
    else:
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
makerbit.on_ir_datagram(on_ir_datagram)

basic.show_icon(IconNames.HEART)
makerbit.connect_ir_receiver(DigitalPin.P16, IrProtocol.NEC)

def on_forever():
    pass
basic.forever(on_forever)
