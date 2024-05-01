let list2: number[] = []
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
makerbit.onIrDatagram(function () {
    if (makerbit.irButton() == 162) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (makerbit.irButton() == 98) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (makerbit.irButton() == 226) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (makerbit.irButton() == 34) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    } else if (makerbit.irButton() == 2) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    music.stopAllSounds()
})
images.createBigImage(`
    . # . . . . # # . .
    # # . . . # . . # .
    . # . . . . . # . .
    . # . # . . # . . .
    . # . # . # # # # .
    `).scrollImage(6, 200)
music.setVolume(255)
basic.forever(function () {
    if (input.temperature() >= 31) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (input.temperature() >= 29) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else if (input.temperature() >= 28) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.temperature() <= 20) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (input.temperature() >= 29) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else if (input.temperature() >= 28) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
