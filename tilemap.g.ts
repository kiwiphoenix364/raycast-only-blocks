// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2000200001010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101`, img`
22222222222222222222222222222222
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
