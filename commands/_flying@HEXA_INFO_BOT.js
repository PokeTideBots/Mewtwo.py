/*CMD
  command: /flying@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /flying
CMD*/


var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  flying\nStrong Against: Fighting, Bug, Grass\nWeak Against: Rock, Steel, Electric\nResistant To: Fighting, Ground, Bug, Grass\nVulnerable To: Rock, Electric, Ice*")
