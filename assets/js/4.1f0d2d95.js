(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{185:function(e,t,s){e.exports=s.p+"assets/img/s4_site_test.b3eb5824.png"},186:function(e,t,s){e.exports=s.p+"assets/img/s4_site_api.1e912eb1.png"},187:function(e,t,s){e.exports=s.p+"assets/img/s4_site_main.849cb69f.png"},188:function(e,t,s){e.exports=s.p+"assets/img/s4_site_side.a1bb0c15.png"},189:function(e,t,s){e.exports=s.p+"assets/img/s4_3d_sketch.9a05383c.png"},190:function(e,t,s){e.exports=s.p+"assets/img/s4_print.647f76db.jpg"},191:function(e,t,s){e.exports=s.p+"assets/img/s4_batt.5a3aa84e.jpg"},192:function(e,t,s){e.exports=s.p+"assets/img/s4_final.693c0241.jpg"},197:function(e,t,s){"use strict";s.r(t);var a=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"final-sprint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#final-sprint","aria-hidden":"true"}},[this._v("#")]),this._v(" Final Sprint")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"building-vue-webapp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-vue-webapp","aria-hidden":"true"}},[this._v("#")]),this._v(" Building Vue WebApp")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[t("img",{attrs:{src:s(185),alt:"TestData"}})])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("return the details of all devices")]),e._v(" "),s("li",[e._v("show the details of a single device (searched by using the "),s("code",[e._v("UniqueId")]),e._v(" of the device)")]),e._v(" "),s("li",[e._v("show the data of a single device (searched by using the "),s("code",[e._v("UniqueId")]),e._v(" of the device)")]),e._v(" "),s("li",[e._v("the ability to toggle the status of a single device( "),s("code",[e._v("OK")]),e._v(" to "),s("code",[e._v("BAD")]),e._v(", and vice versa)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[t("img",{attrs:{src:s(186),alt:"API"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Also if you have a closer look at the url link above, this code under here is used to route the call to "),t("code",[this._v("leonidas.summerstudio.xyz:5000/api/details")]),this._v(" to trigger the seccond half of the code block below to go and grab all doccuments from the "),t("code",[this._v("bDeviceDetails")]),this._v(" collection. PLUS, if you would go and compare the number of docs from the API to the sample data img above, the information you see between them should be the very similar.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// routing api // from index.js")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" deviceDetails "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./api/deviceDetails.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nexpressApp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/api/details'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("deviceDetails"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// -----------------------------------------------------------")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// GET  all devices  // from deviceDetails.js")]),e._v("\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("async")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" detail "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ConnectoDB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" detail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("toArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// send json as a response")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(187),alt:"table"}}),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The link on the side of the table "),s("code",[e._v("manage a")]),e._v(" is to move into the seccond page to see More Details of each device. I have also effectively implemented for the webapp the ability gather the data LIVE as it is stored into the database. As per the image below, the page consist of 2 components. The Information card on the left, to display specific details of each devices, and the live data readings on the right. I think the way I set up "),s("code",[e._v("Live data")]),e._v(" is somewhat inefficient as it would queries the DB every 1000ms (1 sec) to grab the data, wait for it to returned through the API then displayed it. It is abit difficult to show you the "),s("code",[e._v("Live data")]),e._v(" through on this blog but "),s("a",{attrs:{href:"leonidas.summerstudio.xyz"}},[e._v("here is my webapp")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(188),alt:"details"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_3d-printing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3d-printing","aria-hidden":"true"}},[this._v("#")]),this._v(" 3d Printing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[t("img",{attrs:{src:s(189),alt:"Flash sketch"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[t("img",{attrs:{src:s(190),alt:"FlashBox"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"battery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#battery","aria-hidden":"true"}},[this._v("#")]),this._v(" Battery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(191),alt:"Batt"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(192),alt:"Final"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"sprint-evaluation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sprint-evaluation","aria-hidden":"true"}},[this._v("#")]),this._v(" Sprint Evaluation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Overal, I would say this would be the most fun sprint out of the whole studio. While I did not have enough time to Implement a Low Power function for my device, This sprint remended me of how much "),t("strong",[this._v("I love building things")]),this._v(". Especialy while programming the WebApp, figguring out how to build it, how to fix the errors I came across is simply just too satisfying. I gradually find my self to becomming quite giddy and constantly having this smile across my face while doing the programming work. The feeling of building something that works is just unreal.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"studio-conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#studio-conclusion","aria-hidden":"true"}},[this._v("#")]),this._v(" Studio Conclusion")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Even though there are countless frustrating moments, not knowing what to do or not sure if I am on track or not, I loved every second of it. I love the long nights I spend researching various different frameworks and programming languages I could use. I love building something I could use myself( I am also rebuilding the device I built to something I can use ). I love helping my peers with bugfixes. Yeah, I would do all this again in a heartbeat, and I'm definately attending the MIDAS Summer Studio again next year and "),t("strong",[this._v("will always keep building things")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"addressing-learning-objectives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#addressing-learning-objectives","aria-hidden":"true"}},[this._v("#")]),this._v(" Addressing Learning Objectives")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Even though each member of the team was working independantly for our own projects. We still succesfully come together to develop a common structure which all our devices can use. One very important aspect of the system we worked on is determining the messaging protocol of the device to the DB, this is so we can set the format of each message to be better processed when sending it to be stored into the db.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Learned to better critisized by own learning progress and improve on it. You can see them at the end of each sprints and see how it tried to improve on it through out the whole studio. I can say this is one of the best skill I had developed in this studio, and I will be using this through out the rest of my academic studies and future careers.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"extras"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extras","aria-hidden":"true"}},[this._v("#")]),this._v(" Extras")])}],n=s(0),i=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("To finish up everything, all I need is to build a WebApp/ User Interface to interact with the data.\nTo beter fit my wireframe design in the "),s("router-link",{attrs:{to:"./sprint3.html#main-page"}},[e._v("previous week")]),e._v(', I added another collection called "bDeviceDetails" into the database. This collection is to store the individual details of my devices if there are multiple active devices in the system. Since I only have 1 active device at the time, I added some sample data to test while building the site.')],1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("I begun with building the back end processes of the webapp (as shown in the tutorials I completed last week), the API which will be used to take data from the database to be presented on the webapp. Overall, my api have the ability to:")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("Heres an example of device details returned by the API of all devices. You can also see it here through this "),s("a",{attrs:{href:"http://leonidas.summerstudio.xyz:5000/api/details",target:"_blank",rel:"noopener noreferrer"}},[e._v("url"),s("OutboundLink")],1)]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),s("p",[e._v("To help ease the process of building the site to match the wireframe design, I added the "),s("a",{attrs:{href:"https://bootstrap-vue.js.org/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue-Bootstrap"),s("OutboundLink")],1),e._v(" framework to help with the styling of the site. I started step-by-step, beginning to make the mainpage simply display the data from the "),s("code",[e._v("GET ALL")]),e._v(" devices into a list. Then following the "),s("a",{attrs:{href:"https://bootstrap-vue.js.org/docs/components/table/",target:"_blank",rel:"noopener noreferrer"}},[e._v("tables doccumentation"),s("OutboundLink")],1),e._v(" on "),s("code",[e._v("Vue-Bootstrap")]),e._v(" to achive this")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),s("p",[e._v("I also had the chance to 3D print an enclosure for the device. Knowing how simple my device is itself, I decided to making the container abit more "),s("a",{attrs:{href:"https://www.google.com/search?q=the+flash+symbol&rlz=1C1CAFC_enAU825AU835&source=lnms&tbm=isch&sa=X&ved=0ahUKEwilu62GyubgAhXafH0KHWX8CdoQ_AUIDigB&biw=1534&bih=829",target:"_blank",rel:"noopener noreferrer"}},[e._v("flashy"),s("OutboundLink")],1),e._v(". So after folowing these "),s("a",{attrs:{href:"https://youtu.be/A5bc9c3S12g",target:"_blank",rel:"noopener noreferrer"}},[e._v("tutorials"),s("OutboundLink")],1),e._v(" to be more familiarized with the modeling program "),s("a",{attrs:{href:""}},[e._v("fusion360")]),e._v(". I went on to draw up a simple model of the box and then start sketching the symbol onto one of the faces. It might look complicated but if you look carefully the lightning symbol is made from 3 individial shapes. A paralellogram and 2 triangles.")]),e._v(" "),e._m(11),e._v(" "),s("p",[e._v('Even though there was some issues regarding the 3d print (it failed twice), with the help of Danon, I was able to produced the container for my device, with that extra "flash" on the side 😄. I was very estatic to see how nice they turn out.')]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),s("p",[e._v("I also managed to attached a power source onto my device. Albeit it is kind of cheating by disassembling a portable power bank and wire it onto my device. Since electronics is not my strength, I don't want to spend too much time researching and focus more on polishing the Webapp more, this will do.")]),e._v(" "),e._m(14),e._v(" "),s("p",[e._v("And here is an image of the final product")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),s("p",[e._v("This Studio overal has been really amazing.\nIt is so strange to see how much I changed in such a small period of time. I can see that I now think differently, apporach problems and figguring out the solutions differently. I believe that this studio had better improved the learning experience at UTS (3 more years lets go!!). From the studio, I think I will keep applying the process of doccumenting my learning progress, similar to how the blogs are made. They have been super helpful through out the studio.")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),s("p",[e._v("Through out the Studio I had")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Identified that there is a problem in how the streetlight maintenace system is very slow and inefficient("),s("router-link",{attrs:{to:"./#what-problem-am-i-solving"}},[e._v("here")]),e._v(").")],1)]),e._v(" "),s("li",[s("p",[e._v("Designed an IoT system that will speed up that process of reporting faulty streetlight. Also the device also doubles as a device that can generate data that could be used by the power companies to determine faults in the power grid, better evaluate their assets (lightbullbs) I have also spent sometime thinking about the "),s("a",{attrs:{href:"#day-4-improving-the-poc"}},[e._v("overal design")]),e._v(" of my IoT system, this includes the "),s("router-link",{attrs:{to:"./sprint3.html#main-page"}},[e._v("wireframe")]),e._v(" design of the "),s("strong",[e._v("WebApp")]),e._v(". Even though I did not have enough time to implement the filtering options, I designed the WebApp with a filtering functions that filters devices by their postcode and status for the client( problably someone that manages repairs/maintenace shedules) to better make decisions base on the presented data")],1)]),e._v(" "),s("li",[s("p",[e._v("Managed to learn and apply multitude of different frameworks and programming languages into the development of the project. To fulfill my learning contract, I've been actively avoiding using any frameworks that I'm familiar with. Through out the Studio Ive managned to learn how to use "),s("router-link",{attrs:{to:"./sprint2.html#day-5-c"}},[e._v("c++ for hardware programming")]),e._v(" ,"),s("router-link",{attrs:{to:"./sprint2.html#mongodb"}},[e._v("MongoDb")]),e._v(" as a database, "),s("router-link",{attrs:{to:"./sprint3.html#nodejs"}},[e._v("NodeJs")]),e._v(" and "),s("router-link",{attrs:{to:"./sprint3.html#vuejs"}},[e._v("VueJs")]),e._v(" as serverside processess.")],1)]),e._v(" "),e._m(21),e._v(" "),e._m(22)]),e._v(" "),e._m(23),e._v(" "),s("p",[e._v("I would like to thank my studio's superviser, Danon Bradford in organising the IoT Studio and assisting me thoughout the its whole durration. Especially on the Friday of the FinalSprint, around an hour before the start of the presentation, my NodeMCU( the brain of my device) suddenly malfunctioned, and he was able to repair it in no time while showing me how to diagnose electronics.")])])},a,!1,null,null,null);t.default=i.exports}}]);