// JavaScript Document

$(document).ready(function()
{
	var flag = false;   //flag 初始化为 false
	$(".button").click(function()   /*获取按钮  定义点击事件*/
	{    
		//alert(1);		
		var url1 = "img/pick.png";
		var url2 = "img/pick1.png";
		$("#hf").slideToggle();
		if(!flag)
		{
			$(this).css("background","url("+ url1 +")");
			flag = true;
		}
		else
		{
			$(this).css("background","url("+ url2 +")");
			flag = false;
		}				
	})
	
	//点击切换背景
	$(".scrollCon ul li").click(function()  //找图片
	{
		//alert(1);
		var sImg = $(this).find("img").attr("src");   //获取小图片路径
		//alert(sImg);
		var bImg = sImg.replace("/small","");   /*获取大图片路径：去掉小图片路径的/small变成大图片的路径（大小图片路径设计巧妙之处）*/
		//alert(bImg);
		$("body").css("background-image","url("+ bImg +")"); /*修改背景图片路径*/
		
	}) 
	//点击左边按钮
	var numa = 1;
	var numb = 1;
	$(".left").click(function()
	{
		//alert(1);	
	
		if(numa==1)
		{
			alert("没有上一组图片了，请按右边按钮，浏览下一组图片。");	
		}
		else if(numa==2)
		{			
			$(".scrollCon").animate({"left":0},300);		
			numa=1;
			numb=1;
		}			
	})		
	//点击右边按钮	
	$(".right").click(function()
	{		
		if(numb==1)
		{			
			$(".scrollCon").animate({"left":-1080},300);			
			numa=2;
			numb=2;					
		}
		else if(numb==2)
		{
			alert("没有下一组图片了，请按左边按钮，浏览上一组图片。");			
		}
			
	})		
});






















