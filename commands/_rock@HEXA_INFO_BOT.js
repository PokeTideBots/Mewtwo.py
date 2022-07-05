/*CMD
  command: /rock@HEXA_INFO_BOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /rock
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/Pokemon_Group_Telegram"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  rock\nStrong Against:Flying, Bug, Fire, Ice\nWeak Against : Fighting,Ground,Steel\nResistant To: Normal,Flying,Poison,Fire\nVulnerable To: Fighting, Ground, Steel, Water, Grass*")
