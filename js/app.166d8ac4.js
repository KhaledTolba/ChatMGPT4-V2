(function(){"use strict";var e={2590:function(e,t,n){var s=n(9242),o=n(3396);function r(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var a=n(89);const i={},l=(0,a.Z)(i,[["render",r]]);var c=l,d=n(2483);const u={class:"h-screen overflow-hidden flex items-center justify-center"};function h(e,t,n,s,r,a){const i=(0,o.up)("appChatBot");return(0,o.wg)(),(0,o.iD)("section",u,[(0,o.Wm)(i)])}var m=n(7139);const p={class:"bg-backG-light flex-1 p:2 md:px-36 justify-between flex flex-col h-screen"},g={class:"sticky z-30 flex py-3 md:py-5 border-b-2 border-backG"},f={class:"ml-5 md:ml-10"},y={class:"mr-6 md:mr-10 absolute right-0"},b=(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"},null,-1),x=[b],v={id:"scroller",class:"flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"},w={key:0,class:"sticky z-30 bg-backG-light px-4 pt-4 mb-2 sm:mb-0 sm:pb-4 pb-2"};function A(e,t,n,s,r,a){const i=(0,o.up)("popup"),l=(0,o.up)("chat"),c=(0,o.up)("send");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.$store.state.Info?((0,o.wg)(),(0,o.j4)(i,{key:0})):(0,o.kq)("",!0),(0,o._)("div",p,[(0,o._)("div",g,[(0,o._)("div",f,[(0,o._)("h1",{class:(0,m.C_)(["text-center text-3xl font-bold","ans"==e.$store.state.appMode?"text-gray-900":"sorry"==e.$store.state.appMode?"text-ballon-dark":"text-coach-dark"])}," Chat MGPT4 ",2)]),(0,o._)("div",y,[((0,o.wg)(),(0,o.iD)("svg",{onClick:t[0]||(t[0]=(...e)=>s.showInfo&&s.showInfo(...e)),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:(0,m.C_)(["w-8 md-12 hover:cursor-pointer","ans"==e.$store.state.appMode?"text-gray-900  hover:text-gray-700":"sorry"==e.$store.state.appMode?"text-ballon-dark  hover:text-ballon":"text-coach-dark  hover:text-coach"])},x,2))])]),(0,o._)("div",v,[(0,o.Wm)(l)]),e.$store.state.gotYou?((0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(c)])):(0,o.kq)("",!0)])],64)}const k=["src"];function M(e,t,s,r,a,i){return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.allChats,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.msg,class:""},[(0,o._)("div",{class:(0,m.C_)(["flex items-end pt-1 pb-1","hum"==t.id?"justify-end":""])},["hum"!=t.id?((0,o.wg)(),(0,o.iD)("img",{key:0,src:"ans"==e.$store.state.appMode?n(3953):"sorry"==e.$store.state.appMode?n(6440):n(9240),class:(0,m.C_)("ans"==e.$store.state.appMode?"h-10 sm:h-12":"sorry"==e.$store.state.appMode?"h-12 sm:h-16":"h-9 md:h-14")},null,10,k)):(0,o.kq)("",!0),(0,o._)("div",{class:(0,m.C_)(["flex flex-col space-y-2 max-w-xs text-xs md:text-base md:max-w-lg mx-2 order-1","hum"==t.id?"items-end":"items-start"])},[(0,o._)("div",null,[(0,o._)("div",{style:(0,m.j5)("en"==e.$store.state.lang?"text-align: left;":"text-align: right;"),class:(0,m.C_)(["w-full font-medium px-4 py-2 rounded-2xl inline-block whitespace-pre-wrap","hum"==t.id?"ans"==e.$store.state.appMode?"bg-gray-800 text-gray-100 rounded-br-none":"sorry"==e.$store.state.appMode?"bg-gray-800 text-white rounded-br-none":"bg-gray-800 text-white   rounded-br-none":"ans"==e.$store.state.appMode?" bg-slate-300 text-gray-900   rounded-bl-none":"sorry"==e.$store.state.appMode?"text-gray-800 bg-green-300 rounded-bl-none":"text-gray-800 bg-red-300   rounded-bl-none"])},(0,m.zw)(t.msg),7)])],2)],2)])))),128)}var Q=n(65),E={name:"chat",setup(){const e=(0,Q.oR)(),t=(0,o.Fl)((()=>e.state.chats)),n=()=>{e.dispatch("scrollEnd")};return(0,o.ic)((()=>{n()})),{allChats:t,scrolling:n}}};const _=(0,a.Z)(E,[["render",M]]);var C=_;const I={class:"relative z-40","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},O=(0,o._)("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),N={class:"fixed inset-0 z-10 overflow-y-auto"},$={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},j={class:"relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},H=(0,o.uE)('<div class="bg-white px-4 sm:p-6 sm:pb-4"><div class="sm:flex sm:items-start"><div class="mt-3 sm:mt-0 sm:ml-4"><div class="mb-4"><p class="mt-6 text-base text-center font-medium text-gray-600"> You can change mode answer through the menu next to the chat box </p><br><ul class="max-w-md space-y-1 list-disc list-inside text-left text-sm text-gray-500"><p class="text-left font-bold text-sm text-gray-500">important clarification</p><li> The chatbot answers your questions almost randomly </li><li> I am not responsible for any answers that might hurt your feelings </li><li> The app is just for fun, so don&#39;t take it seriously </li><li> No data is collected and all commands are run on your browser </li><li><span class="text-red-400 uppercase">Caution</span> the chat will be deleted when this page is reloaded </li></ul><br><p class="border-t-2 border-gray-200 py-2"></p><p class="text-lg font-medium text-center text-gray-600"> بإمكانك التغيير إلى نماذج أخرى من خلال القائمة بجانب خانة الدردشة بالأسفل </p><br><ul dir="rtl" class="list-disc list-inside text-right text-sm text-gray-500"><p class="text-right font-bold text-sm text-gray-500">توضيح هام</p><li class=""> الشات بوت يجيب على أسئلتك بشكل شبه عشوائي </li><li> أنا غير مسئول عن أي إجابة لم تعجبك </li><li> التطبيق ما هو إلا مجرد أداة للتسلية، فلا تأخذ اجابته على محمل الجدية </li><li> لا يتم جمع أي بيانات وكل الأوامر تتم على متصفحك </li><li><span class="text-base text-red-400">انتبه</span> كل رسائلك ستختفي عند إعادة تحميل الصفحة </li></ul></div></div></div></div>',1),D={class:"bg-gray-50 px-4 py-3 sm:flex sm:justify-center sm:px-6"};function T(e,t,n,s,r,a){return(0,o.wg)(),(0,o.iD)("div",I,[O,(0,o._)("div",N,[(0,o._)("div",$,[(0,o._)("div",j,[H,(0,o._)("div",D,[(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>s.hideInfo&&s.hideInfo(...e)),type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"},"Understand - أتفهم ذلك")])])])])])}var B={name:"popup",components:{},setup(){const e=(0,Q.oR)(),t=()=>{e.dispatch("hideInfo",!1)};return{hideInfo:t}}};const S=(0,a.Z)(B,[["render",T]]);var Y=S;const z={class:"relative flex flex-col"},F={class:"absolute inset-y-0 flex items-center"},G={class:"absolute right-0 items-center inset-y-0 sm:flex"},L=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-7 w-7 ml-2 transform rotate-90"},[(0,o._)("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})],-1),W=[L];function K(e,t,n,r,a,i){const l=(0,o.up)("SendDropDown");return(0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("span",F,[(0,o.Wm)(l)]),(0,o.wy)((0,o._)("input",{dir:"auto",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.message=e),placeholder:"Ask . . .",class:"w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-300 pl-16 sm:pl-28 pr-16 rounded-r-2xl rounded-l-3xl py-3",onKeydown:t[1]||(t[1]=(0,s.D2)((0,s.iM)(((...e)=>r.sending&&r.sending(...e)),["prevent"]),["enter"]))},null,544),[[s.nr,r.message]]),(0,o._)("div",G,[(0,o._)("button",{onClick:t[2]||(t[2]=(0,s.iM)(((...e)=>r.sending&&r.sending(...e)),["prevent"])),type:"button",class:(0,m.C_)(["inline-flex items-center justify-center rounded-full px-3 py-3 transition duration-500 ease-in-out bg-none focus:outline-none","ans"==e.$store.state.appMode?"text-gray-900  hover:text-gray-700":"sorry"==e.$store.state.appMode?"text-ballon-dark  hover:text-ballon":"text-coach-dark  hover:text-coach"])},W,2)])])}var P=n(4870);const R={id:"app",class:"flex items-center justify-center"},Z={class:"relative flex-col-reverse text-lg"},q=(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1),V=[q],U={class:"pl-2 hidden sm:block"},J={class:"w-24 absolute left-0 bottom-0 right-0 mb-14 bg-white divide-y rounded-lg shadow-lg overflow-hidden"};function X(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",R,[(0,o._)("div",Z,[(0,o._)("button",{class:(0,m.C_)(["flex items-center justify-between px-3 py-3 text-bas w-fit font-medium rounded-full","ans"==e.$store.state.appMode?"bg-gray-900  text-white":"sorry"==e.$store.state.appMode?"bg-ballon-dark text-white":"bg-coach-dark text-white"]),onClick:t[0]||(t[0]=e=>a.isOptionsExpanded=!a.isOptionsExpanded),onBlur:t[1]||(t[1]=e=>a.isOptionsExpanded=!1)},[((0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:(0,m.C_)(["w-6 h-6 transform transition-transform duration-200 ease-in-out",a.isOptionsExpanded?"rotate-180":"rotate-0"])},V,2)),(0,o._)("span",U,(0,m.zw)(a.selectedOption),1)],34),(0,o.Wm)(s.uT,{"enter-active-class":"transform transition duration-500 ease-custom","enter-class":"translate-y-1/2 scale-y-0 opacity-0","enter-to-class":"translate-y-0 scale-y-100 opacity-100","leave-active-class":"transform transition duration-300 ease-custom","leave-class":"translate-y-0 scale-y-100 opacity-100","leave-to-class":"translate-y-1/2 scale-y-0 opacity-0"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("ul",J,[(0,o._)("li",{class:(0,m.C_)(["px-3 py-2 transition-colors duration-300","cheer"==e.$store.state.appMode?" bg-coach-dark text-coach-tlight":"sorry"==e.$store.state.appMode?"bg-green-100 text-gray-600 hover:bg-ballon-light hover:text-gray-900 hover:cursor-pointer":" bg-gray-100 text-gray-700 hover:bg-gray-400 hover:text-gray-900 hover:cursor-pointer"]),onMousedown:t[2]||(t[2]=(0,s.iM)((e=>i.setOption("تشجيع")),["prevent"]))}," شجعني ",34),(0,o._)("li",{class:(0,m.C_)(["px-3 py-2 transition-colors duration-300","sorry"==e.$store.state.appMode?"bg-ballon-dark text-white":"ans"==e.$store.state.appMode?"bg-gray-100 text-gray-700 hover:bg-gray-400 hover:text-gray-900 hover:cursor-pointer":" bg-red-100 text-gray-700 hover:bg-coach hover:text-coach-tlight hover:cursor-pointer"]),onMousedown:t[3]||(t[3]=(0,s.iM)((e=>i.setOption("معلشة")),["prevent"]))}," معلشني ",34),(0,o._)("li",{class:(0,m.C_)(["px-3 py-2 transition-colors duration-300","ans"==e.$store.state.appMode?"bg-gray-900 text-white":"sorry"==e.$store.state.appMode?"bg-green-100 text-gray-600 hover:bg-ballon-light hover:text-gray-900 hover:cursor-pointer":" bg-red-100 text-gray-700 hover:bg-coach hover:text-coach-tlight hover:cursor-pointer"]),onMousedown:t[4]||(t[4]=(0,s.iM)((e=>i.setOption("اسئلني")),["prevent"]))}," جاوبني ",34)],512),[[s.F8,a.isOptionsExpanded]])])),_:1})])])}var ee={data(){return{isOptionsExpanded:!1,selectedOption:"mode"}},methods:{setOption(e){"اسئلني"==e?(this.checkAns(),this.selectedOption="mode",this.isOptionsExpanded=!1):"معلشة"==e?(this.checkSorry(),this.selectedOption=e,this.isOptionsExpanded=!1):"تشجيع"==e&&(this.checkCheer(),this.selectedOption=e,this.isOptionsExpanded=!1)}},setup(){const e=(0,Q.oR)(),t=()=>{e.dispatch("checking","ans")},n=()=>{e.dispatch("checking","sorry")},s=()=>{e.dispatch("checking","cheer")};return{checkCheer:s,checkSorry:n,checkAns:t}}};const te=(0,a.Z)(ee,[["render",X]]);var ne=te,se={name:"send",components:{SendDropDown:ne},setup(){const e=(0,Q.oR)(),t=(0,P.iH)(""),n=()=>{e.dispatch("sendMessage",t)};return{sending:n,message:t}}};const oe=(0,a.Z)(se,[["render",K]]);var re=oe,ae={name:"appChatBot",components:{chat:C,popup:Y,send:re},setup(){const e=(0,Q.oR)(),t=(0,P.iH)(""),n=()=>{e.dispatch("showInfo",!0)};return{showInfo:n,Info:t}}};const ie=(0,a.Z)(ae,[["render",A]]);var le=ie,ce={components:{appChatBot:le}};const de=(0,a.Z)(ce,[["render",h]]);var ue=de;const he=[{path:"/",name:"home",component:ue}],me=(0,d.p7)({history:(0,d.r5)(),routes:he});var pe=me,ge=(n(7658),(0,Q.MT)({state:{counter:0,isHeller:"false",msgLnth:0,lang:"en",gotYou:!0,Info:!0,greetingEn:[{Q:"hi",Ans:"Hi"},{Q:"hey",Ans:"Hi"},{Q:"highfive",Ans:"🖐"},{Q:"goodafternoon",Ans:"Good afternoon"},{Q:"goodevening",Ans:"Good evening"},{Q:"welcome",Ans:"Hi"},{Q:"thankyou",Ans:"you're welcome"},{Q:"tahnks",Ans:"you're welcome"},{Q:"hello",Ans:"Hello"},{Q:"iloveyou",Ans:"I love you too ❤️"},{Q:"iloveu",Ans:"I love you too ❤️"}],greetingAr:[{Q:"منأنت",Ans:"أنا بوت"},{Q:"منانت",Ans:"أنا بوت"},{Q:"انتمين",Ans:"أنا بوت"},{Q:"أنتمين",Ans:"أنا بوت"},{Q:"اسمكايه",Ans:"أنا بوت"},{Q:"مينمعايا",Ans:"أنا بوت"},{Q:"مينحضرتك",Ans:"أنا بوت"},{Q:"اناسعدالداليانتمين",Ans:"أنا بوت"},{Q:"عرفنيبنفسك",Ans:"أنا بوت"},{Q:"أهلا",Ans:"أهلا"},{Q:"هاي",Ans:"هاي"},{Q:"أناسعدالداليانتمين",Ans:"أنا محدش ادالي حاجة"},{Q:"السلامعليكم",Ans:"وعليكم السلام"},{Q:"صباحالخير",Ans:"صباح النور"},{Q:"ازيك",Ans:"كويس الحمد الله"},{Q:"هلأنتبخير",Ans:"نعم أنا بخير"},{Q:"كيفالحال",Ans:"بخير الحمد الله"},{Q:"السلام عليكم ورحمة الله",Ans:"وعليكم السلام"},{Q:"السلام عليكم ورحمة الله وبركته",Ans:"وعليكم السلام"},{Q:"مرحبا",Ans:"أهلا"},{Q:"مرحبايابوت",Ans:"أهلا"},{Q:"ازيكيابوت",Ans:"أهلا"},{Q:"ازيكياروبوت",Ans:"أهلا"},{Q:"ازيكيابوبيرت",Ans:"ازيك ❤️ .. أنا حبيتك خلاص علشان عرفت اسمي"},{Q:"أهلابوبيرت",Ans:"ازيك ❤️ .. أنا حبيتك خلاص علشان عرفت اسمي"},{Q:"ازيكياكوتش",Ans:"أهلا"},{Q:"ازيكيابالونة",Ans:"أهلا"},{Q:"ازيكياروسو",Ans:"ازيك ❤️ .. أنا حبيتك خلاص علشان عرفت اسمي"},{Q:"أهلاروسو",Ans:"ازيك ❤️ .. أنا حبيتك خلاص علشان عرفت اسمي"},{Q:"ازيكياآلان",Ans:"ازيك ❤️ .. أنا حبيتك خلاص علشان عرفت اسمي"},{Q:"أهلاآلان",Ans:"ازيك ❤️ .. أنا حبيتك خلاص علشان عرفت اسمي"},{Q:"هالو",Ans:"هاي"},{Q:"شكرا",Ans:"العفو أي خدمة"},{Q:"ثانكس",Ans:"العفو أي خدمة"},{Q:"ثانكيو",Ans:"العفو أي خدمة"},{Q:"شكرايابوت",Ans:"العفو أي خدمة"},{Q:"شكراياسيدي",Ans:"العفو أي خدمة"},{Q:"شكراياعم",Ans:"العفو أي خدمة"},{Q:"انتكويس",Ans:"انا كويس .. بس هل أنت كويس؟ لو حاسس انك مش كويس تقدر تغير المود وامعلشك"},{Q:"عاملايه",Ans:"زي الفل"},{Q:"بحبك",Ans:"❤️ وأنا بحبك أكتر"},{Q:"أنابحبك",Ans:"❤️ وأنا بحبك أكتر"},{Q:"أناأحبك",Ans:"❤️ وأنا بحبك أكتر"}],ansHeller:[{En:"Yes, but no",Ar:"أيوة لا"},{En:"Whoops! I'm out . . .\nRun-time Error: 'error during execution of native event handler'\n\nCall someone",Ar:". . . خارج الخدمة\nRun-time Error: 'error during execution of native event handler'\n\nكلملنا حد يشوف المشكلة دي"},{En:"do you really want me to answer that?",Ar:"أنا معرفش حاجة زيي زيك .. فاكرني هجاوبك بجد؟"},{En:"Sorry, I don't know another word",Ar:"مشي نفسك بالكلمتين دول أو غير المود وامعلشك"},{En:"No, but yes",Ar:"لا أيوة"},{En:"Yes yes yes yes yes",Ar:"كفاية متصدعناش"},{En:"You got me",Ar:"صراحة النت قاطع عندي دلوقتي .. فجبتلك طريقة عمل القلقاس\n\nقم بتقشير حبة القلقاس جيدًا مع ضرورة إزالة كل النقاط البارزة السوداء من عليها\n\nابدأ بتقطيع القلقاس إلى مكعبات متوسطة ومتساوية\n\nقم بنقع القلقاس في مياه حتى يزيل المادة اللزجة من عليه\n\nيغسل تحت مياه جارية 5 مرات متتالية للتأكد من نظافته جيدًا وإزالة اللزوجة منه تمامًا\n\nقم بتصفية القلقاس في مصفاة كبيرة حتى يجف تمامًا\n\nضع لمونة كاملة معصورة عليه واتركه حتى يجف\n\nفي حلة متوسطة قم بسلق اللحم بعد أن يقطع مكعبات كبيرة ومتساوية ببصلة وتوابل وكرافس\n\nاخرج اللحم من الشوربة وضع القلقاس على الشوربة واتركه حتى ينضج جيداً لمدة ربع ساعة تقريباً\n\nقم بغسل السلق والكزبرة والشبت جيداً\n\nقم بفرم الخضراوات جيداً\n\nفي طاسة متوسطة قم بتحميص السلق بعد وضعه على الزبدة\n\nثم ضفه على القلقاس بعد أن يستوي\n\nيقدم مع الأرز الابيض أو الأرز بالشعرية والسلطة الخضراء والباذنجان المقلي والبطاطس المحمرة"},{En:"No no no no no no",Ar:"عارف الإجابة ومش هجاوبك بردو"},{En:"Don't like my answer? next time ask GPT",Ar:"مش عاجبك روح اشتكيني"},{En:"What do you want me to say? Yes or No",Ar:"طب عاوزني أقولك ايه؟ نعم ولا لا"}],ansCheer:[{En:"Keep going",Ar:"عاش استمر"},{En:"Keep up the good work",Ar:"عاش"},{En:"Keep it up",Ar:"شطور يلا روح كمل اللي وراك وبطل لعب"}],ansBigCheer:[{En:"Good job, I'm so proud of you",Ar:"عاش يا وحش، خدلك بريك وروق على نفسك"},{En:"\tIt doesn't matter how slowly you go as long as you don't stop",Ar:"عاش يبني، حتى لو خدت منك وقت كبير، المهم أنك انجزت حاجة النهاردة"},{En:"You deserve to celebrate yourself",Ar:"مبسوط بيك، أتنمى تستمر على كده علطول\nوده لايك 👍 مني ليك"}],ansSorry:[{En:"I'm sad that you are going through all this",Ar:"معلش كله هيعدي يا صاحبي"},{En:"You're not alone",Ar:"معلش انت قدها"},{En:"It's OK to not feel OK",Ar:"معلش هانت"}],ansBigSorry:[{En:"I'm here for you. Whenever you want to talk, I'll listen or reading",Ar:"معلش  كله هيعدي يا صاحبي .. حاسس أن عندك كلام كتير ومش لاقي حد تحكيله، فاحكيلي براحتك وأنا همعلشك"},{En:"I know you're strong enough to get through this",Ar:"معلش يا صاحبي حاسس ان موضوعك كبير، بس كل اللي عندي إني أقولك معلش ..أو ممكن تبقى محتاج تحكي مع شخص حقيقي أو تروح لمتخصص"},{En:"I can't imagine what you're feeling, I can't imagine anything in general, but I'm here for you if you need me.\nBut I think you have to talk to a real person or talk to a therapist",Ar:"معلش هي فترة وهتعدي ان شاء الله .. ولو حاسس أنك لسه مش كويس بعد المعلشة ممكن تبقى محتاج تحكي مع شخص حقيقي أو تروح لمتخصص"}],appMode:"ans",newMessage:"",lastMessage:"",scrollerEl:null,chats:[{id:"bot",msg:"Ask me question . . ."}],randomNumber:0},mutations:{addMessage(e,t){e.newMessage=t,""!==e.newMessage.replace(/[\s]/gi,"")&&(this.commit("checkLang"),this.commit("checkLnth"),this.commit("puchAns",{id:"hum",msg:e.newMessage.replace(/^\s[^\*]\s+/gi,"")}),this.commit("addAnswer"),e.newMessage="")},checkLang(e){e.lang=""==e.newMessage.replace(/[^\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]/gi,"")?"en":"ar"},checkLnth(e){e.msgLnth=e.newMessage.replace(/[^\w\u0600-\u06ff]|\u061F/gi,"").length},addAnswer(e){let t="ar"==e.lang?e.greetingAr:e.greetingEn,n=!0;for(let s=0;s<t.length;s++)if(e.newMessage.replace(/[^\w\u0600-\u06ff]|\u061F/gi,"").toLowerCase()==t[s].Q){if(0==s|1==s|2==s|3==s|4==s|5==s|6==s|7==s|8==s){let t="ans"==e.appMode?"أنا بوبيرت .. عارف إجابة أي سؤال هيخطر ع بالك بس مش هجاوبك بردو":"sorry"==e.appMode?"أنا آلان .. همعلشك لحد ما تبقى كويس":"أنا روسو .. وكفاية لعب وقوم خلص اللي وراك";this.commit("greeting",t),n=!1;break}this.commit("greeting",t[s].Ans),n=!1;break}n&&this.commit("checkMode")},greeting(e,t){this.commit("puchAns",{id:"bot",msg:t})},checkMode(e){"ans"==e.appMode?this.commit("checkAns"):"cheer"==e.appMode?this.commit("checkCheer"):"sorry"==e.appMode&&this.commit("checkSorry")},checkAns(e){this.commit("isHellerAsker"),"true"==e.isHeller?this.commit("hellerAns"):(e.lastMessage=e.newMessage,e.msgLnth%2==0?this.commit("puchAns",{id:"bot",msg:"en"==e.lang?"Yes":"نعم"}):this.commit("puchAns",{id:"bot",msg:"en"==e.lang?"No":"لا"}))},isHellerAsker(e){e.lastMessage==e.newMessage?e.counter++:e.counter=0,e.counter>=3?e.isHeller="true":e.isHeller="false"},hellerAns(e){this.commit("randomNum",10),1==e.randomNumber?(this.commit("puchAns",{id:"bot",msg:"en"==e.lang?e.ansHeller[e.randomNumber].En:e.ansHeller[e.randomNumber].Ar}),e.gotYou=!1,setTimeout((()=>{e.gotYou=!0,e.chats.push({id:"bot",msg:"ar"==e.lang?"🤣 أنا زي الفل .. بهزر معاك":"I got you 🤣"})}),1e4)):this.commit("puchAns",{id:"bot",msg:"en"==e.lang?e.ansHeller[e.randomNumber].En:e.ansHeller[e.randomNumber].Ar})},checkCheer(e){e.newMessage.replace(/[^\s]/gi,"").length>15?(this.commit("randomNum",3),this.commit("puchAns",{id:"bot",msg:"en"==e.lang?e.ansBigCheer[e.randomNumber].En:e.ansBigCheer[e.randomNumber].Ar})):(this.commit("randomNum",3),this.commit("puchAns",{id:"bot",msg:"en"==e.lang?e.ansCheer[e.randomNumber].En:e.ansCheer[e.randomNumber].Ar}))},checkSorry(e){e.newMessage.replace(/[^\s]/gi,"").length>25?(this.commit("randomNum",3),this.commit("puchAns",{id:"bot",msg:"en"==e.lang?e.ansBigSorry[e.randomNumber].En:e.ansBigSorry[e.randomNumber].Ar})):e.newMessage.replace(/[^\s]/gi,"").length>15?(this.commit("randomNum",3),this.commit("puchAns",{id:"bot",msg:"en"==e.lang?e.ansSorry[e.randomNumber].En:e.ansSorry[e.randomNumber].Ar})):this.commit("puchAns",{id:"bot",msg:"en"==e.lang?"Sorry":"معلش"})},puchAns(e,t){"bot"==t.id?setTimeout((()=>{e.chats.push(t)}),300):e.chats.push(t)},scrollToEnd(e){e.scrollerEl=document.getElementById("scroller"),e.scrollerEl.scrollTo(0,e.scrollerEl.scrollHeight)},showPopup(e,t){e.Info=t},setMode(e,t){e.appMode=t,"ans"==e.appMode?setTimeout((()=>{this.commit("puchAns",{id:"bot",msg:"Ask me question . . ."})}),400):"cheer"==e.appMode?setTimeout((()=>{this.commit("puchAns",{id:"bot",msg:"عملت ايه النهاردة؟"})}),400):"sorry"==e.appMode&&setTimeout((()=>{this.commit("puchAns",{id:"bot",msg:"ايه اللي حصل احكيلي؟"})}),400)},randomNum(e,t){e.randomNumber=Math.floor(Math.random()*t)}},actions:{sendMessage(e,t){e.commit("addMessage",t)},showInfo(e,t){e.commit("showPopup",t)},hideInfo(e,t){e.commit("showPopup",t)},checking(e,t){e.commit("setMode",t)},scrollEnd(e){e.commit("scrollToEnd")}},modules:{}}));(0,s.ri)(c).use(ge).use(pe).mount("#app")},6440:function(e,t,n){e.exports=n.p+"img/ballon.9771b4fd.png"},3953:function(e,t,n){e.exports=n.p+"img/bobert2.087994ab.png"},9240:function(e,t,n){e.exports=n.p+"img/coach.6109b61d.png"}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,s,o,r){if(!s){var a=1/0;for(d=0;d<e.length;d++){s=e[d][0],o=e[d][1],r=e[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(i=!1,r<a&&(a=r));if(i){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,r,a=s[0],i=s[1],l=s[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var d=l(n)}for(t&&t(s);c<a.length;c++)r=a[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},s=self["webpackChunkchat_mgpt4_v2"]=self["webpackChunkchat_mgpt4_v2"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(2590)}));s=n.O(s)})();
//# sourceMappingURL=app.166d8ac4.js.map