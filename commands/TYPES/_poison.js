/*CMD
  command: /poison
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /poison@hexa_info_sobot
CMD*/


var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type` : *poison*\n\n`Strong Against` : *Grass , Fairy*\n\n`Weak Against `: *Poison , Ground , Rock , Ghost , Steel*\n\n`Resistant To `: *Fighting , Poison , Grass , Fairy , Bug*\n\n`Vulnerable To `: *Ground , Psychic*")
