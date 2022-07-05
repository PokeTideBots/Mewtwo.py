/*CMD
  command: /steel@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /steel
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  steel\nStrong Against: Rock, Ice, Fairy\nWeak Against: Steel, Fire, Water, Electric\nResistant To: Normal, Flying, Poison, Rock, Bug, Steel, Grass, Psychic, Ice, Dragon, Fairy\nVulnerable To : Fighting, Ground, Fire*")
