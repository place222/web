##BFC
    float:left/right
	position:absolute/fixed
	overflow:hidden/scroll(IE7+)
	display:inline-block/table-cell(IE8+)
	width/height/zoom:1..(IE6/IE7)
	zoom:1让IEhaslayout

##浮动
### 浮动是为了实现文字环绕效果 浮动具有包裹和破坏性
> 1. 包裹的意思：当给一个比如div元素进行浮动的时候他会把他的子元素包裹住.
> 2. 破坏性的意思：当给一个div下面的元素进行浮动,父级div会塌陷
> 
### 清除浮动
    1.父元素下方插入clearfix来清除浮动

	.clearfix:after{display:block;content:'',height:0;overflow:hidden;clear:both;}
	.clearfix{zoom:1}
	简洁
	.clearfix:after{content:'';display:table;clear:both;}
	
    2.让父元素BFC或者haslayout


##绝对定位
###绝对定位和浮动是有很多相似的
1. 绝对定位可以摆脱overflow滚动的限制
2. 绝对定位可以清除浮动
3. 绝对定位的元素具有跟随的性质
4. 绝对定位脱离文档流  并且 z-index是按文档流自动含有的没必要手动设置
5. left/right/top/bottom 与 width/height 如果设置left0right0可以进行横向拉伸的沾满
6. 绝对定位下的子元素是支持宽高百分比的 
7. 如果同时存在拉伸和宽高的话，宽高的优先级比较高


##line-height 行高
1. line-height是指两行基线之间的距离
2. line-height 实现垂直居中 图片的行高并且设置图片font-size=0 对

##行内框盒子模型
	内容区域 ContentArea 与 font-size有关
	内联盒子 inline boxes 
	内联盒子和匿名内联盒子
	行框盒子 line boxes 每一行一个
	包含盒子 Containing box  由一行一行的行框盒子组成

####line-height高度机理 理解内联元素的高度表现
1. 内联元素的高度的是由行高决定的
2. line-height是基线的距离，单行的文字哪来行高，还控制了高度?
	1. 行高由于继承性，影响无处不在，单行文本也不例外
	2. 行高只是幕后黑手，高度表现不是行高，而是内容区域+行间距
	3. 内容区域高度 + 行间距 = 行高
3. 行间距 = 行高-font-size 在宋体下(fontsize=内容高度) 拆分后形成半行间距
	1. 行间距保证在不同字体不同大小等于行高的 行间距会变化
4. 多行文本的高度就是单行文本高度的累加
5.  line-height的各类属性值
	1.  normal 默认值。跟着用户的浏览器走，且与元素字体关联 不确定太大，一般会在body reset重置
	2.  number 根据当前元素的font-size计算的大小
	3.  length 使用具体的长度值,1.5em,1.5rem 20px 20pt
	4.  percent 百分比, 150%,
	5.  inherit 继承 有些元素input默认是设置了normal 可以用这个改变让它具有继承性质
	6.  line-height:1.5 line-height:150% line-height:1.5em 的区别
		1.  line-height:1.5 所有可继承元素根据font-size重新计算行高
		2.  line-height:150%/1.5em 当前元素根据font-size计算行高，继承给下面的元素
6. line-height 与 图片的表现
	1. 去掉图片下方的间隙
		1. display:block 变成非内联的元素 图片就不会基线对齐了
		2. vetical-align:bottom 底线对齐
		3. line-height:0 行高为0那么基线就会上移跟所有线重叠 也改变了
7. 行高的实际应用
	1. 图片的垂直居中




##vertical-align
1. 基本
	1. 基线类 baseline,top,midlle,bottom
	2. 文本类 text-top text-bottom
	3. 上标下标类 sub,super
	4. 数值百分比 20px,2em,25%
2. vertical-align起作用的前提
	1. 只能支持inline和table-cell2中类型的元素才能引用vertical-align 才起作用
		