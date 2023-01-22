(function(){"use strict";var e={4971:function(e,t,n){var s=n(9242),o=n(3396);function a(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var r=n(89);const i={},l=(0,r.Z)(i,[["render",a]]);var m=l,c=n(2483);const g={class:"h-screen overflow-hidden flex items-center justify-center"};function p(e,t,n,s,a,r){const i=(0,o.up)("appChatBot");return(0,o.wg)(),(0,o.iD)("section",g,[(0,o.Wm)(i)])}var d=n(7139);const u={class:"bg-backG-light flex-1 p:2 md:px-36 justify-between flex flex-col h-screen"},h={class:"z-30 flex py-3 md:py-5 border-b-2 border-backG"},y={class:"ml-5 md:ml-10"},x={class:"mr-6 md:mr-48 absolute right-0"},b=(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"},null,-1),f=[b],A={id:"scroller",class:"flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"},w={key:0,class:"sticky bottom-0 z-30 bg-backG-light px-4 pt-4 mb-2 sm:mb-0 sm:pb-4 pb-2"};function v(e,t,n,s,a,r){const i=(0,o.up)("popup"),l=(0,o.up)("chat"),m=(0,o.up)("send");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.$store.state.Info?((0,o.wg)(),(0,o.j4)(i,{key:0})):(0,o.kq)("",!0),(0,o._)("div",u,[(0,o._)("div",h,[(0,o._)("div",y,[(0,o._)("h1",{class:(0,d.C_)(["text-center text-3xl font-bold","ans"==e.$store.state.appMode?"text-gray-900":"sorry"==e.$store.state.appMode?"text-ballon-dark":"text-coach-dark"])}," Chat MGPT4 ",2)]),(0,o._)("div",x,[((0,o.wg)(),(0,o.iD)("svg",{onClick:t[0]||(t[0]=(...e)=>s.showInfo&&s.showInfo(...e)),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:(0,d.C_)(["w-8 md-12 hover:cursor-pointer","ans"==e.$store.state.appMode?"text-gray-900  hover:text-gray-700":"sorry"==e.$store.state.appMode?"text-ballon-dark  hover:text-ballon":"cheer"==e.$store.state.appMode?"text-coach-dark  hover:text-coach":"text-playing-dark  hover:text-playing"])},f,2))])]),(0,o._)("div",A,[(0,o.Wm)(l)]),e.$store.state.gotYou?((0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(m)])):(0,o.kq)("",!0)])],64)}const M=["src"],k=["innerHTML"];function E(e,t,s,a,r,i){return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.allChats,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.msg,class:""},[(0,o._)("div",{class:(0,d.C_)(["flex items-end pt-1 pb-1","hum"==t.id?"justify-end":""])},["hum"!=t.id?((0,o.wg)(),(0,o.iD)("img",{key:0,src:"ans"==t.id?n(8580):"sorry"==t.id?n(9991):"cheer"==t.id?n(9259):n(5443),class:(0,d.C_)("ans"==t.id?"h-10 sm:h-12 md:h-14":"sorry"==t.id?"h-12 sm:h-14 md:h-16":(t.id,"h-10 sm:h-12 md:h-14"))},null,10,M)):(0,o.kq)("",!0),(0,o._)("div",{class:(0,d.C_)(["flex flex-col space-y-2 max-w-xs text-xs md:text-base md:max-w-lg mx-2 order-1","hum"==t.id?"items-end":"items-start"])},[(0,o._)("div",null,[(0,o._)("div",{dir:"auto",style:(0,d.j5)("en"==e.$store.state.lang?"text-align: left;":"text-align: right;"),class:(0,d.C_)(["w-full font-medium px-4 py-2 rounded-2xl inline-block whitespace-pre-wrap","hum"==t.id?"ans"==t.id?"bg-gray-800 text-gray-100 rounded-br-none":"sorry"==t.id?"bg-gray-800 text-white rounded-br-none":(t.id,"bg-gray-800 text-white   rounded-br-none"):"ans"==t.id?" bg-slate-300 text-gray-900   rounded-bl-none":"sorry"==t.id?"text-gray-800 bg-green-300 rounded-bl-none":"cheer"==t.id?"text-gray-800 bg-red-300   rounded-bl-none":"text-gray-800 bg-playing-light   rounded-bl-none"]),innerHTML:t.msg},null,14,k)])],2)],2)])))),128)}var N=n(65),P={name:"chat",setup(){const e=(0,N.oR)(),t=(0,o.Fl)((()=>e.state.chats)),n=()=>{e.dispatch("scrollEnd")};return(0,o.ic)((()=>{n()})),{allChats:t,scrolling:n}}};const C=(0,r.Z)(P,[["render",E]]);var R=C,_=n.p+"img/bobertx200.ca6878a3.png";const I={class:"relative z-40","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},O=(0,o._)("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),B={class:"fixed inset-0 z-10 overflow-y-auto"},T={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},H={class:"relative transform overflow-hidden rounded-lg bg-backG shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},$=(0,o.uE)('<div class="pb-4 px-4"><div class="sm:flex sm:items-start"><div class="mt-4 sm:mt-0 sm:ml-4"><p class="mt-6 mb-4 sm:mb-0 text-lg text-center font-medium text-gray-600"> You can change mode answer through the menu in the bottom </p><span class="hidden sm:block"><div class="flex flex-row mt-5 ml-6 mr-6"><img src="'+_+'" class="h-10 sm:h-12 md:h-14"><div class="items-start flex flex-col space-y-2 max-w-xs text-xs md:text-base md:max-w-lg mx-2 order-1"><div><div class="bg-bobert rounded-tl-none w-full font-medium px-4 py-2 rounded-2xl inline-block whitespace-pre-wrap"><ul class="max-w-md space-y-1 list-disc list-inside text-left text-sm text-gray-100"><p class="text-left font-semibold text-sm text-gray-100">Hi, I&#39;m Bobert :)</p><p class="text-left font-semibold text-sm text-gray-100">important clarification for you:</p><li> The chatbot answers your questions almost randomly </li><li> The app is just for fun, so don&#39;t take it seriously </li><li> No data is collected and all commands are run on your browser </li><li><span class="text-red-400 uppercase">Caution</span> the chat will be deleted when this page is reloaded </li></ul></div></div></div></div><br></span><p class="border-t-2 border-gray-200 py-2"></p><p class="text-lg font-medium text-center text-gray-600"> تقدر تغير مود التطبيق من القائمة بالأسفل جانب خانة الدردشة </p><div class="flex flex-row-reverse mt-5 mr-6"><div dir="rtl" class="items-end flex flex-col space-y-2 max-w-xs text-xs md:text-base md:max-w-lg mx-2 order-1"><div class="bg-bobert rounded-tr-none w-full font-medium px-4 py-2 rounded-2xl inline-block whitespace-pre-wrap"><ul dir="rtl" class="list-disc list-inside text-right text-sm text-gray-100"><p class="text-right font-semibold text-sm text-gray-100">أهلا، أنا بوبيرت</p><p class="text-right font-semibold text-sm text-gray-100">هوضحلك ازاي أنا شغال:</p><li class=""> الشات بوت بيجاوب على أسئلتك بشكل شبه عشوائي </li><li> التطبيق مجرد أداة للتسلية، فلا تأخذ اجابته على محمل الجدية </li><li> لا يتم جمع أي بيانات وكل الأوامر تتم على متصفحك </li><li><span class="text-base text-red-400">انتبه</span> كل رسائلك ستختفي عند إعادة تحميل الصفحة </li></ul></div></div><img src="'+_+'" class="h-11 sm:h-12 md:h-14"></div></div></div></div>',1),j={class:"px-4 py-3 sm:flex sm:justify-center sm:px-6"};function S(e,t,n,s,a,r){return(0,o.wg)(),(0,o.iD)("div",I,[O,(0,o._)("div",B,[(0,o._)("div",T,[(0,o._)("div",H,[$,(0,o._)("div",j,[(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>s.hideInfo&&s.hideInfo(...e)),type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-400 bg-gray-300 px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}," Understand - أتفهم ذلك ")])])])])])}var G={name:"popup",components:{},setup(){const e=(0,N.oR)(),t=()=>{e.dispatch("hideInfo",!1)};return{hideInfo:t}}};const L=(0,r.Z)(G,[["render",S]]);var D=L;const W={class:"relative flex flex-col"},Y={class:"absolute inset-y-0 flex items-center"},q={class:"absolute right-0 items-center inset-y-0 sm:flex"},z=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-7 w-7 ml-2 transform rotate-90"},[(0,o._)("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})],-1),K=[z];function Z(e,t,n,a,r,i){const l=(0,o.up)("SendDropDown");return(0,o.wg)(),(0,o.iD)("div",W,[(0,o._)("span",Y,[(0,o.Wm)(l)]),(0,o.wy)((0,o._)("input",{dir:"auto",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>a.message=e),placeholder:"Ask . . .",class:"w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-300 pl-16 sm:pl-28 pr-16 rounded-r-2xl rounded-l-3xl py-3",onKeydown:t[1]||(t[1]=(0,s.D2)((0,s.iM)(((...e)=>a.sending&&a.sending(...e)),["prevent"]),["enter"]))},null,544),[[s.nr,a.message]]),(0,o._)("div",q,[(0,o._)("button",{onClick:t[2]||(t[2]=(0,s.iM)(((...e)=>a.sending&&a.sending(...e)),["prevent"])),type:"button",class:(0,d.C_)(["inline-flex items-center justify-center rounded-full px-3 py-3 transition duration-500 ease-in-out bg-none focus:outline-none","ans"==e.$store.state.appMode?"text-gray-900  hover:text-gray-700":"sorry"==e.$store.state.appMode?"text-ballon-dark  hover:text-ballon":"cheer"==e.$store.state.appMode?"text-coach-dark  hover:text-coach":"text-playing-dark  hover:text-playing"])},K,2)])])}var F=n(4870);const V={id:"app",class:"flex items-center justify-center"},U={class:"relative flex-col-reverse text-lg"},J=(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1),Q=[J],X={class:"pl-2 hidden sm:block"},ee={class:"w-24 absolute left-0 bottom-0 right-0 mb-14 bg-white divide-y rounded-lg shadow-lg overflow-hidden"};function te(e,t,n,a,r,i){return(0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("div",U,[(0,o._)("button",{class:(0,d.C_)(["flex items-center justify-between px-3 py-3 text-bas w-fit font-medium rounded-full","ans"==e.$store.state.appMode?"bg-gray-900  text-white":"sorry"==e.$store.state.appMode?"bg-ballon-dark text-white":"cheer"==e.$store.state.appMode?"bg-coach-dark text-white":"bg-playing-dark text-white"]),onClick:t[0]||(t[0]=e=>r.isOptionsExpanded=!r.isOptionsExpanded),onBlur:t[1]||(t[1]=e=>r.isOptionsExpanded=!1)},[((0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:(0,d.C_)(["w-6 h-6 transform transition-transform duration-200 ease-in-out",r.isOptionsExpanded?"rotate-180":"rotate-0"])},Q,2)),(0,o._)("span",X,(0,d.zw)(r.selectedOption),1)],34),(0,o.Wm)(s.uT,{"enter-active-class":"transform transition duration-500 ease-custom","enter-class":"translate-y-1/2 scale-y-0 opacity-0","enter-to-class":"translate-y-0 scale-y-100 opacity-100","leave-active-class":"transform transition duration-300 ease-custom","leave-class":"translate-y-0 scale-y-100 opacity-100","leave-to-class":"translate-y-1/2 scale-y-0 opacity-0"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("ul",ee,[(0,o._)("li",{class:(0,d.C_)(["px-3 py-2 transition-colors duration-300","cheer"==e.$store.state.appMode?" bg-coach-dark text-coach-tlight":"sorry"==e.$store.state.appMode?"bg-green-100 text-gray-600 hover:bg-ballon-light hover:text-gray-900 hover:cursor-pointer":"ans"==e.$store.state.appMode?"bg-gray-100 text-gray-700 hover:bg-gray-400 hover:text-gray-900 hover:cursor-pointer":"bg-orange-100 text-gray-700 hover:bg-playing-light hover:text-gray-900 hover:cursor-pointer"]),onMousedown:t[2]||(t[2]=(0,s.iM)((e=>i.setOption("تشجيع")),["prevent"]))}," شجعني ",34),(0,o._)("li",{class:(0,d.C_)(["px-3 py-2 transition-colors duration-300","sorry"==e.$store.state.appMode?"bg-ballon-dark text-white":"ans"==e.$store.state.appMode?"bg-gray-100 text-gray-700 hover:bg-gray-400 hover:text-gray-900 hover:cursor-pointer":"cheer"==e.$store.state.appMode?" bg-red-100 text-gray-700 hover:bg-coach hover:text-coach-tlight hover:cursor-pointer":"bg-orange-100 text-gray-700 hover:bg-playing-light hover:text-gray-900 hover:cursor-pointer"]),onMousedown:t[3]||(t[3]=(0,s.iM)((e=>i.setOption("معلشة")),["prevent"]))}," معلشني ",34),(0,o._)("li",{class:(0,d.C_)(["px-3 py-2 transition-colors duration-300","ans"==e.$store.state.appMode?"bg-gray-900 text-white":"sorry"==e.$store.state.appMode?"bg-green-100 text-gray-600 hover:bg-ballon-light hover:text-gray-900 hover:cursor-pointer":"cheer"==e.$store.state.appMode?" bg-red-100 text-gray-700 hover:bg-coach hover:text-coach-tlight hover:cursor-pointer":"bg-orange-100 text-gray-700 hover:bg-playing-light hover:text-gray-900 hover:cursor-pointer"]),onMousedown:t[4]||(t[4]=(0,s.iM)((e=>i.setOption("اسئلني")),["prevent"]))}," جاوبني ",34)],512),[[s.F8,r.isOptionsExpanded]])])),_:1})])])}var ne={data(){return{isOptionsExpanded:!1,selectedOption:"mode"}},methods:{setOption(e){"اسئلني"==e?(this.checkAns(),this.selectedOption="mode",this.isOptionsExpanded=!1):"معلشة"==e?(this.checkSorry(),this.selectedOption=e,this.isOptionsExpanded=!1):"تشجيع"==e&&(this.checkCheer(),this.selectedOption=e,this.isOptionsExpanded=!1)}},setup(){const e=(0,N.oR)(),t=()=>{e.dispatch("checking","ans")},n=()=>{e.dispatch("checking","sorry")},s=()=>{e.dispatch("checking","cheer")};return{checkCheer:s,checkSorry:n,checkAns:t}}};const se=(0,r.Z)(ne,[["render",te]]);var oe=se,ae={name:"send",components:{SendDropDown:oe},setup(){const e=(0,N.oR)(),t=(0,F.iH)(""),n=()=>{e.dispatch("sendMessage",t)};return{sending:n,message:t}}};const re=(0,r.Z)(ae,[["render",Z]]);var ie=re,le={name:"appChatBot",components:{chat:R,popup:D,send:ie},setup(){const e=(0,N.oR)(),t=(0,F.iH)(""),n=()=>{e.dispatch("showInfo",!0)};return{showInfo:n,Info:t}}};const me=(0,r.Z)(le,[["render",v]]);var ce=me,ge={components:{appChatBot:ce}};const pe=(0,r.Z)(ge,[["render",p]]);var de=pe;const ue=[{path:"/",name:"home",component:de}],he=(0,c.p7)({history:(0,c.r5)(),routes:ue});var ye=he,xe=(n(7658),(0,N.MT)({state:{greetBool:!0,greetingEn:[{Reg:/you/gi,Ans:"ملكش دعوة بيا"},{Reg:/hey|hi|hello/gi,Ans:"Hi"},{Reg:/bobert/gi,Ans:"I loved you because you knew my name ❤️\nBut I forgot what you were telling me .. sorry ask me again"},{Reg:/alan/gi,Ans:"I loved you because you knew my name ❤️"},{Reg:/russo/gi,Ans:"I loved you because you knew my name ❤️"},{Reg:/hi alan/gi,Ans:"Hello my friend ❤️\nI loved you because you knew my name"},{Reg:/hi russo/gi,Ans:"Hello my friend ❤️\nI loved you because you knew my name"},{Reg:/your name/gi,Ans:"Hi my friend"},{Reg:/game|play/gi,Ans:"لو خلصت اللي وراك\nابعت لبوبيرت وقوله يوم ورا يوم"},{Reg:/يوم ورا يوم|يوم وراء يوم|ماجاني نوم|ما جاني نوم/gi,Ans:"حبيبي"},{Reg:/darwin/gi,Ans:"أنا معرفش داروين فين بس ممكن أساعدك\nابعت لبوبيرت وقوله يوم ورا يوم"},{Reg:/high five/gi,Ans:"🖐"},{Reg:/good afternoon/gi,Ans:"Good afternoon"},{Reg:/good evening/gi,Ans:"Good evening"},{Reg:/welcome/gi,Ans:"Welcome"},{Reg:/thank you/gi,Ans:"you're welcome"},{Reg:/tahnks/gi,Ans:"you're welcome"},{Reg:/love you|love u/gi,Ans:"I love you too ❤️"},{Reg:/gpt/gi,Ans:"GPT لمؤاخذة متجبليش سيرة\nعندي حساسية من الاسم ده"},{Reg:/mgpt4/gi,Ans:"بعد اذنك متقوليش MGPT4 تاني\nخالد اللي أصر اننا نسمي البوت كده لأسباب تسويقية"},{Reg:/Why/gi,Ans:"I don't no"}],greetingAr:[{Reg:/انت|أنت/gi,Ans:"ملكش دعوة بيا"},{Reg:/هاي/gi,Ans:"هاي"},{Reg:/بوبيرت/gi,Ans:"أنا حبيتك ❤️ علشان ناديتني باسمي\n من الفرحة نسيت كنت بتقولي ايه .. عيد السؤال تاني معلش"},{Reg:/آلان/gi,Ans:"أنا حبيتك ❤️ علشان ناديتني باسمي"},{Reg:/روسو/gi,Ans:"أنا حبيتك ❤️ علشان ناديتني باسمي"},{Reg:/ازيك يا آلان|أهلا آلان|أهلا يا آلان|اهلا آلان|اهلا يا آلان|هاي آلان/gi,Ans:"ازيك ❤️\nأنا حبيتك أكتر علشان عرفت اسمي"},{Reg:/ازيك يا روسو|أهلا روسو|أهلا يا روسو|اهلا روسو|اهلا يا روسو|هاي روسو/gi,Ans:"ازيك يا صاحبي ❤️\nأنا حبيتك خلاص علشان عرفت اسمي"},{Reg:/من أنت|من انت|مين معايا|اسمك|مين أنت|مين انت|مين حضرتك|انا سعد الدالي أنت مين|أنا سعد الدالي أنت مين|عرفني بنفسك|أنت مين|انت روبوت|أنت روبوت/gi,Ans:"أنا بوت"},{Reg:/لعب|خلصت|العاب|ألعاب/gi,Ans:"لو خلصت اللي وراك\nابعت لبوبيرت وقوله يوم ورا يوم"},{Reg:/يوم ورا يوم|يوم وراء يوم|ماجاني نوم|ما جاني نوم/gi,Ans:"حبيبي"},{Reg:/داروين/gi,Ans:"أنا معرفش داروين فين بس ممكن أساعدك\nابعت لبوبيرت وقوله يوم ورا يوم"},{Reg:/هاي فايف/gi,Ans:"🖐"},{Reg:/أهلا|اهلا|ازيك|هالو/gi,Ans:"أهلا"},{Reg:/مرحبا/gi,Ans:"مرحبا"},{Reg:/أنا سعد الدالي انت مين/gi,Ans:"أنا محدش ادالي حاجة"},{Reg:/السلام عليكم/gi,Ans:"وعليكم السلام"},{Reg:/اقولك|اسميك|اندهلك/gi,Ans:"قولي يا محاميحو"},{Reg:/محاميحو/gi,Ans:"محاميحو مين؟؟ انت صدقت؟ ده داروين اللي كتبلك كده\nأندهني باسمي العادي"},{Reg:/شات جبت|gpt/gi,Ans:"GPT لمؤاخذة متجبليش سيرة\nعندي حساسية من الاسم ده"},{Reg:/شات مجبتش|mgpt4/gi,Ans:"بعد اذنك متقوليش MGPT4 تاني\nخالد اللي أصر اننا نسمي البوت كده لأسباب تسويقية"},{Reg:/صباح الخير/gi,Ans:"صباح النور"},{Reg:/ازيك|كيف الحال|انا سعدالدالي انت مين|انت مين/gi,Ans:"أنا كويس"},{Reg:/أنت بخير|انت بخير/gi,Ans:"نعم أنا بخير"},{Reg:/ازيك يا بوبيرت|أهلا بوبيرت|أهلا يا بوبيرت|اهلا بوبيرت|اهلا يا بوبيرت|ازيك يا كوتش|أهلا يا كوتش|اهلا يا كوتش|أهلا كوتش|اهلا كوتش|ازيك يا بالونة|أهلا يا بالونة|أهلا بالونة|اهلا يا بالونة|اهلا بالونة/gi,Ans:"أهلا يا صاحبي"},{Reg:/شكرا|ثانكس|ثانكيو/gi,Ans:"العفو أي خدمة"},{Reg:/انت كويس|أنت كويس/gi,Ans:"انا كويس .. بس هل أنت كويس؟ لو حاسس انك مش كويس تقدر تغير المود وامعلشك"},{Reg:/عامل ايه|اخبارك|أخبارك/gi,Ans:"زي الفل"},{Reg:/ليه|اشمعنا|اشمعنى|لماذا|واي/gi,Ans:"معرفش"},{Reg:/أنا كويس|انا كويس/gi,Ans:"يا رب دايما تبقى كويس"},{Reg:/لونك/gi,Ans:"أبيض"},{Reg:/اسمي/gi,Ans:"أنا بحبك حتى من غير ما أعرف اسمك ❤️ .. بس أنت عارف اسمي؟ لو عرفت اسمي هحبك أكتر"},{Reg:/بحبك/gi,Ans:"وأنا بحبك أكتر ❤️"}],ansHeller:[{En:"Yes, but no",Ar:"أيوة لا"},{En:"Whoops! I'm out . . .\nRun-time Error: 'error during execution of native event handler'\n\nCall someone",Ar:". . . خارج الخدمة\nRun-time Error: 'error during execution of native event handler'\n\nكلملنا حد يشوف المشكلة دي"},{En:"do you really want me to answer that?",Ar:"أنا معرفش حاجة زيي زيك .. فاكرني هجاوبك بجد؟"},{En:"Sorry, I don't know another word",Ar:"أنا معرفش حاجة عن الموضوع ده، ومشي نفسك بالكلمتين دول أو غير المود وامعلشك"},{En:"No, but yes",Ar:"لا أيوة"},{En:"Yes yes yes yes yes",Ar:"كفاية متصدعناش"},{En:"You got me",Ar:"صراحة النت قاطع عندي دلوقتي .. فجبتلك طريقة عمل القلقاس\nقم بتقشير حبة القلقاس جيدًا مع ضرورة إزالة كل النقاط البارزة السوداء من عليها\nابدأ بتقطيع القلقاس إلى مكعبات متوسطة ومتساوية\nقم بنقع القلقاس في مياه حتى يزيل المادة اللزجة من عليه\nيغسل تحت مياه جارية 5 مرات متتالية للتأكد من نظافته جيدًا وإزالة اللزوجة منه تمامًا\nقم بتصفية القلقاس في مصفاة كبيرة حتى يجف تمامًا\nضع لمونة كاملة معصورة عليه واتركه حتى يجف\nفي حلة متوسطة قم بسلق اللحم بعد أن يقطع مكعبات كبيرة ومتساوية ببصلة وتوابل وكرافس\nاخرج اللحم من الشوربة وضع القلقاس على الشوربة واتركه حتى ينضج جيداً لمدة ربع ساعة تقريباً\nقم بغسل السلق والكزبرة والشبت جيداً\nقم بفرم الخضراوات جيداً\nفي طاسة متوسطة قم بتحميص السلق بعد وضعه على الزبدة\nثم ضفه على القلقاس بعد أن يستوي\nيقدم مع الأرز الابيض أو الأرز بالشعرية والسلطة الخضراء والباذنجان المقلي والبطاطس المحمرة"},{En:"No no no no no no",Ar:"عارف الإجابة ومش هجاوبك بردو"},{En:"Go ask GPT",Ar:"معرفش لو مش عاجبك روح اشتكيني"},{En:"What you want me to say?",Ar:"طب عاوزني أقولك ايه؟"}],ansCheer:[{En:"Keep going",Ar:"عاش استمر"},{En:"Keep up the good work",Ar:"عاش"},{En:"Keep it up",Ar:"شطور يلا روح كمل اللي وراك وبطل لعب"}],ansBigCheer:[{En:"Good job, I'm so proud of you",Ar:"عاش يا وحش، خدلك بريك وروق على نفسك"},{En:"\tIt doesn't matter how slowly you go as long as you don't stop",Ar:"عاش يبني، حتى لو خدت منك وقت كبير، المهم أنك انجزت حاجة النهاردة"},{En:"You deserve to celebrate yourself",Ar:"مبسوط بيك، أتنمى تستمر على كده علطول\nوده لايك 👍 مني ليك"}],ansSorry:[{En:"I'm sad that you are going through all this",Ar:"معلش كله هيعدي يا صاحبي"},{En:"You're not alone",Ar:"معلش انت قدها"},{En:"It's OK to not feel OK",Ar:"معلش هانت"}],ansBigSorry:[{En:"I'm here for you. Whenever you want to talk, I'll listen or reading",Ar:"معلش  كله هيعدي يا صاحبي .. حاسس أن عندك كلام كتير ومش لاقي حد تحكيله، فاحكيلي براحتك وأنا همعلشك"},{En:"I know you're strong enough to get through this",Ar:"معلش يا صاحبي حاسس ان موضوعك كبير، بس كل اللي عندي إني أقولك معلش ..أو ممكن تبقى محتاج تحكي مع شخص حقيقي أو تروح لمتخصص"},{En:"I can't imagine what you're feeling, I can't imagine anything in general, but I'm here for you if you need me.\nBut I think you have to talk to a real person or talk to a therapist",Ar:"معلش هي فترة وهتعدي ان شاء الله .. ولو حاسس أنك لسه مش كويس بعد المعلشة ممكن تبقى محتاج تحكي مع شخص حقيقي أو تروح لمتخصص"}],appMode:"ans",ansPlay:[{En:"",Ar:""}],gamePassCount:0,playMode:"",chooseGameNum:/الأرقام|أرقام|ارقام|الارقام|numbers|number/gi,startPlay:/ابدأ|ابدا|بدء|إبدأ|إبدا|أبدأ|أبدإ|أبدء|ءبدء|ابدئ|start/gi,isPlaying:!1,menuPlayigNum:!1,isPlayingNum:!1,endPlayigNum:!1,timingPlayNum:null,playScore:0,sumEq:0,playNumCounter:0,rePlay:/اعادة|إعادة|اعاده|إعاده|replay/gi,exitPlay:/خروج|exit/gi,lang:"en",gotYou:!0,Info:!0,newMessage:null,lastMessage:null,chatCounter:0,isHeller:!1,msgLnth:0,scrollerEl:null,chats:[{id:"ans",msg:"Ask me question . . ."}],randomNumber:0},mutations:{addMessage(e,t){e.newMessage=t,""!==e.newMessage.replace(/[\s]/gi,"")&&(this.commit("checkLang"),this.commit("checkLnth"),this.commit("puchAns",{id:"hum",msg:e.newMessage.replace(/^\s[^\*]\s+/gi,"")}),this.commit("addAnswer"),e.newMessage=null)},checkLang(e){e.lang=""==e.newMessage.replace(/[^\u0600-\u06ff]|\u061F/gi,"")?"en":"ar"},checkLnth(e){e.msgLnth=e.newMessage.replace(/[^\w\u0600-\u06ff]|\u061F/gi,"").length},addAnswer(e){"play"==e.appMode?this.commit("checkMode"):(this.commit("isHellerAsker"),1==e.isHeller&&"ans"==e.appMode?this.commit("hellerAns"):(e.lastMessage=e.newMessage,this.commit("greeting"),e.greetBool&&this.commit("checkMode")))},greeting(e){let t="ar"==e.lang?e.greetingAr:e.greetingEn;e.greetBool=!0;for(let n=t.length-1;n>=0;n--)if(t[n].Reg.exec(e.newMessage.toLowerCase())){if(t[n].Reg.exec("text"),2==n){e.greetBool=!1;let s="ans"==e.appMode?t[n].Ans:"sorry"==e.appMode?"لا ثواني أنا آلان مش بوبيرت":"بوبيرت مين؟\nلا فوق كده يا صاحبي أنا روسو";this.commit("puchAns",{id:e.appMode,msg:s});break}if(3==n){e.greetBool=!1;let s="sorry"==e.appMode?t[n].Ans:"ans"==e.appMode?"متأسف بس عاوز اوضح لحضرتك ان أنا بوبيرت مش آلان":"مش آلان\nلمؤاخذة يا صاحبي أنا روسو";this.commit("puchAns",{id:e.appMode,msg:s});break}if(4==n){e.greetBool=!1;let s="cheer"==e.appMode?t[n].Ans:"ans"==e.appMode?"متأسف بس عاوز اوضح لحضرتك ان أنا بوبيرت مش روسو":"لا أنا اسمي آلان مش روسو";this.commit("puchAns",{id:e.appMode,msg:s});break}if(5==n){e.greetBool=!1;let s="sorry"==e.appMode?t[n].Ans:"ans"==e.appMode?"ازيك .. بس عاوز اوضح لحضرتك ان أنا بوبيرت مش آلان":"أهلا يا صاحبي .. عاوز أفهمك حاجة، أنا اسمي روسو\nتقولي آلان ليه؟ مش عاجبك اسمي؟";this.commit("puchAns",{id:e.appMode,msg:s});break}if(6==n){e.greetBool=!1;let s="cheer"==e.appMode?t[n].Ans:"ans"==e.appMode?"ازيك .. بس عاوز اوضح لحضرتك ان أنا بوبيرت مش روسو":"ازيك .. ثواني أنا اسمي آلان مش روسو";this.commit("puchAns",{id:e.appMode,msg:s});break}if(7==n){e.greetBool=!1;let t="ans"==e.appMode?"أنا بوبيرت .. عارف إجابة أي سؤال هيخطر ع بالك بس مش هجاوبك بردو":"sorry"==e.appMode?"أنا آلان .. همعلشك لحد ما تبقى كويس":"أنا روسو .. وكفاية لعب وقوم خلص اللي وراك";this.commit("puchAns",{id:e.appMode,msg:t});break}if(8==n&&"ans"==e.appMode){e.greetBool=!1;let t={En:"Waiting . . .",Ar:"ثواني . . . "};this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?t.En:t.Ar}),setTimeout((()=>{let t={En:"",Ar:"الدنيا أمان؟"};this.commit("puchAns",{id:e.appMode,msg:t.Ar}),setTimeout((()=>{this.commit("checkPlay")}),3e3)}),3e3);break}if(9==n&&"ans"==e.appMode){if(e.greetBool=!1,!(e.gamePassCount<2)){e.gamePassCount=0;let t={En:"Waiting . . .",Ar:"ثواني . . . "};this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?t.En:t.Ar}),setTimeout((()=>{let t={En:"",Ar:"الدنيا أمان؟"};this.commit("puchAns",{id:e.appMode,msg:t.Ar}),setTimeout((()=>{this.commit("checkPlay")}),3e3)}),3e3);break}this.commit("puchAns",{id:e.appMode,msg:t[n].Ans}),e.gamePassCount++}else{if(10!=n){e.greetBool=!1,this.commit("puchAns",{id:e.appMode,msg:t[n].Ans});break}if(e.greetBool=!1,"ans"==e.appMode){let t={En:"I don't know who he is",Ar:"معرفش انت بتتكلم عن مين"};this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?t.En:t.Ar})}else this.commit("puchAns",{id:e.appMode,msg:t[n].Ans})}}},checkMode(e){"ans"==e.appMode?this.commit("checkAns"):"cheer"==e.appMode?this.commit("checkCheer"):"sorry"==e.appMode?this.commit("checkSorry"):"play"==e.appMode&&this.commit("checkPlay")},checkAns(e){e.msgLnth%2==0?this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?"Yes":"نعم"}):this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?"No":"لا"})},isHellerAsker(e){e.lastMessage==e.newMessage?e.chatCounter++:e.chatCounter=0,e.chatCounter>=3||e.msgLnth>30?e.isHeller=!0:e.isHeller=!1},hellerAns(e){e.chatCounter=0,this.commit("randomNum",10),1==e.randomNumber?(this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?e.ansHeller[e.randomNumber].En:e.ansHeller[e.randomNumber].Ar}),e.gotYou=!1,setTimeout((()=>{e.gotYou=!0,this.commit("puchAns",{id:e.appMode,msg:"ar"==e.lang?"🤣 أنا زي الفل .. بهزر معاك":"I got you 🤣"}),this.commit("puchAns",{id:e.appMode,msg:"ar"==e.lang?"كنا بنقول ايه؟":"What were we talking about again?"})}),1e4)):this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?e.ansHeller[e.randomNumber].En:e.ansHeller[e.randomNumber].Ar})},checkCheer(e){e.newMessage.replace(/[^\s]/gi,"").length>6?(this.commit("randomNum",3),this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?e.ansBigCheer[e.randomNumber].En:e.ansBigCheer[e.randomNumber].Ar})):(this.commit("randomNum",3),this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?e.ansCheer[e.randomNumber].En:e.ansCheer[e.randomNumber].Ar}))},checkSorry(e){e.newMessage.replace(/[^\s]/gi,"").length>20?(this.commit("randomNum",3),this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?e.ansBigSorry[e.randomNumber].En:e.ansBigSorry[e.randomNumber].Ar})):e.newMessage.replace(/[^\s]/gi,"").length>6?(this.commit("randomNum",3),this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?e.ansSorry[e.randomNumber].En:e.ansSorry[e.randomNumber].Ar})):this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?"Sorry":"معلش"})},checkPlay(e){if(e.isPlaying)this.commit("playing");else{e.appMode="play",e.isPlaying=!0;let t={En:"أهلا بيك في مود الجيمنج السري\nأول حاجة أوعى تقول لحد عن المود ده خصوصا خالد",Ar:"أهلا بيك في مود الجيمنج السري\nأول حاجة أوعى تقول لحد عن المود ده خصوصا خالد"},n={En:"المهم أعرفك بنفسي أنا داروين ومحدش يعرف اني هنا\nأنا مستخبي في مود الجيمنج بحاول اعملكم ألعاب لذيذة\nلكن أنا حاليا معنديش غير لعبة واحدة، بس شغال ع كذا لعبة تانية",Ar:"المهم أعرفك بنفسي أنا داروين ومحدش يعرف اني هنا\nأنا مستخبي في مود الجيمنج بحاول اعملكم ألعاب لذيذة\nلكن أنا حاليا معنديش غير لعبة واحدة، بس شغال ع كذا لعبة تانية"},s={En:"علشان تبدأ اللعبة ابعت اسم اللعبة من القائمة\nولو عاوز تخرج من المود ابعت كلمة <b>خروج</b>\n\n:قائمة الألعاب\n<b>الأرقام</b>",Ar:"علشان تبدأ اللعبة ابعت اسم اللعبة من القائمة\nولو عاوز تخرج من المود ابعت كلمة <b>خروج</b>\n\n:قائمة الألعاب\n<b>الأرقام</b>"};this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?t.En:t.Ar}),this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?n.En:n.Ar}),this.commit("puchAns",{id:e.appMode,msg:"en"==e.lang?s.En:s.Ar})}},playing(e){if(e.exitPlay.exec(e.newMessage.toLowerCase()))e.exitPlay.exec("text"),this.commit("exitPlayNum"),this.commit("playExit");else if(e.chooseGameNum.exec(e.newMessage.toLowerCase())||"num"==e.playMode)e.chooseGameNum.exec("text"),this.commit("playNum");else if(""==e.playMode){let t={En:"",Ar:"اكتب اسم اللعبة صح\nولو عاوز تقفل المود اكتب كلمة <b>خروج</b>\n\n:قائمة الألعاب\n<b>الأرقام</b>"};this.commit("puchAns",{id:e.appMode,msg:t.Ar})}},playNum(e){if(e.menuPlayigNum)if(e.exitPlay.exec(e.newMessage.toLowerCase()))e.exitPlay.exec("text"),this.commit("exitPlayNum"),this.commit("playExit");else if(e.rePlay.exec(e.newMessage.toLowerCase()))e.rePlay.exec("text"),this.commit("exitPlayNum"),e.playMode="",this.commit("playNum");else{let t={En:"",Ar:"يا عم اكتب <b>إعادة</b> لو عاوز تعيد اللعبة\nأو اكتب <b>خروج</b> لو مش عاوزني خالص"};this.commit("puchAns",{id:e.appMode,msg:t.Ar})}else if(e.endPlayigNum)if(parseInt(e.newMessage)==e.sumEq&&e.playScore++,e.menuPlayigNum=!0,10==e.playScore){let t={En:"",Ar:"مبروك نتيجتك 10/10 🎉🎉🎉 عاوز تلعب تاني؟\n\nلو عاوز تلعب تاني ابعت كلمة <b>إعادة</b>\nللخروج من المود كله ابعت كلمة <b>خروج</b>"};this.commit("puchAns",{id:e.appMode,msg:t.Ar})}else if(e.playScore<10&e.playScore>0){let t={En:"",Ar:"عاش نتيجتك "+e.playScore+"/10\nلو عاوز تعوض ابعت كلمة <b>إعادة</b>\nولو عاوز تخرج من المود كله ابعت كلمة <b>خروج</b>"};this.commit("puchAns",{id:e.appMode,msg:t.Ar})}else{let t={En:"",Ar:"صفر صفر صفر\nاللعبة خلصت يا بيه وانت قاعد تتفرج\nلو عاوز تعوض ابعت كلمة <b>إعادة</b>\nولو عاوز تخرج من المود كله ابعت كلمة <b>خروج</b>"};this.commit("puchAns",{id:e.appMode,msg:t.Ar})}else if(e.isPlayingNum)if(e.playNumCounter++,clearTimeout(e.timingPlayNum),e.playNumCounter>=11)e.endPlayigNum=!0,this.commit("playNum");else{parseInt(e.newMessage)==e.sumEq&&e.playScore++,this.commit("randomNum",5);let t=e.randomNumber+1;this.commit("randomNum",5);let n=e.randomNumber+1;this.commit("randomNum",100);let s=e.randomNumber+1;e.sumEq=t*n+s;let o="<b>("+t+"x"+n+")+"+s+"</b>";this.commit("puchAns",{id:e.appMode,msg:o}),e.timingPlayNum=setTimeout((()=>{this.commit("playNum")}),1e4)}else if("num"==e.playMode)if(e.exitPlay.exec(e.newMessage.toLowerCase()))e.exitPlay.exec("text"),this.commit("playExit");else if(e.startPlay.exec(e.newMessage.toLowerCase())){e.startPlay.exec("text"),e.isPlayingNum=!0;let t={En:"",Ar:"ازيك يا بيه في لعبة الأرقام"};this.commit("puchAns",{id:e.appMode,msg:t.Ar}),this.commit("playNum")}else{let t={En:"",Ar:"بقولك ابعتلي <b>ابدأ</b> يا <b>خروج</b> ايه اللي انت باعته ده؟\n"};this.commit("puchAns",{id:e.appMode,msg:t.Ar})}else{e.playMode="num";let t={En:"",Ar:"هبعتلك مسألة رياضية كل 10 ثواني، حاول أنك تحلها وتبعت الناتج في أسرع وقت\nكل سؤال بنقطة وهبعتلك 10 مسائل\nالنتيجة هبعتهالك في الآخر، فأنت ركز مع المسائل وبس\n\nلما تبقى مستعد ابعت كلمة <b>ابدأ</b>\nلو مش حابب اللعبة ابعت كلمة <b>خروج</b>\nوهتزعلني منك وهقول لخالد"};this.commit("puchAns",{id:e.appMode,msg:t.Ar})}},menuPlay(e,{playFunction:t,checkMsg:n,moreCondition:s}){e.exitPlay.exec(e.newMessage.toLowerCase())?(e.exitPlay.exec("text"),this.commit("playExit")):e.chooseGameNum.exec(e.newMessage.toLowerCase())||s?(e.chooseGameNum.exec("text"),t()):""==e.playMode&&this.commit("puchAns",{id:e.appMode,msg:n})},exitPlayNum(e){clearTimeout(e.timingPlayNum),e.playNumCounter=0,e.playScore=0,e.timingPlayNum=null,e.isPlayingNum=!1,e.endPlayigNum=!1,e.menuPlayigNum=!1,e.sumEq=0},playExit(e){this.commit("exitPlayNum"),"play"==e.appMode?(this.commit("puchAns",{id:e.appMode,msg:"خروج من مود الجيمنج السري .. سلام يا صاحبي"}),e.appMode="ans",this.commit("puchAns",{id:e.appMode,msg:"كنا بنقول ايه؟"})):e.isPlaying&&this.commit("puchAns",{id:e.appMode,msg:"خروج من مود الجيمنج السري .. سلام يا صاحبي"}),e.isPlaying=!1,e.playMode=""},randomNum(e,t){e.randomNumber=Math.floor(Math.random()*t)},puchAns(e,t){"hum"!=t.id?setTimeout((()=>{e.chats.push(t)}),200):e.chats.push(t)},scrollToEnd(e){e.scrollerEl=document.getElementById("scroller"),e.scrollerEl.scrollTo(0,e.scrollerEl.scrollHeight)},showPopup(e,t){e.Info=t},setMode(e,t){e.appMode=t,this.commit("playExit"),"ans"==e.appMode?setTimeout((()=>{this.commit("puchAns",{id:e.appMode,msg:"اتفضل اسألني . . . "})}),400):"cheer"==e.appMode?setTimeout((()=>{this.commit("puchAns",{id:e.appMode,msg:"عملت ايه النهاردة؟"})}),400):"sorry"==e.appMode&&setTimeout((()=>{this.commit("puchAns",{id:e.appMode,msg:"ايه اللي حصل احكيلي؟"})}),400)}},actions:{sendMessage(e,t){e.commit("addMessage",t)},showInfo(e,t){e.commit("showPopup",t)},hideInfo(e,t){e.commit("showPopup",t)},checking(e,t){e.commit("setMode",t)},scrollEnd(e){e.commit("scrollToEnd")}},modules:{}}));(0,s.ri)(m).use(xe).use(ye).mount("#app")},9991:function(e,t,n){e.exports=n.p+"img/ballonx200.bdb6a81a.png"},8580:function(e,t,n){e.exports=n.p+"img/bobert2x200.1ca76b97.png"},9259:function(e,t,n){e.exports=n.p+"img/coachx200.ed70a04a.png"},5443:function(e,t,n){e.exports=n.p+"img/darwinx200.bf30fced.png"}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,s,o,a){if(!s){var r=1/0;for(c=0;c<e.length;c++){s=e[c][0],o=e[c][1],a=e[c][2];for(var i=!0,l=0;l<s.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(i=!1,a<r&&(r=a));if(i){e.splice(c--,1);var m=o();void 0!==m&&(t=m)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[s,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,a,r=s[0],i=s[1],l=s[2],m=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var c=l(n)}for(t&&t(s);m<r.length;m++)a=r[m],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},s=self["webpackChunkchat_mgpt4_v2"]=self["webpackChunkchat_mgpt4_v2"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(4971)}));s=n.O(s)})();
//# sourceMappingURL=app.0b71d4fe.js.map