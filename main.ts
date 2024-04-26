let list2: number[] = []
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.No)
    music.play(music.stringPlayable("G C5 B E D G A E ", 112), music.PlaybackMode.UntilDone)
    for (let 值 of list2) {
        basic.showString("" + (值))
    }
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
    basic.showIcon(IconNames.Happy)
})
makerbit.onIrDatagram(function () {
    if (makerbit.irButton() == 162) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (makerbit.irButton() == 98) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (makerbit.irButton() == 226) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (makerbit.irButton() == 34) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    } else if (makerbit.irButton() == 2) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.showIcon(IconNames.Heart)
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.NEC)
basic.forever(function () {
	
})
