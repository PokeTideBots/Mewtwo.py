/*CMD
  command: /steel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /steel@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  steel\nStrong Against: Rock, Ice, Fairy\nWeak Against: Steel, Fire, Water, Electric\nResistant To: Normal, Flying, Poison, Rock, Bug, Steel, Grass, Psychic, Ice, Dragon, Fairy\nVulnerable To : Fighting, Ground, Fire*")
