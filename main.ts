input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onGesture(Gesture.Shake, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("CD")
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
	
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
makerbit.onIrDatagram(function () {
    if (makerbit.irButton() == 162) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (makerbit.irButton() == 98) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (makerbit.irButton() == 226) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (makerbit.irButton() == 34) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    } else if (makerbit.irButton() == 2) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
/**
 * sfdgds
 */
let list2 = [
"a",
"b",
"c",
"d",
"e"
]
basic.showIcon(IconNames.Heart)
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.NEC)
basic.forever(function () {
	
})
