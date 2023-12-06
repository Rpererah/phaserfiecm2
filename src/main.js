// main.js
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.json('level', './src/level.json');
}

function create() {
    var levelData = this.cache.json.get('level');

    levelData.elements.forEach(function (elementData) {
        var element;

        if (elementData.type === 'cloud') {
            element = this.add.rectangle(elementData.x, elementData.y, elementData.width, elementData.height, parseInt(elementData.color));
        } else if (elementData.type === 'ground') {
            element = this.add.rectangle(elementData.x, elementData.y, elementData.width, elementData.height, parseInt(elementData.color));
        }

        element.setOrigin(0, 0);
    }, this);
}
