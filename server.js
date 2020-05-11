const Heading = require("discord.js");

const Connect = new Heading.Client();
const Token = process.env.SECRET;
const Prefix = "pls "

Connect.login(Token);
var online = 0;
Connect.on("ready",() => {
    console.log("Üdvözletem nagyuram!"); 
    online = 1;
    setInterval( function(){
        console.log("fel lettem ébresztve");
    }, 69420)

});


                                                                /*///////////////////////////////
                                                                és akkor elkezdődik a nagy kaland
                                                                ///////////////////////////////*/
Connect.on("message", msg =>{
    /*if (msg.author.username === ""){
      msg.delete();
      msg.author.send("ezt akartad rossz helyre küldeni " + msg.content);}*/
    //console.log(msg.content);
    //msg.client.channels.get("700327775311233044").send(msg.author + msg.content);
    if (msg.author==="ClydeBot#1") { msg.delete(); }
    if (msg.content.indexOf(Prefix)===0){
        var arg = msg.content.substring(Prefix.length).split(" ");
        var isSetPrefix = true;
    }else {
        var arg = msg.content.split(" ");
    }
    switch(msg.content){
        default:
            if (arg.indexOf("Mi") != -1 && arg.indexOf("van") != -1 && arg.indexOf("van")-arg.indexOf("Mi") === 1){
                switch(new Date().getDay()){
                    case 0:
                        msg.reply("Vasárnap");
                        break;
                    case 1:
                        msg.reply("Hétfő");
                        break;
                    case 2:
                        msg.reply("Kedd");
                        break;
                    case 3:
                        msg.reply("Szerda");
                        break;
                    case 4:
                        msg.reply("Csütörtök");
                        break;
                    case 5:
                        msg.reply("Péntek");
                        break;
                    case 6:
                        msg.reply("Szombat");
                    }
            }else if (arg.indexOf("mi") != -1 && arg.indexOf("van") != -1 && arg.indexOf("van")-arg.indexOf("mi") === 1){
                switch(new Date().getDay()){
                    case 0:
                        msg.reply("vasárnap");
                        break;
                    case 1:
                        msg.reply("hétfő");
                        break;
                    case 2:
                        msg.reply("kedd");
                        break;
                    case 3:
                        msg.reply("szerda");
                        break;
                    case 4:
                        msg.reply("csütörtök");
                        break;
                    case 5:
                        msg.reply("péntek");
                        break;
                    case 6:
                        msg.reply("szombat");
                }
            }else if (arg.indexOf("Ki") != -1) {
                    msg.reply("Te!");
            }else if (arg.indexOf("ki") != -1) {        
                     msg.reply("te!");
            }else if (arg.indexOf("imádlak") != -1 && arg.indexOf("szolgám") != -1 && arg.indexOf("szolgám")-arg.indexOf("imádlak") === 1) {
                    msg.reply(":kissing_heart: ugyan, az az és dolgom");
            }else if (arg.indexOf("Én?") != -1) {
                msg.reply("Igen, Te!");
            }else if (arg.indexOf("én?") != -1) {        
                 msg.reply("igen, te!");
            }
    }
    console.log(arg);
    if(isSetPrefix===true){
        switch(arg[0]){
            case "anonim":
                msg.delete();
                console.log("anonim")
                var message=[];
                var i;
                for (i = 1; i<arg.length; i++) {
                    message+=arg[i] + " ";
                }
                msg.channel.send(message);
                break;
            case "admin":
                msg.delete();
                console.log(msg.member.roles.highest.name);
                if (msg.member.roles.highest.name=="Király" || msg.member.roles.highest.name=="legfőbbb bizalmas") {
                    //msg.delete();
                    var message="";
                    for (i = 1; i<arg.length; i++) {
                        message+=arg[i] + " ";
                    }
                    message = "@here a Király szólt hozzátok, íme: " + message;
                    msg.channel.send(message);
                } else {
                    msg.author.send("ehhez neked nincs jogod");
                } break;
            case "cleanup" :
                msg.delete();
                console.log("cleanup");
                if (msg.member.roles.highest.name=="Király" || msg.member.roles.highest.name=="legfőbbb bizalmas"){    
                    msg.delete()
                    var deletabi = msg.channel.messages.fetch({limit: parseInt(arg[1]) + 1 }).then(deletabi => msg.channel.bulkDelete(deletabi))
                    //console.log(deletabi);
                } else {
                    msg.author.send("ehhez neked nincs jogod");
                }
           /* case "join" :
                if (msg.author.roles.has("dj")/* || !connected){
                    join(Queue);
                }else {
                    msg.delete();
                    msg.author.send("ehhez neked nincs jogod, vagy már valahova csatlakozott a bot");
                    break;
                }
                break;
            case "leave" :
                if (msg.author.roles.has("dj")/* || connected){
                    leave(Queue);
                }else {
                    msg.delete();
                    msg.author.send("ehhez neked nincs jogod, vagy nincs csatlakozva a bot");
                    break;
                }
                break;
            case "play" :
                if (msg.author.roles.highest.cache.find(role => role.name === 'dj')){
                    play(message, Queue);
                }else {
                    msg.delete();
                    msg.author.send("ehhez neked nincs jogod");
                    break;
                }
                var message="";
                    for (i = 1; i<arg.length; i++) {
                        message+=arg[i] + " ";
                    }
                break;
            case "skip" :
                if (msg.author.roles.has("dj")){
                    skip(Queue);
                }else {
                    msg.delete();
                    msg.author.send("ehhez neked nincs jogod");
                    break;
                }
                break;
            case "stop" :
                if (msg.author.roles.has("dj")){
                    stop(Queue);
                }else {
                    msg.delete();
                    msg.author.send("ehhez neked nincs jogod");
                    break;
                }
                break;*/
        }
    }
});