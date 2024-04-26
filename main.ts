input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.play(music.stringPlayable("G C5 B E D G A E ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
let a = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    a = 0
    for (let index = 0; index < 10; index++) {
        a = a + 1
        basic.showString("" + (a))
    }
})
loops.everyInterval(100, function () {
    basic.showLeds(`
        # . # # .
        # . . . #
        # . . # .
        # . # . .
        # . # # #
        `)
})
