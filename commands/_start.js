/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var button = [ [{title : "HELP AND COMMANDS" , command : "/help"}],

[{title : "SUPPORT" , url : "https://t.me/HEXA_AKATSUKI"},{title : "SOURCE CODE" , url : "https://github.com/dyno-create/Mewtwo.py"}],


[{title : "ADD ME IN YOUR GROUP" , url : "http://t.me/HEXA_INFO_SOBOT?startgroup=true"}]
]

Bot.sendInlineKeyboard(button, "*Hey, *["+user.first_name+"](tg://settings)**[🙂](https://te.legra.ph/file/438251be500f1a619ab81.jpg)* I am * [HEXA INFO BOT](https://t.me/HEXA_INFO_SOBOT?start=)\n* For Help you can click on the command \n  *_HELP_* Given below or you can use the command*_ /help_")

