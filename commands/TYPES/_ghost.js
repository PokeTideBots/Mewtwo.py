/*CMD
  command: /ghost
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ghost@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type `: *ghost*\n\n`Strong Against` : *Ghost , Psychic*\n\n`Weak Against `: *Normal , Dark*\n\n`Resistant To` :* Normal , Fighting , Poison , Bug*\n\n`Vulnerable To `: *Ghost , Dark*")
