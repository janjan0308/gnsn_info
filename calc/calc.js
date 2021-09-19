

const totalAtk =["total ATK"];

const wepAtk = ["wepon ATK"];
const charAtk = ["char ATK"];

const hanamain  =["Base HP"];
const hanemain  =["Base ATK"];
const tokimain  =["HP%","DEF%","ATK%","Elemental Mastery","Energy Recharge%"];
const sakamain  =["HP%","DEF%","ATK%","Elemental Mastery","pyro DMG Bonus%",
"hydro DMG Bonus%","anemo DMG Bonus%","electro DMG Bonus%","cyro DMG Bonus%",
"geo DMG Bonus%","Physical DMG Bonus%"];
const atamamain =["HP%","DEF%","ATK%","Elemental Mastery","CRIT Rate%","CRIT DMG%","Healing Bonus%"];
const subStat   =["HP","ATK","DEF","HP%","ATK%","DEF%","Elemental Mastery","Energy Recharge%","CRIT Rate%","CRIT DMG%"];;
const anystat =["wepon ATK","char ATK","Base HP","Base ATK","HP","ATK","DEF","HP%","DEF%","ATK%","Elemental Mastery","Energy Recharge%","pyro DMG Bonus%","hydro DMG Bonus%","anemo DMG Bonus%","electro DMG Bonus%","cyro DMG Bonus%","geo DMG Bonus%","Physical DMG Bonus%","CRIT Rate%","CRIT DMG%","Healing Bonus%"];
const charWhiteHP =["charWhite HP"]
const charWhiteDEF =["charWhite DEF"]

class stat{
    constructor(num){
        this.num = num;
        this.reset();
    }
    // constructor(num,totalAtk, wepAtk, atkP, atkflat){
    //     this.num = num;

    //     this.totalAtk = totalAtk;
    //     this.wepAtk  = wepAtk;
    //     this.charAtk = totalAtk-wepAtk;
    //     this.atkP = atkP;
    //     this.atkflat = atkflat;
    // }

    reset(){
        this.totalAtk = 0;
        this.wepAtk  = 0;
        this.charAtk = 0;
        this.baseAtk = 0;
        this.atkP = 0;
        this.atkflat = 0;

        this.ATK = 0;

        this.critRate = 0;
        this.critDMG = 0;
        this.pdb = 0;
        this.hdb = 0;
        this.adb = 0;
        this.edb = 0;
        this.cdb = 0;
        this.gdb = 0;
        this.phydb = 0;

        this.HP = 0;
        this.DEF = 0;
        this.charHP = 0;
        this.charDEF = 0;
        this.baseHP = 0;
        this.HPflat = 0;
        this.DEFflat = 0;
        this.HPp = 0;
        this.DEFp = 0;

        this.EM =0;
        this.ERp = 0;
    }

    // createShowDiv(){
    //     var div = document.createElement("div");
    //     var p = document.createElement("pre");
    //     p.classList.add("small")
    //     var ret = "\n";
    //     p.innerHTML= "";

    //     var str="";

    //     str += this._onelinestr("total Atk", this.totalAtk)
    //     str += this._onelinestr("char Atk",  this.charAtk)
    //     str += this._onelinestr("wepon Atk", this.wepAtk)
    //     str += this._onelinestr("Base Atk(hane)", this.baseAtk)
    //     str += this._onelinestr("atk%",      this.atkP)
    //     str += this._onelinestr("atk flat",  this.atkflat)

    //     str+=ret;
    //     str += this._onelinestr("ATK",  this.ATK)

    //     p.innerHTML=str;

    //     div.appendChild(p);

    //     return div;
    // }

    createShowDiv(){
        var ret = "\n";

        var rowdiv = document.createElement("div");
        rowdiv.classList.add("row","small", "showDiv");

        var col1 = document.createElement("div");
        col1.classList.add("col-3");

        var p1 = document.createElement("pre");
        p1.innerHTML= "";
        var str="";
        str += this._onelinestr("total Atk", this.totalAtk)
        str += this._onelinestr("char Atk",  this.charAtk)
        str += this._onelinestr("wepon Atk", this.wepAtk)
        str += this._onelinestr("Base Atk", this.baseAtk)
        str += this._onelinestr("atk%",      this.atkP)
        str += this._onelinestr("atk flat",  this.atkflat)
        str+=ret;
        str += this._onelinestr("ATK",  this.ATK)
        str += this._onelinestr("crit rate%", this.critRate);
        str += this._onelinestr("crit DMG%",  this.critDMG);
        p1.innerHTML=str;

        col1.appendChild(p1);


        var col2 = document.createElement("div");
        col2.classList.add("col-3");
        p1 = document.createElement("pre");
        p1.innerHTML= "";
        var str="";
        str+=ret;
        str += this._onelinestr("pyro DMGB%", this.pdb);
        str += this._onelinestr("hydr DMGB%", this.hdb);
        str += this._onelinestr("elec DMGB%", this.edb);
        str += this._onelinestr("cyro DMGB%", this.cdb);
        str += this._onelinestr("geo  DMGB%", this.gdb);
        str += this._onelinestr("phys DMGB%", this.phydb);
        p1.innerHTML=str;
        col2.appendChild(p1);

        var col3 = document.createElement("div");
        col3.classList.add("col-3");
        p1 = document.createElement("pre");
        p1.innerHTML= "";
        var str="";
        str +="outDMG 100% \n";
        str += this._onelinestr("pyro", (1 + this.pdb/100.0) * this.ATK);
        str += this._onelinestr("hydr", (1 + this.hdb/100.0) * this.ATK);
        str += this._onelinestr("elec", (1 + this.edb/100.0) * this.ATK);
        str += this._onelinestr("cyro", (1 + this.cdb/100.0) * this.ATK);
        str += this._onelinestr("geo ", (1 + this.gdb/100.0) * this.ATK);
        str += this._onelinestr("phys", (1 + this.phydb/100.0) * this.ATK);

        let eleDBs = [this.pdb,this.hdb,this.edb,this.cdb,this.gdb,this.phydb];
        let maxeleDB = eleDBs.reduce((a,b) => Math.max(a,b))
        let eleDBs2 = eleDBs.filter(i => i !== maxeleDB)
        let seceleDB = maxeleDB;
        if(eleDBs2.length != 0){
            seceleDB = eleDBs2.reduce((a,b) => Math.max(a,b))
        }

        let firstD =     ((1 + maxeleDB/100.0) * this.ATK)
        let secD =       ((1 + seceleDB/100.0) * this.ATK)
        let firstcritD = ((1 + maxeleDB/100.0) * this.ATK) * (1+this.critDMG/100.0)
        let seccritD =   ((1 + seceleDB/100.0) * this.ATK) * (1+this.critDMG/100.0)
        str += this._onelinestr("crit(1st)",firstcritD );
        str += this._onelinestr("crit(2nd)",seccritD );

        let cr = this.critRate/100.0
        str += this._onelinestr("avg(1st)",firstcritD*cr + firstD*(1-cr) );
        str += this._onelinestr("avg(2nd)",seccritD*cr   + seccritD*(1-cr) );


        p1.innerHTML=str;
        col3.appendChild(p1);


        var col4 = document.createElement("div");
        col4.classList.add("col-3");
        p1 = document.createElement("pre");
        p1.innerHTML= "";
        var str="";
        
        str += this._onelinestr("ALL HP", this.HP);
        str += this._onelinestr("hp white", this.charHP);
        str += this._onelinestr("hp green",(this.baseHP + this.HPflat+((this.HPp/100.0)*this.charHP)));

        str += this._onelinestr("ALL DEF", this.DEF);
        str += this._onelinestr("DEF white", this.charDEF);
        str += this._onelinestr("DEF green",(this.DEFp/100.0)*this.charDEF + this.DEFflat);
        str+=ret;
        str += this._onelinestr("Ele Recha%",this.ERp)
        str += this._onelinestr("Ele mstry",this.EM)

        p1.innerHTML=str;
        col4.appendChild(p1);



        rowdiv.appendChild(col1);
        rowdiv.appendChild(col2);
        rowdiv.appendChild(col3);
        rowdiv.appendChild(col4);
        
        
        return rowdiv;
    }

    _onelinestr(lab, v){
        var str="";
        v = Number(v);
        str = lab + " : " + v.toFixed(1) + "\n";

        return str;
    }

    setv(str,v){
        //todo
        v = Number(v);
        console.log("setvalue str: " + str)
        console.log("setvalue v: " + v)


        switch (str){
            case "wepon ATK":
                this.wepAtk += v;
                break;
            case "char ATK":
                this.charAtk += v;
                break;
            case "Base HP":
                this.baseHP += v
                break;
            case "Base ATK":
                this.baseAtk += v;
                break;
            case "total ATK":
                this.totalAtk += v;
                break;
            case "HP":
                this.HPflat += v
                break;
            case "ATK":
                this.atkflat += v;
                break;
            case "DEF":
                this.DEFflat += v;
                break;
            case "HP%":
                this.HPp += v
                break;
            case "DEF%":
                this.DEFp += v
                break;
            case "ATK%":
                this.atkP += v;
                break;
            case "Elemental Mastery":
                this.EM += v;
                break;
            case "Energy Recharge%":
                this.ERp += v;
                break;
            case "pyro DMG Bonus%":
                this.pdb += v;
                break;
            case "hydro DMG Bonus%":
                this.hdb += v;
                break;
            case "anemo DMG Bonus%":
                this.adb += v;
                break;
            case "electro DMG Bonus%":
                this.edb += v;
                break;
            case "cyro DMG Bonus%":
                this.cdb += v;
                break;
            case "geo DMG Bonus%":
                this.gdb += v;
                break;
            case "Physical DMG Bonus%":
                this.phydb += v;
                break;
            case "CRIT Rate%":
                this.critRate += v;
                break;
            case "CRIT DMG%":
                this.critDMG += v;
                break;
            case "Healing Bonus%":

                break;
            case "charWhite HP":
                this.charHP = v;
                break;
            case "charWhite DEF":
                this.charDEF = v;
                break;
                    
        }

    }

    calc(){
        if(this.charAtk == 0){
            this.charAtk = this.totalAtk - this.wepAtk;
        }else if(this.totalAtk == 0){
            this.totalAtk = this.wepAtk + this.charAtk;
        }
        

        this.ATK = (this.totalAtk * (1+(this.atkP/100.0))) + this.atkflat + this.baseAtk;

        this.HP = (this.charHP) +this.baseHP + this.HPflat+((this.HPp/100.0)*this.charHP)
        this.DEF = (this.charDEF) + this.DEFflat +((this.DEFp/100.0)*this.charDEF);


    }



}

class item{
    constructor(name){
        this.name = name;
        this.type = null;

        this.arrstr=[];
        this.arrv = [];
    }


}




document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('#add').addEventListener('click', function(){
        createframe();

    });


    var mkdiv = document.querySelector('.maker');
    createitem(mkdiv,0,null);

    //<button type="button" class="list-group-item list-group-item-action">A second item</button>
    var listdiv = document.querySelector('.list');
    

    loadListItem();
    // var btn = createListItem("str1")
    // listdiv.appendChild(btn)
    // var btn = createListItem("str2")
    // listdiv.appendChild(btn)
    // var btn = createListItem("str3")
    // listdiv.appendChild(btn)



});

function loadListItem(){
    var listdiv = document.querySelector('.list');
    while (listdiv.firstChild) {
        listdiv.removeChild(listdiv.lastChild);
    }

    key_str =localStorage.getItem("keyList");
    keys = JSON.parse(key_str);
    if(keys==null){
        keys = [];
    }
    
    for(var i =0; i < keys.length; i++){
        var btn = createListItem(keys[i])
        listdiv.appendChild(btn)

    }
    



}

// サマリーの数
var number=1;
var summarys = [];

function createListItem(str){
    var btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("list-group-item");
    btn.classList.add("list-group-item-action");
    btn.appendChild(document.createTextNode(str) );
    btn.addEventListener('click', function(){
        listItemClick(str);
    });


    btn.setAttribute("draggable",true)
    btn.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text", str);
        var tagdivs = document.querySelectorAll("#pre > div");
        for(var i = 0 ; i < tagdivs.length; i++){
            let tagdiv = tagdivs[i].children[0];
            tagdiv.classList.add("bg-dark")
        }
    }, false);

    btn.addEventListener("dragend", function(event) {
        var tagdivs = document.querySelectorAll("#pre > div");
        for(var i = 0 ; i < tagdivs.length; i++){
            let tagdiv = tagdivs[i].children[0];
            tagdiv.classList.remove("bg-dark")
        }
    }, false);



    return btn;
}

function listItemClick(str){

    var item_str = localStorage.getItem(str);
    var itemInstance = JSON.parse(item_str);

    var mkdiv = document.querySelector('.maker');
    mkdiv.removeChild(mkdiv.lastChild);
    createitem(mkdiv,0,itemInstance);


}


function createframe(){

    var row = document.createElement("div");
    row.id="row" + number;
    row.classList.add("row");
    row.classList.add("border");

    // var btn = document.createElement("button");
    // btn.appendChild(document.createTextNode("add item") );
    // btn.classList.add("btn");
    // btn.classList.add("btn-primary");
    // btn.classList.add("btn-sm");


    var col = document.createElement("div");
    const str = "summary " + number; 
    
    var newContent = document.createTextNode(str);
    col.appendChild(newContent);
    // col.appendChild(btn);
    col.classList.add("col-8");
    col.classList.add("border-end");

    row.appendChild(col);

    var col2 = document.createElement("div");
    col2.classList.add("col-4");
    //todo drop
    col.addEventListener("dragenter", function(event) {
        // デフォルトアクションをキャンセル
        event.preventDefault();
        // col.classList.add("border","border-4","border-primary");
    }, false);
    col.addEventListener("dragover", function(event) {
        // デフォルトアクションをキャンセル
        event.preventDefault();
    }, false);
    col.addEventListener("dragleave", function(event) {
    }, false);

    col.addEventListener("drop", function(event) {
        //デフォルトアクションをキャンセル
        event.preventDefault();

        // データ転送により送られてきたデータ
        var str = event.dataTransfer.getData("text");
        console.log(str)
        console.log(row.id)

        var mydiv = createSItem(str,row.id)
        col2.appendChild(mydiv)

        calcSummary(row.id);

        // // ドロップされたimg要素
        // var img = document.getElementById(id);
        // // p要素を生成しカートに追加
        // var p = document.createElement("p");
        // p.appendChild(img);
        // cart.appendChild(p);
        col.classList.remove("border","border-4","border-primary");
    }, false);

    row.appendChild(col2);

    // var row2 = document.createElement("div");
    // row2.classList.add("row");
    // col2.appendChild(row2);

    // btn.addEventListener('click', function(){
    //     createitem(row2,0,null);

    // });



    var currentDiv = document.getElementById("pre");
    var tagbtn = document.querySelector('#add');

    // currentDiv.appendChild(row);
    currentDiv.insertBefore(row, tagbtn);

    //デフォルトの設定
    // createitem(row2,2, null);
    // createitem(row2,3, null);
    // createitem(row2,4, null);
    // createitem(row2,5, null);
    // createitem(row2,6, null);
    // createitem(row2,7, null);


    // var mydiv = createSItem("char base + Wepon1")
    // var mydiv2 = createSItem("ATK base + Wepon")
    // col2.appendChild(mydiv)
    // col2.appendChild(mydiv2)


    //summary instance
    var s = new stat(number)
    summarys.push(s);
    var d = s.createShowDiv();
    col.appendChild(d);

    number += 1;
    // tooltipload();

    

    return true;
}

// function selChange(event){
//     //console.log(event.currentTarget.value);
//     //alert("change" + event.currentTarget.value);
//     initItem(event.currentTarget.parentElement, event.currentTarget.value);
//     return true;
// }


// function tooltipload(){

//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//         return new bootstrap.Tooltip(tooltipTriggerEl)
//     })
// }

function calcSummary(rowid){
    
    var tagrow = document.getElementById(rowid);
    var itemnamedivs = tagrow.getElementsByClassName("sitem");
    var num = Number(rowid.substr(3,rowid.length))-1;
    
    summarys[num].reset();

    console.log(tagrow);
    
    for(var i = 0 ; i < itemnamedivs.length; i++){
        console.log(itemnamedivs[i].textContent);
        var itemname = itemnamedivs[i].textContent;
        var item_str = localStorage.getItem(itemname);
        var itemIns = JSON.parse(item_str);

        for(var j = 0; j<itemIns.arrstr.length; j++){
            summarys[num].setv(itemIns.arrstr[j], itemIns.arrv[j]);
        }

        

    }

    summarys[num].calc();

    var newdiv = summarys[num].createShowDiv();
    var olddiv = tagrow.querySelector(".showDiv");
    var parent = olddiv.parentElement;
    parent.removeChild(olddiv);
    parent.appendChild(newdiv);
    console.log(summarys[num]);
    

}



function createSItem(str, rowid){
    var conte = document.createElement("div");
    conte.classList.add("border-bottom","row");
    
    
    var mybtn = document.createElement("button");
    mybtn.type = "button";
    mybtn.classList.add("btn","btn-primary","btn-sm","col-auto");
    mybtn.appendChild(document.createTextNode("del") );
    conte.appendChild(mybtn);

    mybtn.addEventListener('click', function(){
        conte.parentElement.removeChild(conte);
        calcSummary(rowid);

    });

    var text = document.createElement("div");
    text.classList.add("col","sitem");
    text.textContent=str;
    conte.appendChild(text)


    //マウスが要素上に入った時
    text.addEventListener('mouseover', (event) => {
        var a = text.getElementsByClassName("myhover");
        if(a.length == 0){
            // console.log("enter")
            var item_str = localStorage.getItem(str);
            var itemInstance = JSON.parse(item_str);
            var itemstr = getItemPreStr(itemInstance);

            var hover = document.createElement("div");
            var pre = document.createElement("pre");
            var prestr = itemstr;
            pre.appendChild(document.createTextNode(prestr) );
            hover.appendChild(pre);
            var l = event.clientX + 10;
            var t = event.clientY + 10;
            hover.style= "left: " + l + "px; top: " + t +"px;"
            hover.classList.add("border", "myhover")
            text.appendChild(hover);

        }

    }, false);
    
    //マウスが要素上から離れた時
    text.addEventListener('mouseleave', () => {
        // console.log("mouseleave")
        var a = text.getElementsByClassName("myhover");
        for(var i = 0 ; i < a.length ; i ++){
            text.removeChild(a[i]);
        }


    }, false);
    // var link = document.createElement("a");
    // link.textContent=str;
    // text.appendChild(link)
    // link.setAttribute("href","#")
    // link.setAttribute("data-bs-toggle","tooltip" )
    // link.setAttribute("data-bs-html","true" )
    // link.setAttribute("title","<b>HTML</b><u>付き</u><em>ツールチップ</em>")




    
    // col2.appendChild(mydiv)
    return conte;
}

function selChange2(ele, v, ins){
    initItem(ele, v, ins);
    return true;
}


function initItem(tagEle, num, ins){
    var childs = tagEle.children;
    var childsnumber = childs.length;
    for(var i = childsnumber-1 ; i > 0; i--){
        childs[i].remove();
    }
    
    var rowdiv = createRowdiv();
    var coldiv1 = createColdiv(3);
    var coldiv2 = createColdiv();
    
    rowdiv.appendChild(coldiv1);
    rowdiv.appendChild(coldiv2);


    coldiv1.textContent="Name";
    var ta1 = document.createElement("input");
    ta1.style = "width:100%";

    coldiv2.appendChild(ta1);
    tagEle.appendChild(rowdiv);


    if(ins != null){
        num = Number(ins.type);
    }
    
    

    var lsr = [];

    if(num == 1){
        //char base + Wepon
        ta1.value ="char base + Wepon";
        var row1 = createStat("char ATK",charAtk);
        var row2 = createStat("wepon ATK",wepAtk);
        var row3 = createStat("sub",subStat);
        tagEle.appendChild(row1);
        tagEle.appendChild(row2);
        tagEle.appendChild(row3);
        lsr.push(ta1,row1,row2,row3);
    }else if(num == 2){
        //ATK base + Wepon
        ta1.value ="ATK base + Wepon";
        var row1 = createStat("total ATK",totalAtk);
        var row2 = createStat("wepon ATK",wepAtk);
        var row3 = createStat("sub",subStat);
        tagEle.appendChild(row1);
        tagEle.appendChild(row2);
        tagEle.appendChild(row3);
        lsr.push(ta1,row1,row2,row3);

    }else if(num == 3){
        //artifacts - 花
        ta1.value ="artifacts - 花";
        var row1 = createStat("main",hanamain);
        var row2 = createStat("sub",subStat);
        var row3 = createStat("sub",subStat);
        var row4 = createStat("sub",subStat);
        var row5 = createStat("sub",subStat);
        tagEle.appendChild(row1);
        tagEle.appendChild(row2);
        tagEle.appendChild(row3);
        tagEle.appendChild(row4);
        tagEle.appendChild(row5);
        lsr.push(ta1,row1,row2,row3,row4,row5);
        
    }else if(num == 4){
        //artifacts - 羽
        ta1.value ="artifacts - 羽";
        var row1 = createStat("main",hanemain);
        var row2 = createStat("sub",subStat);
        var row3 = createStat("sub",subStat);
        var row4 = createStat("sub",subStat);
        var row5 = createStat("sub",subStat);
        tagEle.appendChild(row1);
        tagEle.appendChild(row2);
        tagEle.appendChild(row3);
        tagEle.appendChild(row4);
        tagEle.appendChild(row5);
        lsr.push(ta1,row1,row2,row3,row4,row5);

    }else if(num == 5){
        //artifacts - 時
        ta1.value ="artifacts - 時";
        var row1 = createStat("main",tokimain);
        var row2 = createStat("sub",subStat);
        var row3 = createStat("sub",subStat);
        var row4 = createStat("sub",subStat);
        var row5 = createStat("sub",subStat);
        tagEle.appendChild(row1);
        tagEle.appendChild(row2);
        tagEle.appendChild(row3);
        tagEle.appendChild(row4);
        tagEle.appendChild(row5);
        lsr.push(ta1,row1,row2,row3,row4,row5);

    }else if(num == 6){
        //artifacts - 杯
        ta1.value ="artifacts - 杯";
        var row1 = createStat("main",sakamain);
        var row2 = createStat("sub",subStat);
        var row3 = createStat("sub",subStat);
        var row4 = createStat("sub",subStat);
        var row5 = createStat("sub",subStat);
        tagEle.appendChild(row1);
        tagEle.appendChild(row2);
        tagEle.appendChild(row3);
        tagEle.appendChild(row4);
        tagEle.appendChild(row5);
        lsr.push(ta1,row1,row2,row3,row4,row5);

    }else if(num == 7){
        //artifacts - 冠
        ta1.value ="artifacts - 冠";
        var row1 = createStat("main",atamamain);
        var row2 = createStat("sub",subStat);
        var row3 = createStat("sub",subStat);
        var row4 = createStat("sub",subStat);
        var row5 = createStat("sub",subStat);
        tagEle.appendChild(row1);
        tagEle.appendChild(row2);
        tagEle.appendChild(row3);
        tagEle.appendChild(row4);
        tagEle.appendChild(row5);
        lsr.push(ta1,row1,row2,row3,row4,row5);

    }else if(num == 8){
        //any
        ta1.value ="any";
        var row1 = createStat("any",anystat);
        var row2 = createStat("any",anystat);
        var row3 = createStat("any",anystat);
        var row4 = createStat("any",anystat);
        var row5 = createStat("any",anystat);
        tagEle.appendChild(row1);
        tagEle.appendChild(row2);
        tagEle.appendChild(row3);
        tagEle.appendChild(row4);
        tagEle.appendChild(row5);
        lsr.push(ta1,row1,row2,row3,row4,row5);

    }else if(num == 9){
        //charStat
        ta1.value ="charStat";
        var row1 = createStat("charWhite HP",charWhiteHP);
        var row2 = createStat("charWhite DEF",charWhiteDEF);

        tagEle.appendChild(row1);
        tagEle.appendChild(row2);

        lsr.push(ta1,row1,row2);

    }

    if(ins != null){
        setItem2div(tagEle, ins);
    }



    var btndiv = document.createElement("div");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.appendChild(document.createTextNode("save") );
    btn.addEventListener('click', function(){
        itemSave(tagEle);
    });
    btn.classList.add("btn");
    btn.classList.add("btn-primary");
    btn.classList.add("btn-sm");
    btndiv.appendChild(btn);

    var btn2 = document.createElement("button");
    btn2.type = "button";
    btn2.appendChild(document.createTextNode("del") );
    btn2.addEventListener('click', function(){
        var tagname = tagEle.querySelector("input").value;
        let f = window.confirm("del? : " + tagname + "");
        if(f == true){
            tagEle.querySelector("Select").children[0].selected = true;
            initItem(tagEle,0,null);
            itemDelete(tagname);
            loadListItem();

        }
    });
    btn2.classList.add("btn","btn-primary","btn-sm");
    btndiv.appendChild(btn2);

    tagEle.appendChild(btndiv);
    
    lsr.forEach(i =>{
        i.addEventListener('change', function(){
            btn.disabled= false;
        });
    });
    
    btn.disabled= true;


    // tagEle.appendChild(rowdiv);
    return true;
}

function getItemIns(tagEle){
    var c = tagEle.children;

    var name = c[1].children[1].children[0].value;

    var myitem = new item(name);
    myitem.type = c[0].value;

    var statnum = c.length -3;
    for(var i = 0 ; i< statnum ; i++){
        var index = i + 2;
        var str = c[index].children[0].children[0].value;
        var v =   c[index].children[1].children[0].value;

        myitem.arrstr.push(str);
        myitem.arrv.push(v);

    }

    return myitem;
}

function setItem2div(tagEle, insItem){
    var c = tagEle.children;

    c[1].children[1].children[0].value = insItem.name;
    c[0].value = Number(insItem.type);

    var statnum = c.length -2;
    for(var i = 0 ; i< statnum ; i++){
        var index = i + 2;

        var seoptions = c[index].children[0].children[0].children;
        var n = -1;
        for (var j = 0; j < seoptions.length; j++){
            if(seoptions[j].value == insItem.arrstr[i]){
                n = j;
            }
        }

        c[index].children[0].children[0].children[n].selected = true;
        c[index].children[1].children[0].value = insItem.arrv[i];
    }




}
function getItemPreStr(insItem){
    var ret = "";
    var n = "\n";
    ret += insItem.name + n;

    for (var i = 0; i < insItem.arrstr.length; i++){
        ret += insItem.arrstr[i];
        ret += " : " + insItem.arrv[i] + n;

    }
    return ret;
}

function itemDelete(str){

    //reload keyList
    key_str =localStorage.getItem("keyList");
    keys = JSON.parse(key_str);

    var newKeys = keys.filter(i => i !== str);

    localStorage.removeItem("keyList");

    var keystr = JSON.stringify(newKeys);
    localStorage.setItem("keyList", keystr);

    //remove Item
    localStorage.removeItem(str);

}

function itemSave(tagEle){
    console.log(tagEle);


    var myitem = getItemIns(tagEle);
    console.log(myitem);
    var o  = setKeyList(myitem.name);
    var s = JSON.stringify(myitem);
    if(o != false){
        localStorage.setItem(myitem.name, s);
    }
    console.log(s)


    loadListItem();
    
}

function setKeyList(key){
    
    //check key already
    key_str =localStorage.getItem("keyList");
    keys = JSON.parse(key_str);
    if(keys==null){
        keys = [];
    }
    
    var alb = false;
    const len = keys.filter(i => {return i==key}).length
    alb = len==0 ? false: true;

    var override = true;

    if(alb == true){
        //omohuku
        override = confirm("override?");
    }else{
        keys.push(key)
    }
    
    var keystr = JSON.stringify(keys);
    localStorage.setItem("keyList", keystr);

    // var s = JSON.stringify(key);
    // localStorage.setItem("keyList", s);

    return override;

}




function createStat(label, arrstr){


    var rowdiv = createRowdiv();
    var coldiv1 = createColdiv(6);
    var coldiv2 = createColdiv(6);
    rowdiv.appendChild(coldiv1);
    rowdiv.appendChild(coldiv2);
    coldiv1.textContent=label;
    var se = createSelectStat(arrstr);
    coldiv1.appendChild(se);
    var ta1 = document.createElement("input");
    ta1.setAttribute("type","number")
    ta1.setAttribute("step","0.1")
    coldiv2.appendChild(ta1);


    ta1.classList.add("form-control");
    ta1.classList.add("form-control-sm");
    
    rowdiv.classList.add("row");
    rowdiv.classList.add("border-top");
    coldiv1.classList.add("col-6");
    coldiv2.classList.add("col-6");


    return rowdiv;
}


function createitem(ele,num,ins){
    // alert("createitem " + ele.id);

    var col = document.createElement("div");



    var div1= document.createElement("div");

    
    col.appendChild(div1);

    if(ins != null){
        num = Number(ins.type);
    }


    var se = createSelect(num);
    // se.addEventListener('change', selChange);
    se.addEventListener('change', function(){
        selChange2(div1,se.value, null);
    });
    div1.appendChild(se);
    selChange2(div1,se.value, ins);


    col.classList.add("col");
    col.classList.add("border");

    // ele.children[1].children[0].appendChild(col)
    ele.appendChild(col)

    return true;
}

function createSelectStat(arrstr){
    if(typeof(arrstr) === "undefined"|| arrstr.length == 0){
        throw new Error("wrong createSelectStat(arrstr)");
    }

    var se = document.createElement("select");
    se.classList.add("form-select");
    se.classList.add("form-select-sm");
    // var op0 = document.createElement("option");
    // op0.textContent = "---";
    // se.appendChild(op0);

    for ( var i = 0 ; i< arrstr.length; i++){
        var op1 = document.createElement("option");
        op1.textContent = arrstr[i];
        op1.setAttribute("value",arrstr[i])
        se.appendChild(op1);

    }

    se.children[0].selected = true;
    return se;
}

function createSelect(num){
    var se = document.createElement("select");
    se.classList.add("form-select");
    se.classList.add("form-select-sm");

    var op0 = document.createElement("option");
    op0.textContent = "---";
    

    var op1 = document.createElement("option");
    op1.textContent = "char base + Wepon";
    op1.setAttribute("value",1)

    var op2 = document.createElement("option");
    op2.textContent = "ATK base + Wepon";
    op2.setAttribute("value",2)

    var op3 = document.createElement("option");
    op3.textContent = "artifacts - 花";
    op3.setAttribute("value",3)

    var op4 = document.createElement("option");
    op4.textContent = "artifacts - 羽";
    op4.setAttribute("value",4)

    var op5 = document.createElement("option");
    op5.textContent = "artifacts - 時";
    op5.setAttribute("value",5)

    var op6 = document.createElement("option");
    op6.textContent = "artifacts - 杯";
    op6.setAttribute("value",6)

    var op7 = document.createElement("option");
    op7.textContent = "artifacts - 冠";
    op7.setAttribute("value",7)

    var op8 = document.createElement("option");
    op8.textContent = "any";
    op8.setAttribute("value",8)

    var op9 = document.createElement("option");
    op9.textContent = "charStat";
    op9.setAttribute("value",9)

    se.appendChild(op0);
    se.appendChild(op1);
    se.appendChild(op2);
    se.appendChild(op3);
    se.appendChild(op4);
    se.appendChild(op5);
    se.appendChild(op6);
    se.appendChild(op7);
    se.appendChild(op8);
    se.appendChild(op9);

    se.children[num].selected = true;

    return se;

}

function createRowdiv(){

    var div = document.createElement("div");
    div.classList.add("row");
    div.classList.add("align-items-center");
    return div;
}
function createColdiv(num){

    var div = document.createElement("div");
    if(num == null){
        div.classList.add("col")
    }else{
        let classname = "col-" + num
        div.classList.add(classname);
    }
    
    return div;
}



// var itemstr="a<br>a<br>a<br>a<br>a<br>a<br>a<br>"
