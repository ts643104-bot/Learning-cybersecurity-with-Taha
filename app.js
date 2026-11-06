const paths = [
  { id: "foundations", title: "أساسيات الكمبيوتر والشبكات", icon: "◈", level: "مبتدئ", description: "افهم الكمبيوتر والإنترنت الأول، وبعدها ادخل على الأمان.", lessons: [
    { title: "الكمبيوتر شغال إزاي؟", objective: "اتعرّف على نظام التشغيل والملفات والذاكرة.", body: "نظام التشغيل (Operating System) هو اللي بينظّم موارد الجهاز وبيخلّي البرامج تشتغل. بنرتّب البيانات في ملفات ومجلدات، والذاكرة المؤقتة بتحتفظ بالحاجات اللي الجهاز محتاجها دلوقتي.", question: "نظام التشغيل دوره إيه؟", options: ["ينظّم موارد الجهاز ويشغّل البرامج", "يضمن الإنترنت طول الوقت", "يستبدل كل البرامج"], answer: 0, explanation: "نظام التشغيل بيدير الجهاز والملفات والعمليات، بس مش بيضمن إن الإنترنت شغال." },
    { title: "مقدمة بسيطة للشبكات", objective: "افهم IP وDNS والمنافذ وHTTP.", body: "عنوان IP بيميّز نقطة اتصال على الشبكة. خدمة DNS بتحوّل اسم الموقع لعنوان مناسب، والمنافذ بتفرّق بين الخدمات على الجهاز. HTTP بينقل صفحات الويب، وHTTPS بيضيف تشفير للاتصال بين المتصفح والخادم.", question: "DNS بتعمل إيه بشكل أساسي؟", options: ["تحوّل اسم النطاق لعنوان IP", "تشفّر ملفات الجهاز", "تدير كلمات السر"], answer: 0, explanation: "DNS بتساعد الجهاز يوصل للعنوان باستخدام اسم سهل نفتكره." }
  ]},
  { id: "linux", title: "لينكس والطرفية", icon: "⌘", level: "مبتدئ", description: "اتنقّل بين الملفات وافهم الصلاحيات والعمليات واحدة واحدة.", lessons: [
    { title: "لفّة سريعة في الطرفية", objective: "اتدرّب على أوامر التنقّل وعرض الملفات.", body: "الطرفية طريقة تكتب بيها أوامر للنظام. <code>pwd</code> بيعرض مكانك الحالي، و<code>ls</code> بيعرض محتويات المجلد، و<code>cd</code> بينقلك بين المجلدات. جرّب الأوامر في المحاكي الآمن اللي تحت.", question: "أنهي أمر بيعرض المسار اللي واقف فيه؟", options: ["pwd", "mkdir", "ps"], answer: 0, explanation: "<code>pwd</code> معناها print working directory، يعني اعرض المجلد الحالي." },
    { title: "الملفات والصلاحيات", objective: "معرفة أوامر الملفات ومبدأ أقل صلاحية.", body: "تساعدك أوامر مثل <code>mkdir</code> و<code>cp</code> و<code>mv</code> و<code>cat</code> على إدارة ملفاتك. تحدد الصلاحيات من يستطيع القراءة أو الكتابة أو التنفيذ. امنح أقل صلاحية لازمة، ولا تغيّر صلاحيات ملفات لا تملكها.", question: "ما المبدأ الآمن عند ضبط الصلاحيات؟", options: ["منح أقل صلاحية لازمة", "منح الجميع صلاحية كاملة", "تعطيل كل الصلاحيات دائمًا"], answer: 0, explanation: "مبدأ أقل صلاحية يقلل أثر الخطأ أو إساءة الاستخدام." },
    { title: "العمليات والبحث", objective: "التعرف إلى عمليات النظام والبحث داخل الملفات.", body: "يعرض <code>ps</code> عمليات النظام. يساعد <code>grep</code> في البحث عن نص داخل بيانات، و<code>find</code> في العثور على ملفات ضمن نطاق محدد. هذه الأوامر في مختبرنا افتراضية ولا تعمل على جهازك.", question: "أي أمر افتراضي يساعد على البحث عن كلمة داخل ملف؟", options: ["grep", "chmod", "cd"], answer: 0, explanation: "يُستخدم grep للبحث عن أنماط نصية داخل الملفات." }
  ]},
  { id: "security", title: "مبادئ الأمن السيبراني", icon: "⬡", level: "مبتدئ", description: "ابدأ بحماية حساباتك وبياناتك واتعلّم تفكر بشكل آمن.", lessons: [
    { title: "مثلث أمن المعلومات", objective: "فهم السرية والسلامة والتوافر.", body: "السرية (Confidentiality) تحدد من يطّلع على البيانات، والسلامة (Integrity) تحميها من التغيير غير المصرح، والتوافر (Availability) يضمن إمكانية الوصول إليها عند الحاجة.", question: "أي عنصر يعني بقاء الخدمة متاحة عند الحاجة؟", options: ["التوافر", "السرية", "السلامة"], answer: 0, explanation: "التوافر يعني أن الأنظمة والبيانات متاحة للمستخدمين المصرح لهم." },
    { title: "حماية الحسابات", objective: "تطبيق المصادقة متعددة العوامل وكلمات المرور الفريدة.", body: "استخدم كلمة مرور طويلة وفريدة لكل خدمة، ومدير كلمات مرور موثوقًا، والمصادقة متعددة العوامل (MFA). لا تشارك رموز التحقق، وراجع جلسات الدخول والتنبيهات الأمنية.", question: "ما الإجراء الأفضل إذا وصل رمز تحقق لم تطلبه؟", options: ["عدم مشاركته ومراجعة أمان الحساب", "إرساله لمن طلبه", "نشره في مجموعة"], answer: 0, explanation: "رمز التحقق سر مؤقت؛ وصوله دون طلب قد يعني أن شخصًا يحاول تسجيل الدخول." },
    { title: "التصيد والنسخ الاحتياطي", objective: "تمييز رسائل التصيد والاستعداد لفقد البيانات.", body: "تحقق من عنوان المرسل والرابط قبل فتحه، ولا تستجب لضغط الاستعجال. احتفظ بنسخ احتياطية دورية واختبر استعادتها. عند الشك، استخدم قناة اتصال معروفة للتحقق.", question: "كيف تتعامل مع رابط يطلب تحديث بياناتك على نحو عاجل؟", options: ["أتحقق من المصدر عبر قناة موثوقة", "أدخل بياناتي بسرعة", "أعيد توجيه الرابط للجميع"], answer: 0, explanation: "التحقق المستقل يقلل خطر الوقوع في التصيد." }
  ]},
  { id: "defense", title: "الشبكات والأمن الدفاعي", icon: "⌁", level: "مبتدئ → متوسط", description: "اتعلّم تقرأ السجلات وتفهم المراقبة والجدار الناري.", lessons: [
    { title: "قراءة سجل تدريبي", objective: "استخراج أحداث مهمة من سجل وهمي.", body: "السجلات (Logs) تسجل أحداث الأنظمة. ابحث عن أوقات غير معتادة أو تكرار محاولات دخول، ثم اربط الأدلة قبل الاستنتاج. في المختبرات نستخدم بيانات مصطنعة فقط.", question: "ما أفضل خطوة عند ملاحظة محاولات فاشلة متكررة في سجل تدريبي؟", options: ["التحقق من السياق ومراجعة التنبيهات والسياسات", "حذف السجل فورًا", "افتراض نجاح الاختراق دون دليل"], answer: 0, explanation: "التحليل الدفاعي يعتمد على السياق والأدلة، لا على استنتاج متسرع." },
    { title: "مبادئ الجدار الناري", objective: "فهم السماح والمنع وفق سياسة واضحة.", body: "الجدار الناري يطبّق قواعد مرور على الشبكة. ابدأ بسياسة واضحة، اسمح فقط بما تحتاجه الخدمات، وراجع القواعد دوريًا. لا تُجرِ اختبارات على شبكات أو أجهزة لا تملك تصريحًا صريحًا لها.", question: "ما النهج الأكثر أمانًا لقواعد الشبكة؟", options: ["السماح الضروري فقط ومراجعة القواعد", "فتح جميع المنافذ بلا سبب", "إيقاف التسجيل دائمًا"], answer: 0, explanation: "تقليل الاتصالات المسموحة يحد من سطح التعرض." }
  ]},
  { id: "web", title: "أمان تطبيقات الويب", icon: "▣", level: "متوسط", description: "افهم حماية المواقع من خلال تطبيقات تدريب محلية وآمنة.", lessons: [
    { title: "مبادئ أمان الويب", objective: "فهم التحقق من المدخلات والجلسات والتحديثات.", body: "تحقق من المدخلات على الخادم، واستخدم واجهات قواعد بيانات آمنة، وفعّل خصائص ملفات الجلسات المناسبة، وحدّث الاعتماديات. تعلّم هذه المبادئ في تطبيق محلي مصمم للتدريب فقط.", question: "أين ينبغي التحقق من صلاحية البيانات قبل استخدامها؟", options: ["على الخادم مع تحقق مناسب", "في واجهة المستخدم فقط", "لا حاجة للتحقق"], answer: 0, explanation: "يمكن تجاوز تحقق المتصفح، لذلك يجب ألا يكون الحماية الوحيدة." },
    { title: "حماية البيانات والجلسات", objective: "التعرف إلى أهمية تقليل البيانات وحماية الجلسات.", body: "اجمع أقل قدر ضروري من البيانات، واحمِها أثناء النقل والتخزين، وانتهِ من الجلسات عند تسجيل الخروج. لا تستخدم بيانات حقيقية في بيئات التدريب.", question: "ما الممارسة الأفضل في مختبر تعليمي؟", options: ["استخدام حسابات وبيانات وهمية", "نسخ بيانات مستخدمين حقيقيين", "نشر رموز الجلسات"], answer: 0, explanation: "البيانات الوهمية تمنح فرصة للتعلم دون تعريض أشخاص أو بيانات للخطر." }
  ]},
  { id: "response", title: "التعامل مع الحوادث وتحليلها", icon: "◉", level: "متوسط", description: "اتدرّب تحفظ الأدلة وتوثّق اللي حصل وترجع النظام بأمان.", lessons: [
    { title: "خطوات الاستجابة", objective: "معرفة مراحل الاستعداد والتحليل والاحتواء والتعافي.", body: "تبدأ الاستجابة بالاستعداد، ثم اكتشاف الحدث وتحليله، واحتوائه وفق سياسة المؤسسة، وإزالة السبب والتعافي، ثم توثيق الدروس المستفادة. اتبع دائمًا إجراءات فريقك ولا تعبث بالأدلة.", question: "لماذا نوثّق خطوات الاستجابة؟", options: ["لإنشاء سجل قابل للمراجعة وتحسين الإجراءات", "لإخفاء الحادث", "لاستبدال النسخ الاحتياطية"], answer: 0, explanation: "التوثيق يدعم التحقيق والتعلّم والتحسين المستمر." }
  ]},
  { id: "capstone", title: "المشروع الختامي: محلل دفاعي", icon: "✦", level: "متوسط", description: "طبّق اللي اتعلمته في سيناريو دفاعي محاكى خطوة بخطوة.", lessons: [
    { title: "فرز تنبيه تدريبي", objective: "تلخيص دليل افتراضي وتحديد إجراء دفاعي آمن.", body: "راجع عينة السجل في المختبر، حدّد ما نعرفه وما لا نعرفه، اقترح خطوة تحقق دفاعية، واكتب ملخصًا موجزًا. لا تنفذ إجراءات على أنظمة حقيقية.", question: "ما أول ما يجب فعله بعد تنبيه غير مؤكد؟", options: ["التحقق من الأدلة والسياق وفق الإجراء المعتمد", "حذف السجلات", "إعلان اختراق مؤكد مباشرة"], answer: 0, explanation: "التحقق المنهجي يمنع الاستنتاجات الخاطئة ويحافظ على الأدلة." }
  ]}
];

const glossary = [
  ["عنوان IP", "IP address", "عنوان رقمي يحدد واجهة اتصال على شبكة."],
  ["نظام أسماء النطاقات", "DNS", "خدمة تربط أسماء النطاقات بعناوين الشبكة."],
  ["المصادقة متعددة العوامل", "MFA", "استخدام أكثر من عامل للتحقق من هوية المستخدم."],
  ["الجدار الناري", "Firewall", "نظام يطبق قواعد للسماح بمرور الشبكة أو منعه."],
  ["السجل", "Log", "تسجيل زمني لأحداث نظام أو تطبيق."],
  ["التصيد", "Phishing", "محاولة خداع المستخدم للحصول على معلومات أو دفعه إلى فعل غير آمن."],
  ["الطرفية", "Terminal", "واجهة نصية لإدخال أوامر النظام."],
  ["أقل صلاحية", "Least privilege", "منح المستخدم أو العملية أقل صلاحيات تكفي للمهمة."],
  ["التشفير", "Encryption", "تحويل البيانات إلى صيغة لا تُقرأ دون مفتاح مناسب."],
  ["الثغرة", "Vulnerability", "ضعف قد يؤثر في سرية النظام أو سلامته أو توافره."]
];

const tools = [
  { name: "Wireshark", icon: "◉", level: "متوسط", purpose: "تحليل ملفات حركة مرور تدريبية لفهم البروتوكولات.", requirements: "ملف التقاط تجريبي ومعرفة أولية بالشبكات.", safe: "استخدم ملفات تدريبية أو شبكة تملك تصريحًا صريحًا بتحليلها.", avoid: "لا تلتقط اتصالات الآخرين أو تحلل بيانات خاصة." },
  { name: "Nmap", icon: "⌕", level: "متوسط", purpose: "أداة جرد واكتشاف للخدمات ضمن نطاق مصرح به.", requirements: "مختبر محلي معزول وإذن واضح من مالك الأنظمة.", safe: "تعلّم المفاهيم باستخدام شبكة افتراضية مملوكة لك فقط.", avoid: "لا تفحص عناوين عامة أو أجهزة لا تملكها." },
  { name: "Burp Suite Community", icon: "▣", level: "متوسط", purpose: "مساعدة المطور على مراجعة طلبات تطبيق ويب تدريبي.", requirements: "تطبيق محلي مصمم للتعلم، مثل بيئة مختبرية مصرح بها.", safe: "استخدم بيانات وهمية داخل تطبيقك المحلي.", avoid: "لا تختبر مواقع حقيقية دون تفويض مكتوب." },
  { name: "أدوات لينكس", icon: "⌘", level: "مبتدئ", purpose: "الطرفية وgrep وjournalctl وقراءة السجلات وإدارة النظام.", requirements: "جهاز أو آلة افتراضية تعليمية تملكها.", safe: "ابدأ بمحاكي الموقع أو بيئة افتراضية محلية.", avoid: "لا تنسخ أوامر غير مفهومة إلى نظام مهم." },
  { name: "Git", icon: "⑂", level: "مبتدئ", purpose: "تتبّع تغييرات ملفات المشاريع والعودة إلى نسخ سابقة.", requirements: "مجلد مشروع تجريبي.", safe: "أنشئ مستودعًا محليًا لملفات تدريبية.", avoid: "لا ترفع أسرارًا أو مفاتيح وصول إلى مستودع عام." }
];

const languages = [
  { name: "Python", purpose: "أتمتة مهام بسيطة وتحليل سجلات محلية.", sample: "events = ['login_ok', 'login_failed']\nprint(events.count('login_failed'))", exercise: "عدّل القائمة وأحصِ عدد الأحداث من النوع الذي تختاره." },
  { name: "Bash", purpose: "التعامل مع لينكس وأتمتة خطوات إدارية مفهومة.", sample: "echo 'مرحبًا بالتعلّم الآمن'\npwd", exercise: "اكتب أمرًا يعرض رسالة تذكير على جهازك التجريبي." },
  { name: "HTML وCSS وJavaScript", purpose: "بناء واجهات ويب وفهم كيفية عرض المحتوى والتفاعل معه.", sample: "const lesson = 'أساسيات الويب';\nconsole.log(lesson);", exercise: "غيّر قيمة النص إلى اسم درس من اختيارك." },
  { name: "SQL", purpose: "فهم تخزين البيانات والاستعلام عنها ضمن قاعدة محلية وهمية.", sample: "SELECT title FROM lessons;", exercise: "تخيّل جدولًا للدروس واكتب اسم العمود الذي تريد عرضه." }
];

const labs = [
  { id: "log-review", title: "مختبر قراءة السجلات", level: "مبتدئ", description: "اختر التفسير الأقرب لسجل دخول افتراضي، ثم اقرأ سبب الإجابة.", data: "09:02 login success user=learner\n09:05 login failed user=learner\n09:06 login failed user=learner\n09:07 login failed user=learner", question: "ما الاستنتاج الدفاعي الأنسب من هذه العينة وحدها؟", options: ["هناك محاولات فاشلة متقاربة تستحق التحقق من السياق", "تأكد اختراق الحساب", "السجل يثبت أن كلمة المرور سُرقت"], answer: 0, explanation: "العينة تشير إلى تكرار محاولات فاشلة، لكنها لا تثبت وحدها اختراقًا أو سرقة بيانات." },
  { id: "network-review", title: "مختبر حركة مرور وهمية", level: "مبتدئ", description: "ميّز بين اتصال مشفر وغير مشفر في بيانات تدريبية مصطنعة.", data: "sample A: protocol=HTTPS destination=training.local\nsample B: protocol=HTTP destination=training.local\nsample C: protocol=DNS query=course.test", question: "أي عينة تستخدم HTTPS؟", options: ["العينة A", "العينة B", "العينة C"], answer: 0, explanation: "توضح البيانات الوهمية أن العينة A تستخدم HTTPS. لا توجد أي اتصالات فعلية." }
];

const initialState = { completed: [], scores: {}, labs: [], incidentChecks: [], phishing: { step: 0, complete: false, feedback: "" }, theme: "dark", terminal: { cwd: "/home/learner", files: null } };
let state = loadState();
let activeView = "home";
let activePath = "";
let openLesson = "";
let toastTimer;
let flashIndex = 0;
let flashRevealed = false;
let activeAttackPhase = 0;

const attackPhases = [
  { title: "باب مفتوح أو خدعة", description: "ممكن البداية تبقى كلمة سر ضعيفة أو متكررة، رسالة تصيّد، برنامج قديم، أو إعداد غلط. دي أمثلة على أسباب شائعة، مش خطوات تنفيذ.", defense: "اقفل الباب: كلمة سر فريدة، تحديثات، تحقق من الروابط، ومصادقة متعددة العوامل." },
  { title: "محاولة وصول", description: "المهاجم بيحاول يستغل نقطة الضعف عشان يوصل لحساب أو جهاز. الموقع بيشرح الفكرة من غير تعليمات أو أدوات للهجوم.", defense: "قلّل فرص الوصول: صلاحيات على قد الحاجة، قفل الحسابات، ومراجعة التنبيهات." },
  { title: "نشاط غير معتاد", description: "لو المحاولة نجحت، ممكن تلاحظ تسجيل دخول غريب، تغيير إعدادات، رسائل ما بعتّهاش، أو ملفات اتغيّرت.", defense: "راقب العلامات: راجع سجل الدخول والتنبيهات، واحفظ أي دليل من غير ما تعبث بالجهاز." },
  { title: "اكتشاف واحتواء", description: "الاستجابة الصح بتقلّل الضرر، وتبدأ من تأمين الحسابات والأجهزة وطلب مساعدة موثوقة.", defense: "افصل الجهاز المتأثر عن الشبكة لو ده آمن، أمّن بريدك من جهاز موثوق، وبلّغ الجهة المناسبة." }
];

const incidentSteps = [
  "استخدم جهاز تاني موثوق ونضيف لتأمين حساباتك. لو الجهاز تابع للشغل، كلم فريق الـ IT الأول.",
  "أمّن الإيميل الأساسي الأول: غيّر كلمة السر لكلمة فريدة، اخرج الجلسات المفتوحة، وراجع بيانات الاسترداد.",
  "فعّل المصادقة متعددة العوامل، وما تبعتش لأي حد رمز التحقق أو كلمة السر.",
  "أمّن الحسابات التانية اللي استخدمت فيها نفس كلمة السر. لو بيانات دفع اتعرضت للخطر، كلم البنك من رقمه الرسمي.",
  "لو الجهاز نفسه مشكوك فيه، افصله عن الـ Wi-Fi والشبكة لو ده آمن. ما تطفيش جهاز شغل أو جهاز عليه تحقيق؛ اتواصل مع الدعم الأول.",
  "احتفظ بالتنبيهات والرسائل ووقت اللي حصل، وبلّغ مزود الخدمة أو مسؤول النظام. بعد التأمين، حدّث النظام وافحصه بأداة حماية موثوقة."
];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("mirqab-progress") || "null");
    return {
      ...initialState,
      ...(saved || {}),
      phishing: { ...initialState.phishing, ...(saved && saved.phishing || {}) },
      terminal: { ...initialState.terminal, ...(saved && saved.terminal || {}) }
    };
  } catch (error) {
    console.warn("تعذر قراءة التقدم المحفوظ:", error);
    return { ...initialState };
  }
}
function saveState() {
  try { localStorage.setItem("mirqab-progress", JSON.stringify(state)); }
  catch (error) { notify("تعذر حفظ التقدم في هذا المتصفح."); console.error("تعذر حفظ التقدم:", error); }
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function allLessons() { return paths.flatMap(path => path.lessons.map((lesson, index) => ({ ...lesson, id: `${path.id}-${index}`, pathId: path.id, pathTitle: path.title }))); }
function completedCount() { return state.completed.length; }
function totalLessons() { return allLessons().length; }
function pathProgress(path) {
  const done = path.lessons.filter((lesson, index) => state.completed.includes(`${path.id}-${index}`)).length;
  return { done, total: path.lessons.length, pct: Math.round(done / path.lessons.length * 100) };
}
function notify(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function render() {
  document.documentElement.dataset.theme = state.theme;
  const app = document.getElementById("app");
  const view = {
    home: renderHome,
    paths: () => renderPaths(activePath),
    labs: renderLabs,
    tools: renderTools,
    incident: renderIncident,
    glossary: renderGlossary,
    achievements: renderAchievements
  }[activeView] || renderHome;
  app.innerHTML = view();
  document.querySelectorAll(".nav-link").forEach(button => button.classList.toggle("active", button.dataset.view === activeView));
  bindViewEvents();
}
function renderHome() {
  const suggestions = allLessons().filter(item => !state.completed.includes(item.id)).slice(0, 3);
  const next = suggestions[0];
  const pct = Math.round(completedCount() / totalLessons() * 100);
  return `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">من هنا تبدأ الحكاية</span>
        <h1>اتعلم الأمن السيبراني،<br><span>واحمي نفسك خطوة بخطوة.</span></h1>
        <p>مسارات بالمصري تبدأ معاك من أساسيات الكمبيوتر ولينكس، وتوصّلك لمهارات دفاعية أقوى، بدروس قصيرة وتجارب آمنة.</p>
        <div class="hero-actions"><button class="button primary" data-view="paths">يلا نبدأ <span aria-hidden="true">←</span></button><button class="button ghost" data-view="labs">جرّب تدريب آمن</button></div>
      </div>
      <div class="hero-art" aria-hidden="true"><div class="orbit"><i class="orbit-dot"></i><div class="orbit-core">⌑</div></div></div>
    </section>
    <div class="stats-grid">
      <div class="stat-card"><strong>${completedCount()}<small class="muted"> / ${totalLessons()}</small></strong><span>درس مكتمل</span></div>
      <div class="stat-card"><strong>${pct}%</strong><span>إجمالي التقدم</span></div>
      <div class="stat-card"><strong>${state.labs.length}</strong><span>مختبر مكتمل</span></div>
      <div class="stat-card"><strong>${earnedAchievements().filter(badge => badge.earned).length}</strong><span>إنجاز محقق</span></div>
    </div>
    <section class="notice" aria-label="تنبيه الاستخدام الآمن"><span aria-hidden="true">⚠</span><p><strong>خليك قانوني وآمن:</strong> كل التمارين محاكاة وبياناتها وهمية. ممنوع تختبر جهاز أو شبكة مش بتاعتك من غير إذن صريح.</p></section>
    <section class="attack-intro">
      <div><span class="eyebrow">افهم عشان تحمي نفسك</span><h2>الهجوم بيحصل إزاي؟</h2><p>شرح بصري مبسّط للمراحل الشائعة، من غير خطوات تنفيذية أو استهداف لأنظمة حقيقية.</p></div>
      <div class="mini-attack-flow" aria-label="رسم متحرك: نقطة ضعف، محاولة وصول، نشاط غير معتاد، اكتشاف واحتواء">
        <span class="mini-node">نقطة ضعف</span><span class="mini-arrow" aria-hidden="true">←</span><span class="mini-node">محاولة وصول</span><span class="mini-arrow" aria-hidden="true">←</span><span class="mini-node">علامة مريبة</span><span class="mini-arrow" aria-hidden="true">←</span><span class="mini-node safe">تأمين واحتواء</span>
      </div>
      <button class="button small ghost" data-view="incident">افهم المراحل وخطة التصرف ←</button>
    </section>
    <section>
      <div class="section-head"><div><span class="eyebrow">خريطة التعلّم</span><h2>من مبتدئ لمستوى متوسط</h2></div><p>امشي بالترتيب، أو اختار اللي محتاجه دلوقتي.</p></div>
      ${renderRoadmap()}
    </section>
    <section>
      <div class="section-head"><div><span class="eyebrow">ابدأ من هنا</span><h2>مسارات التعلّم</h2></div><button class="button small ghost" data-view="paths">كل المسارات ←</button></div>
      <div class="grid paths-grid">${paths.slice(0, 3).map(pathCard).join("")}</div>
    </section>
    <section class="content-layout" style="margin-top:2rem">
      <div class="panel"><div class="section-head" style="margin-top:0"><div><span class="eyebrow">الخطوة الجاية</span><h2>درس مقترح ليك</h2></div></div>
        ${next ? `<p class="muted">كمّل مع درس من مسار ${escapeHtml(next.pathTitle)}.</p><button class="button primary" data-open-path="${next.pathId}" data-open-lesson="${next.id}">${escapeHtml(next.title)} ←</button>` : `<div class="empty-state">عاش! خلصت الدروس. جرّب المختبرات عشان تكمل تدريبك.</div>`}
      </div>
      <div class="panel"><span class="eyebrow">إنجازاتك</span><h2>تقدمك محفوظ</h2><p class="muted">تقدمك بيتحفظ على المتصفح ده بس، ومش محتاج تعمل حساب.</p><button class="button small ghost" data-view="achievements">شوف إنجازاتك ←</button></div>
    </section>`;
}
function renderIncident() {
  const phase = attackPhases[activeAttackPhase];
  const completed = state.incidentChecks.length;
  return `<div class="eyebrow">إرشادات دفاعية بسيطة وبالمصري</div>
    <h1>لو شاكك إن حسابك أو جهازك اتخترق</h1>
    <p class="subheading">خد نفس، وما تتصرفش بعشوائية. امشي على الخطوات دي من جهاز موثوق، ولو جهاز شغل كلم مسؤول الـ IT أو فريق الأمن الأول.</p>
    <section class="notice incident-warning"><span aria-hidden="true">⚠</span><p><strong>مهم:</strong> ما تحاولش ترد الهجوم أو تخترق الطرف التاني. ده ممكن يزوّد الضرر ويعرّضك لمشكلة قانونية. ركّز على التأمين، حفظ الأدلة، والإبلاغ.</p></section>
    <section class="panel attack-map">
      <div class="section-head" style="margin-top:0"><div><span class="eyebrow">خريطة توضيحية</span><h2>الهجوم ممكن يمشي إزاي؟</h2><p class="muted">اضغط على مرحلة عشان تعرف الفكرة وإزاي تقلل الخطر.</p></div><span class="tag">شرح مفاهيمي دفاعي</span></div>
      <div class="attack-visual">
        <svg class="attack-connector" viewBox="0 0 900 70" role="img" aria-label="خط متحرك بيربط مراحل الهجوم الشائعة">
          <path class="connector-base" d="M70 35 H830"></path>
          <path class="connector-flow" d="M70 35 H830"></path>
          <circle class="connector-pulse" r="7"><animateMotion dur="5s" repeatCount="indefinite" path="M830 35 H70"></animateMotion></circle>
        </svg>
        <div class="attack-stages">${attackPhases.map((item, index) => `<button class="attack-stage ${index === activeAttackPhase ? "selected" : ""}" data-phase="${index}" aria-pressed="${index === activeAttackPhase}"><span class="stage-icon" aria-hidden="true">${["◇", "↗", "◉", "✓"][index]}</span><span class="stage-caption">المرحلة ${index + 1}</span><strong>${item.title}</strong></button>`).join("")}</div>
      </div>
      <div class="phase-detail" id="phase-detail" aria-live="polite"><div><span class="eyebrow">إيه اللي ممكن يحصل؟</span><p>${phase.description}</p></div><div><span class="eyebrow">تحمي نفسك إزاي؟</span><p>${phase.defense}</p></div></div>
      <p class="micro-copy">الرسم للتوعية بس: مفيهوش تعليمات تنفيذ، أدوات، أو اتصال بأجهزة ومواقع.</p>
    </section>
    <section class="section-head"><div><span class="eyebrow">خطة عملية</span><h2>اعمل إيه دلوقتي؟</h2><p class="muted">علّم الخطوات اللي خلصتها؛ التقدم هيتحفظ على المتصفح ده.</p></div><span class="badge">${completed} من ${incidentSteps.length} خطوات</span></section>
    <div class="response-grid">${incidentSteps.map((step, index) => `<label class="response-step ${state.incidentChecks.includes(index) ? "checked" : ""}"><input type="checkbox" data-incident-check="${index}" ${state.incidentChecks.includes(index) ? "checked" : ""}><span class="check-mark" aria-hidden="true">${index + 1}</span><span>${step}</span></label>`).join("")}</div>
    <section class="incident-aftercare"><span class="eyebrow">بعد ما تأمّن حساباتك</span><h2>قلّل فرصة تكرار المشكلة</h2><div class="aftercare-grid"><article class="aftercare-card"><span aria-hidden="true">🔐</span><h3>كلمات سر مختلفة</h3><p>استخدم مدير كلمات مرور، وخلي لكل حساب كلمة سر فريدة.</p></article><article class="aftercare-card"><span aria-hidden="true">🛡</span><h3>تحديثات وحماية</h3><p>فعّل التحديث التلقائي، واستخدم أداة حماية موثوقة ومحدّثة.</p></article><article class="aftercare-card"><span aria-hidden="true">💾</span><h3>نسخ احتياطي</h3><p>احتفظ بنسخة احتياطية دورية، وجرب استرجاعها قبل ما تحتاجها.</p></article><article class="aftercare-card"><span aria-hidden="true">👀</span><h3>خليك واخد بالك</h3><p>راجع تنبيهات الدخول، وتأكد من الروابط من مصدر معروف قبل ما تضغط.</p></article></div></section>`;
}
function renderRoadmap() {
  const stages = [
    ["1", "مبتدئ", "ابدأ بالكمبيوتر والشبكات", ["foundations"]],
    ["2", "لينكس", "الطرفية والملفات والصلاحيات", ["linux"]],
    ["3", "مبادئ الأمان", "السرية وسلامة البيانات والتوافر", ["security"]],
    ["4", "دفاع ومراقبة", "السجلات وقواعد الشبكة", ["defense"]],
    ["5", "أمان الويب", "حماية تطبيقات تدريب محلية", ["web"]],
    ["6", "متوسط", "التعامل مع الحوادث ومشروع التخرج", ["response", "capstone"]]
  ];
  return `<div class="roadmap">${stages.map(([num, title, text, pIndex], stageIndex) => {
    const stagePaths = paths.filter(path => pIndex.includes(path.id));
    const total = stagePaths.reduce((sum, path) => sum + path.lessons.length, 0);
    const done = stagePaths.reduce((sum, path) => sum + pathProgress(path).done, 0);
    const progress = { done, total, pct: Math.round(done / total * 100) };
    const status = progress.pct === 100 ? "done" : (progress.done > 0 || (stageIndex === 0 && completedCount() === 0) ? "current" : "");
    return `<article class="stage-card ${status}"><span class="stage-number">${progress.pct === 100 ? "✓" : num}</span><h3>${title}</h3><p>${text}</p><p>${progress.done}/${progress.total} دروس</p></article>`;
  }).join("")}</div>`;
}
function pathCard(path) {
  const progress = pathProgress(path);
  return `<article class="card path-card"><div class="path-top"><span class="path-icon" aria-hidden="true">${path.icon}</span><span class="badge">${path.level}</span></div><h3 style="margin-top:.8rem">${escapeHtml(path.title)}</h3><p>${escapeHtml(path.description)}</p><div class="progress-track" role="progressbar" aria-label="تقدمك في ${escapeHtml(path.title)}" aria-valuenow="${progress.pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${progress.pct}%"></span></div><div class="path-meta"><span>${progress.done} من ${progress.total} دروس</span><span>${progress.pct}%</span></div><div class="path-footer"><span class="muted">${path.lessons.length} دروس خفيفة</span><button class="button small ghost" data-open-path="${path.id}">افتح المسار ←</button></div></article>`;
}
function renderPaths(selectedId = "") {
  if (!selectedId) return `<div class="eyebrow">مسارات واضحة واحدة واحدة</div><h1>اختار تبدأ منين</h1><p class="subheading">ابدأ من الأساسيات، وكمل لحد التحليل الدفاعي. تقدمك بيتحفظ على جهازك تلقائي.</p><div class="grid paths-grid">${paths.map(pathCard).join("")}</div><section style="margin-top:2rem">${renderRoadmap()}</section>`;
  const path = paths.find(item => item.id === selectedId);
  if (!path) return renderPaths();
  const progress = pathProgress(path);
  return `<button class="button small ghost" data-view="paths">← ارجع للمسارات</button><div class="section-head"><div><span class="eyebrow">المستوى: ${path.level} · ${path.lessons.length} دروس</span><h1>${path.icon} ${escapeHtml(path.title)}</h1><p class="muted">${escapeHtml(path.description)}</p></div><div class="badge">${progress.done}/${progress.total} خلصوا</div></div>
    ${path.id === "linux" ? `<div class="content-layout"><div class="lesson-list">${path.lessons.map((lesson, index) => lessonCard(path, lesson, index)).join("")}</div>${renderTerminal()}</div>` : `<div class="lesson-list">${path.lessons.map((lesson, index) => lessonCard(path, lesson, index)).join("")}</div>`}`;
}
function lessonCard(path, lesson, index) {
  const id = `${path.id}-${index}`;
  const done = state.completed.includes(id);
  const expanded = openLesson === id;
  return `<article class="lesson-card ${done ? "completed" : ""} ${expanded ? "expanded" : ""}" id="lesson-${id}">
    <div class="path-top"><div><span class="eyebrow">الدرس رقم ${index + 1}</span><h3>${escapeHtml(lesson.title)} ${done ? '<span class="badge">خلص ✓</span>' : ""}</h3></div><button class="button small ghost" data-toggle-lesson="${id}" aria-expanded="${expanded}">${expanded ? "اقفل الدرس" : "افتح الدرس"}</button></div>
    <p>${escapeHtml(lesson.objective)}</p>
    <div class="lesson-detail"><p>${lesson.body}</p><div class="panel" style="padding:1rem"><strong>اختبر نفسك:</strong><p>${escapeHtml(lesson.question)}</p><div data-quiz="${id}">${lesson.options.map((option, optIndex) => `<button class="quiz-option" data-answer="${optIndex}" data-lesson="${id}">${escapeHtml(option)}</button>`).join("")}</div><div class="feedback" id="feedback-${id}" aria-live="polite"></div><button class="button small primary" data-complete="${id}" ${done ? "disabled" : ""}>${done ? "الدرس خلص ✓" : "علّم الدرس إنه خلص"}</button></div></div>
  </article>`;
}
function renderTerminal() {
  if (!state.terminal.files) state.terminal.files = terminalFiles();
  return `<aside class="panel"><span class="eyebrow">تدريب آمن</span><h2>طرفية لينكس للتجربة</h2><p class="muted">دي محاكاة جوه الموقع؛ مش بتنفّذ أوامر على جهازك الحقيقي.</p><div class="terminal"><div class="terminal-bar" aria-hidden="true"><i></i><i></i><i></i></div><div class="terminal-output" id="terminal-output" aria-live="polite"><div>أهلًا بيك! اكتب <b>help</b> عشان تشوف الأوامر المتاحة.</div></div><form class="terminal-form" id="terminal-form"><span id="terminal-prompt">taha@safe-lab:~$</span><input id="terminal-input" aria-label="اكتب أمر للمحاكي" autocomplete="off" spellcheck="false"><button class="button small" type="submit">جرّب</button></form></div><p class="terminal-hint">الأوامر المتاحة: pwd, ls, cd, cat, mkdir, touch, cp, mv, grep, find, chmod, ps, clear, help</p></aside>`;
}
function renderLabs() {
  return `<div class="eyebrow">تدريب آمن ومفيهوش مخاطرة</div><h1>جرّب بنفسك</h1><p class="subheading">حلّل بيانات وهمية، واختار التفسير الأقرب، واستعين بالتلميح لو احتجت. مفيش أي اتصال أو تجربة على أنظمة حقيقية.</p><div class="notice" style="margin-bottom:1.2rem"><span>ⓘ</span><p>ما تختبرش أنظمة غيرك من غير إذن صريح. التدريبات دي محاكاة ومش بتبعت بيانات للإنترنت.</p></div>${renderPhishingLab()}<div class="lab-grid">${labs.map(lab => {
    const done = state.labs.includes(lab.id);
    return `<article class="lab-card"><div class="path-top"><span class="path-icon">⌁</span><span class="badge">${done ? "مكتمل ✓" : lab.level}</span></div><h2 style="margin-top:.8rem">${lab.title}</h2><p>${lab.description}</p><div class="lab-data">${escapeHtml(lab.data)}</div><h3 style="margin-top:1rem">${lab.question}</h3><div data-lab="${lab.id}">${lab.options.map((option, i) => `<button class="choice-button" data-lab-id="${lab.id}" data-choice="${i}">${option}</button>`).join("")}</div><div class="feedback" id="lab-feedback-${lab.id}" aria-live="polite"></div><div class="lesson-actions"><button class="button small ghost" data-hint="${lab.id}">تلميح</button><button class="button small ghost" data-solution="${lab.id}">إظهار التفسير</button></div></article>`;
  }).join("")}</div>`;
}
function renderPhishingLab() {
  const training = state.phishing;
  const steps = [
    {
      title: "وصلك إيميل مستعجل",
      description: "المرسل كاتب «فريق الدعم»، وبيقول إن حسابك هيتقفل خلال ساعة. عنوان المرسل الظاهر: <bdi dir=\"ltr\">notify@sample.invalid</bdi>. مفيش روابط قابلة للضغط في التدريب.",
      question: "تعمل إيه الأول؟",
      options: ["أراجع عنوان المرسل والتفاصيل من غير ما أفتح أي رابط", "أفتح الرابط بسرعة عشان ما أخسرش الحساب", "أرد وأبعت كلمة السر عشان أتأكد"]
    },
    {
      title: "عايز تتأكد من التنبيه",
      description: "لسه مش متأكد إذا كان في مشكلة فعلًا. مفيش داعي تستخدم أي رابط جاي في الرسالة.",
      question: "إيه الطريقة الآمنة للتحقق؟",
      options: ["أفتح التطبيق الرسمي أو أكتب عنوانه بنفسي وأراجع التنبيهات", "أضغط على الرابط الموجود في الإيميل", "أرد على نفس الرسالة وأسألهم"]
    },
    {
      title: "الرسالة لسه شكلها مريب",
      description: "في استعجال، والمرسل مش واضح. ما كتبتش أي بيانات وما فتحتش حاجة.",
      question: "تعمل إيه عشان تحمي نفسك وغيرك؟",
      options: ["أبلّغ عنها من أداة الإبلاغ الرسمية وبعدها أحذفها", "أحوّلها لكل صحابي عشان ياخدوا بالهم", "أسيبها وأفضل أفتح الرسالة وأجرب"]
    }
  ];
  const step = Math.min(training.step, steps.length - 1);
  const current = steps[step];
  const done = training.complete;
  return `<section class="phishing-lab ${done ? "complete" : ""}" aria-labelledby="phishing-title">
    <div class="phishing-heading"><div><span class="eyebrow">سيناريو محاكاة — مفيش إيميل حقيقي</span><h2 id="phishing-title">تدريب: اكتشف رسالة التصيّد</h2><p>خد قرارك، وشوف نتيجة كل اختيار. مش بنطلب منك تفتح رابط أو تدخل أي بيانات.</p></div><div class="mail-illustration" aria-hidden="true"><span>✉</span><i></i></div></div>
    ${done ? `<div class="phishing-finish" role="status"><span>✓</span><div><h3>عاش! خلصت السيناريو</h3><p>افتكرت تتحقق من المرسل، وتروح للمصدر الرسمي بنفسك، وتبلّغ عن الرسالة المشبوهة.</p></div></div>` : `<div class="phishing-progress" aria-label="تقدم السيناريو">${steps.map((_, index) => `<span class="${index < step ? "done" : ""} ${index === step ? "current" : ""}"></span>`).join("")}<small>الخطوة ${step + 1} من ${steps.length}</small></div>
      <article class="simulated-email"><div class="email-label">صندوق وارد تدريبي <span>رسالة محاكاة</span></div><div class="email-header"><span class="sender-avatar" aria-hidden="true">؟</span><div><strong>فريق الدعم — تأكيد عاجل مطلوب</strong><small>من: <bdi dir="ltr">notify@sample.invalid</bdi></small></div></div><p class="email-subject">الموضوع: ${current.title}</p><p class="email-copy">${current.description}</p><div class="email-warning">علامة خداع محتملة: استعجال وتهديد بإغلاق الحساب.</div></article>
      <div class="phishing-question"><h3>${current.question}</h3><div class="phishing-choices">${current.options.map((option, index) => `<button class="phishing-choice" data-phish-choice="${index}">${option}</button>`).join("")}</div><p class="feedback" aria-live="polite">${escapeHtml(training.feedback || "اختار تصرفك عشان تكمل السيناريو.")}</p></div>
    `}
    <p class="micro-copy">النطاق <bdi dir="ltr">sample.invalid</bdi> مخصص للتدريب، والرسالة والمرسل وهميين؛ مفيش رابط فعلي.</p>
    ${done ? `<button class="button small ghost" data-phish-reset>جرّب السيناريو تاني</button>` : ""}
  </section>`;
}
function renderTools() {
  return `<div class="eyebrow">اختر أدواتك بعناية</div><h1>أدوات التعلّم والبرمجة</h1><p class="subheading">تعرف على الاستخدام الآمن للأدوات الشائعة، ثم ابدأ بلغات تساعدك على بناء فهم دفاعي. جميع الأمثلة محلية أو وهمية.</p><h2>أدوات الأمن ولينكس</h2><div class="tools-grid">${tools.map(tool => `<article class="tool-card"><div class="path-top"><span class="path-icon">${tool.icon}</span><span class="badge">${tool.level}</span></div><h3 style="margin-top:.8rem">${tool.name}</h3><p>${tool.purpose}</p><ul><li><strong>المتطلبات:</strong> ${tool.requirements}</li><li><strong>تدريب آمن:</strong> ${tool.safe}</li><li><strong>تجنّب:</strong> ${tool.avoid}</li></ul></article>`).join("")}</div><section style="margin-top:2.5rem"><span class="eyebrow">مسار برمجة مناسب للمبتدئ</span><h2>ماذا تتعلم ولماذا؟</h2><div class="language-grid">${languages.map(lang => `<article class="tool-card"><h3>${lang.name}</h3><p>${lang.purpose}</p><div class="lab-data">${escapeHtml(lang.sample)}</div><p><strong>تمرين صغير:</strong> ${lang.exercise}</p></article>`).join("")}</div></section>`;
}
function renderGlossary() {
  const card = glossary[flashIndex % glossary.length];
  return `<div class="eyebrow">مفاهيم أساسية</div><h1>قاموس المصطلحات</h1><p class="subheading">راجع المصطلحات واحدة تلو الأخرى، أو ابحث عنها من شريط البحث بالأعلى.</p><section class="panel" style="max-width:700px;margin-bottom:1.5rem"><span class="eyebrow">بطاقة مراجعة ${flashIndex + 1} من ${glossary.length}</span><button class="flashcard" id="flashcard" aria-label="بطاقة مصطلح؛ اضغط لإظهار أو إخفاء التعريف">${flashRevealed ? `<div><strong>${escapeHtml(card[0])} · ${escapeHtml(card[1])}</strong><p>${escapeHtml(card[2])}</p></div>` : `<div><strong>${escapeHtml(card[0])}</strong><p>اضغط لإظهار التعريف</p></div>`}</button><div class="lesson-actions"><button class="button small" data-flash="prev">السابق</button><button class="button small primary" data-flash="next">البطاقة التالية</button></div></section><div class="glossary-grid">${glossary.map(item => `<article class="tool-card"><h3>${escapeHtml(item[0])} <span class="tag">${escapeHtml(item[1])}</span></h3><p>${escapeHtml(item[2])}</p></article>`).join("")}</div>`;
}
function earnedAchievements() {
  const badges = [
    { id: "first", title: "أول خطوة", description: "أكمل أول درس.", icon: "🌱", earned: completedCount() >= 1 },
    { id: "linux", title: "صديق الطرفية", description: "أكمل دروس مسار لينكس.", icon: "⌘", earned: pathProgress(paths[1]).pct === 100 },
    { id: "curious", title: "عين المحلل", description: "أكمل مختبرًا تفاعليًا.", icon: "◉", earned: state.labs.length >= 1 },
    { id: "five", title: "خطوات ثابتة", description: "أكمل خمسة دروس.", icon: "✦", earned: completedCount() >= 5 },
    { id: "all", title: "متعلم مستمر", description: "أكمل جميع الدروس التعليمية.", icon: "🏅", earned: completedCount() >= totalLessons() }
  ];
  return badges;
}
function renderAchievements() {
  const badges = earnedAchievements();
  return `<div class="eyebrow">كل خطوة تستحق التقدير</div><h1>إنجازاتك</h1><p class="subheading">تُمنح الشارات تلقائيًا عند إكمال الأنشطة. استمر بالتعلّم وفق وتيرتك.</p><div class="stats-grid"><div class="stat-card"><strong>${completedCount()}</strong><span>درس مكتمل</span></div><div class="stat-card"><strong>${state.labs.length}</strong><span>مختبر مكتمل</span></div><div class="stat-card"><strong>${badges.filter(b => b.earned).length}</strong><span>شارات محققة</span></div><div class="stat-card"><strong>${Math.round(completedCount() / totalLessons() * 100)}%</strong><span>تقدم المسارات</span></div></div><div class="achievement-grid">${badges.map(b => `<article class="achievement ${b.earned ? "earned" : ""}"><span class="achievement-icon">${b.icon}</span><h3>${b.title} ${b.earned ? "✓" : ""}</h3><p class="muted">${b.description}</p><span class="tag">${b.earned ? "تم الإنجاز" : "لم تُفتح بعد"}</span></article>`).join("")}</div><div class="panel" style="margin-top:1.2rem"><h2>نتائج الاختبارات</h2>${Object.keys(state.scores).length ? `<ul>${Object.entries(state.scores).map(([id, score]) => `<li>${escapeHtml(allLessons().find(item => item.id === id)?.title || id)}: ${score ? "إجابة صحيحة ✓" : "أعد المحاولة"}</li>`).join("")}</ul>` : `<p class="muted">لم تُسجل إجابات بعد. افتح درسًا وجرّب الاختبار القصير.</p>`}</div>`;
}
function bindViewEvents() {
  document.getElementById("app").querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => { activeView = button.dataset.view; activePath = ""; openLesson = ""; render(); window.scrollTo({ top: 0, behavior: "smooth" }); }));
  document.querySelectorAll("[data-open-path]").forEach(button => button.addEventListener("click", () => {
    activeView = "paths";
    const pathId = button.dataset.openPath;
    activePath = pathId;
    openLesson = button.dataset.openLesson || "";
    document.getElementById("search").value = "";
    renderPathsIntoApp(pathId);
  }));
  document.querySelectorAll("[data-toggle-lesson]").forEach(button => button.addEventListener("click", () => {
    openLesson = openLesson === button.dataset.toggleLesson ? "" : button.dataset.toggleLesson;
    render();
    const lessonElement = document.getElementById(`lesson-${openLesson}`);
    if (lessonElement) lessonElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }));
  document.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => answerQuiz(button)));
  document.querySelectorAll("[data-complete]").forEach(button => button.addEventListener("click", () => completeLesson(button.dataset.complete)));
  document.querySelectorAll("[data-lab-id]").forEach(button => button.addEventListener("click", () => answerLab(button)));
  document.querySelectorAll("[data-hint]").forEach(button => button.addEventListener("click", () => showLabMessage(button.dataset.hint, "تلميح: اقرأ السجل كما هو، وميّز بين ما تثبته البيانات وما لا يمكن استنتاجه منها.")));
  document.querySelectorAll("[data-solution]").forEach(button => button.addEventListener("click", () => {
    const lab = labs.find(item => item.id === button.dataset.solution);
    showLabMessage(lab.id, `التفسير: ${lab.explanation}`);
  }));
  document.querySelectorAll("[data-phish-choice]").forEach(button => button.addEventListener("click", () => {
    const feedbackByStep = [
      [
        "مظبوط! عنوان المرسل والعجلة علامات تستاهل الوقوف عندها. ما فتحناش أي رابط.",
        "اختيار مش آمن. الاستعجال ممكن يكون وسيلة ضغط؛ ما تفتحش رابط قبل التحقق.",
        "اختيار مش آمن. ما تبعتش كلمة سر أو رمز تحقق في رد على رسالة."
      ],
      [
        "مظبوط! افتح التطبيق الرسمي أو اكتب عنوانه بنفسك بدل رابط الرسالة.",
        "اختيار مش آمن. الرابط ممكن يودّيك لصفحة مشبوهة؛ استخدم التطبيق الرسمي.",
        "الرد على نفس المرسل مش وسيلة تحقق موثوقة. استخدم قناة رسمية مستقلة."
      ],
      [
        "مظبوط! بلّغ عنها بالطريقة الرسمية وبعدها احذفها.",
        "ما تحولش الرسالة؛ ممكن تنشر الخدعة لناس تانية. استخدم أداة الإبلاغ.",
        "ما تفضلش تفتح الرسالة أو تجربها. بلّغ عنها واحذفها."
      ]
    ];
    const correctByStep = [0, 0, 0];
    if (Number(button.dataset.phishChoice) !== correctByStep[state.phishing.step]) {
      state.phishing.feedback = feedbackByStep[state.phishing.step][Number(button.dataset.phishChoice)];
      saveState();
      render();
      return;
    }
    state.phishing.step += 1;
    state.phishing.feedback = state.phishing.step === 1
      ? "تمام! دلوقتي تأكد من التنبيه من التطبيق أو الموقع الرسمي."
      : state.phishing.step === 2
        ? "حلو! بعد ما تحققت من المصدر، بلّغ عن الرسالة من أداة البريد الرسمية."
        : "السيناريو خلص: تحقق، ما تضغطش، وبلّغ عن الرسالة.";
    if (state.phishing.step >= 3) {
      state.phishing.step = 3;
      state.phishing.complete = true;
      if (!state.labs.includes("phishing-sim")) state.labs.push("phishing-sim");
      notify("عاش! خلصت تدريب التصيّد بأمان.");
    }
    saveState();
    render();
  }));
  document.querySelectorAll("[data-phish-reset]").forEach(button => button.addEventListener("click", () => {
    state.phishing = { step: 0, complete: false, feedback: "" };
    saveState();
    render();
  }));
  document.querySelectorAll("[data-phase]").forEach(button => button.addEventListener("click", () => {
    activeAttackPhase = Number(button.dataset.phase);
    const phase = attackPhases[activeAttackPhase];
    document.querySelectorAll("[data-phase]").forEach(stage => {
      const selected = Number(stage.dataset.phase) === activeAttackPhase;
      stage.classList.toggle("selected", selected);
      stage.setAttribute("aria-pressed", String(selected));
    });
    document.getElementById("phase-detail").innerHTML = `<div><span class="eyebrow">إيه اللي ممكن يحصل؟</span><p>${phase.description}</p></div><div><span class="eyebrow">تحمي نفسك إزاي؟</span><p>${phase.defense}</p></div>`;
  }));
  document.querySelectorAll("[data-incident-check]").forEach(input => input.addEventListener("change", () => {
    const step = Number(input.dataset.incidentCheck);
    state.incidentChecks = input.checked
      ? [...new Set([...state.incidentChecks, step])]
      : state.incidentChecks.filter(item => item !== step);
    saveState();
    input.closest(".response-step").classList.toggle("checked", input.checked);
    const count = document.querySelector(".section-head .badge");
    if (count) count.textContent = `${state.incidentChecks.length} من ${incidentSteps.length} خطوات`;
    if (state.incidentChecks.length === incidentSteps.length) notify("عاش! راجعت كل خطوات الاستجابة.");
  }));
  document.querySelectorAll("[data-flash]").forEach(button => button.addEventListener("click", () => {
    flashIndex = (flashIndex + (button.dataset.flash === "next" ? 1 : glossary.length - 1)) % glossary.length;
    flashRevealed = false;
    render();
  }));
  const flash = document.getElementById("flashcard");
  if (flash) flash.addEventListener("click", () => { flashRevealed = !flashRevealed; render(); });
  const termForm = document.getElementById("terminal-form");
  if (termForm) termForm.addEventListener("submit", runTerminalCommand);
  if (openLesson) {
    const lessonElement = document.getElementById(`lesson-${openLesson}`);
    if (lessonElement) lessonElement.scrollIntoView({ block: "center" });
  }
}
function renderPathsIntoApp(pathId) {
  activePath = pathId;
  document.getElementById("app").innerHTML = renderPaths(pathId);
  document.querySelectorAll(".nav-link").forEach(button => button.classList.toggle("active", button.dataset.view === "paths"));
  bindViewEvents();
}
function answerQuiz(button) {
  const id = button.dataset.lesson;
  const lesson = allLessons().find(item => item.id === id);
  const correct = Number(button.dataset.answer) === lesson.answer;
  state.scores[id] = correct;
  saveState();
  document.querySelectorAll(`[data-quiz="${id}"] .quiz-option`).forEach(option => {
    option.disabled = true;
    if (Number(option.dataset.answer) === lesson.answer) option.classList.add("correct");
    else if (option === button) option.classList.add("wrong");
  });
  const feedback = document.getElementById(`feedback-${id}`);
  feedback.innerHTML = `${correct ? "مظبوط! " : "مش دي الإجابة، بص على التفسير: "} ${lesson.explanation}`;
  if (correct) notify("عاش! إجابتك صح.");
}
function completeLesson(id) {
  if (!state.completed.includes(id)) {
    state.completed.push(id);
    saveState();
    notify("اتسجل إن الدرس خلص. عاش!");
  }
  render();
}
function answerLab(button) {
  const lab = labs.find(item => item.id === button.dataset.labId);
  const chosen = Number(button.dataset.choice);
  document.querySelectorAll(`[data-lab="${lab.id}"] .choice-button`).forEach(option => {
    option.disabled = true;
    if (Number(option.dataset.choice) === lab.answer) option.classList.add("correct");
    else if (option === button && chosen !== lab.answer) option.classList.add("wrong");
  });
  const correct = chosen === lab.answer;
  document.getElementById(`lab-feedback-${lab.id}`).textContent = `${correct ? "مظبوط. " : "بص على البيانات وجرب تفهمها تاني. "}${lab.explanation}`;
  if (correct && !state.labs.includes(lab.id)) {
    state.labs.push(lab.id);
    saveState();
    notify("خلصت التدريب وخدت إنجاز!");
  }
}
function showLabMessage(id, message) {
  document.getElementById(`lab-feedback-${id}`).textContent = message;
}
function pathForLesson(id) { return paths.find(path => id.startsWith(`${path.id}-`)); }
function terminalPath(path = "") {
  const cwd = state.terminal.cwd;
  if (!path || path === ".") return cwd;
  if (path === "~") return "/home/learner";
  if (path.startsWith("/")) return normalizePath(path);
  return normalizePath(`${cwd}/${path}`);
}
function normalizePath(path) {
  const parts = [];
  path.split("/").forEach(part => { if (!part || part === ".") return; if (part === "..") parts.pop(); else parts.push(part); });
  return `/${parts.join("/")}`;
}
function terminalFiles() {
  return state.terminal.files || {
    "/home/learner": { type: "dir", children: ["notes.txt", "logs", "projects"] },
    "/home/learner/notes.txt": { type: "file", content: "ملاحظة: تعلّم بأمان وبإذن صريح.\nابدأ بفهم الشبكات ولينكس." },
    "/home/learner/logs": { type: "dir", children: ["system.log"] },
    "/home/learner/logs/system.log": { type: "file", content: "09:00 service started\n09:05 login failed user=demo\n09:06 login success user=learner" },
    "/home/learner/projects": { type: "dir", children: [] }
  };
}
function runTerminalCommand(event) {
  event.preventDefault();
  const input = document.getElementById("terminal-input");
  const output = document.getElementById("terminal-output");
  const raw = input.value.trim();
  if (!raw) return;
  const parts = raw.match(/"[^"]*"|'[^']*'|\S+/g) || [];
  const command = parts.shift().toLowerCase();
  const args = parts.map(arg => arg.replace(/^['"]|['"]$/g, ""));
  let result = "";
  const files = terminalFiles();
  const cwd = state.terminal.cwd;
  const targetArg = args[0] || "";
  const target = terminalPath(targetArg);
  const entry = files[target];
  switch (command) {
    case "help": result = "الأوامر المتاحة: pwd, ls, cd, cat, mkdir, touch, cp, mv, grep, find, chmod, ps, clear, help\nهذه بيئة افتراضية محدودة ولا تنفذ أوامر النظام."; break;
    case "pwd": result = cwd; break;
    case "ls": {
      const dir = files[targetArg ? target : cwd];
      result = dir && dir.type === "dir" ? (dir.children.join("  ") || "(المجلد فارغ)") : "المسار غير موجود أو ليس مجلدًا.";
      break;
    }
    case "cd": {
      const next = terminalPath(targetArg || "~");
      if (files[next]?.type === "dir") { state.terminal.cwd = next; saveState(); result = ""; }
      else result = "المجلد غير موجود في المحاكاة.";
      break;
    }
    case "cat": result = entry && entry.type === "file" ? entry.content : "الملف غير موجود في المحاكاة."; break;
    case "mkdir": {
      if (!targetArg) { result = "اكتب اسم مجلد افتراضي."; break; }
      if (files[target]) { result = "هذا الاسم موجود بالفعل."; break; }
      files[target] = { type: "dir", children: [] };
      if (files[cwd]?.type === "dir") files[cwd].children.push(target.split("/").pop());
      result = `أُنشئ المجلد الافتراضي: ${targetArg}`;
      break;
    }
    case "touch": {
      if (!targetArg) { result = "اكتب اسم ملف افتراضي."; break; }
      if (files[target]) { result = "الملف موجود بالفعل."; break; }
      files[target] = { type: "file", content: "" };
      if (files[cwd]?.type === "dir") files[cwd].children.push(target.split("/").pop());
      result = `أُنشئ الملف الافتراضي: ${targetArg}`;
      break;
    }
    case "cp":
    case "mv": {
      if (args.length < 2) { result = `الاستخدام الافتراضي: ${command} المصدر الوجهة`; break; }
      const source = terminalPath(args[0]), dest = terminalPath(args[1]);
      if (!files[source]) result = "المصدر غير موجود في المحاكاة.";
      else if (files[source].type !== "file") result = "يدعم هذا المحاكي نسخ ونقل الملفات الوهمية فقط.";
      else if (files[dest]) result = "الوجهة موجودة بالفعل.";
      else {
        files[dest] = { ...files[source] };
        if (files[command === "mv" ? source : dest]?.type === "file") {
          const parent = `/${dest.split("/").slice(1, -1).join("/")}`;
          if (files[parent]?.type === "dir") files[parent].children.push(dest.split("/").pop());
        }
        if (command === "mv") {
          delete files[source];
          const parent = `/${source.split("/").slice(1, -1).join("/")}`;
          if (files[parent]?.type === "dir") files[parent].children = files[parent].children.filter(name => name !== source.split("/").pop());
        }
        result = `${command === "cp" ? "نُسخ" : "نُقل"} الملف الافتراضي.`;
      }
      break;
    }
    case "grep": {
      if (args.length < 2) { result = "الاستخدام: grep كلمة file"; break; }
      const file = files[terminalPath(args[1])];
      result = file?.type === "file" ? file.content.split("\n").filter(line => line.toLowerCase().includes(args[0].toLowerCase())).join("\n") || "لا توجد نتائج." : "الملف غير موجود في المحاكاة.";
      break;
    }
    case "find": {
      const base = terminalPath(args[0] || ".");
      const matches = Object.keys(files).filter(name => name === base || name.startsWith(`${base}/`));
      result = matches.length ? matches.join("\n") : "لا توجد نتائج في المحاكاة.";
      break;
    }
    case "chmod": result = "في هذا الدرس، لا يغيّر المحاكي صلاحيات ملفات حقيقية. تذكّر مبدأ أقل صلاحية."; break;
    case "ps": result = "PID  PROCESS\n101  learner-shell (محاكاة)\n102  lesson-view (محاكاة)"; break;
    case "clear": output.innerHTML = ""; input.value = ""; return;
    default: result = `الأمر "${command}" غير متاح في المحاكي. اكتب help.`;
  }
  state.terminal.files = files;
  saveState();
  const row = document.createElement("div");
  row.innerHTML = `<div class="terminal-line">taha@safe-lab:${escapeHtml(cwd)}$ ${escapeHtml(raw)}</div>${result ? `<div>${escapeHtml(result)}</div>` : ""}`;
  output.appendChild(row);
  output.scrollTop = output.scrollHeight;
  input.value = "";
  document.getElementById("terminal-prompt").textContent = `taha@safe-lab:${state.terminal.cwd.replace("/home/learner", "~")}$`;
}
function doSearch(query) {
  const q = query.trim().toLowerCase();
  const old = document.getElementById("search-results");
  if (old) old.remove();
  if (!q) return;
  const results = [];
  allLessons().forEach(lesson => {
    const text = `${lesson.title} ${lesson.objective} ${lesson.body} ${lesson.pathTitle}`;
    if (text.toLowerCase().includes(q)) results.push({ title: `${lesson.title} · ${lesson.pathTitle}`, action: () => { activeView = "paths"; openLesson = lesson.id; renderPathsIntoApp(lesson.pathId); } });
  });
  glossary.forEach(item => { if (item.join(" ").toLowerCase().includes(q)) results.push({ title: `${item[0]} (${item[1]}) — ${item[2]}`, action: () => { activeView = "glossary"; render(); } }); });
  tools.forEach(tool => { if (`${tool.name} ${tool.purpose}`.toLowerCase().includes(q)) results.push({ title: `${tool.name} — ${tool.purpose}`, action: () => { activeView = "tools"; render(); } }); });
  if (["اختراق", "اتخترق", "اتسرق", "تأمين", "حماية"].some(word => q.includes(word))) {
    results.push({ title: "لو حصل اختراق — خطوات التأمين والاستجابة", action: () => { activeView = "incident"; render(); } });
  }
  const container = document.createElement("section");
  container.id = "search-results";
  container.className = "panel search-results";
  container.innerHTML = `<div class="section-head" style="margin-top:0"><h2>لقيت إيه عن «${escapeHtml(query)}»؟</h2><button class="button small ghost" id="close-search">اقفل</button></div>${results.length ? results.slice(0, 12).map((result, index) => `<button class="search-result" data-result="${index}">${escapeHtml(result.title)}</button>`).join("") : `<div class="empty-state">ملقتش نتيجة. جرّب كلمة زي «لينكس» أو «DNS».</div>`}`;
  document.getElementById("app").prepend(container);
  container.querySelector("#close-search").addEventListener("click", () => container.remove());
  container.querySelectorAll("[data-result]").forEach(button => button.addEventListener("click", () => results[Number(button.dataset.result)].action()));
}
document.querySelectorAll(".nav-link, [data-view-link]").forEach(button => button.addEventListener("click", event => {
  event.preventDefault();
  activeView = button.dataset.view || button.dataset.viewLink;
  activePath = "";
  openLesson = "";
  document.getElementById("search").value = "";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}));
document.getElementById("theme-toggle").addEventListener("click", () => {
  const searchQuery = document.getElementById("search").value;
  state.theme = state.theme === "dark" ? "light" : "dark";
  saveState();
  render();
  if (searchQuery.trim()) doSearch(searchQuery);
});
document.getElementById("search").addEventListener("input", event => doSearch(event.target.value));
render();
