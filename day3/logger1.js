const Logger = require('./logger');

const logger = new Logger();

logger.on('messageUpload',(arg)=>{
    console.log('Litener called',arg);
});

logger.log('Message logged');