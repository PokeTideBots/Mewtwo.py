/*CMD
  command: /dark@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /dark
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  dark\nStrong Against: Ghost, Psychic\nWeak Against: Fighting, Dark, Fairy\nResistant To: Ghost, Psychic, Dark\nVulnerable To: Fighting, Bug, Fairy*")
