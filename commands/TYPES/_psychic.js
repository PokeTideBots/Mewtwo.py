/*CMD
  command: /psychic
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /psychic@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type` : *Psychic 🔮*\n\n`Strong Against `: *Fighting , Poison*\n\n`Weak Against `:* Steel , Psychic , Dark*\n\n`Resistant To `: *Fighting , Psychic*\n\n`Vulnerable To `: *Bug , Ghost , Dark*")
