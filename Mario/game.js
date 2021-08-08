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
loadSprite('esquinaFlotanteDer', 'https://i.imgur.com/DpoXkw6.png')
loadSprite('redkey', 'https://i.imgur.com/zRnLjdq.png')
loadSprite('agua', 'https://i.imgur.com/zYu4FfX.png')
loadSprite('personaje', 'https://i.imgur.com/IbQixqQ.png')
loadSprite('plantaDecorativa1', 'https://i.imgur.com/NeulNde.png')
loadSprite('plantaDecorativa2', 'https://i.imgur.com/gSmaTXY.png')
loadSprite('plantaDecorativa3', 'https://i.imgur.com/Gtyk9hA.png')
loadSprite('pinchos', 'https://i.imgur.com/jXT2opE.png')
loadSprite('enemigoCaminando', 'https://i.imgur.com/FOuy16a.png')
loadSprite('jewel', 'https://i.imgur.com/Xp3KmJe.png')
loadSprite('banderaFinal1', 'https://i.imgur.com/ItN3oNi.png')
loadSprite('arrow', 'https://i.imgur.com/Cp2voxR.png')





scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const map = [
        "hrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrg",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "a                                a",
        "a                                a",
        "a                                a",
        "a                                a",
        "a         l  w 0                 a",
        "a           zrg                  a",
        "a         f aaa                  a",
        "a    q zrrrxaaa                e a",
        "a b    aaaaaaaa    2 k  w   0    a",
        "zrrrrrgaaaaaaa999rrrrrrrrrrrrrrrrg",
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
        'b': [sprite('personaje'), solid(), "block"],
        'e': [sprite('banderaFinal1'), solid(), "block"],
        'w': [sprite('enemigoCaminando'), solid(), "block"],
        '9': [sprite('agua'), solid(), "block"],
        'q': [sprite('arrow'), solid(), "block"],
        '2': [sprite('plantaDecorativa2'), solid(), "block"],
        '0': [sprite('jewel'), solid(), "block"],
        'k': [sprite('plantaDecorativa3'), solid(), "block"],
        'x': [sprite('esquinaFlotanteDer'), solid(), "block"],
    
    }

    const gameLevel = addLevel(map, levelCfg)
})

go("game")