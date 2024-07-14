import _0x6c379c from '@vitalets/google-translate-api';
let quranSurahHandler = async (_0x44ce75, {
  conn: _0x5b0f47,
  usedPrefix: _0x3f052d,
  command: _0x3e552c
}) => {
  try {
    let _0x118143 = _0x44ce75.text.split(" ")[0x1];
    if (!_0x118143) {
      throw new Error("يرجى تحديد رقم السورة\n\n    *" + (_0x3f052d + _0x3e552c) + "* 1");
    }
    let _0x411090 = await fetch("https://quran-endpoint.vercel.app/quran");
    let _0x3b6edd = await _0x411090.json();
    let _0x402aa0 = _0x3b6edd.data.find(_0x54dc1c => _0x54dc1c.number === Number(_0x118143) || _0x54dc1c.asma.ar.short.toLowerCase() === _0x118143.toLowerCase() || _0x54dc1c.asma.en.short.toLowerCase() === _0x118143.toLowerCase());
    if (!_0x402aa0) {
      throw new Error("تعذر العثور على سورة برقم أو اسم \"" + _0x118143 + "\"");
    }
    let _0x8fd414 = await fetch('https://quran-endpoint.vercel.app/quran/' + _0x402aa0.number);
    if (!_0x8fd414.ok) {
      let _0x37658f = await _0x8fd414.json();
      throw new Error("فشل طلب واجهة برمجة التطبيقات بالحالة " + _0x8fd414.status + " والرسالة " + _0x37658f.message);
    }
    let _0x3e4a3d = await _0x8fd414.json();
    let _0x2a189b = await _0x6c379c(_0x3e4a3d.data.tafsir.id, {
      'to': 'ar',
      'autoCorrect': true
    });
    let _0x3b6d9b = "\n🕌 *القرآن: الكتاب المقدس*\n\n📜 *سورة " + _0x3e4a3d.data.number + ": " + _0x3e4a3d.data.asma.ar.long + "*\n\nالنوع: " + _0x3e4a3d.data.type.ar + "\n\nعدد الآيات: " + _0x3e4a3d.data.ayahCount + "\n\n🔮 *التوضيح (عربي):*\n\n" + _0x2a189b.text;
    _0x44ce75.reply(_0x3b6d9b);
    if (_0x3e4a3d.data.recitation.full) {
      _0x5b0f47.sendFile(_0x44ce75.chat, _0x3e4a3d.data.recitation.full, 'quran.mp3', null, _0x44ce75, true, {
        'type': "audioMessage",
        'ptt': true
      });
    }
  } catch (_0x5859aa) {
    console.error(_0x5859aa);
    _0x44ce75.reply("خطأ: " + _0x5859aa.message);
  }
};
quranSurahHandler.help = ["quran [surah_number|surah_name]"];
quranSurahHandler.tags = ["quran", "surah"];
quranSurahHandler.command = ['quran', "surah", "القران", "قران", "القرآن", "قرآن"];
export default quranSurahHandler;