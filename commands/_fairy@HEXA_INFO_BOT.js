/*CMD
  command: /fairy@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /fairy
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  fairy\nStrong Against: Fighting, Dragon, Dark\nWeak Against : Poison, Steel, Fire\nResistant To: Fighting, Bug, Dragon, Dark\nVulnerable To: Poison, Steel*")
