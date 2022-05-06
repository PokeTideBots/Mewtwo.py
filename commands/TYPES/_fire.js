/*CMD
  command: /fire
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /fire@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type` : *Fire 🔥*\n\n`Strong Against `: *Bug , Steel , Grass , Ice*\n\n`Weak Against` :* Rock , Fire , Water , Dragon*\n\n`Resistant To` : *Bug , Steel , Fire , Grass , Ice , Fairy*\n\n`Vulnerable To` : *Ground , Rock , Water*")
