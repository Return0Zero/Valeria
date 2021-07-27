kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
})

loadSprite('esquinaIzq', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_04.png')
loadSprite('esquinaCen', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_05.png')
loadSprite('esquinaDer', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_06.png')
loadSprite('colinaArriba1', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_09.png')
loadSprite('colinaArriba2', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_18.png')
loadSprite('colinaAbajo1', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_10.png')
loadSprite('colinaAbajo2', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_19.png')
loadSprite("fondoVerde", "https://i.imgur.com/N8xK3bu.png")
loadSprite('esquinaFlotanteizq', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_26.png')
loadSprite('esquinaFlotanteCen', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_27.png')
loadSprite('esquinaFlotanteDer', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_01.png')
loadSprite('aguaArriba', 'Mario/images/PNG/Other/fluidBlue_top.png')
loadSprite('agua', 'Mario/images/PNG/Other/fluidBlue.png')
loadSprite('personaje', 'Mario/images/PNG/Players/Player Blue/playerBlue_walk1.png')
loadSprite('plantaDecorativa1', 'Mario/images/PNG/Other/plantTop_yellow.png')
loadSprite('plantaDecorativa2', 'Mario/images/PNG/Other/plantDark_4.png')
loadSprite('plantaDecorativa3', 'Mario/images/PNG/Other/plantRed_6.png')
loadSprite('enemigoFlotante', 'Mario/images/PNG/Enemies/enemyFloating_1.png')
loadSprite('enemigoBajo', 'Mario/images/PNG/Enemies/enemySpikey_1.png')
loadSprite('enemigoCaminando', 'Mario/images/PNG/Enemies/enemyWalking_1.png')
loadSprite('banderaFinal1', 'Mario/images/PNG/Other/flagRed_down.png')
loadSprite('banderaFinal2', 'Mario/images/PNG/Other/flagGreen_up.png')





scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const map = [
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "                                  ",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "                                  ",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",  
    ]

    const levelCfg = {
        width: 40,
        height: 40,
        'a': [sprite('fondoVerde'), solid(), "block"]

    }

    const gameLevel = addLevel(map, levelCfg)
})

go("game")