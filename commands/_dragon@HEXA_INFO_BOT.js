/*CMD
  command: /dragon@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /dragon
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  dragon\nStrong Against: Dragon\nWeak Against: Steel, Fairy\nResistant To: Fire, Water, Grass, Electric\nVulnerable To: Ice, Dragon, Fairy*")
