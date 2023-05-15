radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == "adelante") {
        cuteBot.motors(100, -100)
        basic.pause(100)
        cuteBot.motors(100, -100)
    } else if (receivedNumber == "atras") {
        cuteBot.motors(100, -100)
        basic.pause(100)
        cuteBot.motors(100, -100)
    } else if (receivedNumber == "derecha") {
        cuteBot.motors(100, -100)
        basic.pause(100)
        cuteBot.motors(100, -100)
    } else if (receivedNumber == "izquierda") {
        cuteBot.motors(100, -100)
        basic.pause(100)
        cuteBot.motors(100, -100)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
