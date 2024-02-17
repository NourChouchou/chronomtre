let Temps = 0
input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        basic.pause(1000)
        Temps += 1
        basic.showNumber(Temps)
    }
})
input.onButtonPressed(Button.AB, function () {
    Temps = 0
    basic.showNumber(Temps)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Temps)
    basic.pause(2000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
