const Heading = require("discord.js");
const Connect = new Heading.Client();
const Token = "NzAwMDU2MTI0NDk3MzMwMjQ3.XpdY6g.k6AvII9QQABaPloy_uta5Yu0AHA";
const Prefix = "!"

Connect.login(Token);
Connect.on("ready",() => {console.log("Üdvözletem nagyuram!");});


                                                                /*///////////////////////////////
                                                                és akkor elkezdődik a nagy kaland
                                                                ///////////////////////////////*/
Connect.on("message", msg =>{
    switch(msg.content){
        case "Mi van?":
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
             break;
        case "mi van?":
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
             break;
        case "Ki?":
            msg.reply("Te!");
            break;
        case "ki":
            msg.reply("te");
            break;
        case "ki?":
            msg.reply("te!");
            break;
    }
    let arg = msg.content.substring(Prefix.length).split(" ");
    console.log(arg);
    switch(arg[0]){
        case "anonim":
            msg.delete();
            var anonim=[];
            for (i = 1; i<arg.length; i++) {
                anonim+=arg[i] + " ";
            }
            msg.channel.send(anonim);
    }
});