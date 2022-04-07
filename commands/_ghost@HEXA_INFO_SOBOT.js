/*CMD
  command: /ghost@HEXA_INFO_SOBOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ghost
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  ghost\nStrong Against: Ghost, Psychic\nWeak Against: Normal, Dark\nResistant To: Normal, Fighting, Poison, Bug\nVulnerable To: Ghost, Dark*")
