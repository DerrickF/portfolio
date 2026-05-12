Drop authentic audio files here to override the synthesized fallbacks.

Expected filenames (mp3 or wav, but JS references .mp3):

  win95-startup.mp3      Windows 95 startup chime (Brian Eno, ~6s)
  dialup.mp3             56k modem handshake (~5-15s, will play once)
  aim-door-open.mp3      AIM door creak (sign-on / IM open)
  aim-door-close.mp3     AIM door slam (sign-off / IM close)
  aim-msg.mp3            "uh-oh" message receive
  aim-buddy-in.mp3       Buddy signing on chime

Where to find authentic versions:
  - Old AIM installer extracts: imrcv.wav, doorOpen.wav, doorSlam.wav,
    buddyIn.wav, buddyOut.wav
  - Internet Archive: search "Windows 95 sounds"
  - Various YouTube extracts (ripping risk — get from a clean source)

If a file is missing or fails to load, the synthesized fallback plays
automatically. No errors thrown.
