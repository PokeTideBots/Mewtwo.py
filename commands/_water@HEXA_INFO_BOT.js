/*CMD
  command: /water@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /water
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  water\n Strong Against: Ground, Rock, Fire\nWeak Against: Water, Grass, Dragon\nResistant To: Steel, Fire, Water, Ice\nVulnerable To:Grass, Electric*")
