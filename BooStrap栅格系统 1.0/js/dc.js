function checkForm(){
//校验用户名
var username = document.getElementById("username").value;
if(username == ""){
	document.getElementById("usernameSpan").innerHTML = "<font color='red'>用户名不能为空！</font>";
//	alert("用户名不能为空!");
	return false;
}

//校验密码
var password = document.getElementById("password").value;
if(password == ""){
	document.getElementById("passwordSpan").innerHTML = "<font color='red'>密码不能为空！</font>";
//	alert("密码不能为空!");
	return false;
}

//校验确认密码
var repassword = document.getElementById("repassword").value;
if(repassword != password){
	alert("两次密码输入不一致!");
	return false;
}

//校验邮箱
var email = document.getElementById("email").value;
if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email)){
	alert("邮箱格式不正确！");
		return false;
	}
}

//			function tips(){
//				document.getElementById("usernameSpan").innerHTML = "<font color='red'>用户名需要是字母或数字组成!</font>";
//			}
//			
//			function checkUsername(){
//				document.getElementById("usernameSpan").innerHTML = "<font color='green'>用户名可以使用!</font>";
//			}

function tips(id,content){
	document.getElementById(id + "Span").innerHTML = "<font color='red'>"+content+"</font>";
}

////省市二级联动
//// 定义数组：二维数组：
//var arrs = new Array(5);
//arrs[0] = new Array("杭州市","绍兴市","温州市","义乌市","嘉兴市");
//arrs[1] = new Array("南京市","苏州市","扬州市","无锡市");
//arrs[2] = new Array("武汉市","襄阳市","荆州市","宜昌市","恩施");
//arrs[3] = new Array("石家庄市","唐山市","保定市","邢台市","廊坊市");
//arrs[4] = new Array("长春市","吉林市","四平市","延边市");
//
//function changeCity(value){
//	var city = document.getElementById("city");
//
//for(var i=city.options.length-1;i>0;i--){
//	city.options[i] = null;
//}
//// city.options.length = 1;
//
//for(var i= 0 ;i< arrs.length;i++){
//	if(value == i){
//		for(var j=0;j<arrs[i].length;j++){
//			var opEl = document.createElement("option");
//				var textNode = document.createTextNode(arrs[i][j]);
//				opEl.appendChild(textNode);
//				city.appendChild(opEl);
//			}
//		}
//	}
//}

var time;
window.onload = function(){
	//设置定时
	window.setInterval("changImg()",5000);
	//设置广告
//	time = window.setInterval("show()",5000);
}

//图片轮播
var i = 1;
function changImg(){
	i++;
	if(i > 3){
		i = 1;
	}
	var img = document.getElementById("img");
	img.src = "img/"+i+".jpg";
}

////显示广告
//function show(){
//	var adDiv = document.getElementById("adDiv");
//	adDiv.style.display = "block";
//	window.clearInterval(time);
//	time = window.setInterval("hide()",5000);
//}
//
////隐藏广告
//function hide(){
//	var adDiv = document.getElementById("adDiv");
//	adDiv.style.display = "none";
//	window.clearInterval(time);
//}



  // jQuery省市联动
//$(function(){
//	// 定义数组
//	var cities = [
//		["杭州市","绍兴市","温州市","义乌市","嘉兴市"],
//		["南京市","苏州市","扬州市","无锡市"],
//		["武汉市","襄阳市","荆州市","宜昌市","恩施"],
//		["石家庄市","唐山市","保定市","邢台市","廊坊市"],
//		["长春市","吉林市","四平市","延边市"]
//	];
//	
//	var $city = $("#city");
//	
//	$("#jiguan").change(function(){
//		$city.get(0).options.length = 1;
//		
//		var val = this.value;
//		// 遍历
//		$.each(cities,function(i,n){
//			// 判断
//			if(i == val){
//				// cities[val] 写n也可以
//				$(cities[val]).each(function(j,m){
//					$city.append("<option>" + m + "</option>");
//				});
//			}
//		});
//	});
//});


