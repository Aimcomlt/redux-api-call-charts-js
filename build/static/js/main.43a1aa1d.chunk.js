(this["webpackJsonpbrainjs-redux"]=this["webpackJsonpbrainjs-redux"]||[]).push([[0],{156:function(e,r,o){},157:function(e,r,o){},314:function(e,r){},316:function(e,r){},350:function(e,r,o){"use strict";o.r(r);var a=o(1),t=o.n(a),n=o(55),l=o.n(n),i=(o(156),o(151)),d=(o(157),o(38)),c=o(29),s=o(79),b=o.n(s),g=o(147),h=o(148),u=o.n(h),p=o(56),C=o.n(p),f=o(39),O=o.n(f),j=new O.a.NeuralNetwork,m=new O.a.NeuralNetwork,v=new O.a.NeuralNetwork,I=new O.a.NeuralNetwork,w=[],R=[],B=[],T=[],k=[],x=[],y=[],E=[],N=[],P=o(5);var L=function(){var e=Object(c.b)(),r=Object(c.c)((function(e){return e.bitcoin})),o=Object(c.c)((function(e){return e.brain})),a=t.a.useState(15),n=Object(i.a)(a,2),l=n[0],s=n[1],h=function(r){e(function(e){var r=e.time,o=e.number;return function(){var e=Object(g.a)(b.a.mark((function e(a){var t,n,l,i,d,c,s,g,h,p,f,O,P,L,D,S,A,H,W,V,_,U,G,J,M,Y,$,F,K,X,q,z,Q,Z,ee,re,oe,ae,te,ne,le,ie,de,ce,se,be,ge,he,ue,pe,Ce,fe,Oe;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"AWAITING_BITCOIN"}),e.next=4,u.a.get("https://financialmodelingprep.com/api/v3/historical-chart/".concat(r,"/BTCUSD?apikey=df8f3193c67e3f800048dc4863a1984e"));case 4:t=e.sent,w.unshift(t.data[0].open),R.unshift(t.data[0].close),B.unshift(t.data[0].high),T.unshift(t.data[0].low),k.unshift(C()(t.data[0].date).format("LT")),n=[],l=[],i=[],d=[],c=[],s=[],g=0;case 17:if(!(g<o)){e.next=28;break}if(i.unshift(t.data[g].high),l.unshift(t.data[g].close),c.unshift(t.data[g].low),s.unshift(t.data[g].open),n.unshift(C()(t.data[g].date).format("LT")),g!==o-1){e.next=25;break}return e.abrupt("break",28);case 25:g++,e.next=17;break;case 28:h=0;case 29:if(!(h<o)){e.next=36;break}if(d.push(i[h]),h!==o-1){e.next=33;break}return e.abrupt("break",36);case 33:h++,e.next=29;break;case 36:for(p=[],f=0;f<o;f++)p.unshift({input:{hgh:1e-5*t.data[f].high,lw:1e-5*t.data[f].low,cl:1e-5*t.data[f].close},output:{op:1e-5*t.data[f].open}});for(v.train(p,{iterations:20500,errorThresh:5e-4,log:!1,learningRate:.3,momentum:.08}),O=v.run({hgh:1e-5*t.data[o].high,lw:1e-5*t.data[o].low,cl:1e-5*t.data[o].close}),P=[],L=0;L<o;L++)P.unshift({input:{hgh:1e-5*t.data[L].high,lw:1e-5*t.data[L].low,op:1e-5*t.data[L].open},output:{cl:1e-5*t.data[L].close}});for(I.train(P,{errorThresh:5e-4,log:!0,learningRate:.3,momentum:.08}),D=I.run({hgh:1e-5*t.data[o].high,lw:1e-5*t.data[o].low,op:1e-5*t.data[o].open}),S=[],A=0;A<o;A++)S.unshift({input:{cl:1e-5*t.data[A].close,lw:1e-5*t.data[A].low,op:1e-5*t.data[A].open},output:{hgh:1e-5*t.data[A].high}});for(j.train(S,{errorThresh:5e-4,log:!0,learningRate:.3,momentum:.08}),H=j.run({lw:1e-5*t.data[o].close,op:1e-5*t.data[o].open,cl:1e-5*t.data[o].close}),W=[],V=0;V<o;V++)W.unshift({input:{hgh:1e-5*t.data[V].high,cl:1e-5*t.data[V].close,op:1e-5*t.data[V].open},output:{lw:1e-5*t.data[V].low}});for(m.train(W,{errorThresh:5e-4,log:!0,learningRate:.3,momentum:.08}),_=m.run({hgh:1e-5*t.data[o].high,op:1e-5*t.data[o].open,cl:1e-5*t.data[o].close}),U=[],N.push(_.lw/1e-5),E.push(H.hgh/1e-5),y.push(D.cl/1e-5),x.push(O.op/1e-5),U.push(.5*(y+x)),G=[],J=[],M=0;M<N.length;M++)G.length<=o?G.unshift(N[M]):J.push(G[0]),G.length===o&&J.splice(0,G[0]);for(console.log("Low: ",G),console.log("LowI: ",J),Y=[],$=[],F=0;F<E.length;F++)Y.length<=o?Y.unshift(E[F]):$.push(Y[0]),Y.length===o&&$.splice(0,Y[0]);for(console.log("High: ",Y),console.log("HighI: ",$),K=[],X=[],q=0;q<y.length;q++)K.length<=o?K.unshift(y[q]):X.push(K[0]),K.length===o&&X.splice(0,K[0]);for(console.log("Close: ",K),console.log("CloseI: ",X),z=[],Q=[],Z=0;Z<w.length;Z++)z.length<=o?z.unshift(w[Z]):Q.push(z[0]),z.length===o&&Q.splice(0,z[0]);for(console.log("Open: ",z),console.log("OpenI: ",Q),ee=[],re=[],oe=0;oe<x.length;oe++)ee.length<=o?ee.unshift(x[oe]):re.push(ee[0]),ee.length===o&&re.splice(0,ee[0]);for(console.log("brainOpen: ",ee),console.log("brainOpenI: ",re),ae=[N[0]-T[0]],te=[T[0]-N[0]],ne=[E[0]-B[0]],le=[B[0]-E[0]],ie=[y[0]-R[0]],de=[R[0]-y[0]],ce=[],se=0;se<z.length;se++)ce.push(z[se]-ee[se]);for(be=[],ge=0;ge<z.length;ge++)be.push(ee[ge]-z[ge]);for(he=[],ue=[],pe=0;pe<k.length;pe++)he.length<=o?he.unshift(k[pe]):ue.push(he[0]),he.length===o&&ue.splice(0,he[0]);for(console.log("lable: ",he),console.log("lableI: ",ue),Ce=[],fe=[],Oe=0;Oe<w.length;Oe++)Ce.length<=o?Ce.push((E[Oe]+x[Oe]+y[Oe]+N[Oe])/4):fe.push(Ce[0]),Ce.length===o&&fe.splice(0,Ce[0]);console.log("midleLine: ",Ce),console.log("midleLineI: ",fe),a({type:"SUCCESS_BITCOIN",payload:{number:o,midOP:Ce,laBox:he,opVS:z,clVS:K,hghVS:Y,lowVS:G,brOP:ee,ClsPredicted:ie,RealClose:de,HghPredicted:ne,RealHigh:le,LowPredicted:ae,RealLow:te,RvsPredicted:ce,PvsReal:be,OpenBrainResult:x,CloseBrainResult:y,HighBrainResult:E,LowBrainResult:N,open:s,low:c,high:d,close:l,labels:n}}),e.next=109;break;case 106:e.prev=106,e.t0=e.catch(0),a({type:"REJECTED_BITCOIN"});case 109:case"end":return e.stop()}}),e,null,[[0,106]])})));return function(r){return e.apply(this,arguments)}}()}({time:r,number:l}))};return Object(P.jsxs)("div",{className:"App",children:[Object(P.jsxs)("div",{className:"navbar",children:[Object(P.jsx)("h1",{style:{marginLeft:"13px",marginRight:"13px"},children:"UNIVERSAL MARKET PRICE FUNCTION PREDICTOR"}),Object(P.jsx)("h5",{style:{marginLeft:"25px"},children:"POWERED BY BRAIN.JS, CHART JS, REDUX AND REACT APP"})]}),Object(P.jsx)("div",{className:"title",children:Object(P.jsx)("h2",{children:"BTC/USD Timeseries"})}),Object(P.jsxs)("div",{className:"btns-wrapper",children:[Object(P.jsx)("button",{onClick:function(){h("1min")},children:"INSERT DATA"}),Object(P.jsx)("button",{onClick:function(){return setInterval((function(){h("1min")}),60100)},children:"1 Min"}),Object(P.jsx)("button",{onClick:function(){return setInterval((function(){h("5min")}),3e5)},children:"5 Min"}),Object(P.jsx)("button",{onClick:function(){return setInterval((function(){h("15min")}),9e5)},children:"15 Min"}),Object(P.jsx)("button",{onClick:function(){return setInterval((function(){h("30min")}),18e5)},children:"30 min"}),Object(P.jsx)("button",{onClick:function(){return setInterval((function(){h("1hour")}),36e5)},children:"1 Hour"}),Object(P.jsx)("button",{onClick:function(){return setInterval((function(){h("4hour")}),144e5)},children:"4 Hour"}),Object(P.jsx)("input",{onChange:function(e){return s(e.target.value)}}),Object(P.jsx)("button",{onClick:function(){return clearInterval("1min","5min","15min","30min","1hour","4hour")},children:"Pause Interval"}),r.loading&&Object(P.jsx)("p",{children:"Loading..."})]}),Object(P.jsxs)("div",{className:"info",children:[Object(P.jsx)("h4",{children:"Default Chart settings is set to 15 data points(x4,op,cl.hgh.lw) Choose any Interval. And specify any amount of data points ."}),Object(P.jsx)("h4",{children:"You can all so start as many interval as you want. Try only two to start example 89 min and 144 min "})]}),Object(P.jsx)("div",{className:"chart-wrapper",children:Object(P.jsx)(d.Line,{data:r.data,options:{responsive:!0}})}),Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)("div",{className:"chartBarVol",style:{height:"80%",width:"80%"},children:Object(P.jsx)(d.Bar,{data:o.dataC,options:{responsive:!0}})}),Object(P.jsx)("div",{className:"chartBarLin",style:{height:"2100px",width:"fit-content(100)"},children:Object(P.jsx)(d.Line,{data:o.dataD,options:{responsive:!0}})})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=o(28),S=o(9),A={loading:!1,data:{labels:[],datasets:[{type:"line",label:"BTC close",data:[],backgroundColor:"rgba(226, 153, 18, 0.9)",borderColor:"rgba(178, 116, 0, 1)",pointBorderColor:"rgba(25, 16, 0, 1)",borderWidth:.5}]}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,r=arguments.length>1?arguments[1]:void 0,o=r.type,a=r.payload;switch(o){case"AWAITING_BITCOIN":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"REJECTED_BITCOIN":return Object(S.a)(Object(S.a)({},e),{},{loading:!1});case"SUCCESS_BITCOIN":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,data:{labels:a.labels,datasets:[{label:"BTC CLOSE",data:a.close,backgroundColor:"rgba(226, 153, 18, 0.9)",borderColor:"rgba(178, 116, 0, 1)",pointBorderColor:"rgba(25, 16, 0, 1)",order:3,borderWidth:.5},{type:"line",label:"BTC OPEN",data:a.open,backgroundColor:"rgba(10, 204, 0, 0.3)",borderColor:"rgba(10, 204, 0, 1)",pointBorderColor:"rgba(25, 16, 0, 1)",order:2,borderWidth:.5},{type:"line",label:"BTC HIGH",data:a.high,backgroundColor:"rgba(22, 91, 160, 0.9)",borderColor:"rgba(14, 38, 62,0.9)",pointBorderColor:"rgba(22, 91, 160, 1)",order:4,borderWidth:.5},{type:"line",label:"BTC LOW",data:a.low,backgroundColor:"rgba(246, 239, 28, 0.48)",borderColor:"rgba(255,255,0, 0.9)",pointBorderColor:"rgba(255,255,0, 0.9)",order:1,borderWidth:.5}]}});default:return e}},W={Loading:!1,dataB:{labels:[],datasets:[{type:"radar",label:"BOT CHART PREDICTION",data:[],backgroundColor:"rgba(226, 153, 18, 0.9)",borderColor:"rgba(178, 116, 0, 1)",pointBorderColor:"rgba(25, 16, 0, 1)",options:{responsive:!0}}]},dataC:{labels:[],datasets:[{type:"bar",label:"BOT CHART PREDICTION",data:[],backgroundColor:"rgba(226, 153, 18, 0.9)",borderColor:"rgba(178, 116, 0, 1)",pointBorderColor:"rgba(25, 16, 0, 1)",options:{responsive:!0}}]},dataD:{labels:[],datasets:[{type:"line",label:"Real Time vs Open Prediction",data:[],backgroundColor:"rgba(226, 153, 18, 0.9)",borderColor:"rgba(178, 116, 0, 1)",pointBorderColor:"rgba(25, 16, 0, 1)",options:{scales:{x:{ticks:{callback:function(e,r,o){return"$"+e}}}}}}]}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,r=arguments.length>1?arguments[1]:void 0,o=r.type,a=r.payload;switch(o){case"AWAITING_BITCOIN":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"REJECTED_BITCOIN":return Object(S.a)(Object(S.a)({},e),{},{loading:!1});case"SUCCESS_BITCOIN":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,dataD:{labels:a.laBox,datasets:[{type:"line",label:"REAL TIME OPEN",data:a.opVS,backgroundColor:"rgb(0, 0, 0, 0.6)",borderColor:"rgb(0, 0, 0)",pointBorderColor:"rgb(0, 0, 0)",order:1},{type:"line",label:"PREDICTED OPEN",data:a.brOP,backgroundColor:"rgba(255, 0, 0, 0.4)",borderColor:"rgba(255, 0, 0, 0.9)",pointBorderColor:"rgba(25, 16, 0, 1)",order:3},{type:"line",label:"PREDICTED CLOSE",data:a.clVS,backgroundColor:"rgba(0,0,255, 0.4)",borderColor:"\trgba(0,0,255, 0.9)",pointBorderColor:"rgba(0,0,255, 1)",order:2},{type:"line",label:"PREDICTED HIGH",data:a.hghVS,backgroundColor:"rgba(22, 91, 160, 0.7)",borderColor:"\trgba(22, 91, 160, 0.9)",pointBorderColor:"rgba(22, 91, 160, 1)",order:4},{type:"line",label:"PREDICTED LOW",data:a.lowVS,backgroundColor:"rgba(255, 255, 0, 0.7)",borderColor:"rgba(255, 255, 0, 0.9)",pointBorderColor:"rgba(255, 255, 0, 1)",order:5},{type:"line",label:"All 4 PREDICTED MOVING AVERAGE",data:a.midOP,backgroundColor:"rgba(255, 113, 16, 0.7)",borderColor:"rgba(255, 113, 16, 0.9)",pointBorderColor:"rgba(255, 113, 16, 0.9)",order:6}]},dataC:{labels:["Real price vs Predicted price"],datasets:[{type:"bar",label:"Real Time vs Predicted Open ",data:a.RvsPredicted,backgroundColor:"rgb(0, 0, 0, 0.6)",borderColor:"rgb(0, 0, 0)",pointBorderColor:"rgb(0, 0, 0)",order:1},{type:"bar",label:"Predicted Open vs Real Time",data:a.PvsReal,backgroundColor:"rgba(255, 0, 0, 0.9)",borderColor:"rgba(255, 0, 0, 0.9)",pointBorderColor:"rgba(255, 0, 0, 0.9)",order:2},{type:"bar",label:"Real Close vs Predicted Close",data:a.ClsPredicted,backgroundColor:"rgba(0,0, 0, 0.7)",borderColor:"rgba(0, 0, 0, 0.9)",pointBorderColor:"rgba(0, 0, 0, 0.7)",order:3},{type:"bar",label:"Predicted Close vs Real Close",data:a.RealClose,backgroundColor:"rgba(10, 204, 0, 0.9)",borderColor:"rgba(10, 204, 0, 0.9)",pointBorderColor:"rgba(10, 204, 0, 0.9)",order:4},{type:"bar",label:"Real High vs Predicted High",data:a.RealHigh,backgroundColor:"rgba(0, 0, 0, 0.6)",borderColor:"rgba(0, 0, 0, 0.6)",pointBorderColor:"rgba(0, 0, 0, 1)",order:5},{type:"bar",label:"Predicted High vs Real High",data:a.HghPredicted,backgroundColor:"rgba(22, 91, 160, 0.9)",borderColor:"rgba(22, 91, 160, 0.9)",pointBorderColor:"rgba(22, 91, 160, 0.9)",order:6},{type:"bar",label:"Real Low vs Predicted Low",data:a.RealLow,backgroundColor:"rgba(0, 0, 0, 0.9)",borderColor:"rgba(0, 0, 0, 0.9)",pointBorderColor:"rgba(0, 0, 0, 0.9)",order:7},{type:"bar",label:"Predicted Low vs Real Low",data:a.LowPredicted,backgroundColor:"rgba(255, 255, 0, 0.9)",borderColor:"rgba(255, 255, 0, 0.9)",pointBorderColor:"rgba(255, 255, 0, 0.9)",order:8}]}});default:return e}},_=Object(D.combineReducers)({bitcoin:H,brain:V}),U=o(149),G=o(150),J=Object(D.createStore)(_,Object(U.composeWithDevTools)(Object(D.applyMiddleware)(G.a)));l.a.render(Object(P.jsx)(c.a,{store:J,children:Object(P.jsx)(L,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[350,1,2]]]);
//# sourceMappingURL=main.43a1aa1d.chunk.js.map