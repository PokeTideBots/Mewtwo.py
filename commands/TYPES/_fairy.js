/*CMD
  command: /fairy
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /fairy@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type` : *Fairy 🧚‍♂️*\n\n`Strong Against` : *Fighting , Dragon , Dark*\n\n`Weak Against `:* Poison , Steel , Fire*\n\n`Resistant To` : *Fighting , Bug , Dragon , Dark*\n\n`Vulnerable To` :* Poison , Steel*")
