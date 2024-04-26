input.onGesture(Gesture.LogoUp, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.No)
    music.play(music.stringPlayable("G C5 B E D G A E ", 112), music.PlaybackMode.UntilDone)
    for (let 值 of list2) {
        basic.showString("" + (值))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
makerbit.onIrDatagram(function () {
    hongwai = 0
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
let hongwai = 0
let list2: string[] = []
basic.showIcon(IconNames.Heart)
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.NEC)
list2 = [
"a",
"b",
"c",
"v"
]
basic.forever(function () {
	
})
loops.everyInterval(3600000, function () {
	
})
