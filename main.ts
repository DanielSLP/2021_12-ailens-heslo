let k = 0
let j = 0
let i = 0
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Card)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.cardTotalNum() == 1) {
        if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.five)) {
            i = PlanetX_AILens.CardData(PlanetX_AILens.Cardstatus.ID)
        }
        if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.six)) {
            j = PlanetX_AILens.CardData(PlanetX_AILens.Cardstatus.ID)
        }
        if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.seven)) {
            k = PlanetX_AILens.CardData(PlanetX_AILens.Cardstatus.ID)
        }
        basic.showString("i")
        basic.showNumber(i)
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("j")
        basic.showNumber(j)
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("k")
        basic.showNumber(k)
        basic.pause(1000)
        basic.clearScreen()
        i = 9
        j = 9
        k = 9
    }
})
