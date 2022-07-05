/*CMD
  command: /ice@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ice
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  ice\nStrong Against: Flying, Ground, Grass, Dragon\nWeak Against: Steel, Fire, Water, Ice\nResistant To: Ice\nVulnerable To: Fighting, Rock, Steel, Fire*")
