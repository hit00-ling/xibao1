input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    for (let 值 of list2) {
        basic.showString("" + (值))
    }
    for (let index = 0; index < 5; index++) {
        music.play(music.stringPlayable("E E G A C5 C5 A G ", 120), music.PlaybackMode.UntilDone)
    }
})
function doSomething (array: any[], image: Image, sprite: game.LedSprite, array2: any[], 数字: number, 布尔值: boolean, 文本: string) {
	
}
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
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
let text_list = 0
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
basic.forever(function () {
    if (Math.randomBoolean()) {
        makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
    } else if (Math.randomBoolean()) {
        if (true) {
            radio.sendValue("name", 0)
        } else {
            radio.sendValue("name", 0)
        }
    } else {
        if (true) {
            for (let index = 0; index < 5 * 10; index++) {
                led.stopAnimation()
            }
        } else {
            text_list += 1
        }
    }
})
