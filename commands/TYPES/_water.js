/*CMD
  command: /water
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /water@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type`  :  *Water💧*\n\n`Strong Against` : *Ground , Rock , Fire*\n\n`Weak Against` : *Water , Grass , Dragon*\n\n`Resistant To` : *Steel , Fire , Water , Ice*\n\n`Vulnerable To` : *Grass , Electric *")
