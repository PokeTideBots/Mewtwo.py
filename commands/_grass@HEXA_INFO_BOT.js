/*CMD
  command: /grass@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /grass
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  grass\nStrong Against: Ground, Rock, Water\nWeak Against: Flying, Poison, Bug, Steel, Fire, Grass, Dragon\nResistant To : Ground, Water, Grass, Electric\nVulnerable To: Flying, Poison, Bug, Fire, Ice*")
