/*CMD
  command: /ice
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ice@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type` :* Ice *\n\n`Strong Against `: *Flying , Ground , Grass , Dragon*\n\n`Weak Against `: *Steel, Fire , Water , Ice*\n\n`Resistant To `: *Ice*\n\n`Vulnerable To` :* Fighting , Rock , Steel , Fire*")
