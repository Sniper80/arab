const handler = async (_0x3f0ca4, {
  conn: _0x33e56e,
  usedPrefix: _0x5854de
}) => {
  const _0x58fe1b = ["pdf", "zip", "vnd.openxmlformats-officedocument.presentationml.presentation", "vnd.openxmlformats-officedocument.spreadsheetml.sheet", "vnd.openxmlformats-officedocument.wordprocessingml.document"];
  const _0x3bd96b = _0x58fe1b[Math.floor(Math.random() * _0x58fe1b.length)];
  const _0x135441 = "*اهلا بيك ف اجمد بوت واتساب هتشوفو ف حياتك 😁❤️*\nهتلاقي تحت كل معلوماتي 🤓❤️\n\n*➤رقمي واتساب :*\n*1.-* https://wa.me/201020182886\n*➤ الموقع بتاعي عليه كل معلوماتي♨️:*\n*2.-* https://egsniper.com\n*➤ الجروب الخاص بالبوت ☠️: *\n*3.-* https://chat.whatsapp.com/LIDOQqIfg9q0uNqdJZMtFG\n*➤ قناتي ع اليوتيوب👥*\n*4.-* https://www.youtube.com/@EG-SNIPER\n*➤ 🧿 حسابي علي تلجرام ❤️*\n*5.-* https://t.me/EG_SNIPER".trim();
  const _0x33a865 = {
    "document": {
      "url": "https://egsniper.com"
    },
    "mimetype": "application/" + _0x3bd96b,
    "fileName": "「 اهـلاً 」",
    "fileLength": 0x5af3107a3fff,
    "pageCount": 0xc8,
    "contextInfo": {
      "forwardingScore": 0xc8,
      "isForwarded": true,
      "externalAdReply": {
        "mediaUrl": "https://egsniper.com",
        "mediaType": 0x2,
        "previewType": "pdf",
        "title": "دوس هيدخلك علي موقعي",
        "body": wm,
        "thumbnail": imagen1,
        "sourceUrl": "https://egsniper.com"
      }
    },
    "caption": _0x135441,
    "footer": wm,
    "headerType": 0x6
  };
  _0x33e56e.sendMessage(_0x3f0ca4.chat, _0x33a865, {
    "quoted": _0x3f0ca4
  });
};
handler.command = ["دعم", "الدعم", "سورس", "السورس", "sc"];
export default handler;