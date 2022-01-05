let item = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
item.showNumber(1314)
basic.forever(function () {
    item.showDP(1, false)
    basic.pause(200)
    item.showDP(1, true)
    basic.pause(200)
})
