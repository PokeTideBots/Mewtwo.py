/*CMD
  command: /electric
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /electric@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  electric\nStrong Against: Flying, Water\nWeak Against: Ground, Grass, Electric, Dragon\nResistant To: Flying, Steel, Electric\nVulnerable To: Ground*")
