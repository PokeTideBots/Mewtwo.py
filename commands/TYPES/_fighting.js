/*CMD
  command: /fighting
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /fighting@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type` : *Fighting 💪*\n\n`Strong Against` : *Normal , Rock , Steel , Ice , Dark*\n\n`Weak Against` : *Flying , Poison , Psychic , Bug , Ghost , Fairy*\n\n`Resistant To` : *Rock , Bug , Dark*\n\n`Vulnerable To` :* Flying , Psychic , Fairy*")
