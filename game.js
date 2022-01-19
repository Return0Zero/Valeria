kaboom({
    global: true,
    fullscreen: true,
    scale: 0.7,
    debug: true,
})

const MOVE_SPEED = 150
const JUMP_FORCE = 560

loadSprite('esquinaIzq', 'https://i.imgur.com/Z7kkjOr.png')
loadSprite('esquinaCen', 'https://i.imgur.com/Dl0cWP3.png')
loadSprite('esquinaDer', 'https://i.imgur.com/PPyyllk.png')
loadSprite('colinaArriba1', 'https://i.imgur.com/aIdX8PZ.png')
//loadSprite('colinaArriba2', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_18.png')
//loadSprite('colinaAbajo1', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_10.png')
//loadSprite('colinaAbajo2', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_19.png')
loadSprite('fondoVerde', 'https://i.imgur.com/N8xK3bu.png')
//loadSprite('esquinaFlotanteizq', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_26.png')
//loadSprite('esquinaFlotanteCen', 'Mario/images/PNG/Tiles/Green tiles/tileGreen_27.png')
loadSprite('esquinaFlotanteDer', 'https://i.imgur.com/DpoXkw6.png')
loadSprite('redKey', 'https://i.imgur.com/zRnLjdq.png')
loadSprite('aguaArriba', 'https://i.imgur.com/QubFESG.png')
loadSprite('agua', 'https://i.imgur.com/zYu4FfX.png')
loadSprite('personaje', 'https://i.imgur.com/IbQixqQ.png')
loadSprite('personajeIzquierda', 'https://i.imgur.com/EM216Z3.png')
loadSprite('personajeGaseoso', 'https://i.imgur.com/w2qxYmF.png')
loadSprite('personajeGaseosoIzquierda', 'https://i.imgur.com/HjfBDof.png')
loadSprite('plantaDecorativa1', 'https://i.imgur.com/NeulNde.png')
loadSprite('plantaDecorativa2', 'https://i.imgur.com/gSmaTXY.png')
loadSprite('plantaDecorativa3', 'https://i.imgur.com/Gtyk9hA.png')
loadSprite('pinchos', 'https://i.imgur.com/jXT2opE.png')
loadSprite('enemigoCaminando', 'https://i.imgur.com/FOuy16a.png')
loadSprite('jewel', 'https://i.imgur.com/Xp3KmJe.png')
loadSprite('banderaFinal1', 'https://i.imgur.com/ItN3oNi.png')
loadSprite('arrow', 'https://i.imgur.com/Cp2voxR.png')





scene("game", ({ level, score}) => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const maps = [
        [
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "a                                a",
        "a                                a",
        "a                                a",
        "a      0                         a",
        "a       zrg  wq                  a",
        "a           zrg                  a",
        "a         f             2        a",
        "a      zrrrrrrx        zrg       a",
        "a  q   aaaaaaaa      k  w      e a",
        "azrrrrgaaaaaaaa88888rrrrrrrrrrrrrg",
        "aaaaaaaaaaaaaaa99999aaaaaaaaaaaaaa",
        ],
        [
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "a                                a",
        "a                                a",
        "a                                a",
        "a        2                       a",
        "a       zrg  wq                  a",
        "a           zrg                  a",
        "a       k               2        a",
        "a      zrrrrrrx        zrg       a",
        "a  0                 k  w      e a",
        "azrrrrgaaaaaaaa88888rrrrrrrrrrrrrg",
        "aaaaaaaaaaaaaaa99999aaaaaaaaaaaaaa",
        ],
        [
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "a                                a",
        "a                                a",
        "a                                a",
        "a                                a",
        "a       zrg  wq                  a",
        "a           zrg                  a",
        "a         f             2        a",
        "a      zrrrrrrx        zrg       a",
        "a  0                 k  w      e a",
        "azrrrrgaaaaaaaa88888rrrrrrrrrrrrrg",
        "aaaaaaaaaaaaaaa99999aaaaaaaaaaaaaa",
        ],
        ]

    const levelCfg = {
        width: 64,
        height: 64,
        'a': [sprite('fondoVerde'), solid(), "block"],
        'r': [sprite('esquinaCen'), solid(), "block"],
        'z': [sprite('esquinaIzq'), solid(), "block"],
        'g': [sprite('esquinaDer'), solid(), "block"],
        'f': [sprite('plantaDecorativa1'), scale(1.3)],
        'h': [sprite('colinaArriba1'), solid(), "block"],
        'l': [sprite('redKey')],
        'v': [sprite('pinchos'), solid(), "block"],
        //'b': [sprite('personaje'), solid(), "block"],
        'e': [sprite('banderaFinal1'), 'siguienteNivel'],
        'w': [sprite('enemigoCaminando'), solid(), "block"],
        '9': [sprite('agua')],
        '8': [sprite('aguaArriba')],
        'q': [sprite('arrow')],
        '2': [sprite('plantaDecorativa2'), scale(1.3)],
        '0': [sprite('jewel'), 'gaseoso'],
        'k': [sprite('plantaDecorativa3'), scale(1.3)],
        'x': [sprite('esquinaDer'), solid(), "block"],
    
    }

    const gameLevel = addLevel(maps[level], levelCfg)

    //add([sprite('bg'), layer('bg')])

    const scoreLabel = add([
        text('0'),
        pos(1800, 850),
        layer('ui'),
        {
            value: score,
        },
        scale(2),
    ])

    add([
        text('level' + parseInt(level + 1), 32),
        pos(1800, 900),
    ]);
    

    function estadoGaseoso() {
        let timer = 0
        let esGaseoso = false
        return {
            update() {
                if (esGaseoso) {
                    timer -= dt()
                    if (timer <= 0) {
                        this.esSolido()
                    }
                }
            },
            esGaseoso() {
                return esGaseoso
            },
            esSolido() {
                player.changeSprite('personaje')
                timer = 0
                esGaseoso = false
            },
            esGaseoso(time) {
                keyDown('left', () => {
                    player.changeSprite('personajeGaseosoIzquierda')
                    player.move(-MOVE_SPEED, 0)
                    player.dir = vec2(-1,0)
                })
                keyDown('right', () => {
                    player.changeSprite('personajeGaseoso')
                    player.move(MOVE_SPEED, 0)
                    player.dir = vec2(1,0)
                })
                keyPress('space', () =>{
                    player.jump(JUMP_FORCE)           
                })
                timer = time
                esGaseoso = true
            }
        }
    }

    const player = add([
        sprite('personaje'), solid(), 
        pos(50, 190),
        body(),
        origin("bot"),
        estadoGaseoso()        
    ])

    player.action(() => {
        player.pushOutAll();
    })

    player.overlaps('siguienteNivel', () => {
        go("game", {
            level: (level + 1) % maps.length,
            score: scoreLabel.value,
        })
    })

    player.collides('gaseoso', (g) => {
        destroy(g)
        player.esGaseoso(10)
    })

    keyDown('left', () => {
        player.changeSprite('personajeIzquierda')
        player.move(-MOVE_SPEED, 0)
        player.dir = vec2(-1,0)
        timer = 0
    })

    keyDown('right', () => {
        player.changeSprite('personaje')
        player.move(MOVE_SPEED, 0)
        player.dir = vec2(1,0)
    })

    keyPress('space', () =>{
        if (player.grounded()) {
            player.jump(JUMP_FORCE)
        }    
        
    })
})

go("game", { level: 0, score: 0})