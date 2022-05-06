/*CMD
  command: j
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: j

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == 1797053521){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done Bot Sent To "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
