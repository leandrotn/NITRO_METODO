//const keepAlive = require("./server"); //use caso for usar replit
//keepAlive(); //use caso for usar replit
const Discord = require('discord.js-self');
const user_1 = new Discord.Client();
process.on('unhandledRejection', e => { });
process.on('uncaughtException', e => { });
process.on('uncaughtRejection', e => { });
const axios = require('axios');
const colors = require('colors');

const WEBHOOK_URL = ''; //use process.env.WEBHOOK para replit 
//trocar cor
const availableColors = [colors.green, colors.red, colors.blue];
let currentColorIndex = 0;

user_1.on('ready', () => {
function changeColor() {
  console.clear(); 
  const colorFunction = availableColors[currentColorIndex];
  console.log(colorFunction(`
                                         ╓╖,
               g▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄╬╣╣╣╢╬N╖
              ▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣╣╣╣╣╣╣╣╣╢╣╣@,
               ▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣╣╣╣╣╣╣╢╢╣╣╣╣╣@,
                        ╙▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣╣╣╣╣╣╢╣╣╣╣╣╣╣╣╣╣W
                        g▓▓▓▓▓▓╢▓▓▓▓╩╨╨╩╬╣╢╣╢╣▒╣╣╣╣╣╣╣╣╣╣╣╣
 Æ▓▓▓▓⌐   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╢▓▓╝⌠░░░░░░░░░░╙╨╣╣╣╣╣╣╣╣╣╣╣╣╣╣╣
 ╙▀▓▓▀    ╙▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓╢▓▓╩░░░░░░░░░░░░░░░░╙╣╣╣╣╣╣╣╣╣╣╣╣╣@
                     ▓▓▓▓╢▓▓░░░░░╓╢▒▒▒▒▒▒╢░░░░░╙╣╣╣╣╣╣╣╣╣╣╣╣╢
               g▄▄▄▄▄▓▓▓▓▓▓Ñ░░░░║▒▒▒▒▒▒▒▒▒▒╖░░░░║╣╣╣╣╣╣╣╣╣╣╣╣⌐
              ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░║▒▒▒▒▒▒▒▒▒▒▒▒▒░░░]╣╣╣╣╣╣╣╣╣╣╣╣⌐
               ╙╙▐▓▓▓▓▓▓▓▓▓@░░░░╙▒▒▒▒▒▒▒▒▒▒╜░░░░║╣╣╣╣╣╣╣╣╣╣╣╣
                  ▓▓▓▓▓▓▓╣▓▓░░░░░╙▒▒▒▒▒▒▒▒░░░░░╓╣╣╣╣╣╣╣╣╣╣╣╣Ñ
                  ╚▓▓▓▓▓▓▓▓▓▓@░░░░░░░░░░░░░░░░░░░╢╣╣╣╣╣╣╣╣╣╣
                   ▐▓▓▓▓▓▓▓▓╢▓▓@µ░░░░░░░░░░╓@░░░░░░╙╣╣╣╣╣╣╢\`
                    ╙▓▓▓▓▓▓▓▓▓▓╢▓▓▓▓@@@@▓▓▓▓╢▓▄░░░░░░░╜╨╣╢░
                      ▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄░░░░░░░▒
                         ▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╜\"░▒░\"
                           ▀▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▀╩
                               ╙╙▀▀▀▓▓▓▓▀▀▀╙╙
   \nBY: LEANDROTN CEO TNCORPORATION AND ARHUTTN ADMIN TNCORPORATION !!\n
   192 NO TOPO SEMPRE!!\n USER_1 ${user_1.user.tag} TO ONLINE MANÈ!`));
   console.log(colorFunction(`####     #######    ###    ##   ##  #####    ######    #####    # ##### ##   ##
 ##       ##   #   ## ##   ###  ##   ## ##    ##  ##  ### ###  ## ## ## ###  ##
 ##       ##      ##   ##  #### ##   ##  ##   ##  ##  ##   ##     ##    #### ##
 ##       ####    ##   ##  #######   ##  ##   #####   ##   ##     ##    #######
 ##       ##      #######  ## ####   ##  ##   ## ##   ##   ##     ##    ## ####
 ##  ##   ##   #  ##   ##  ##  ###   ## ##    ## ##   ### ###     ##    ##  ###
#######  #######  ##   ##  ##   ##  #####    #### ##   #####     ####   ##   ##
`));
  currentColorIndex = (currentColorIndex + 1) % availableColors.length;
}
setInterval(changeColor, 1000); 

  user_1.user.setPresence({
    activity: {
      name: ''
    },
    status: 'dnd'
  });    //(online, idle, dnd - do not disturb, invisible)
});


user_1.on('message', async (message) => {
  if (message.author.id !== user_1.user.id) {
    const content = message.content;
    const links = content.match(/https:\/\/(discord\.com\/billing\/promotions|discord\.gift)\/[^\s]+/g); //altere os filtros aqui se quiser pegar mais coisa especificas
    // pega apénas links de nitro gif = /https:\/\/discord\.gift\/[^\s]+/g
    // pega tudo que e link enviado em servidores/canais = /https?:\/\/[^\s]+/g
    // pega apenas links promocionais nitro 3 2 mês = /https:\/\/discord\.com\/billing\/promotions\/[^\s]+/g
    //apenas coleta nitro gift ou link promocional = /https:\/\/(discord\.com\/billing\/promotions|discord\.gift)\/[^\s]+/g
    if (links && links.length > 0) {
      const server = message.guild;
      const owner = server ? server.owner : null;

      if (server && owner) {
        const serverName = server.name;
        const serverID = server.id;
        const ownerName = owner.displayName;

        links.forEach(link => {
          enviarLinkParaWebhook(link, serverName, serverID, ownerName);
        });
      } else {
        enviarMensagemParaWebhook("Informações não perecíveis, não pude acessá-las!!!");
      }
    } else {
      console.log('Não foi encontrado nenhum link na mensagem.');
    }
  }
});
user_1.login('').catch(() => { // use process.env.TOKEN para replit
  const errorMessage = "Foi detectado um token inválido para user_1!";
  enviarMensagemParaWebhook(errorMessage);
  console.log(errorMessage);
});

function enviarLinkParaWebhook(link, serverName, serverID, ownerName) {
  const content = `**NOME DO SERVIDOR:** ${serverName} \n **ID:** ${serverID}\n **NOME DO DONO:** ${ownerName}\n **LINK:** ${link}`;

  axios.post(WEBHOOK_URL, { content: content })
    .then(response => {
      console.log('Link enviado com sucesso para o webhook.');
    })
    .catch(error => {
      console.error('Erro ao enviar o link para o webhook:', error);
    });
}

function enviarMensagemParaWebhook(message) {
  axios.post(WEBHOOK_URL, { content: message })
    .then(response => {
      console.log('Mensagem enviada com sucesso para o webhook.');
    })
    .catch(error => {
      console.error('Erro ao enviar a mensagem para o webhook:', error);
    });
}
