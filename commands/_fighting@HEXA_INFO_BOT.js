/*CMD
  command: /fighting@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /fighting
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  fighting\nStrong Against:Normal, Rock, Steel, Ice, Dark\nWeak Against: Flying, Poison, Psychic, Bug,Ghost, Fairy\nResistant To: Rock, Bug, Dark\nVulnerable To: Flying, Psychic, Fairy*")
