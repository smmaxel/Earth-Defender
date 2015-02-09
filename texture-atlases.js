var s_background,
    s_earth,
    s_moon,
    s_asteroid_1,
    s_asteroid_2,
    s_bullet,
    s_explosion;


var gamePreferences = {
    background: {
        width: '',
        height: ''
    },
    earth: {
        width: 50,
        height: 50
    },
    moon: {},
    asteroid1: {},
    asteroid2: {},
    bullet: {},
    explosion: {}
};


/**
 * Simple sprite class
 * @param img
 * @param x
 * @param y
 * @param width
 * @param height
 * @constructor
 */
function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

/**
 * Draw sprite on canvas context
 * @param ctx
 * @param x
 * @param y
 */
Sprite.prototype.draw = function(ctx, x, y, width, height) {
    if (width && height) {
        this.newWidth = width;
        this.newHeight = height;
    }
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.newWidth || this.width, this.newHeight || this.height);
}


function initTextureAtlases(img) {

    s_background = new Sprite(img, 2, 2, 810, 1440);

    s_earth = [
        new Sprite(img, 610, 2056, 150, 150), // 1
        new Sprite(img, 458, 2056, 150, 150), // 2
        new Sprite(img, 306, 2056, 150, 150), // 3
        new Sprite(img, 154, 2056, 150, 150), // 4
        new Sprite(img, 2, 2056, 150, 150), // 5
        new Sprite(img, 2, 2208, 150, 150), // 6
        new Sprite(img, 154, 2208, 150, 150), // 7
        new Sprite(img, 306, 2360, 150, 150), // 8
        new Sprite(img, 610, 2360, 150, 150), // 9
        new Sprite(img, 458, 2360, 150, 150), // 10
        new Sprite(img, 154, 2360, 150, 150), // 11
        new Sprite(img, 2, 2360, 150, 150), // 12
        new Sprite(img, 458, 2208, 150, 150), // 13
        new Sprite(img, 306, 2208, 150, 150), // 14
        new Sprite(img, 610, 2208, 150, 150), // 15
        new Sprite(img, 458, 2816, 150, 150), // 16
        new Sprite(img, 610, 2816, 150, 150), // 17
        new Sprite(img, 306, 2816, 150, 150), // 18
        new Sprite(img, 2, 2968, 150, 150), // 19
        new Sprite(img, 2, 2968, 150, 150), // 20
        new Sprite(img, 610, 2968, 150, 150), // 22 ??????? MISSING FRAME
        new Sprite(img, 2, 3120, 150, 150), // 23
        new Sprite(img, 458, 2968, 150, 150), // 24
        new Sprite(img, 154, 2968, 150, 150), // 25
        new Sprite(img, 154, 2816, 150, 150), // 26
        new Sprite(img, 2, 2816, 150, 150), // 27
        new Sprite(img, 458, 2512, 150, 150), // 28
        new Sprite(img, 610, 2512, 150, 150), // 29
        new Sprite(img, 306, 2512, 150, 150), // 30
        new Sprite(img, 2, 2664, 150, 150), // 31
        new Sprite(img, 154, 2664, 150, 150), // 32
        new Sprite(img, 458, 2664, 150, 150), // 33
        new Sprite(img, 610, 2664, 150, 150), // 34
        new Sprite(img, 306, 2664, 150, 150), // 35
        new Sprite(img, 2, 2512, 150, 150) // 36
    ];

    s_moon = new Sprite(img, 154, 2512, 150, 150); // moon coordinate

    s_asteroid_1 = [
        new Sprite(img, 154, 3120, 138, 132), // 1
        new Sprite(img, 422, 3540, 138, 132), // 2
        new Sprite(img, 142, 3406, 138, 132), // 3
        new Sprite(img, 574, 3120, 138, 132), // 4
        new Sprite(img, 2, 3272, 138, 132), // 5
        new Sprite(img, 434, 3120, 138, 132), // 6
        new Sprite(img, 142, 3272, 138, 132), // 7
        new Sprite(img, 282, 3272, 138, 132), // 8
        new Sprite(img, 562, 3272, 138, 132), // 9
        new Sprite(img, 294, 3120, 138, 132), // 10
        new Sprite(img, 422, 3272, 138, 132), // 11
        new Sprite(img, 2, 3406, 138, 132), // 12
        new Sprite(img, 562, 3406, 138, 132), // 13
        new Sprite(img, 2, 3540, 138, 132), // 14
        new Sprite(img, 422, 3406, 138, 132), // 15
        new Sprite(img, 142, 3540, 138, 132), // 16
        new Sprite(img, 282, 3406, 138, 132), // 17
        new Sprite(img, 562, 3540, 138, 132), // 18
        new Sprite(img, 2, 3674, 138, 132), // 19
        new Sprite(img, 282, 3540, 138, 132) // 20
    ];

    s_asteroid_2 = [
        new Sprite(img, 586, 1444, 144, 151), // 1
        new Sprite(img, 294, 1750, 144, 151), // 2
        new Sprite(img, 148, 1750, 144, 151), // 3
        new Sprite(img, 2, 1750, 144, 151), // 4
        new Sprite(img, 2, 1444, 144, 151), // 5
        new Sprite(img, 148, 1903, 144, 151), // 6
        new Sprite(img, 2, 1597, 144, 151), // 7
        new Sprite(img, 294, 1903, 144, 151), // 8
        new Sprite(img, 440, 1903, 144, 151), // 9
        new Sprite(img, 148, 1597, 144, 151), // 10
        new Sprite(img, 440, 1444, 144, 151), // 11
        new Sprite(img, 148, 1444, 144, 151), // 12
        new Sprite(img, 294, 1444, 144, 151), // 13
        new Sprite(img, 294, 1597, 144, 151), // 14
        new Sprite(img, 440, 1597, 144, 151), // 15
        new Sprite(img, 586, 1750, 144, 151), // 16
        new Sprite(img, 586, 1903, 144, 151), // 17
        new Sprite(img, 2, 1903, 144, 151), // 18
        new Sprite(img, 440, 1750, 144, 151), // 19
        new Sprite(img, 586, 1597, 144, 151) // 20
    ];

    s_bullet = new Sprite(img, 680, 3808, 20, 20); // bullet coordinates


    s_explosion = [
        new Sprite(img, 642, 3808, 36, 33), // 1
        new Sprite(img, 500, 3808, 42, 38), // 2
        new Sprite(img, 398, 3808, 47, 41), // 3
        new Sprite(img, 347, 3808, 49, 44), // 4
        new Sprite(img, 118, 3808, 52, 47), // 5
        new Sprite(img, 62, 3808, 54, 47), // 6
        new Sprite(img, 622, 3674, 55, 48), // 7
        new Sprite(img, 564, 3674, 56, 48), // 8
        new Sprite(img, 323, 3674, 57, 50), // 9
        new Sprite(img, 142, 3674, 58, 50), // 10
        new Sprite(img, 382, 3674, 58, 50), // 11
        new Sprite(img, 202, 3674, 58, 50), // 12
        new Sprite(img, 262, 3674, 59, 50), // 13
        new Sprite(img, 442, 3674, 59, 50), // 14
        new Sprite(img, 503, 3674, 59, 50), // 15
        new Sprite(img, 679, 3674, 58, 48), // 16
        new Sprite(img, 2, 3808, 58, 48), // 17
        new Sprite(img, 739, 3674, 58, 48), // 18
        new Sprite(img, 287, 3808, 58, 48), // 19
        new Sprite(img, 172, 3808, 58, 47), // 20
        new Sprite(img, 232, 3808, 53, 47), // 21
        new Sprite(img, 447, 3808, 51, 39), // 22
        new Sprite(img, 544, 3808, 49, 37), // 23
        new Sprite(img, 595, 3808, 45, 34), // 24
        new Sprite(img, 702, 3808, 12, 11) // 25
    ];

}


