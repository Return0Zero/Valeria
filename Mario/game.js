kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
})

loadSprite("esquinaIzq", "https://i.imgur.com/Z7kkjOr.png")
loadSprite("esquinaCen", "https://i.imgur.com/Dl0cWP3.png")
loadSprite('esquinaDer', 'https://i.imgur.com/PPyyllk.png')
loadSprite('colinaArriba1', 'https://i.imgur.com/aIdX8PZ.png')
loadSprite('colinaArriba2', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_18.png')
loadSprite('colinaAbajo1', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_10.png')
loadSprite('colinaAbajo2', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_19.png')
loadSprite("fondoVerde", "https://i.imgur.com/N8xK3bu.png")
loadSprite('esquinaFlotanteizq', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_26.png')
loadSprite('esquinaFlotanteCen', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_27.png')
loadSprite('esquinaFlotanteDer', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_01.png')
loadSprite('redkey', 'https://i.imgur.com/zRnLjdq.png')
loadSprite('agua', 'Mario/images/PNG/Other/fluidBlue.png')
loadSprite('personaje', 'Mario/images/PNG/Players/Player Blue/playerBlue_walk1.png')
loadSprite('plantaDecorativa1', 'https://i.imgur.com/NeulNde.png')
loadSprite('plantaDecorativa2', 'Mario/images/PNG/Other/plantDark_4.png')
loadSprite('plantaDecorativa3', 'Mario/images/PNG/Other/plantRed_6.png')
loadSprite('pinchos', 'https://i.imgur.com/jXT2opE.png')
loadSprite('enemigoCaminando', 'Mario/images/PNGPNG/Enemies/enemyFloating_1.png')
loadSprite('enemigoBajo', 'Mario/images/PNG/Enemies/enemyS/Enemies/enemyWalking_1.png')
loadSprite('banderaFinal1', 'Mario/images/PNG/Other/flagRed_down.png')
loadSprite('banderaFinal2', 'Mario/images/PNG/Other/flagGreen_up.png')





scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const map = [
        "hrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrg",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "a                                a",
        "a                                a",
        "a                                a",
        "a                                a",
        "a         l                      a",
        "a           zrg                  a",
        "a         f aaa                  a",
        "a      zrrrg aa                  a",
        "a      aaaaaaaa                  a",
        "zrrrrrgaaaaaaaazrrrrrrrrrrrrrrrrrg",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
               
    ]

    const levelCfg = {
        width: 40,
        height: 40,
        'a': [sprite('fondoVerde'), solid(), "block"],
        'r': [sprite('esquinaCen'), solid(), "block"],
        'z': [sprite('esquinaIzq'), solid(), "block"],
        'g': [sprite('esquinaDer'), solid(), "block"],
        'f': [sprite('plantaDecorativa1'), solid(), "block"],
        'h': [sprite('colinaArriba1'), solid(), "block"],
        'l': [sprite('redkey'), solid(), "block"],
        'v': [sprite('pinchos'), solid(), "block"],
    }

    const gameLevel = addLevel(map, levelCfg)
})

go("game")