/*CMD
  command: /dark
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /dark@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type`  :  *Dark*\n\n`Strong Against`: *Ghost , Psychic*\n\n`Weak Against` : *Fighting , Dark , Fairy*\n\n`Resistant To` :* Ghost , Psychic , Dark*\n\n`Vulnerable To` : *Fighting , Bug , Fairy*")
