
import sys
from os import execl

@bot.on(admin_cmd(incoming=True))
async def my_event_handler(event):
    if 'A wild Mewtwo' in event.raw_text:
        await bot.disconnect()
        execl(sys.executable, sys.executable, *sys.argv)
