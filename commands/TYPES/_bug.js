/*CMD
  command: /bug
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /bug@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type` :* Bug 🐛*\n\n`Strong Against` : *Grass , Psychic , Dark*\n\n`Weak Against` :* Fighting , Flying , Poison , Ghost , Steel , Fire , Fairy*\n\n`Resistant To` : *Fighting , Ground , Grass*\n\n`Vulnerable To` : *Flying , Rock , Fire*")
