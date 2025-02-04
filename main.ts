input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.EighthNote)
})
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
SuperBit.Servo(SuperBit.enServo.S5, 0)
let strip = neopixel.create(DigitalPin.P10, 12, NeoPixelMode.RGB)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Yes)
        strip.showRainbow(1, 360)
        SuperBit.Servo(SuperBit.enServo.S5, 120)
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        SuperBit.Servo(SuperBit.enServo.S5, 0)
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Yes)
        strip.showRainbow(1, 360)
        SuperBit.Servo(SuperBit.enServo.S5, 120)
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        SuperBit.Servo(SuperBit.enServo.S5, 0)
    } else {
        basic.showIcon(IconNames.No)
    }
})
