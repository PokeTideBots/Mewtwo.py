/*CMD
  command: /dragon
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /dragon@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  dragon\nStrong Against: Dragon\nWeak Against: Steel, Fairy\nResistant To: Fire, Water, Grass, Electric\nVulnerable To: Ice, Dragon, Fairy*")
