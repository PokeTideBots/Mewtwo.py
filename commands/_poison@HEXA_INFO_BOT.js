/*CMD
  command: /poison@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /poison
CMD*/


var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  poison\nStrong Against: Grass, Fairy\nWeak Against: Poison, Ground, Rock, Ghost, Steel\nResistant To: Fighting, Poison, Grass, Fairy, Bug\nVulnerable To: Ground, Psychic*")
