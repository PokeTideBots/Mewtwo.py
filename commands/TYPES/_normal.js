/*CMD
  command: /normal
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TYPES

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /normal@hexa_info_sobot
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "`Type` : *Normal 🖱 *\n\n`Strong Against` : *None*\n\n`Weak Against` : *Rock , Ghost , Steel*\n\n`Resistant To` : *Ghost*\n\n`Vulnerable To` *: Fighting*")
