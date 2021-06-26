/*class Ball {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        //this.image = loadImage("paper.png");

        //this.diameter = diameter;
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();

        translate(pos.x, pos.y);

        rotate(angle);
        ellipseMode(CENTER);

        fill("blue");

        rect(10, 10 , this.width, this.height);
        pop();
    }
};*/