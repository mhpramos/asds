input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.TShirt)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
	
})
