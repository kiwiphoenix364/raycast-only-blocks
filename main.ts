let repeat = 0
let num2 = 0
let num = 0
let numy = 0
let numx = 0
let dis = 0
let test1 = 0
let LeftPos = 0
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
let Detector = sprites.create(img`
    2 
    `, SpriteKind.Player)
let FOV = 0.5
let render_dis = 100
controller.moveSprite(mySprite)
game.onUpdate(function () {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    LeftPos += controller.player2.dx(400)
    for (let index = 0; index <= 159; index++) {
        test1 = dis
        dis += -32
        for (let index2 = 0; index2 < 4; index2++) {
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation((mySprite.x + Math.cos((LeftPos + index * FOV) / 200) * dis) / 16, (mySprite.y + Math.sin((LeftPos + index * FOV) / 200) * dis) / 16), assets.tile`transparency16`))) {
                for (let index2 = 0; index2 <= 15; index2++) {
                    numx = mySprite.x + Math.cos((LeftPos + index * FOV) / 200) * dis
                    numy = mySprite.y + Math.sin((LeftPos + index * FOV) / 200) * dis
                    if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(numx / 16, numy / 16), assets.tile`transparency16`))) {
                        num = Math.map(dis * 1, 0, render_dis * 8, 60, 0)
                        num2 = (60 + num - (60 - num)) / 16
                        for (let index3 = 0; index3 <= 60 + num - (60 - num); index3++) {
                            scene.backgroundImage().setPixel(index, 60 - num + index3, tiles.tileImageAtLocation(tiles.getTileLocation(numx / 16, numy / 16)).getPixel(numx % 16, index3 / num2))
                        }
                        dis = test1
                        index += 1
                    }
                }
            } else {
                dis += 16
            }
        }
        dis = 0
        repeat = render_dis
        for (let index2 = 0; index2 < repeat; index2++) {
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation((mySprite.x + Math.cos((LeftPos + index * FOV) / 200) * dis) / 16, (mySprite.y + Math.sin((LeftPos + index * FOV) / 200) * dis) / 16), assets.tile`transparency16`))) {
                for (let index2 = 0; index2 <= 15; index2++) {
                    numx = mySprite.x + Math.cos((LeftPos + index * FOV) / 200) * dis
                    numy = mySprite.y + Math.sin((LeftPos + index * FOV) / 200) * dis
                    if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(numx / 16, numy / 16), assets.tile`transparency16`))) {
                        num = Math.map(dis * 1, 0, render_dis * 8, 60, 0)
                        num2 = (60 + num - (60 - num)) / 16
                        for (let index3 = 0; index3 <= 60 + num - (60 - num); index3++) {
                            scene.backgroundImage().setPixel(index, 60 - num + index3, tiles.tileImageAtLocation(tiles.getTileLocation(numx / 16, numy / 16)).getPixel(numx % 16, index3 / num2))
                        }
                        repeat = 0
                        break;
                    }
                }
            } else {
                dis += 16
            }
        }
    }
})
