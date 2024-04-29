def on_gesture_shake():
    music.stop_all_sounds()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    basic.show_icon(IconNames.HAPPY)
    music.play(music.string_playable("E E G A C5 C5 A G ", 120),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("G A G - - - - - ", 120),
        music.PlaybackMode.UNTIL_DONE)
    for 值 in list2:
        basic.show_string("" + (值))
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
        music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_leds("""
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            """)
    elif makerbit.ir_button() == 98:
        music.play(music.tone_playable(294, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
    elif makerbit.ir_button() == 226:
        music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
    elif makerbit.ir_button() == 34:
        music.play(music.tone_playable(349, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_leds("""
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            """)
    elif makerbit.ir_button() == 2:
        music.play(music.tone_playable(392, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_leds("""
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            """)
    else:
        music.play(music.tone_playable(988, music.beat(BeatFraction.QUARTER)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(523, music.beat(BeatFraction.QUARTER)),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
makerbit.on_ir_datagram(on_ir_datagram)

"""

"""
list2: List[str] = []
music.set_volume(255)
list2 = ["a", "b", "c", "d", "e"]
basic.show_icon(IconNames.HEART)
makerbit.connect_ir_receiver(DigitalPin.P16, IrProtocol.NEC)

def on_forever():
    pass
basic.forever(on_forever)
