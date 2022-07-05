/*CMD
  command: /ground@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ground
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  ground\nStrong Against : Poison,Rock,Steel,Fire,Electric\nWeak Against : Flying, Bug, Grass\nResistant To : Poison,Rock,Electric\nVulnerable To : Water, Grass, Ice*")
