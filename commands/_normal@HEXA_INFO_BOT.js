/*CMD
  command: /normal@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /normal
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type : normal\nStrong Against : None\nWeak Against : Rock, Ghost,Steel\nResistant To : Ghost\nVulnerable To : Fighting*")
