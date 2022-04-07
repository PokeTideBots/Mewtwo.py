/*CMD
  command: /electric@HEXA_INFO_SOBOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /electric
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  electric\nStrong Against: Flying, Water\nWeak Against: Ground, Grass, Electric, Dragon\nResistant To: Flying, Steel, Electric\nVulnerable To: Ground*")
