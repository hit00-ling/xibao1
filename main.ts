input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    for (let 值 of list2) {
        basic.showString("" + (值))
    }
    for (let index = 0; index < 5; index++) {
        music.play(music.stringPlayable("E E G A C5 C5 A G ", 120), music.PlaybackMode.UntilDone)
    }
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
	
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
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
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    music.stopAllSounds()
})
let list2: string[] = []
images.createBigImage(`
    . # . . . . # # . .
    # # . . . # . . # .
    . # . . . . . # . .
    . # . # . . # . . .
    . # . # . # # # # .
    `).scrollImage(1, 200)
music.setVolume(255)
list2 = [
"a",
"b",
"c",
"d",
"e"
]
basic.showIcon(IconNames.Heart)
makerbit.connectIrReceiver(DigitalPin.P12, IrProtocol.NEC)
basic.forever(function () {
	
})
