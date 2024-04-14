function closeSidebar(){
    let leftBar = document.getElementById("leftbar");
    let SidebarClose = document.getElementById("SidebarClose");
    let content = document.getElementById("content");
    if(leftBar.style.width=="32%"){
        leftBar.style.width="16px";
        SidebarClose.innerHTML="&gt;";
        SidebarClose.style.left ="0";
        content.style.width="95%";}
    else{
        leftBar.style.width="32%";
        SidebarClose.innerHTML="&lt;";
        SidebarClose.style.left ="30%";
        content.style.width="65%";
    }
}

function initFooter(){

    let id = getHtmlDocName();
    let currentIndex = getNodeNumber(id);
    let prevChapter = document.getElementById("prevChapter");
    let prevIndex = currentIndex - 1;
    let name = dataList[prevIndex].name;
    name  = name.replace(/[^0-9a-zA-Z_]/g,"");
    let url = "http://oeasy.org/category/system/linux/";
    url += name.substring(0,2)+"/";
    url += name.substring(0,4)+"/";
    url += name+"/";
    url +=  name + ".html";
    
    prevChapter.innerHTML="<a href=\""+url+"\">"  + "上一章" +name +"</a>";
    let nextChapter = document.getElementById("nextChapter");
    let nextIndex = currentIndex +1;
    name = dataList[nextIndex].name;
    name  = name.replace(/[^0-9a-zA-Z_]/g,"");
    url = "http://oeasy.org/category/system/linux/";
    url += name.substring(0,2)+"/";
    url += name.substring(0,4)+"/";
    url += name+"/";
    url +=  name + ".html";
    
    nextChapter.innerHTML="<a href=\""+url+"\">"  + "下一章" +name +"</a>";


}

function getHtmlDocName() {
    var str = window.location.href;
    str = str.substring(str.lastIndexOf("/") + 1);
    str = str.substring(0,6);
    return str;
}
function initHeader(){
    var myHeader = document.getElementById("myHeader");
    var str = "[当前位置]<a href=\"http://oeasy.org\">oeasy主站<\/a> >";

    let id = getHtmlDocName();
    let currentIndex = getNodeNumber(id);
    let lastTwo = id.substring(4,2);
    let parentIndex = getNodeNumber(dataList[currentIndex].parentId);
    if(lastTwo=="00"){
    let url = window.location.href;
    url = "http://oeasy.org/category/system/linux/";
    let grandId = dataList[grandParentIndex].id;
    let name =dataList[grandParentIndex].name;
    name  = name.replace(/[^0-9a-zA-Z_]/g,"");
    url += grandId.substring(0,2)+"/";
    url += grandId.substring(0,4)+"/";
    url +=  name + ".html";
    name = dataList[grandParentIndex].name;
    str += "<a href=\""+url+"\">"+name+"<\/a> >";
    }
    let parentId = dataList[parentIndex].id;
    url = "http://oeasy.org/category/system/linux/";
    url += parentId.substring(0,2)+"/";
    url += parentId.substring(0,4)+"/";
    name = dataList[parentIndex].name;
    name  = name.replace(/[^0-9a-zA-Z_]/g,"");
    url += name + ".html";
    name = dataList[parentIndex].name;
    str += "<a href=\""+url+ "\">"+ name + "<\/a> >";

    var str1 = window.location.href;
    name = str1.substring(str1.lastIndexOf("/") + 1);
    name = name.substring(0,name.length-5);
    str += "<a href=\""+window.location.href+"\">"+name+"<\/a>"

    //str += dataList[currentIndex].name;
    //str += dataList[parentIndex].name;

    myHeader.innerHTML = str;
}

function getNodeNumber(id){
    for(i=0;i<dataList.length;i++){
        if(dataList[i].id==id){
            return i;
        }
    }
}
window.onload=function(){
    initData();
    simple01(treeClick);
    //alert(document.documentElement.clientHeight);
    let leftbar = document.getElementById("leftbar");
    leftbar.style.height =  document.documentElement.clientHeight+"px";
    var id = getHtmlDocName(); 
    var DivId = document.getElementById(id);
    document.getElementById("leftbar").scrollTop =DivId.offsetTop;
    initHeader();
    initFooter();
}
function initData(){
    window.dataList=[];
    dataList.push({id:'010000',name:'010000快速入手start',parentId:""});//根
    dataList.push({id:'010100',name:'010100图形与终端terminal',type:'folder',parentId:"010000"});//默认树
    dataList.push({id:'010101',name:'010101查看内核版本uname',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010102',name:'010102查看发行版distro',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010103',name:'010103查看当前位置pwd',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010104',name:'010104灵魂之问whatis',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010105',name:'010105详细手册man',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010106',name:'010106列表ls',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010107',name:'010107那啥在哪whereis',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010108',name:'010108到底哪个which',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010109',name:'010109清屏clear',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010110',name:'010110本章回顾summary',type:'function',parentId:"010100"});//默认树

    dataList.push({id:'010200',name:'终端应用实例0102',type:'folder',parentId:"010000"});//默认树
    dataList.push({id:'010201',name:'010201持续输出yes',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010202',name:'010202软件包安装apt',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010203',name:'010203显示logo',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010204',name:'010204字符画figlet',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010205',name:'010205彩色字符画toilet',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010206',name:'010206小火车sl',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010207',name:'010207黑客帝国matrix',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010208',name:'010208晃眼特效bb',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010209',name:'010209装酷利器hollywood',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010209',name:'010210应用管理 aptitude',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010210',name:'010211牛说cowsay',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010211',name:'010212管道pipe',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010212',name:'010213中文输入fcitx',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010213',name:'010214字符画转化asciiview',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010214',name:'010215随机谚语fortune',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010215',name:'010216随机诗词fortunezh',type:'function',parentId:"010200"});//默认树

    dataList.push({id:'010300',name:'图形应用0103',type:'function',parentId:"010000"});//默认树
    dataList.push({id:'010301',name:'010301桌面宠物pet',type:'function',parentId:"010300"});//默认树
    dataList.push({id:'010302',name:'010302火狐firefox',type:'function',parentId:"010300"});//默认树
    dataList.push({id:'010303',name:'010303文件管理器nautilus',type:'function',parentId:"010300"});//默认树
    dataList.push({id:'010304',name:'010304图形界面xfce',type:'function',parentId:"010300"});//默认树

    dataList.push({id:'010400',name:'010400大总结Summary',type:'function',parentId:"010000"});//默认树


}
function simple01(click){
    var tree=new Tree('simple-01');//Tree有一个参数id，方便在其它地方调用，可使用方法Tree.getTree(id)获取树
    parseTreeNode(tree, "", dataList,click);
    tree.show('simple-01-parent', undefined, true);
}
function parseTreeNode(parentNode, parentId, dataList, click, dblclick, contextmenu, nodeNameColor, checkbox){
    var node;
    for (var i = 0,length=dataList.length; i < length; i++) {
        if(dataList[i].parentId==parentId){
            var node=new TreeNode({
                id			:	dataList[i].id,
                name		:	dataList[i].name,
                type		:	dataList[i].type,
                click		:	click,
                dblclick	:	dblclick,
                contextmenu	:	contextmenu,
                nameColor	:	nodeNameColor||"#000000",
                checkbox	:	checkbox||undefined,
                open		:	true
            });
            parentNode.append(node);
            parseTreeNode(node, node.id, dataList, click, dblclick, contextmenu, nodeNameColor, checkbox);
        }
    }
}
function treeClick(node){
    var url = "http://oeasy.org/category/system/linux/";
    url = url+node.name.substring(0,2)+"/";
    url = url+node.name.substring(0,4)+"/";
    var name  = node.name.replace(/[^0-9a-zA-Z_]/g,"");
    url = url +name+"\/"+name+".html";
    window.open(url,"_self");
    //alert("单击了："+url);

}
function codeStyle(code){
    code=code.replace(new RegExp('<','g'),'&lt;');
    code=code.replace(new RegExp('>','g'),'&gt;');
    code=code.replace(new RegExp('&lt;div','g'),'<font color="green">&lt;div</font>');
    code=code.replace(new RegExp('\t\t\t\t\t','g'),'');
    code=code.replace(new RegExp(' ','g'),'&nbsp;');
    code=code.replace(new RegExp('\n','g'),'<br/>');
    code=code.replace(new RegExp('\t','g'),'&nbsp;&nbsp;&nbsp;&nbsp;');
    code=code.replace(new RegExp('function','g'),'<font color="#7f0055">function</font>');
    code=code.replace(new RegExp('var','g'),'<font color="#7f0055">var</font>');
    code=code.replace(new RegExp('return','g'),'<font color="#7f0055">return</font>');
    code=code.replace(new RegExp('false','g'),'<font color="#7f0055">false</font>');
    code=code.replace(new RegExp('true','g'),'<font color="#7f0055">true</font>');
    return code;
}
function createDialog(initWidth, initHeight){
    var dialog=document.getElementById('dialog');
    if(!dialog){
        var width=initWidth||500;
        var height=initHeight||200;
        var top=(screenHeight()-height)/2+(document.body.scrollTop||document.documentElement.scrollTop);
        var left=(screenWidth()-width)/2;
        dialog=document.createElement("div");
        dialog.id="dialog";
        dialog.style.cssText='width:'+width+'px;height:'+height+'px;position:absolute;z-index:4000;top:'+top+'px;left:'+left+'px;border:3px solid blue;background:#FFFFFF;text-align:center;overflow:auto;';
        dialog.onclick=function(event){
            var event=event||window.event;
            if(event){
                event.returnValue=false;
                event.cancelBubble=true;
            }
            return false;
        }
        document.body.appendChild(dialog);
        document.body.onclick=function(){
            document.getElementById('dialog').style.display="none";
        }
    }else{
        var width=initWidth||500;
        var height=initHeight||200;
        var top=(screenHeight()-height)/2+(document.body.scrollTop||document.documentElement.scrollTop);
        var left=(screenWidth()-width)/2;
        dialog.style.display="";
        dialog.style.top=top+"px";
        dialog.style.left=left+"px";
        dialog.style.width=width+"px";
        dialog.style.height=height+"px";
    }
    return dialog; 
}
function screenWidth(){
    return document.documentElement.clientWidth||document.documentElement.offsetWidth||document.body.clientWidth||document.body.offsetWidth;
};
function screenHeight(){
    return document.documentElement.clientHeight||document.documentElement.offsetHeight||document.body.clientHeight||document.body.offsetHeight;
};

