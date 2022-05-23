k = 0
j = 0
i = 0
PlanetX_AILens.init_module()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.CARD)

def on_forever():
    global i, j, k
    PlanetX_AILens.camera_image()
    if PlanetX_AILens.card_total_num() == 1:
        if PlanetX_AILens.number_card(PlanetX_AILens.numberCards.FIVE):
            i = PlanetX_AILens.card_data(PlanetX_AILens.Cardstatus.ID)
        if PlanetX_AILens.number_card(PlanetX_AILens.numberCards.SIX):
            j = PlanetX_AILens.card_data(PlanetX_AILens.Cardstatus.ID)
        if PlanetX_AILens.number_card(PlanetX_AILens.numberCards.SEVEN):
            k = PlanetX_AILens.card_data(PlanetX_AILens.Cardstatus.ID)
        basic.show_string("i")
        basic.show_number(i)
        basic.pause(1000)
        basic.clear_screen()
        basic.show_string("j")
        basic.show_number(j)
        basic.pause(1000)
        basic.clear_screen()
        basic.show_string("k")
        basic.show_number(k)
        basic.pause(1000)
        basic.clear_screen()
        i = 9
        j = 9
        k = 9
basic.forever(on_forever)
