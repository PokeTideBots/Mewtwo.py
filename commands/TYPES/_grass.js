/*CMD
  command: /grass
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /grass@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type` : *grass*\n\n`Strong Against` : *Ground , Rock , Water*\n\n`Weak Against `: *Flying , Poison , Bug , Steel , Fire , Grass , Dragon*\n\n`Resistant To `: *Ground , Water , Grass , Electric*\n\n`Vulnerable To` : *Flying , Poison , Bug , Fire , Ice*")
