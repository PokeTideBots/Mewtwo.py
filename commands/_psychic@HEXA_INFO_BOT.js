/*CMD
  command: /psychic@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /psychic
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  psychic\nStrong Against: Fighting, Poison\nWeak Against: Steel, Psychic, Dark\nResistant To: Fighting, Psychic\nVulnerable To: Bug, Ghost, Dark*")
