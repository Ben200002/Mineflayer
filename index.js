const mineflayer= require('mineflayer');
const botConfig = require('./botConfig.json');
const bot = mineflayer.createBot({
    host: botConfig.server,
    port: botConfig.serverPort,
    username: botConfig.username,
    password: botConfig.password,
});

function lookAtNearestPlayer () {
    const playerFilter = (entity) => entity.type === 'player'
    const playerEntity = bot.nearestEntity(playerFilter)
    if (!playerEntity) return
    const pos = playerEntity.position.offset(0,playerEntity.height,0)
    bot.lookAt(pos)
}

bot.on('physicTick', lookAtNearestPlayer)