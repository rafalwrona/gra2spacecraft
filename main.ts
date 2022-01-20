input.onButtonPressed(Button.A, function () {
    ship.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.Y))
    shoot.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
    }
    shoot.delete()
})
input.onButtonPressed(Button.B, function () {
    ship.move(1)
})
let shoot: game.LedSprite = null
let ship: game.LedSprite = null
ship = game.createSprite(2, 4)
basic.forever(function () {
	
})
