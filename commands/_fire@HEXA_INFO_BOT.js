/*CMD
  command: /fire@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /fire
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  fire\nStrong Against: Bug, Steel, Grass, Ice\nWeak Against: Rock, Fire, Water, Dragon\nResistant To: Bug, Steel, Fire, Grass, Ice, Fairy\nVulnerable To: Ground, Rock, Water*")
