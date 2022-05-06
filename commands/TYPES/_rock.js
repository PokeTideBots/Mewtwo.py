/*CMD
  command: /rock
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /rock@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type` : *Rock 🪨*\n\n`Strong Against` : *Flying , Bug , Fire , Ice*\n\n`Weak Against `: *Fighting , Ground , Steel*\n\n`Resistant To` :* Normal , Flying , Poison , Fire*\n\n`Vulnarable To` : *Fighting , Ground , Steel , Water , Grass*")
