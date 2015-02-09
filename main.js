var canvas,
    ctx,
    canvasWidth = 810,
    canvasHeight = 1440,
    frames = 0;


/**
 * Start and initiate the game
 */
function main() {

    // TODO: implement dynamic canvas elements to boost performance
    canvas = document.getElementById('canvas');
/*    canvasWidth = canvas.width;
    canvasHeight = canvas.height;*/
    ctx = canvas.getContext('2d');


    // initiate graphics
    var img = new Image();
    img.onload = function() {
        initTextureAtlases(this); // this refers to img variable
        run();
    }
    img.src = 'texture-atlases.png';
}



// TODO: Missing rAF shim for better performance (investigate will it be needed)
/**
 * Starts and constantly updates a game loop
 */
function run() {
    var frame = 0;
    var loop = function() {
        update();
        frame++;
        // update();
        render();
        setTimeout(function() {
            window.requestAnimationFrame(loop, canvas);
        }, 1000/20);

    };
    window.requestAnimationFrame(loop, canvas);
}


function update() {
    //frames++;

    /*if (currentGameState !== states.Score) {
        fgpos = (fgpos - 2) % 14;
    } else {
        // bla bla
    }*/

    moon.update();

}



/**
 * Draws everything on the canvas
 */
function render() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // draw background
    background.draw(ctx);

    // draw earth
    earth.draw(ctx);
    moon.draw(ctx);


    // draw asteroids
    //asteroid_1.update();
    //asteroid_1.draw(ctx);
    //asteroid_2.draw(ctx);

    //bullet.draw(ctx);

    // explosion
    //explosion.draw(ctx);


}


var background = {
    draw: function(ctx) {
        s_background.draw(ctx, 0, 0);
    }
};

var earth = {
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    earthWidth: 76,
    earthHeight: 76,

    frame: 0,

    draw: function(ctx) {

        if (this.frame > 34) {
            this.frame = 0;
        }
        //console.log(this.frame);
        s_earth[this.frame].draw(ctx, this.x - (this.earthWidth / 2), this.y - (this.earthHeight / 2), this.earthWidth, this.earthHeight);

        // mozda ovako
        this.frame++;

    }
};


var moon = {

    x: canvasWidth / 2,
    y: canvasHeight / 2,
    moonWidth: 50,
    moonHeight: 50,
    distance: 150,
    angle: Math.PI / 180,
    moonSpeed: 1, // 10
    /*angle: 1 * Math.PI / 180,*/

    update: function() {
        // update moons rotation
        this.angle = this.angle + this.moonSpeed * Math.PI / 1000;
        this.x = (canvasWidth / 2) + this.distance * Math.cos(this.angle);
        this.y = (canvasHeight / 2) + this.distance * Math.sin(this.angle);
    },

    draw: function(ctx) {
        s_moon.draw(ctx, this.x - (this.moonWidth / 2), this.y - (this.moonHeight / 2), this.moonWidth, this.moonHeight);
    }
};



var asteroid_1 = {

    // max number of frames: 20
    x: 250,
    y: 500,
    frame: 0,

    update: function() {
        this.x = this.x+1;
        this.y = this.y+1;
    },

    draw: function(ctx) {

        if (this.frame > 19) {
            this.frame = 0;
        }

        s_asteroid_1[this.frame].draw(ctx, this.x, this.y, 20, 20);


        this.frame++;
    }

};


var  asteroid_2 = {

    // max number of frames: 20
    frame: 0,

    draw: function(ctx) {

        if (this.frame > 19) {
            this.frame = 0;
        }

        s_asteroid_2[this.frame].draw(ctx, 500, 500, 20, 20);


        this.frame++;
    }
};


var bullet = {
    x: 500,
    y: 750,

    draw: function(ctx) {
        s_bullet.draw(ctx, this.x, this.y);
    }
};


var explosion = {
    x: 250,
    y: 750,
    frame: 0,

    draw: function(ctx) {

        if (this.frame > 24) {
            this.frame = 0;
        }

        s_explosion[this.frame].draw(ctx, this.x, this.y);

        this.frame++;
    }
};


main();