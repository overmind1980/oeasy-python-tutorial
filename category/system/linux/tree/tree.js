function Tree(id, document_){
    /** 
     * 页面引用树js名称，此属性用于确定树下面图片的路径，请在加载页面时保证此名称的唯一性
     * @property {String} fileName
     */
    this.fileName="/tree.js";
    /** 
     * 树的首个孩子(如果存在) 
     * @property {TreeNode} first 
     */
    this.first=null;//树的首个孩子(如果存在)
    /** 
     * 树的最后一个孩子(如果存在) 
     * @property {TreeNode} last 
     */
    this.last=null;
    /** 
     * 树的总深度 
     * @property {Number} depth 
     */
    this.depth=0;
    /** 
     * 树的宽度
     * @property {Number} width 
     */
    this.width=0;
    /** 
     * 树的直属孩子集合
     * @property {Array} childs 
     */
    this.childs=[];
    /** 
     * 被选择的树节点集合
     * @property {Array} selected 
     */
    this.selected=[];
    /** 
     * 孩子数量
     * @property {Number} number 
     */
    this.number=0;
    /** 
     * 树id
     * @property {String} id 
     */
    this.id=id;
    if(!Tree.init_instance){//此判断是用来控制数下面的方法只初始化一次，不用每次new的时候都初始化
        /**
         * 创建树，此方法由树自行调用，与开发者关系不大，主要作用是：1、创建一个div作为树的node属相存储到树中，
         * 此div将存储树下所有子的节点内容，2、将树对象加载到树容器中，以便进行查找
         * @method create
         * @for Tree
         */
        Tree.prototype.create=function(){
            this.node=Tree.document.createElement('div');//
            this.node.style.textAlign='left';
            this.node.style.cursor='default';
            if(typeof Tree.type=='undefined'){
                Tree.type="default";
            }
            if(typeof Tree.trees=='undefined'){
                Tree.trees=[];
            }
            for(var i=0,length=Tree.trees.length;i<length;i++){
                if(Tree.trees[i].id==this.id){
                    Tree.trees.splice(i,1);
                    break;
                }
            }
            Tree.trees.push(this);
        };
        /**
         * 设置树js的图片根路径，根据tree.fileName进行设置
         * @method setPath
         * @for Tree
         */
        Tree.prototype.setPath=function(){
            var scripts=document.getElementsByTagName("script"),
                src,index;
            for(var i=0,length=scripts.length;i<length;i++){
                src=scripts[i].src;
                if(typeof src!='undefined'){
                    index=src.indexOf(this.fileName);
                    if(index!=-1){
                        Tree.path=src.substring(0,index+1)+"images/";
                    }
                }
            }
        };
        /**
         * 在树中追加孩子
         * @method append
         * @for Tree
         * @param {TreeNode} node 需要追加的节点，类型为：TreeNode对象
         * @param {String|Number} id 如果是插入操作，则需设置id，可以是节点id，也可为节点下标
         */
        Tree.prototype.append=function(node,id){
            node.child=node.child||(node.number===0?false:true);
            this.depth=this.depth>1?this.depth:1;
            node.depth=1;
            if(node.totalWidth>this.width){
                this.width=node.totalWidth;
                this.node.style.width=this.width+"px";
            }
            if(typeof id!='undefined'){
                if(typeof id=='number'){
                    this.childs.insert(node,id);
                }else{
                    id=this.getIndex(id);
                    this.childs.insert(node,id);
                }
            }else{
                id=this.number;
                this.childs.push(node);
            }
            var nodeNode=node.node,
                openNode=node.openNode;
            this.number++;
            node.parent=this;
            node.setRoot(this);

            if(this.number==1){
                this.node.appendChild(nodeNode);
                if(node.checkNode){
                    node.checkNode.checked=node.checkbox.checked||false;
                }
                this.first=this.last=node;
                openNode.src=Tree.path+(!node.child?"join_top.gif":(node.open?'minus_top.gif':'plus_top.gif'));
            }else{
                if(id==this.number-1){
                    this.node.appendChild(nodeNode);
                    if(node.checkNode){
                        node.checkNode.checked=node.checkbox.checked||false;
                    }
                    this.last=node;
                    this.childs[id-1].after=node;
                    node.before=this.childs[id-1];
                    openNode.src=Tree.path+(!node.child?"join_bottom.gif":(node.open?'minus_bottom.gif':'plus_bottom.gif'));
                    id--;
                    node=this.childs[id];
                    node.openNode.src=Tree.path+(id===0?(!node.child?"join_top_.gif":(node.open?"minus_top_.gif":"plus_top_.gif")):(!node.child?"join.gif":(node.open?"minus.gif":"plus.gif")));
                    node.setLine();
                }else{
                    this.node.insertBefore(nodeNode,this.childs[id+1].node);
                    if(node.checkNode){
                        node.checkNode.checked=node.checkbox.checked||false;
                    }
                    if(id===0){
                        this.first=node;
                        node.after=this.childs[1];
                        this.childs[1].before=node;
                        openNode.src=Tree.path+(!node.child?"join_top_.gif":(node.open?'minus_top_.gif':'plus_top_.gif'));
                        id+=1;
                        node=this.childs[id];
                        node.openNode.src=Tree.path+(node.open?(node==this.last?(!node.child?"join_bottom.gif":"minus_bottom.gif"):(!node.child?"join.gif":"minus.gif")):(node==this.last?(!node.child?"join_bottom.gif":"plus_bottom.gif"):(!node.child?"join.gif":"plus.gif")));
                    }else{
                        node.before=this.childs[id-1];
                        node.after=this.childs[id+1];
                        this.childs[id-1].after=node;
                        this.childs[id+1].before=node;
                        openNode.src=Tree.path+(!node.child?"join.gif":(node.open?'minus.gif':'plus.gif'));
                        id-=1;
                        node=this.childs[id];
                        node.openNode.src=Tree.path+(id===0?(!node.child?"join_top_.gif":(node.open?"minus_top_.gif":"plus_top_.gif")):(!node.child?"join.gif":(node.open?"minus.gif":"plus.gif")));
                        node.setLine();
                    }
                }
            }
        };
        /**
         * 移动节点
         * @method move
         * @for Tree
         * @param {String|Number} id 需要移动的节点id或索引下标
         * @param {Number} index 移动目的地，类型为：节点id或索引下标
         */
        Tree.prototype.move=function(id,index){
            var node;
            if(id instanceof Number){
                nodeIndex=id;
                node=this.childs[id];
            }else if(id instanceof String){
                nodeIndex=this.getIndex(id);
                node=this.get(id);
            }else{
                nodeIndex=this.getIndex(id);
                node=id;
            }
            var newNode=node.clone();
            this.remove(node);
            this.append(newNode,index);
        };
        /**
         *	替换节点（待开发，需求尚未明确）
         *	@method replace
         * 	@for Tree
         */
        Tree.prototype.replace=function(sourceId,targetId){

        };
        /**
         * 删除直属孩子节点
         * @method remove
         * @for Tree
         * @param {String|TreeNode} id 节点id或节点对象
         */
        Tree.prototype.remove=function(id){
            var node=(id instanceof String)?this.get(id):id;
            var index=this.getIndex(node);
            this.childs.splice(index,1);
            this.number--;
            this.node.removeChild(node.node);
            if(this.number===0){
                this.first=this.last=null;
            }else if(this.number==1){
                node=this.childs[0];
                this.first=this.last=node;
                node.openNode.src=Tree.path+(!node.child?"join_top.gif":(node.open?'minus_top.gif':'plus_top.gif'));
            }else if(index===0){
                node=this.childs[0];
                this.first=node;
                node.openNode.src=Tree.path+(!node.child?"join_top_.gif":(node.open?'minus_top_.gif':'plus_top_.gif'));
            }else if(index==this.number){
                node=this.childs[this.number-1];
                this.last=index;
                node.openNode.src=Tree.path+(!node.child?"join_bottom.gif":(node.open?'minus_bottom.gif':'plus_bottom.gif'));
            }
        };
        /**
         *	根据节点或节点id查找索引,二分法查找
         *	@method get
         * 	@for Tree
         *	@param {String} id 需要查找的节点id
         *	@param {Boolean} child 是否遍历整棵树，默认为true，false只查找当前孩子节点
         *	@return {TreeNode} 返回节点对象，如果未找到则返回null
         */
        Tree.prototype.get=function(id,child){
            var length=parseInt((this.number%2===0)?this.number/2:this.number/2+1);
            for(var i=0;i<length;i++){
                if(this.childs[i].id==id){
                    return this.childs[i];
                }else if(this.childs[this.number-i-1].id==id){
                    return this.childs[this.number-i-1];
                }
            }
            if((typeof child=='undefined') || child){
                var node;
                for(var i=0;i<length;i++){
                    node=this.childs[i].get(id,child);
                    if(node!=null){
                        return node;
                    }
                    node=this.childs[this.number-i-1].get(id,child);
                    if(node!=null){
                        return node;
                    }
                }
            }
            return null;
        };
        /**
         *	根据节点或节点id查找索引,二分法查找
         *	@method getIndex
         * 	@for Tree
         *	@param {String|TreeNode} id 需要查找的节点id或节点对象
         *	@return {Number} 返回指定节点是本节点中的第几个孩子
         */
        Tree.prototype.getIndex=function(id){
            var length=parseInt((this.number%2==0)?this.number/2:this.number/2+1);
            for(var i=0;i<length;i++){
                if(typeof id=='string'){
                    if(this.childs[i].id==id){
                        return i;
                    }else if(this.childs[this.number-i-1].id==id){
                        return this.number-i-1;
                    }
                }else{
                    if(this.childs[i]==id){
                        return i;
                    }else if(this.childs[this.number-i-1]==id){
                        return this.number-i-1;
                    }
                }
            }
            return -1;
        };
        /**
         * 克隆整颗树并制定id
         * @method clone
         * @for Tree
         * @param {String} id 新树id
         * @return {Tree} 新树
         */
        Tree.prototype.clone=function(id){
            var tree=new Tree(id);
            for(var key in this){
                if(!(this[key] instanceof Function)){
                    if(key=="node"){
                        tree[key]=this[key].cloneNode(true);
                    }else{
                        tree[key]=this[key];
                    }
                }
            }
            return tree;
        };
        /**
         * 将树显示在页面上
         * @method show
         * @for Tree
         * @param {String|HTMLElement<DIV>} id 页面div的id或div对象(dom对象)
         * @param {Number} index 插入到页面div指定孩子之前
         * @param {Boolean} replace 是否特换div内容，默认为不特换
         */
        Tree.prototype.show=function(id,index,replace){
            if(id instanceof String || typeof id=='string'){
                id=Tree.document.getElementById(id);
            }
            this.node.style.width=this.width+"px";
            if(replace){
                id.innerHTML="";
            }
            var childs=id.childNodes,length=0;
            if(childs){
                length=id.childNodes.length;
            }
            if(typeof index=='undefined' || index>=length){
                id.appendChild(this.node);
            }else{
                id.insertBefore(this.node,id.childNodes[index]);
            }
            var browser=window.navigator.appVersion;
            if(browser.indexOf("MSIE 6.0")!=-1){
                if(typeof this.initChecked!='undefined'){
                    this.initChecked();
                }
            }
        };
        /**
         * 查找树中checkbox被选中的对象(必须为带复选框的树)
         * @method getSelected
         * @for Tree
         * @return {Array<TreeNode>} 选中节点数组
         */
        Tree.prototype.getSelected=function(){
            for(var i=0;i<this.number;i++){
                this.childs[i].getSelected();
            }
            var endSelected=this.selected;
            this.selected=[];
            return endSelected;
        };
        /**
         * 查找树中checkbox被选中的对象(必须为带复选框的树)的id和name集合，
         * 最终返回结果为数组对象，第一个参数为id集合，第二个参数为name集合
         * @method getSelectedString
         * @for Tree
         * @return {Array<String>[2]{ids,names}}
         */
        Tree.prototype.getSelectedString=function(){
            for(var i=0;i<this.number;i++){
                this.childs[i].getSelected();
            }
            var endSelected=this.selected;
            this.selected=[];
            var ids=[],names=[];
            for(var i=0,length=endSelected.length;i<length;i++){
                ids.push(endSelected[i].id);
                names.push(endSelected[i].name);
            }
            return [ids.join(','),names.join(',')];
        };
        /**
         * 设置树中所有孩子的checked属相(必须为带复选框的树)
         * @method checked
         * @for Tree
         * @param {Boolean} checked 设置checkbox的值，true或flase
         * @param {Boolean} isChild 是否遍历整棵树
         * @param {TreeNode} node 不设置的节点
         */
        Tree.prototype.checked=function(checked,isChild,node){
            var length=this.childs.length;
            for ( var i = 0; i < length; i++) {
                this.childs[i].checked(checked,isChild,node);
            }
        };
        /**
         * 根据开发者提供的checkbox配置来设置checked的值，只适用于IE6
         * @method initChecked
         * @for Tree
         */
        Tree.prototype.initChecked=function(){
            for(var i=0;i<this.number;i++){
                this.childs[i].initChecked();
            }
        };
        /**
         * @static
         * @property {boolean} instance 是否进行初始化
         */
        Tree.init_instance=true;
    }
    this.create();//创建树时执行
    this.setPath();//创建树时执行
}
/**
 * 根据树id查找树
 * @static
 * @param id	树id
 * @return {Tree} 查找到的树
 */
Tree.getTree=function(id){
    if(!Tree.trees){
        return null;
    }
    for(var i=0,length=Tree.trees.length;i<length;i++){
        if(Tree.trees[i].id==id){
            return Tree.trees[i];
        }
    }
};
/**
 * 	树节点对象，该对象通过new TreeNode(propertys)方式创建，propertys属相说明如下：
 * 	@class TreeNode
 *	@constructor
 * 	@param {Object} propertys propertys为js对象类型，属相如下：
 * 			id			：	节点id
 * 			name		：	节点名称
 * 			type		：	节点类型，类型确定节点的图标，如：在tree的images如果有一个文件名为：help_file_node.gif，则节点类型定义为help则可现实此图标
 * 			open		：	是否展开节点，默认不展开
 * 			child		：	是否有孩子，默认为false，系统可自行设置，如无需要，可不设置
 * 			click		：	单击事件，该事件可传递当前节点对象（第一个参数）
 * 			dblclick	：	双击事件，该事件可传递当前节点对象（第一个参数）
 * 			contextmenu	:	右键事件，该事件可传递当前节点对象（第一个参数）
 * 			checkbox	:	复选框，为一对象类型，如下:
 * 							{
 * 								checked	:	是否默认选中
 * 								click	：	单击事件，复选框默认选中时孩子会一起选中，如果无需选中孩子则返回false
 * 							}
 * 							
 *		特殊属相说明：
 *			move:代表移动方式，其中：
 *				brother、brother-before:作为兄弟节点插入在最终节点之前,
 *				brother-after:作为兄弟节点插入在最终节点之后,
 *		
 *				similar、similar-before:表示只能在同级节点之间移动比,如果符合规则，则插入在同级节点之前
 *				similar-after:表示只能在同级节点之间移动比,如果符合规则，则插入在同级节点之后
 *
 *				onlypss、onlypss-before:仅仅允许插入在兄弟节点、孩子节点、父节点及父节点的孩子节点之前
 *				onlypss-after:仅仅允许插入在兄弟节点、孩子节点、父节点及父节点的孩子节点之后
 *
 *				onlypss-child:仅仅允许作为本级节点、父节点及孩子节点的孩子插入
 *
 *				child:作为孩子节点插入
 *			other:代表作为备用属性存在树中,格式为：{ key : { type : 'text|input|radio|checkbox|select' , keys : [] , values: [] ,defaultValue:''} }
 *		说明：propertys也可加入自定义属相，设置后调用方法为：node.xxx 即可
 */
function TreeNode(propertys){
    /** 
     * 当前节点对象，在this.xxx方法中调用
     * @property {TreeNode} node_
     */
    var node_=this;
    /** 
     * 节点的父节点
     * @property {TreeNode} parent
     */
    this.parent=null;
    /** 
     * 节点的孩子集合
     * @property {Array<TreeNode>} childs
     */
    this.childs=new Array();
    /** 
     * 第一个孩子节点
     * @property {TreeNode} first
     */
    this.first=null;
    /** 
     * 最后一个孩子节点
     * @property {TreeNode} last
     */
    this.last=null;//最后一个孩子节点
    /** 
     * 前一节点
     * @property {TreeNode} before
     */
    this.before=null;
    /** 
     * 下一节点
     * @property {TreeNode} after
     */
    this.after=null;
    /** 
     * 孩子数量
     * @property {Number} number
     */
    this.number=0;
    /** 
     * 节点深度
     * @property {Number} depth
     */
    this.depth=0;
    /** 
     * 节点宽度
     * @property {Number} width
     */
    this.width=0;
    /** 
     * 树总宽度
     * @property {Number} totalWidth
     */
    this.totalWidth=0;
    /** 
     * 树根节点（Tree对象）
     * @property {Tree} root
     */
    this.root=null;
    /** 
     * 是否展开节点，默认false
     * @property {Boolean} passOpen
     */
    this.passOpen=false;
    /** 
     * 当前节点展开节点对象
     * @class HTMLElement<img>
     * @constructor
     */
    this.openNode=null;
    /** 
     * 当前节点的选择对象
     * @class HTMLElement<checkbox>
     * @constructor
     */
    this.selectNode=null;
    /** 
     * 当前节点的checkbox对象
     * @class HTMLElement<checkbox>
     * @constructor
     */
    this.checkNode=null;

    if(!TreeNode.init_instance){//此判断是用来控制数下面的方法只初始化一次，不用每次new的时候都初始化
        /**
         * 初始化树节点对象，主要是生成页面对象
         * @method create
         * @for TreeNode
         * @param {Object} propertys 对于TreeNode中的propertys属相
         */
        TreeNode.prototype.create=function(propertys){
            for(var key in Tree){
                if(typeof Tree[key]!="undefined" && !(Tree[key] instanceof Function)){
                    this[key]=Tree[key];
                }
            }
            for(var key in propertys){
                this[key]=propertys[key];
            }
            if(typeof this.type=='undefined'){
                this.type="default";
            }
            this.propertys=propertys;

            this.node=Tree.document.createElement('div');
            this.node.id = propertys.id;
            this.node.style.cssText="font-size:14px;position:static;text-align:left;line-height:18px;background-color:"+(this.background||"#FFFFFF")+";";
            this.openNode=Tree.document.createElement('img');
            this.openNode.style.cssText="width:18px;vertical-align: middle;";
            this.openNode.src=Tree.path+"empty.gif";
            this.node.appendChild(this.openNode);
            if(this.checkbox){
                this.checkNode=Tree.document.createElement('input');
                this.checkNode.type="checkbox";
                this.checkNode.id=this.checkbox.id||"";
                this.checkNode.name=this.checkbox.name||"";
                this.checkNode.value=this.checkbox.value||"";
                this.checkNode.style.cssText="width:18px;height:18px;vertical-align: middle;margin:0px;padding:0px;";
                this.node.appendChild(this.checkNode);
                this.checkNode.checked=this.checkbox.checked||false;
                this.checkNode.disabled=this.checkbox.disabled||false;
                this.width+=20;
            }
            this.selectNode=Tree.document.createElement('span');
            this.selectNode.style.cssText="height:18px;vertical-align: middle;border:1px solid "+(this.background||"#FFFFFF")+";display:inline-block;";
            this.selectNode.setAttribute("userbg", this.background||"#FFFFFF");
            this.node.appendChild(this.selectNode);

            this.fileNode=Tree.document.createElement('img');
            this.fileNode.style.cssText="width:18px;vertical-align: middle;";
            this.fileNode.src=Tree.path+this.type+(this.open?(this.child?"_folder_open.gif":"_file_node.gif"):(this.child?"_folder_close.gif":"_file_node.gif"));
            this.selectNode.appendChild(this.fileNode);
            this.textNode=Tree.document.createElement('a');
            this.name=this.name||"";
            this.width+=50;
            var char_;
            for(var i=0,length=this.name.length;i<length;i++){
                char_=this.name.charCodeAt(i);
                if(char_>256){
                    this.width+=14;
                }else if(char_>=65 && char_<=90){
                    this.width+=10;
                }else{
                    this.width+=8;
                }
            }
            this.totalWidth=this.width;
            this.textNode.innerHTML=this.name||'';
            this.textNode.target=this.target||"_self";
            this.textNode.href=this.href||"javascript:;";
            this.textNode.style.cssText="margin:0px 5px 0px 5px;text-decoration: none;vertical-align: middle;cursor:pointer";
            this.textNode.style.color=this.nameColor||"#000000";
            this.node.style.width=this.width;
            this.selectNode.appendChild(this.textNode);
            if(this.other){
                this.otherNode=Tree.document.createElement("span");
                this.otherNode.innerHTML="&nbsp;";
                this.otherNode.style.color="green";
                this.width+=13;
                this.node.appendChild(this.otherNode);
                var tempNode,type,value,defaultValue;
                for(var key in this.other){
                    for(var i=0,length=key.length;i<length;i++){
                        char_=key.charCodeAt(i);
                        if(char_>256){
                            this.width+=14;
                        }else if(char_>=65 && char_<=90){
                            this.width+=10;
                        }else{
                            this.width+=8;
                        }
                    }
                    tempNode=Tree.document.createElement("span");
                    tempNode.innerHTML=key+"：";
                    this.width+=13;
                    this.otherNode.appendChild(tempNode);
                    type=this.other[key]['type'];
                    defaultValue=this.other[key].defaultValue;
                    if(type=='select'){
                        tempNode=Tree.document.createElement("select");
                        tempNode.disabled=this.other[key].disabled||false;
                        tempNode.style.fontSize="10px";
                        tempNode.style.verticalAlign="middle";
                        tempNode.style.color="green";
                        this.otherNode.appendChild(tempNode);
                        var option,maxWidth=0,tempWidth=0;
                        for(var i=0,length=this.other[key]['keys'].length;i<length;i++){
                            value=this.other[key]['values'][i];
                            option=new Option(value,this.other[key]['keys'][i]);
                            if(defaultValue && defaultValue==this.other[key]['keys'][i]){
                                option.selected=true;
                            }
                            tempNode.add(option);
                            tempWidth=0;
                            for(var j=0,length2=value.length;j<length2;j++){
                                char_=value.charCodeAt(j);
                                if(char_>256){
                                    this.width+=14;
                                }else if(char_>=65 && char_<=90){
                                    this.width+=10;
                                }else{
                                    this.width+=8;
                                }
                            }
                            if(maxWidth<tempWidth){
                                maxWidth=tempWidth;
                            }
                        }
                        this.width+=maxWidth+20;
                    }
                }
            }
        };
        /**
         * 追加孩子节点
         * @method append
         * @for TreeNode
         * @param node 需要追加的孩子节点
         * @param id 如果存在，将插入到id节点之前
         */
        TreeNode.prototype.append=function(node,id){
            this.child=true;
            node.depth=this.depth+1;
            node.parent=this;
            node.setRoot(this.root);
            this.root.depth=this.root.depth>node.depth?this.root.depth:node.depth;
            node.setWidth(node.depth);
            if(typeof id!='undefined'){
                if(typeof id=='number'){
                    this.childs.insert(node,id);
                }else{
                    id=this.getIndex(id);
                    this.childs.insert(node,id);
                }
            }else{
                id=this.number;
                this.childs.push(node);
            }
            var index=this.parent.getIndex(this,false),
                number=this.parent.number;
            if(index==number-1){
                if(this.parent==this.root){
                    if(index==0){
                        this.openNode.src=Tree.path+(this.open?'minus_top.gif':'plus_top.gif');
                    }else{
                        this.openNode.src=Tree.path+(this.open?'minus_bottom.gif':'plus_bottom.gif');
                    }
                }else{
                    this.openNode.src=Tree.path+(this.open?'minus_bottom.gif':'plus_bottom.gif');
                }
            }else{
                this.openNode.src=Tree.path+(node.open?'minus_bottom.gif':'plus_bottom.gif');
            }
            var nodeNode=node.node,openNode=node.openNode;	
            this.number++;
            nodeNode.style.display=this.open?"":"none";
            if(this.number==1){
                this.node.appendChild(nodeNode);
                this.first=this.last=node;
                openNode.src=Tree.path+(!node.child?"join_bottom.gif":(node.open?'minus_bottom.gif':'plus_bottom.gif'));
                this.fileNode.src=Tree.path+this.type+(this.open?"_folder_open.gif":"_folder_close.gif");
                node.setLine2();
            }else{
                if(id==this.number-1){
                    this.node.appendChild(nodeNode);
                    if(node.checkNode){
                        node.checkNode.checked=node.checkbox.checked||false;
                    }
                    this.last=node;
                    this.childs[id-1].after=node;
                    node.before=this.childs[id-1];
                    openNode.src=Tree.path+(!node.child?"join_bottom.gif":(node.open?'minus_bottom.gif':'plus_bottom.gif'));
                    node.setLine2();
                    id--;
                    node=this.childs[id];
                    node.openNode.src=Tree.path+(!node.child?"join.gif":(node.open?"minus.gif":"plus.gif"));
                    node.setLine();
                }else{
                    this.node.insertBefore(nodeNode,this.childs[id+1].node);
                    if(node.checkNode){
                        node.checkNode.checked=node.checkbox.checked||false;
                    }
                    if(id===0){
                        this.first=node;
                        node.after=this.childs[1];
                        this.childs[1].before=node;
                        //2016-09-23插入节点为第一节点时做了修改
                        openNode.src=Tree.path+(!node.child?"join.gif":(node.open?'minus.gif':'plus.gif'));
                        node.setLine2();
                        id++;
                        node=this.childs[id];
                        node.openNode.src=Tree.path+(node.open?(node==this.last?(!node.child?"join_bottom.gif":"minus_bottom.gif"):(!node.child?"join.gif":"minus.gif")):(node==this.last?(!node.child?"join_bottom.gif":"plus_bottom.gif"):(!node.child?"join.gif":"plus.gif")));
                    }else{
                        node.before=this.childs[id-1];
                        node.after=this.childs[id+1];
                        this.childs[id-1].after=node;
                        this.childs[id+1].before=node;
                        openNode.src=Tree.path+(!node.child?"join.gif":(node.open?'minus.gif':'plus.gif'));
                        node.setLine2();
                        id--;
                        node=this.childs[id];
                        node.openNode.src=Tree.path+(!node.child?"join.gif":(node.open?"minus.gif":"plus.gif"));
                        node.setLine();
                    }
                }
            }
        };
        /**
         * 设置节点宽度（根据节点深度）(内部方法，开发者无需关心)
         * @method setWidth
         * @for TreeNode
         * @param depth 深度
         * @param 是否为节点初始化时设置
         */
        TreeNode.prototype.setWidth=function(depth,init){
            this.width+=18*(this.getEmptyNumber());
            this.totalWidth=this.width;
            var node;
            for(var i=0;i<this.number;i++){
                node=this.childs[i];
                node.setWidth(depth,init);
                if(node.totalWidth>this.totalWidth){
                    this.totalWidth=node.totalWidth;
                }
            }
            this.node.style.width=this.width+"px";
            var insertNode;
            depth=this.getEmptyNumber();
            if((typeof init=="undefined") || init){
                for(var i=0;i<depth;i++){
                    insertNode=Tree.document.createElement("img");
                    insertNode.style.cssText="width:18px;vertical-align: middle;";
                    this.node.insertBefore(insertNode,this.openNode);
                    insertNode.src=Tree.path+"empty.gif";
                }
            }
            if(typeof this.root!='undefined' && this.root){
                if(this.root.width<this.totalWidth){
                    this.root.width=this.totalWidth;
                    this.root.node.style.width=this.root.width+"px";
                }
            }
        };
        /**
         * 设置节点的连接线(内部方法，开发者无需关心)
         * @method setLine
         * @for TreeNode
         * @index {Number} 如果存在，则替换指定索引的空图片位置
         */
        TreeNode.prototype.setLine=function(index){
            if(typeof index=='undefined'){
                var number=this.getEmptyNumber();
                for(var i=0;i<this.number;i++){
                    this.childs[i].node.childNodes[number].src=Tree.path+"line.gif";
                    this.childs[i].setLine(number);
                }
            }else{
                for(var i=0;i<this.number;i++){
                    this.childs[i].node.childNodes[index].src=Tree.path+"line.gif";
                    this.childs[i].setLine(index);
                }
                return false;
            }
        };
        /**
         * 设置节点的连接线2(内部方法，开发者无需关心)
         * @method setLine2
         * @for TreeNode
         */
        TreeNode.prototype.setLine2=function(){
            var node=this;
            var number;
            do {
                node=node.parent;
                if(node.after){
                    number=node.checkbox?node.depth*2-1:node.depth-1;
                    this.node.childNodes[number].src=Tree.path+"line.gif";
                    for(var i=0;i<this.number;i++){
                        this.childs[i].setLine2(number);
                    }
                }
            }while(node.parent!=node.root);
        };
        /**
         * 设置节点某个位置为空图片(内部方法，开发者无需关心)
         * @method setEmpty
         * @for TreeNode
         * @param {Number} 需要设置当前节点中空图片的索引
         */
        TreeNode.prototype.setEmpty=function(index){
            for (var i = 0; i < this.number; i++) {
                this.childs[i].node.childNodes[index].src=Tree.path+"empty.gif";
                this.childs[i].setEmpty(index);
            }
        };
        /**
         * 计算当前节点到根节点之间的空图片数量(内部方法，开发者无需关心)
         * @method getEmptyNumber
         * @for TreeNode
         */
        TreeNode.prototype.getEmptyNumber=function(){
            var node=this;
            var number=0;
            while (node.parent!=node.root){
                number+=node.parent.checkbox?2:1;
                node=node.parent;
            }
            return number;
        };
        /**
         *	根据节点或节点id查找索引,二分法查找
         *	@method getIndex
         * 	@for TreeNode
         * 	@param {String|TreeNode} id 需要查找的节点id或节点对象
         * 	@return {Number} 返回指定节点是本节点中的第几个孩子
         */
        TreeNode.prototype.getIndex=function(id){
            var length=(this.number%2==0)?this.number/2:this.number/2+1;
            for(var i=0;i<length;i++){
                if(typeof id=='string'){
                    if(this.childs[i].id==id){
                        return i;
                    }else if(this.childs[this.number-i-1].id==id){
                        return this.number-i-1;
                    }
                }else{
                    if(this.childs[i]==id){
                        return i;
                    }else if(this.childs[this.number-i-1]==id){
                        return this.number-i-1;
                    }
                }
            }
            return -1;
        };
        /**
         * 根据节点id查找节点,二分法查找
         * @method get
         * @for TreeNode
         * @param {String} id 需要查找的节点id
         * @param {Boolean} child 是否遍历整棵树，默认为true，false只查找当前孩子节点
         * @return {TreeNode} 返回节点对象，如果未找到则返回null
         */
        TreeNode.prototype.get=function(id,child){
            var length=parseInt((this.number%2===0)?this.number/2:this.number/2+1);
            for(var i=0;i<length;i++){
                if(this.childs[i].id==id){
                    return this.childs[i];
                }else if(this.childs[this.number-i-1].id==id){
                    return this.childs[this.number-i-1];
                }
            }
            if((typeof child=='undefined') || child){
                var node;
                for(var i=0;i<length;i++){
                    node=this.childs[i].get(id,child);
                    if(node!=null){
                        return node;
                    }
                    node=this.childs[this.number-i-1].get(id,child);
                    if(node!=null){
                        return node;
                    }
                }
            }
            return null;
        };
        /**
         * 设置当前节点及孩子节点的根节点
         * @method setRoot
         * @for TreeNode
         * @param {Tree} root 树(根)节点
         */
        TreeNode.prototype.setRoot=function(root){
            if(!root){	return;	}
            this.root=root;
            for(var i=0;i<this.number;i++){
                this.childs[i].setRoot(root);
            }
        };
        /**
         * 展开当前节点(内部方法，开发者无需关心)
         * @method openClick
         * @for TreeNode
         */
        TreeNode.prototype.openClick=function(){
            if(this.number==0){return;}
            if(this.open){
                for(var i=0;i<this.number;i++){
                    this.childs[i].node.style.display="none";
                }
                this.openNode.src=this.openNode.src.replace(/minus/g,"plus");
                this.fileNode.src=Tree.path+this.type+((this.number>0 || this.child)?"_folder_close.gif":"_file_node.gif");
                this.open=false;
            }else{
                for(var i=0;i<this.number;i++){
                    this.childs[i].node.style.display="";
                }
                this.openNode.src=this.openNode.src.replace(/plus/g,"minus");
                this.fileNode.src=Tree.path+this.type+((this.number>0 || this.child)?"_folder_open.gif":"_file_node.gif");
                this.open=true;
            }
        };
        /**
         * 设置当前节点checkbox的checked值
         * @method setChecked
         * @for TreeNode
         */
        TreeNode.prototype.setChecked=function(){
            if(this.checkNode){
                this.checkNode.checked=this.checkbox.checked||false;
            }
        };
        /**
         * 根据初始化参数设置checkbox的checked值
         * @method initChecked
         * @for TreeNode
         */
        TreeNode.prototype.initChecked=function(){
            if(this.checkNode){
                this.checkNode.checked=this.checkbox.checked||false;
            }
            for(var i=0;i<this.number;i++){
                this.childs[i].initChecked();
            }
        };
        /**
         * 设置当前节点及孩子节点checkbox的checked值
         * @method checked
         * @for TreeNode
         * @param {Boolean} checked 设置checkbox的值，true或flase
         * @param {Boolean} isChild 是否遍历整棵树
         * @param {TreeNode} node 不设置的节点
         */
        TreeNode.prototype.checked=function(checked,isChild,node){
            if(typeof node=="undefined" || this!=node){
                if(this.checkNode){
                    checked=typeof checked=="undefined"?!this.checkNode.checked:checked;
                    this.checkNode.checked=checked;
                }
                if(typeof isChild=="undefined" || isChild){
                    for(var i=0;i<this.number;i++){
                        this.childs[i].checked(checked,isChild,node);
                    }
                }
            }else if(typeof isChild=="undefined" || isChild){
                for(var i=0;i<this.number;i++){
                    this.childs[i].checked(checked,isChild,node);
                }
            }
            if(this.checkNode){
                return this.checkNode.checked;
            }
        };
        /**
         * 设置当前节点checkbox的disabled属相
         * @method disabled
         * @for TreeNode
         */
        TreeNode.prototype.disabled=function(disabled){
            if(this.checkNode){
                this.checkNode.disabled=disabled||true;
            }
        };
        /**
         * 获取被选中的checkbox节点(包括孩子节点中被选中的)
         * @method getSelected
         * @for TreeNode
         */
        TreeNode.prototype.getSelected=function(){
            if(this.checkNode && this.checkNode.checked){
                this.root.selected.push(this);
            }
            for(var i=0;i<this.number;i++){
                this.childs[i].getSelected();
            }
        };
        /**
         * 删除孩子节点
         * @method remove
         * @for TreeNode
         * @param {TreeNode} node 要删除的节点
         */
        TreeNode.prototype.remove=function(node){
            if(typeof node=="string"){
                for(var i=0;i<this.number;i++){
                    if(this.childs[i].id==node){
                        this.node.removeChild(this.childs[i].node);
                        this.childs.splice(i,1);
                        if(i==this.number-1){
                            node=this.childs[i-1];
                            node.openNode.src=Tree.path+(!node.child?"join_bottom.gif":(node.open?"minus_bottom.gif":"plus_bottom.gif"));
                            node.setEmpty(node.depth-1);
                            this.last=node;
                        }else if(i==0){
                            this.first=this.childs[0];
                        }
                        break;
                    }
                }
            }else{
                for(var i=0;i<this.number;i++){
                    if(this.childs[i]==node){
                        this.node.removeChild(this.childs[i].node);
                        this.childs.splice(i,1);
                        if(i==this.number-1 && i!=0){
                            node=this.childs[i-1];
                            node.openNode.src=Tree.path+(!node.child?"join_bottom.gif":(node.open?"minus_bottom.gif":"plus_bottom.gif"));
                            node.setEmpty(node.depth-1);
                            this.last=node;
                        }else if(i==0){
                            this.first=this.childs[0];
                        }
                        break;
                    }
                }
            }
            this.number--;
        };
        /**
         * 删除自己
         * @method removeTo
         * @for TreeNode
         */
        TreeNode.prototype.removeTo=function(){
            this.parent.remove(this);
        };
        /**
         * 删除所有的孩子节点
         * @method removeAll
         * @for TreeNode
         */
        TreeNode.prototype.removeAll=function(){
            for(var i=0;i<this.number;i++){
                this.node.removeChild(this.childs[i].node);
            }
            this.childs=[];
            this.first=this.last=null;
            this.number=0;
        };
        /**
         * 初始化当前节点的事件(内部方法，开发者无需关心)
         * @method initEvent
         * @for TreeNode
         * @param {String} nodeName 事件名称
         */
        TreeNode.prototype.initEvent=function(nodeName){
            var node=this;
            switch(nodeName){
                case "open"			:	this.openNode.onclick=function(event){
                    if(typeof node.openclick!='undefined' && node.openclick){
                        node.openclick(node,event||window.event);
                    }else{
                        node.openClick();
                    }
                };break;
                case "contextmenu"	:	this.selectNode.oncontextmenu=function(event){
                    if(typeof node.contextmenu!='undefined' && node.contextmenu){
                        return node.contextmenu(node,event||window.event);
                    }
                };break;
                case "click"		:	this.selectNode.onmouseup=function(event){
                    if(typeof node.click!='undefined' && node.click){
                        node.click(node,event||window.event);
                    }
                };break;
                case "dblclick"		:	this.selectNode.ondblclick=function(){
                    if(typeof node.openclick!='undefined' && node.openclick){
                        node.openclick(node,event||window.event);
                    }else{
                        node.openClick();
                    }
                    if(typeof node.dblclick!='undefined' && node.dblclick){
                        node.dblclick(node,event||window.event);
                    }
                };break;
            }
        };
        /**
         * 替换当前节点的某个事件
         * @method replaceEvent
         * @for TreeNode
         * @param {String} nodeName 事件名称
         * @param {Function(TreeNode)} fun_ js事件方法
         */
        TreeNode.prototype.replaceEvent=function(nodeName,fun_){
            var node=this;
            switch(nodeName){
                case "open"			:	this.openNode.onclick=function(event){
                    fun_(node,event||window.event);
                };break;
                case "contextmenu"	:	this.selectNode.oncontextmenu=function(event){
                    return fun_(node,event||window.event);
                };break;
                case "click"		:	this.selectNode.onmouseup=function(event){
                    fun_(node,event||window.event);
                };break;
                case "dblclick"		:	this.selectNode.ondblclick=function(){
                    if(typeof node.openclick!='undefined' && node.openclick){
                        node.openclick(node,event||window.event);
                    }else{
                        node.openClick();
                    }
                    fun_(node,event||window.event);
                };break;
            }
        };
        /**
         * 移除当前节点的某个事件
         * @method removeEvent
         * @for TreeNode
         * @param {String} nodeName 事件名称
         */
        TreeNode.prototype.removeEvent=function(nodeName){
            //var node=this;
            switch(nodeName){
                case "open"			:	this.openNode.onclick=function(){};break;
                case "contextmenu"	:	this.selectNode.oncontextmenu=function(){};break;
                case "click"		:	this.selectNode.onmouseup=function(){};break;
                case "dblclick"		:	this.selectNode.ondblclick=function(){};break;
            }
        };
        /**
         * 克隆当前节点
         * @method clone
         * @for TreeNode
         */
        TreeNode.prototype.clone=function(){
            return new TreeNode(this.propertys);
        };
        /**
         * 改变节点的name属相值
         * @method changeName
         * @for TreeNode
         * @param {String} name name属相值
         * @param {String<#000000>} color 新name显示在页面的颜色，如#AAAAAA
         */
        TreeNode.prototype.changeName=function(name,color){
            for(var i=0,length=this.name.length;i<length;i++){
                if(this.name.charCodeAt(i)>256){
                    this.width-=13;
                }else{
                    this.width-=7;
                }
            }
            for(var i=0,length=name.length;i<length;i++){
                if(name.charCodeAt(i)>256){
                    this.width+=13;
                }else{
                    this.width+=7;
                }
            }
            this.node.style.width=this.width+"px";
            this.name=name||"";
            this.textNode.innerHTML=this.name;
            if(color){
                this.textNode.style.color=color;
            }
            this.setWidth(this.depth,false);
        };
        /**
         * 切换当前节点的图标类型
         * @method changeType
         * @for TreeNode
         * @param {String} type 详见node的type属相
         */
        TreeNode.prototype.changeType=function(type){
            this.type=type;
            this.fileNode.src=Tree.path+this.type+(this.open?(this.child?"_folder_open.gif":"_file_node.gif"):(this.child?"_folder_close.gif":"_file_node.gif"));
        };
        /**
         * 判断一节点是否是当前节点的父节点
         * @method isParent
         * @for TreeNode
         * @param {TreeNode} node 类似父节点TreeNode对象
         * @return {Boolean{true,false}} true：是，false：不是
         */
        TreeNode.prototype.isParent=function(node){
            if(this.parent==node){
                return true;
            }else{
                if(this.parent==this.root){
                    return false;
                }
                return node.parent.isParent(node);
            }
        };
        /**
         * 判断一节点是否是当前节点的孩子节点
         * @method isChild
         * @for TreeNode
         * @param {TreeNode} node 类似孩子节点TreeNode对象
         * @return {Boolean{true,false}} true：是，false：不是
         */
        TreeNode.prototype.isChild=function(node){
            for(var i=0;i<this.number;i++){
                if(this.childs[i]==node){
                    return true;
                }
                if(this.childs[i].isChild(node)){
                    return true;
                }
            }
            return false;
        };
        /**
         * @static
         * @property {boolean} instance 是否进行初始化
         */
        TreeNode.init_instance=true;
    }
    this.create(propertys);//new 的时候初始化
    /**
     * 当前节点中展开(收缩)图标的单击事件，可通过node的openclick进行外部调用
     * @method onclick
     * @for TreeNode.openNode
     * @param {Object<window.event>} event 事件对象
     */
    this.openNode.onclick=function(event){
        var event=event||window.event;
        if(event){
            event.returnValue=false;
            event.cancelBubble=true;
        }
        if(typeof node_.openclick!='undefined' && node_.openclick){
            node_.openclick(node_,event||window.event);//外部事件
        }else{
            node_.openClick();
        }
    };
    /**
     * 移动到当前节点时的样式
     * @method onmouseover
     * @for TreeNode.selectNode
     * @param {Object<window.event>} event 事件对象
     */
    this.selectNode.onmouseover=function(event){
        var background=this.getAttribute("userbg");
        if(background=='#FFFFFF'){
            this.style.border="1px solid #b9d7fc";
            this.style.backgroundColor="#fbfdff";
        }else{
            this.style.border="1px solid #b9d7fc";
            this.style.backgroundColor=background;
        }
        Tree.candidates=node_;
    };
    /**
     * 移出当前节点时的样式
     * @method onmouseout
     * @for TreeNode.selectNode
     * @param {Object<window.event>} event 事件对象
     */
    this.selectNode.onmouseout=function(event){
        var background=this.getAttribute("userbg");
        this.style.border="1px solid "+background;
        this.style.backgroundColor=background;
    };
    /**
     * 鼠标按下时触发
     * @method onmousedown
     * @for TreeNode.selectNode
     * @param {Object<window.event>} event 事件对象
     */
    this.selectNode.onmousedown=function(event){
        var event=event||window.event;
        if(event){
            event.returnValue=false;
            event.cancelBubble=true;
        }
        if(typeof node_.mousedown!='undefined'){
            if(!node_.mousedown(node_,event||window.event)){
                return false;
            }
        }
        if(node_.move){
            event=event||window.event;
            var newX,newY;
            if(!Tree.moveNode){
                Tree.moveNode=this.cloneNode(true);
            }
            Tree.moveNode.style.position="absolute";
            Tree.moveNode.style.display="none";
            Tree.moveNode.style.zIndex="0";
            Tree.moveNode.style.backgroundColor="";
            Tree.moveNode.style.filter="alpha(opacity=50)";
            Tree.moveNode.style.MozOpacity=0.5;
            Tree.moveNode.style.opacity=0.5;
            Tree.document.body.appendChild(Tree.moveNode);
            node_.root.node.onmousemove=function(event2){
                event2=event2||window.event;
                newX=event2.clientX;
                newY=event2.clientY;
                Tree.moveNode.style.top=newY;
                Tree.moveNode.style.left=newX;
                if(!Tree.movestate){
                    Tree.moveNode.style.display="";
                    Tree.movetreenode=node;
                    Tree.movestate=true;
                    Tree.document.body.onmouseup=function(){
                        Tree.document.body.removeChild(Tree.moveNode);
                        node.root.node.onmousemove=function(){return false;};
                        Tree.document.body.onmouseup=function(){return false;};
                    };
                }
            };
        }
        var tree=node_.root;
        if(typeof tree.selectClick!='undefined'){
            tree.selectClick.style.border="1px solid "+(node_.background||"#FFFFFF");
            tree.selectClick.style.backgroundColor=(node_.background||"#FFFFFF");
            tree.selectClick.onmouseover=function(event2){
                this.style.border="1px solid #b9d7fc";
                this.style.backgroundColor="#fbfdff";
            };
            tree.selectClick.onmouseout=function(event2){
                this.style.border="1px solid "+(node_.background||"#FFFFFF");
                this.style.backgroundColor=(node_.background||"#FFFFFF");
            };
        }
        this.style.border="1px solid #84acdd";
        this.style.backgroundColor="#e6f2ff";
        this.onmouseout=function(event){return false;};
        this.onmouseover=function(event){return false;};
        tree.selectClick=this;
    };
    /**
     * 鼠标抬起时触发
     * @method onmouseup
     * @for TreeNode.selectNode
     * @param {Object<window.event>} event 事件对象
     */
    this.selectNode.onmouseup=function(event){
        var event=event||window.event;
        if(event){
            event.returnValue=false;
            event.cancelBubble=true;
        }
        node=node_||Tree.candidates;
        if(typeof node.click!='undefined'){
            node.click(node,event||window.event);
        }
        if(Tree.movestate && node!=Tree.movetreenode){
            if(Tree.movetreenode.isChild(node)){
                return false;
            }
            var childNode=Tree.movetreenode.clone(),
                index=Tree.movetreenode.parent.getIndex(Tree.movetreenode);
            if(typeof Tree.movetreenode.movebefore!="undefined" && !Tree.movetreenode.movebefore(Tree.movetreenode,Tree.movetreenode.parent,index,childNode,node.parent)){
                return false;
            }
            if(Tree.movetreenode.move=="similar" || Tree.movetreenode.move=='similar-before'){
                if(node.parent==Tree.movetreenode.parent){
                    Tree.movetreenode.removeTo();
                    node.parent.append(childNode,node.id);
                    if(typeof Tree.movetreenode.moveafter!='undefined'){
                        Tree.movetreenode.moveafter(Tree.movetreenode,Tree.movetreenode.parent,index,childNode,node.parent);
                    }
                }
            }else if(Tree.movetreenode.move=='similar-after'){
                if(node.parent==Tree.movetreenode.parent){
                    Tree.movetreenode.removeTo();
                    node.parent.append(childNode,node.parent.getIndex(node.id)+1);
                    if(typeof Tree.movetreenode.moveafter!='undefined'){
                        Tree.movetreenode.moveafter(Tree.movetreenode,Tree.movetreenode.parent,index,childNode,node.parent);
                    }
                }
            }else if(Tree.movetreenode.move=="brother" || Tree.movetreenode.move=='brother-before'){
                Tree.movetreenode.removeTo();
                node.parent.append(childNode,node.id);
                if(typeof Tree.movetreenode.moveafter!='undefined'){
                    Tree.movetreenode.moveafter(Tree.movetreenode,Tree.movetreenode.parent,index,childNode,node.parent);
                }
            }else if(Tree.movetreenode.move=='brother-after'){
                Tree.movetreenode.removeTo();
                node.parent.append(childNode,node.parent.getIndex(node.id)+1);
                if(typeof Tree.movetreenode.moveafter!='undefined'){
                    Tree.movetreenode.moveafter(Tree.movetreenode,Tree.movetreenode.parent,index,childNode,node.parent);
                }
            }else if(Tree.movetreenode.move=="onlypss" || Tree.movetreenode.move=='onlypss-before'){
                if(Tree.movetreenode.isParent(node) || node.parent==Tree.movetreenode.parent || Tree.movetreenode.isParent(node.parent)){
                    Tree.movetreenode.removeTo();
                    node.parent.append(childNode,node.parent.getIndex(node.id));
                    if(typeof Tree.movetreenode.moveafter!='undefined'){
                        Tree.movetreenode.moveafter(Tree.movetreenode,Tree.movetreenode.parent,index,childNode,node.parent);
                    }
                }
            }else if(Tree.movetreenode.move=='onlypss-after'){
                if(Tree.movetreenode.isParent(node) || node.parent==Tree.movetreenode.parent || Tree.movetreenode.isParent(node.parent)){
                    Tree.movetreenode.removeTo();
                    node.parent.append(childNode,node.parent.getIndex(node.id)+1);
                    if(typeof Tree.movetreenode.moveafter!='undefined'){
                        Tree.movetreenode.moveafter(Tree.movetreenode,Tree.movetreenode.parent,index,childNode,node.parent);
                    }
                }
            }else if(Tree.movetreenode.move=='onlypss-child'){
                if(Tree.movetreenode.isParent(node) || node.parent==Tree.movetreenode.parent || Tree.movetreenode.isParent(node.parent)){
                    Tree.movetreenode.removeTo();
                    node.append(childNode);
                    if(typeof Tree.movetreenode.moveafter!='undefined'){
                        Tree.movetreenode.moveafter(Tree.movetreenode,Tree.movetreenode.parent,index,childNode,node.parent);
                    }
                }
            }else{
                Tree.movetreenode.removeTo();
                node.append(childNode);
                if(typeof Tree.movetreenode.moveafter!='undefined'){
                    Tree.movetreenode.moveafter(Tree.movetreenode,Tree.movetreenode.parent,index,childNode,node);
                }
            }
            Tree.movetreenode=null;
            Tree.movestate=false;
        }
        node.root.node.onmousemove=function(){return false;};
    };
    /**
     * 右键时触发
     * @method oncontextmenu
     * @for TreeNode.selectNode
     * @param {Object<window.event>} event 事件对象
     */
    this.selectNode.oncontextmenu=function(event){
        var event=event||window.event;
        if(event){
            event.returnValue=false;
            event.cancelBubble=true;
        }
        if(typeof node_.contextmenu!='undefined' && node_.contextmenu){
            return node_.contextmenu(node_,event||window.event);
        }
    };
    /**
     * 双击时触发
     * @method ondblclick
     * @for TreeNode.selectNode
     * @param {Object<window.event>} event 事件对象
     */
    this.selectNode.ondblclick=function(event){
        var event=event||window.event;
        if(event){
            event.returnValue=false;
            event.cancelBubble=true;
        }
        var executiveopen=true;
        if(typeof node_.dblclick!='undefined' && node_.dblclick){
            executiveopen=node_.dblclick(node_,event||window.event);
        }
        if(executiveopen){
            if(typeof node_.openclick!='undefined' && node_.openclick){
                node_.openclick(node_,event||window.event);
            }else{
                node_.openClick();
            }
        }
    };
    if(this.checkNode){
        /**
         * 复选框鼠标抬起时触发
         * @method onmouseup
         * @for TreeNode.checkNode
         * @param {Object<window.event>} event 事件对象
         */
        this.checkNode.onmouseup=function(event){
            var isChangeChild=true;
            if(node_.checkbox.click){
                isChangeChild=node_.checkbox.click(node_,event,this);
            }
            if(isChangeChild){
                for(var i=0;i<node_.number;i++){
                    if(node_.childs[i].checkbox){
                        node_.childs[i].checked(!this.checked,true);
                    }
                }
            }
        };
    }
}
/**
 * 扩展js数组事件，将指定对象插入到指定索引下标之前
 * @method insert
 * @for Array
 * @param {Object} item 需要插入的对象
 * @param {Number} i 要插入目标对象之前的索引下标
 */
Array.prototype.insert=function(items,i){
    var length=(items instanceof Array)?items.length:1;
    if(i==this.length){
        if(items instanceof Array){
            for(var k=0;k<length;k++){
                this.push(items[k]);
            }
        }else{
            this.push(items);
        }
        return false;
    }else if(i>this.length){
        for(var j=0;j<i;j++){
            this[j]=null;
        }
        if(items instanceof Array){
            for(var k=0;k<length;k++){
                this.push(items[k]);
            }
        }else{
            this.push(items);
        }
    }
    for(var j=this.length-1;j>=i;j--){
        this[j+length]=this[j];
        if(i==j){
            if(items instanceof Array){
                for(var k=0;k<length;k++){
                    this[j+k]=items[k];
                }
            }else{
                this[j]=items;
            }
        }
    }
};
/**
 * 右键菜单事件
 * @static
 * @method contextmenu
 * @param {TreeNode} node 在某个节点上右键
 * @param {Object<window.event>} event 事件对象
 * @param {Array<Array<Object{id,name,ico,click}>>} actions
 * @param {String<[xx]px>} top 居顶部距离
 * @param {String<[xx]px>} left 居左边距离
 */
Tree.contextmenu=function(node,event,actions,top,left){
    if(event){
        event.returnValue=false;
        event.cancelBubble=true;
    }
    var width=0,tempWidth;
    for(var i=0,length=actions.length;i<length;i++){
        for(var j=0,length2=actions[i].length;j<length2;j++){
            tempWidth=Tree.strWidth(actions[i][j].name);
            width=width<tempWidth?tempWidth:width;
        }
    }

    Tree.document.body.onclick=function(event){
        if(Tree.bodyInit){
            Tree.offcontextmenu();
            Tree.bodyInit=false;
        }else{
            Tree.bodyInit=true;
        }
    };
    Tree.bodyInit=true;
    if(!Tree.menu){
        Tree.menu=Tree.document.createElement("div");
        Tree.menu.style.zIndex="100000";
        Tree.menu.style.position="absolute";
        Tree.menu.style.backgroundColor="#e6f2ff";
        Tree.menu.style.border="1px solid #84acdd";
        Tree.menu.style.padding="3px";
        Tree.menu.style.fontSize="12px";
        Tree.document.body.appendChild(Tree.menu);
    }else{
        Tree.menu.style.display="";
        Tree.menu.innerHTML="";
    }
    Tree.menu.style.top=top||(event.clientY+"px");
    Tree.menu.style.left=left||(event.clientX+"px");
    Tree.menu.style.width=width+60;

    var action,actionIco,actionName=null,actionNext,childIco;
    for(var i=0,length=actions.length;i<length;i++){
        for(var j=0,length2=actions[i].length;j<length2;j++){
            action=Tree.document.createElement("div");
            action.customClick=actions[i][j].click;
            action.childs=actions[i][j].childs;
            if(actions[i][j].title){
                action.title=actions[i][j].title||null;
            }
            action.onclick=function(event){
                var result;
                event=event||window.event;
                event.returnValue=false;
                event.cancelBubble=true;
                if(this.customClick){
                    result=this.customClick(node,this.childNodes[1].id,this.childNodes[1].innerHTML,event);
                    if(typeof result!="undefined" && !result){
                        return false;
                    }
                }
                Tree.offcontextmenu();
            };
            action.onmouseover=function(){
                this.style.border="1px solid #aecff7";
                this.style.backgroundColor="#e6f2ff";
                var child=this.childNodes,height;
                for(var i=0,length=child.length;i<length;i++){
                    if(child[i].nodeType==1){
                        height=child[i].offsetHeight-2;
                        if(height>0){
                            child[i].style.height=height;
                            child[i].style.lineHeight=height+"px";
                        }
                    }
                }
                height=this.offsetHeight-2;
                this.style.height=height<0?0:height;
                if(this.childs){
                    Tree.createChildAction(node,this,this.childs,1);
                }
            };
            action.onmouseout=function(){
                this.style.border="0px";
                this.style.borderLeft="1px solid #e6f2ff";
                this.style.borderRight="1px solid #e6f2ff";
                this.style.backgroundColor="#e6f2ff";
                var child=this.childNodes,height;
                for(var i=0,length=child.length;i<length;i++){
                    if(child[i].nodeType==1){
                        height=child[i].offsetHeight+2;
                        child[i].style.height=height;
                        child[i].style.lineHeight=height+"px";
                    }
                }
            };
            action.oncontextmenu=function(){return false;};
            action.style.height="20px";
            action.style.backgroundColor="#e6f2ff";
            action.style.borderLeft="1px solid #e6f2ff";
            action.style.borderRight="1px solid #e6f2ff";
            actionIco=Tree.document.createElement("div");
            actionIco.style.styleFloat="left";
            actionIco.style.width="18px";
            actionIco.style.height="20px";
            actionIco.style.lineHeight="20px";
            actionIco.style.borderRight="1px solid #e0e0e0";
            if(actions[i][j].ico){
                childIco=Tree.document.createElement("image");
                childIco.src=Tree.path+actions[i][j].ico;
                childIco.style.width="18px";
                childIco.style.height="18px";
                actionIco.appendChild(childIco);
            }else{
                actionIco.innerHTML="&nbsp;";
            }
            actionName=Tree.document.createElement("div");
            actionName.id=actions[i][j].id;
            actionName.innerHTML=actions[i][j].name;
            actionName.style.styleFloat="left";
            actionName.style.textAlign="left";
            actionName.style.width=width+10;
            actionName.style.paddingLeft="5px";
            actionName.style.paddingRight="5px";
            actionName.style.height="20px";
            actionName.style.lineHeight="20px";
            actionName.style.borderLeft="1px solid #FFFFFF";
            actionName.style.cursor="default";
            actionNext=Tree.document.createElement("div");
            actionNext.style.styleFloat="left";
            actionNext.style.width="18px";
            actionNext.style.height="20px";
            actionNext.style.lineHeight="20px";
            if(actions[i][j].childs){
                childIco=Tree.document.createElement("image");
                childIco.src=Tree.path+"tree-menu-next.gif";
                childIco.style.width="18px";
                childIco.style.height="18px";
                actionNext.appendChild(childIco);
            }else{
                actionNext.innerHTML="&nbsp;";
            }
            action.appendChild(actionIco);
            action.appendChild(actionName);
            action.appendChild(actionNext);
            Tree.menu.appendChild(action);
        }
    }
};
/**
 * 右键菜单消失
 * @static
 * @method offcontextmenu
 * @param {Number} totalDept 总深度(暂时未启用)
 */
Tree.offcontextmenu=function(totalDept){	
    if(Tree.menu){
        Tree.menu.style.display="none";
        if(Tree.actiondept){
            for(var i=0;i<Tree.actiondept;i++){
                Tree["childAction_"+(i+1)].style.display="none";
            }
        }
        Tree.actiondept=0;
    }

};
/**
 * 加载右键菜单的孩子菜单
 * @static
 * @method createChildAction
 * @param {TreeNode} node 在某个节点上右键
 * @param {HTMLElement} childNode 父菜单对象
 * @param {Array<Array<Object{id,name,ico,click}>>} actions
 * @param {Number} dept 菜单深度
 */
Tree.createChildAction=function(node,childNode,actions,dept){
    if(Tree.actiondept){
        Tree.actiondept=Tree.actiondept>dept?Tree.actiondept:dept;
    }else{
        Tree.actiondept=dept;
    }
    var top=0,left=0;
    var tempNode=childNode;
    while(tempNode){
        top+=tempNode.offsetTop;
        left+=tempNode.offsetLeft;
        tempNode=tempNode.offsetParent;
    }
    left+=childNode.offsetWidth;
    if(Tree["childAction_"+dept]){
        var node2=Tree["childAction_"+dept];
        node2.style.top=top;
        node2.style.left=left+5;
        node2.style.display="";
        node2.innerHTML="";
    }else{
        var node2=Tree.document.createElement("div");
        node2.style.zIndex=100000+dept;
        node2.style.position="absolute";
        node2.style.backgroundColor="#e6f2ff";
        node2.style.border="1px solid #84acdd";
        node2.style.padding="3px";
        node2.style.top=top;
        node2.style.left=left+5;
        Tree.document.body.appendChild(node2);
        Tree["childAction_"+dept]=node2;
    }
    var width=0,tempWidth;
    for(var i=0,length=actions.length;i<length;i++){
        for(var j=0,length2=actions[i].length;j<length2;j++){
            tempWidth=Tree.strWidth(actions[i][j].name);
            width=width<tempWidth?tempWidth:width;
        }
    }
    Tree["childAction_"+dept].style.width=width+60;
    var action,actionIco,actionName,actionNext,childIco;
    for(var i=0,length=actions.length;i<length;i++){
        for(var j=0,length2=actions[i].length;j<length2;j++){
            action=Tree.document.createElement("div");
            action.customClick=actions[i][j].click;
            action.childs=actions[i][j].childs;
            if(actions[i][j].title){
                action.title=actions[i][j].title||null;
            }
            action.onclick=function(event){
                var result;
                event=event||window.event;
                event.returnValue=false;
                event.cancelBubble=true;
                if(this.customClick){
                    result=this.customClick(node,this.childNodes[1].id,this.childNodes[1].innerHTML,event);
                    if(typeof result!="undefined" && !result){
                        return false;
                    }
                }
                Tree.offcontextmenu();
            };
            action.onmouseover=function(){
                this.style.border="1px solid #aecff7";
                this.style.backgroundColor="#e6f2ff";
                var child=this.childNodes,height;
                for(var i=0,length=child.length;i<length;i++){
                    if(child[i].nodeType==1){
                        height=child[i].offsetHeight-2;
                        if(height>0){
                            child[i].style.height=height;
                            child[i].style.lineHeight=height+"px";
                        }
                    }
                }
                height=this.offsetHeight-2;
                this.style.height=height<0?0:height;
                if(this.childs){
                    Tree.createChildAction(this,this.childs,1);
                }
            };
            action.onmouseout=function(){
                this.style.border="0px";
                this.style.borderLeft="1px solid #e6f2ff";
                this.style.borderRight="1px solid #e6f2ff";
                this.style.backgroundColor="#e6f2ff";
                var child=this.childNodes,height;
                for(var i=0,length=child.length;i<length;i++){
                    if(child[i].nodeType==1){
                        height=child[i].offsetHeight+2;
                        child[i].style.height=height;
                        child[i].style.lineHeight=height+"px";
                    }
                }
            };
            action.oncontextmenu=function(){return false;};
            action.style.height="20px";
            action.style.backgroundColor="#e6f2ff";
            action.style.borderLeft="1px solid #e6f2ff";
            action.style.borderRight="1px solid #e6f2ff";
            actionIco=Tree.document.createElement("div");
            actionIco.style.styleFloat="left";
            actionIco.style.width="18px";
            actionIco.style.height="20px";
            actionIco.style.lineHeight="20px";
            actionIco.style.borderRight="1px solid #e0e0e0";
            if(actions[i][j].ico){
                childIco=Tree.document.createElement("image");
                childIco.src=Tree.path+actions[i][j].ico;
                childIco.style.width="18px";
                childIco.style.height="18px";
                actionIco.appendChild(childIco);
            }else{
                actionIco.innerHTML="&nbsp;";
            }
            actionName=Tree.document.createElement("div");
            actionName.id=actions[i][j].id;
            actionName.innerHTML=actions[i][j].name;
            actionName.style.styleFloat="left";
            actionName.style.width=width+10;
            actionName.style.paddingLeft="5px";
            actionName.style.paddingRight="5px";
            actionName.style.height="20px";
            actionName.style.lineHeight="20px";
            actionName.style.borderLeft="1px solid #FFFFFF";
            actionName.style.cursor="default";
            actionNext=Tree.document.createElement("div");
            actionNext.style.styleFloat="left";
            actionNext.style.width="18px";
            actionNext.style.height="20px";
            actionNext.style.lineHeight="20px";
            if(actions[i][j].childs){
                childIco=Tree.document.createElement("image");
                childIco.src=Tree.path+"tree-menu-next.gif";
                childIco.style.width="18px";
                childIco.style.height="18px";
                actionNext.appendChild(childIco);
            }else{
                actionNext.innerHTML="&nbsp;";
            }
            action.appendChild(actionIco);
            action.appendChild(actionName);
            action.appendChild(actionNext);
            Tree["childAction_"+dept].appendChild(action);
        }
    }
}
/**
 * 根据str计算页面宽度
 * @static
 * @method strWidth
 * @param {String} str
 * @returns {Number}
 */
Tree.strWidth=function(str){
    var length=str.length,width=0;
    for(var i=0;i<length;i++){
        width+=str.charCodeAt(i)>256?13:7;
    }
    return width;
};
/**
 * 树的document
 * @static
 * @property {Document} document
 */
Tree.document=document;
