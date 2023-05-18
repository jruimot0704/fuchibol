input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("parar")
})
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
    radio.sendString("izquierda")
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
    radio.sendString("alante")
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
    radio.sendString("derecha")
})
radio.setGroup(141221)
basic.forever(function () {
	
})
