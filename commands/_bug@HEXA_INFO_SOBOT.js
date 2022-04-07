/*CMD
  command: /bug@HEXA_INFO_SOBOT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /bug
CMD*/

var button = [
[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"}]
]

Bot.sendInlineKeyboard(button, "*Type  :  bug\nStrong Against: Grass, Psychic, Dark\nWeak Against : Fighting,Flying,Poison,Ghost,Steel,Fire,Fairy\nResistantTo:Fighting, Ground,Grass\nVulnerable To:Flying, Rock, Fire*")
