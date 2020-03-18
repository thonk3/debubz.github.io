(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{203:function(t,e,o){t.exports=o.p+"assets/img/s1_blynk_api.2e775e1a.png"},204:function(t,e,o){t.exports=o.p+"assets/img/s1_mqtt_ex.02cb1654.png"},205:function(t,e,o){t.exports=o.p+"assets/img/s1_big_mistake.77069f18.gif"},230:function(t,e,o){"use strict";o.r(e);var r=o(28),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"first-sprint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#first-sprint"}},[t._v("#")]),t._v(" First Sprint")]),t._v(" "),r("h2",{attrs:{id:"what-i-did"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-i-did"}},[t._v("#")]),t._v(" What I did")]),t._v(" "),r("h3",{attrs:{id:"day-1-monday"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#day-1-monday"}},[t._v("#")]),t._v(" Day 1 - Monday")]),t._v(" "),r("p",[t._v("After the welcoming event, the group were instructed to put together a Data Logger, which I found very interesting as that is my first exposure to electronics (soldering is pretty fun).\n"),r("a",{attrs:{href:"http://iot.nortcele.win/doc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentations"),r("OutboundLink")],1),t._v(" (board schematics and source) are also provided by Danon, the Studio's Tutor.\nIn the docs, there are also guides for how to interact with the Data Logger.")]),t._v(" "),r("h3",{attrs:{id:"day-2-tuesday"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#day-2-tuesday"}},[t._v("#")]),t._v(" Day 2 - Tuesday")]),t._v(" "),r("p",[t._v("The second day was rather tough for me.\nI didn't plan what to do for the day.\nTherefore, I find my self researching multiple different topics at the same time, not knowing where to start first.")]),t._v(" "),r("p",[t._v("Danon informed us with the "),r("a",{attrs:{href:"https://blynkapi.docs.apiary.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blynk API"),r("OutboundLink")],1),t._v(", which could simply use used some jquery and built a simple app to interface with the Blynk app.")]),t._v(" "),r("p",[t._v("It worked as expected "),r("em",[t._v("locally")]),t._v(", as this is hosted using "),r("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Pages"),r("OutboundLink")],1),t._v(" there was some trouble to get it working on Github Pages due to a "),r("strong",[t._v("protocol problem")]),t._v(". GitHub pages requires all attached links to use https whereas the Blynk API only works with http. I did not manage to get it working but this is what it looks like and "),r("a",{attrs:{href:""}},[t._v("here is the code")]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:o(203),alt:"Misc"}})]),t._v(" "),r("h3",{attrs:{id:"day-3-wednesday"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#day-3-wednesday"}},[t._v("#")]),t._v(" Day 3 - Wednesday")]),t._v(" "),r("p",[t._v("I spent "),r("em",[t._v('"some time"')]),t._v(" on the third day getting to know the people I'll spent my next 4 weeks with.\nThe majority of my cohorts are "),r("em",[t._v("Electrical Engineering majors")]),t._v(" whom I could "),r("strong",[t._v("learn a lot")]),t._v(" from and maybe and brainstorm some problems to solve for this studio.\nBefore coming up with a problem I want to solve, some other problems I came up are:")]),t._v(" "),r("blockquote",[r("p",[t._v('I find my self sitting for long period of times at home.\nThus I could set a device that starts a timer when Im sitting and "notifies" (in a form of an '),r("em",[t._v("electrical shock")]),t._v(") when the timer reaches a threshold.")])]),t._v(" "),r("blockquote",[r("p",[t._v("Even with weather forecast, it is difficult to estimate the weather conditions of your daily destination(workspace, school) to better prepare your day.\nMy solution involves sensors at their workplace/school which allows them to make more informed decisions.")])]),t._v(" "),r("p",[t._v("I also spent a part of the day trying to reverse engineer the "),r("a",{attrs:{href:"http://iot.nortcele.win/doc/Downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("source code"),r("OutboundLink")],1),t._v(" for the "),r("strong",[t._v("Data Logger")]),t._v(".\nFocusing on the "),r("code",[t._v("WifiMgmt.cpp")]),t._v(" to try and figure out how data is transmitted to the cloud from the "),r("code",[t._v("esp8266")]),t._v(" wifi chip.\nI could see what is used for what function but have yet figure it out, they could be located in the missing "),r("code",[t._v("DataSync")]),t._v(" files.")]),t._v(" "),r("h3",{attrs:{id:"day-4-thursday"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#day-4-thursday"}},[t._v("#")]),t._v(" Day 4 - Thursday")]),t._v(" "),r("p",[t._v('I get to experiment with a few "new" techs.')]),t._v(" "),r("p",[r("strong",[t._v("Cloud computing")]),t._v(" with "),r("a",{attrs:{href:"https://www.vultr.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vultr"),r("OutboundLink")],1),t._v(" (my "),r("strong",[t._v("first time")]),t._v("), which lets me deploy a virtual server.\nAnd "),r("code",[t._v("mqtt")]),t._v(", a communication protocol which enables fast and lightweight "),r("code",[t._v("machine-2-machine")]),t._v(" communications.\nWith "),r("code",[t._v("mqtt")]),t._v(", different machines(clients) would talk to each other through a "),r("strong",[t._v("Publisher/Subscriber")]),t._v(' messaging patern, facilitated by the "broker server"(which is the virtual server on '),r("strong",[t._v("Vultr")]),t._v(" I had set up).")]),t._v(" "),r("p",[t._v("Deploying the "),r("a",{attrs:{href:"https://mosquitto.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mosquito mqtt"),r("OutboundLink")],1),t._v(" on the virtual server was a lot more simpler than I thought. You can see It functioning as below.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(204),alt:"mqtt example"}})]),t._v(" "),r("h3",{attrs:{id:"day-5-friday"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#day-5-friday"}},[t._v("#")]),t._v(" Day 5 - Friday")]),t._v(" "),r("p",[t._v("The last day of the first sprint, I spent building my portfolio and documenting my progress so far.\nThis is the structure I decided to set my portfolio in.")]),t._v(" "),r("div",{staticClass:"language-md extra-class"},[r("pre",{pre:!0,attrs:{class:"language-md"}},[r("code",[t._v("Portfolio layout\n|-- Personal Intro/ Skills\n|-- Summer Studio\n|       |--Problem/ Solution\n|       |--Learning Contract\n|       |--Sprint 1\n|       |-- ...\n|       |--Sprint 4\n|-- Other Projects\n|-- Interests..\n")])])]),r("p",[t._v("Another peer shown me VuePress, a "),r("code",[t._v("SPA framework")]),t._v(" that generates very nice and presentable html page for documentation from markdown (Which I use to take notes).\nThe only issue is when ever I make a change to the site.\nI need to regenerate the "),r("strong",[t._v("static "),r("code",[t._v("html")]),t._v(" files")]),t._v(" and push it manually on the Git repo.")]),t._v(" "),r("p",[t._v("There are a lot of guides that shows you how to apply "),r("code",[t._v("CI")]),t._v("(Continuous Integration) feature by just simply update the "),r("code",[t._v("md")]),t._v(" files, but I have yet to figure out the correct configurations at the moment.")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"evaluation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#evaluation"}},[t._v("#")]),t._v(" Evaluation")]),t._v(" "),r("p",[r("img",{attrs:{src:o(205),alt:"BIG MISTAKE"}})]),t._v(" "),r("p",[t._v("I dove into this Studio expecting a more structured and guided teaching course, but the purpose of the studio is to build the ability of working independently without much supervision.")]),t._v(" "),r("p",[t._v("Therefore, I was struggling a bit in this Sprint.\nI need to "),r("strong",[t._v("change my mindset")]),t._v(" in approaching the Studio and in learning. What I need to do first from now is figure how I will build this solution and "),r("strong",[t._v("break it down")]),t._v(" to smaller task.")]),t._v(" "),r("p",[t._v("I'm glad that I'm able to attend this studio and "),r("strong",[t._v("did not give up")]),t._v(". Even if I failed this studio, I would have learned how to be better.")]),t._v(" "),r("h2",{attrs:{id:"improvements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[t._v("#")]),t._v(" Improvements")]),t._v(" "),r("ul",[r("li",[t._v("try to "),r("strong",[t._v("be more proactive")]),t._v(" during the Studio, as I always have been exposed to something new every time I did speak up (Virtual Pi server with Vulture, "),r("code",[t._v("mqtt")]),t._v(", Vuepress. ). I thought that I didn't have much to offer as a first year student, but I think I could offer some insight in the backend, programming side of the project.")]),t._v(" "),r("li",[r("strong",[t._v("Document")]),t._v(" my progress more often, both achievements and failures for review to change up my approach to learning.")]),t._v(" "),r("li",[t._v("Focus on "),r("strong",[t._v("one problem at a time")]),t._v(". I find myself bouncing to different problems whenever I hit a wall, and wasting time researching various different topics, resulting in no feasible solutions.")]),t._v(" "),r("li",[r("strong",[t._v("KISS")]),t._v(" - "),r("strong",[t._v("K")]),t._v("eep "),r("strong",[t._v("i")]),t._v("t "),r("strong",[t._v("s")]),t._v("imple, "),r("strong",[t._v("s")]),t._v("tupid. A design philosophy states that most systems works best if kept simple.")])])])}),[],!1,null,null,null);e.default=a.exports}}]);