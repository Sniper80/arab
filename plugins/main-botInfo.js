import '@whiskeysockets/baileys';
import 'os';
import 'util';
import 'human-readable';
import '@whiskeysockets/baileys';
import 'fs';
import { performance } from 'perf_hooks';
const handler = async (_0x3d4f11, {
  conn: _0x1d2b14,
  usedPrefix: _0x3733b1
}) => {
  const _0x85bc = process.uptime() * 0x3e8;
  const _0x4ffeb8 = clockString(_0x85bc);
  const _0x3954a7 = Object.keys(global.db.data.users).length;
  const _0x40161a = Object.entries(_0x1d2b14.chats).filter(([_0x26b9ca, _0x2ace21]) => _0x26b9ca && _0x2ace21.isChats);
  const _0x11c89f = _0x40161a.filter(([_0x20afb1]) => _0x20afb1.endsWith("@g.us"));
  const {
    restrict: _0x5f0cb5,
    antiCall: _0x3f529a,
    antiprivado: _0x10ac48,
    modejadibot: _0x1f9a74
  } = global.db.data.settings[_0x1d2b14.user.jid] || {};
  const {
    autoread: _0x1b46d0,
    gconly: _0x322dab,
    pconly: _0x3d1b20,
    self: _0x5b8b1e
  } = global.opts || {};
  const _0x27992b = performance.now();
  const _0x2e96b3 = performance.now();
  const _0x634312 = _0x2e96b3 - _0x27992b;
  const _0xe4e447 = ("\n╠═〘 _معلومات البوت_ 〙 ═\n╠\n╠➥ [🤴🏻] المصمم: *⁨ 𝚂𝙽𝙸𝙿𝙴𝚁 𝔖⁩*\n╠➥ [#️⃣] الارقام: *+201020182886* و *+201222641487*\n╠➥ [🎳] البادئه;: *" + _0x3733b1 + "*\n╠➥ [🔐] شات الخاص: *" + (_0x40161a.length - _0x11c89f.length) + "*\n╠➥ [🦜] الجروبات: *" + _0x11c89f.length + "* \n╠➥ [💡] عدد المحادثات: *" + _0x40161a.length + "* \n╠➥ [🚀] النشاط: *" + _0x4ffeb8 + "*\n╠➥ [🎩] المستخدمين: *" + _0x3954a7 + " رقم*\n╠➥ [☑️] الصحين: " + (_0x1b46d0 ? "*مفعل*" : "*غير مفعل*") + "\n╠➥ [❗] التقيد: " + (_0x5f0cb5 ? "*مفعل*" : "*غير مفعل*") + " \n╠➥ [💬] خاص فقط: " + (_0x3d1b20 ? '*مفعل*' : "*غير مفعل*") + "\n╠➥ [🏢] جروبات فقط: " + (_0x322dab ? "*مفعل*" : "*غير مفعل*") + "\n╠➥ [🌎] مود: " + (_0x5b8b1e ? "*خاص*" : "*عام*") + "\n╠➥ [💬] مضاد الخاص: " + (_0x10ac48 ? "*مفعل*" : "*غير مفعل*") + "\n╠➥ [🤖] البوتات الفرعيه: " + (_0x1f9a74 ? "*مفعل*" : "*غير مفعل*") + "\n╠➥ [📵] مضاد المكالمات: " + (_0x3f529a ? "*مفعل*" : "*غير مفعل*") + "\n╠➥ [👨‍🦯] السرعه: \n╠  *" + _0x634312 + " ms* \n╠\n╠═〘 𝚂𝙽𝙸𝙿𝙴𝚁 𝔖 〙 ═\n").trim();
  const _0x517cbc = ['pdf', "zip", "vnd.openxmlformats-officedocument.presentationml.presentation", "vnd.openxmlformats-officedocument.spreadsheetml.sheet", "vnd.openxmlformats-officedocument.wordprocessingml.document"];
  const _0x2c9d3f = _0x517cbc[Math.floor(Math.random() * _0x517cbc.length)];
  const _0x5db33f = {
    'document': {
      'url': "https://chat.whatsapp.com/KkMsf03DcKjGRasACd3Se6"
    },
    'mimetype': "application/" + _0x2c9d3f,
    'fileName': "「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」",
    'fileLength': 0x5af3107a3fff,
    'pageCount': 0xc8,
    'contextInfo': {
      'forwardingScore': 0xc8,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': "https://chat.whatsapp.com/KkMsf03DcKjGRasACd3Se6",
        'mediaType': 0x2,
        'previewType': "pdf",
        'title': "𝚂𝙽𝙸𝙿𝙴𝚁 𝙱𝙾𝚃 ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ",
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': "https://chat.whatsapp.com/KkMsf03DcKjGRasACd3Se6"
      }
    },
    'caption': _0xe4e447,
    'footer': wm,
    'headerType': 0x6
  };
  _0x1d2b14.sendMessage(_0x3d4f11.chat, _0x5db33f, {
    'quoted': _0x3d4f11
  });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|معلومات)$/i;
export default handler;
function clockString(_0x3a0a4b) {
  const _0x535c0b = Math.floor(_0x3a0a4b / 0x36ee80);
  const _0xfdae5 = Math.floor(_0x3a0a4b / 0xea60) % 0x3c;
  const _0x2af2ec = Math.floor(_0x3a0a4b / 0x3e8) % 0x3c;
  console.log({
    'ms': _0x3a0a4b,
    'h': _0x535c0b,
    'm': _0xfdae5,
    's': _0x2af2ec
  });
  return [_0x535c0b, _0xfdae5, _0x2af2ec].map(_0x49f7b3 => _0x49f7b3.toString().padStart(0x2, 0x0)).join(':');
}