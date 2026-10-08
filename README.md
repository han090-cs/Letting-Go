# Letting Go

**မြန်မာ** · [English](#english)

စိတ်ထဲမှာ လေးနေတာတွေကို ရေးချပြီး မီး၊ ရေ၊ လေ နဲ့ လွှတ်ပေးနိုင်တဲ့ **ကိုယ်ပိုင်၊ ယာယီ၊ offline သုံးလို့ရတဲ့** web app တစ်ခုပါ။
ရေးသမျှကို မသိမ်း၊ မပို့၊ မခြေရာခံပါဘူး။ စာမျက်နှာပိတ်လိုက်ရင် ပျောက်သွားပါမယ်။

## အဓိက လုပ်ဆောင်ချက်များ

- **စက်တိုင်းမှာ သုံးလို့ရ**: ဖုန်း၊ tablet၊ ကွန်ပျူတာ၊ landscape၊ iPhone notch၊ ကီးဘုတ်တက်လာတာကို ကိုက်ညီအောင် ပြင်ထားသည်။ ဖုန်းထဲ app အဖြစ် ထည့်လို့ရ (PWA)။
- **Offline အပြည့်အဝ**: ပထမဆုံး ဖွင့်ပြီးတာနဲ့ app ဖိုင်အားလုံးကို cache လုပ်ထားသည်။ မြန်မာ font ကိုလည်း အထဲမှာ ထည့်ထားလို့ internet / CDN မလိုဘဲ စက်တိုင်းမှာ မြန်မာစာ ပုံစံတူ ပေါ်ပါတယ်။
- **မြန်မာစာ အရည်အသွေး**: စာသားအားလုံးကို သဘာဝကျတဲ့ မြန်မာလို ပြန်ရေးထားသည် (`src/i18n/my.ts`)။ မြန်မာစာကို syllable အလိုက် ခွဲပြီး စာလုံးတစ်ခုချင်း ကျစေသည်။ Zawgyi ရိုက်နေရင် Unicode ပြောင်းဖို့ သတိပေးသည်။
- **စိတ်ပညာအခြေခံ (မလိုအပ်ဘဲ မတွန်းအားပေးပါ)**:
  - စိတ်ထဲရှိတာ ရေးချခြင်း (expressive writing)
  - ခံစားချက်ကို နာမည်ပေးခြင်း (affect labeling)
  - ရေးထားတာကို သင်္ကေတအနေနဲ့ လွှင့်ပစ်ခြင်း (ritual disposal)
  - "ဘယ်လောက်လေးလဲ" ကို ၁–၅ နဲ့ အစ/အဆုံး ကိုယ်တိုင်သတိထားနိုင်ခြင်း (မသိမ်းပါ၊ မဖြေလည်းရ)
  - ရှူထုတ်ကို ပိုရှည်စေတဲ့ အသက်ရှူလေ့ကျင့်ခန်း (၄ စက္ကန့် ရှူသွင်း၊ ၆ စက္ကန့် ရှူထုတ်)
- **ကိုယ်ရေးလုံခြုံမှု**: ခလုတ်တစ်ချက်နဲ့ စခရင်ပေါ်က အားလုံးကို ချက်ချင်း ရှင်းလို့ရ (အပေါ်ညာက အမှိုက်ပုံး)။ app/tab ကို ခဏထွက်လိုက်ရင် စခရင်ကို မှုန်ဝါးအောင် လုပ်ထားသည်။ ၁၂ မိနစ်ကျော်ရင် "ပေါ့သွားရင် ပြန်သွားလို့ရပါတယ်" ဆိုပြီး တိုးတိုးလေး သတိပေးသည်။
- **လုံခြုံမှု**: အန္တရာယ်ရှိနိုင်တဲ့ စကားလုံးကို စက်ထဲမှာပဲ စစ်ပြီး အကူအညီ card ပြသည် (မြန်မာ၊ အင်္ဂလိပ်၊ ဂျပန်၊ တရုတ်၊ စပိန်၊ ပြင်သစ်၊ ကိုရီးယား၊ အာရပ်)။
- **အရောင်မှောင်ပုံစံ (dark mode)** ကို စက်ရဲ့ setting အတိုင်း အလိုအလျောက် လိုက်သည်။
- **အသုံးပြုရလွယ်**: keyboard သုံးလို့ရ၊ screen reader အတွက် ကြေညာချက်၊ motion လျှော့ရန် setting ကို လေးစား၊ ထိတွေ့ဧရိယာ ၄၄px။
- **အကြံပြုရန်**: About (ⓘ) ထဲက ခလုတ်ကနေ အီးမေးလ် app၊ Gmail ဝက်ဘ်၊ ဒါမှမဟုတ် လိပ်စာကူးပြီး ဖန်တီးသူဆီ ပို့လို့ရသည်။
- ဘာသာစကား ၈ မျိုး: မြန်မာ၊ English၊ 日本語၊ 中文၊ العربية၊ Español၊ Français၊ 한국어 (အသစ်ထပ်ထည့်တဲ့ စာသားတွေကို မြန်မာ/English သာ ဘာသာပြန်ထားပြီး ကျန်ဘာသာတွေက English ကို အစားထိုးပြသည်)။

## ကိုယ့်စက်မှာ ပြေးကြည့်ရန်

Node.js 20.19 နှင့်အထက် လိုအပ်သည်။

```bash
npm ci
npm run dev        # ဖွံ့ဖြိုးရေး
npm test           # စာလုံးခွဲ/အန္တရာယ်စစ် logic စစ်ဆေးခြင်း
npm run build      # dist/ ထုတ်ရန်
npm run preview    # dist/ ကို စမ်းကြည့်ရန်
```

## GitHub Pages မှာ တင်ရန်

1. ဒီ folder တစ်ခုလုံးကို GitHub repository အသစ်ထဲ push လုပ်ပါ (branch နာမည် `main`)။
2. Repository ရဲ့ **Settings → Pages → Build and deployment → Source** ကို **GitHub Actions** ပြောင်းပါ။
3. Push လုပ်တိုင်း `.github/workflows/pages.yml` က test လုပ်ပြီး build လုပ်ကာ အလိုအလျောက် တင်ပေးပါမယ်။
4. လိပ်စာက `https://han090-cs.github.io/<repository-name>/` ပုံစံ ဖြစ်ပါမယ်။

## ရေရှည် ပြုပြင်စရာ မလိုအောင် လုပ်ထားတာတွေ

- Dependency အားလုံးကို **တိကျတဲ့ version** နဲ့ ပိတ်ထားပြီး `package-lock.json` ပါသည်။ CI က `npm ci` သုံးလို့ နောင်နှစ်တွေမှာလည်း build ရလဒ် တူနေပါမယ်။
- Runtime မှာ **ပြင်ပ server၊ CDN၊ API၊ database၊ analytics** တစ်ခုမှ မသုံးပါ။ ဆိုလိုတာက ပျက်စီးနိုင်တဲ့ အပြင်ပိုင်း ဝန်ဆောင်မှု မရှိပါ။
- Service worker က build တိုင်း version hash အသစ်နဲ့ ထွက်လို့ app ပြောင်းရင် စက်တွေမှာ ကိုယ်တိုင် update ဖြစ်ပါတယ်။
- tilt၊ vibration၊ Intl.Segmenter၊ clipboard စတဲ့ feature တွေ မရှိတဲ့ browser မှာလည်း app မပျက်ဘဲ ရိုးရိုးအတိုင်း ဆက်အလုပ်လုပ်သည်။

ပြောင်းချင်ရင် ကြည့်ရမယ့် နေရာများ:

| လိုချင်တာ | ဖိုင် |
| --- | --- |
| စာသား၊ ဘာသာပြန် | `src/i18n/index.ts`, `src/i18n/my.ts` |
| စာလုံးခွဲ၊ အန္တရာယ်စကားလုံး၊ Zawgyi စစ်ခြင်း | `src/lib/text.ts` (+ `text.test.ts`) |
| အကြံပြုရန် အီးမေးလ်၊ GitHub link၊ မြန်မာ အကူအညီစာရင်း | `src/main.ts` (`feedbackAddr`, `GITHUB`, `MM_HELP`) |
| အရောင်၊ layout၊ dark mode | `src/styles.css` |
| offline cache | `src/sw.template.js`, `vite.config.ts` |

> **သတိပြုရန်**: `MM_HELP` ထဲက Facebook စာမျက်နှာတွေ ဆက်ရှိနေသလား တင်မယ့်အချိန်မှာ ကိုယ်တိုင် စစ်ကြည့်ပါ။ Facebook စာမျက်နှာတွေ ပျောက်သွားနိုင်လို့ အကူအညီ card မှာ [findahelpline.com](https://findahelpline.com) ကိုလည်း အမြဲ ထည့်ထားပါတယ်။

## ကိုယ်ရေးကိုယ်တာ

ရေးသမျှကို ဘယ်ကိုမှ မပို့ပါ၊ cookie၊ analytics၊ ပြင်ပ API မသုံးပါ။ ဒီစက်ထဲမှာ မှတ်ထားတာက **ရွေးထားတဲ့ ဘာသာစကား** တစ်ခုတည်းသာ ဖြစ်ပါတယ် (`localStorage`)။
ဒီ app က **ကုသမှု မဟုတ်ပါ**။ အသက်အန္တရာယ်ရှိနေရင် နီးစပ်ရာ အရေးပေါ်ဝန်ဆောင်မှုကို ချက်ချင်း ဆက်သွယ်ပါ။

## ဖန်တီးသူ

[github.com/han090-cs](https://github.com/han090-cs) · MIT License

---

## English

A private, ephemeral, offline-first web app for writing down what feels heavy and watching it burn, drift or blow away. Nothing you write is saved, sent or tracked.

**Highlights**: works on phones, tablets and desktops; installable PWA with full offline pre-cache; bundled Burmese font (no CDN); naturally rewritten Burmese copy and syllable-level Burmese text splitting; Zawgyi detection; evidence-informed flow (expressive writing, affect labeling, symbolic disposal, optional before/after weight check, 4-in/6-out breathing guide); local-only crisis keyword check with support links; automatic dark mode; keyboard and screen-reader support; feedback by email from the About sheet.

```bash
npm ci && npm run dev     # develop
npm test                  # unit tests
npm run build             # production build in dist/
```

**Deploy**: push to `main`, set *Settings → Pages → Source* to *GitHub Actions*. The workflow tests, builds and publishes.

**Built to need no maintenance**: exact dependency versions plus a lockfile, `npm ci` in CI, zero runtime network dependencies, and a service worker that versions itself on every build.

**Privacy**: nothing you write leaves the device. Only your language choice is remembered locally. This is a reflective tool, not medical care or an emergency service.

Creator: [github.com/han090-cs](https://github.com/han090-cs) · MIT License
