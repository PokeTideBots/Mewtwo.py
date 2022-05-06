/*CMD
  command: /flying
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /flying@hexa_info_sobot
CMD*/


var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type` : *Flying 💨*\n\n`Strong Against` : *Fighting , Bug , Grass*\n\n`Weak Against `: *Rock , Steel , Electric*\n\n`Resistant To `: *Fighting , Ground , Bug , Grass*\n\n`Vulnerable To `: *Rock , Electric , Ice*")
