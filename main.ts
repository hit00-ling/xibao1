input.onGesture(Gesture.Shake, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.LoopingInBackground)
    for (let 值 of list2) {
        basic.showString("" + (值))
    }
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
/**
 */
let list2: string[] = []
list2 = [
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
