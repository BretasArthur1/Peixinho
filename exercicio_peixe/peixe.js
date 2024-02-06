var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }

};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');

    //carregarlogo
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    //carregarPeixe

    this.load.image('peixe', 'assets/peixes/baiacuA.png');

    //carregarTubarao
    this.load.image('tubarao', 'assets/tubarao.png');
}

function create() {
    //backGround
    this.add.image(400, 300, 'mar');
    //logoTela

    this.add.image(400, 525, 'logo').setScale(0.5);

    //guardarVariavel
    peixinho = this.add.image(400, 300, 'peixe');

    //transformandoVariavel
    peixinho.setFlip(true, false);

    //addTubarao

    this.add.image(400, 300, 'tubarao').setOrigin(1, 1);
}

function update() {
    //adicionandoControle
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}