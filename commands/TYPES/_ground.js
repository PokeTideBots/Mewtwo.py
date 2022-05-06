/*CMD
  command: /ground
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ground@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type` : *Ground ⛰*\n\n`Strong Against `: *Poison , Rock , Steel , Fire , Electric*\n\n`Weak Against `: *Flying , Bug , Grass*\n\n`Resistant To `: *Poison , Rock , Electric*\n\n`Vulnerable To` : *Water , Grass , Ice*")
