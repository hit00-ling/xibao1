input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    for (let 值 of list2) {
        basic.showString("" + (值))
    }
    for (let index = 0; index < 5; index++) {
        music.play(music.stringPlayable("E E G A C5 C5 A G ", 120), music.PlaybackMode.UntilDone)
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(0, 10))
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
list2 = ["a", "b", "c"]
loops.everyInterval(500, function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    serial.writeNumbers([
    0,
    1,
    0
    ])
})
