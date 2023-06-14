function turnLeft () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 55, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 20, 67)
}
function stop () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, 67)
}
function turnRight () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 20, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 55, 67)
}
function forward () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 40, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 40, 67)
}
let s2 = 0
let s1 = 0
PCA9685.init(67, 0)
led.enable(false)
let strip2 = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
strip2.clear()
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100, 67)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100, 67)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 100, 67)
basic.forever(function () {
    strip2.showRainbow(1, 360)
    s1 = pins.digitalReadPin(DigitalPin.P13)
    s2 = pins.digitalReadPin(DigitalPin.P12)
    if (s1 == 1 && s2 == 0) {
    	
    } else if (s1 == 0 && s2 == 1) {
    	
    } else if (s1 == 0 && s2 == 0) {
    	
    } else {
        forward()
    }
})
