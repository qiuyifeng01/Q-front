//关闭popup
function closepop(id){
	$(id).css('display','none');	
}

//打开popup
function openpop(id){
	$(id).css('display','block');
}


//登录pop相关
function openloginpop(id){
	var account = $('#popaccount').val();
	var password = $('#poppassword').val();
	var yzm = $('#popyzm').val();
	if(account == '') $('#popaccount').parent().find('label').show();
	if(password == '') $('#poppassword').parent().find('label').show();
	if(yzm == '') $('#popyzm').parent().find('label').show();
	$(id).css('display','block');
}

function closeloginpop(id){
	layer.closeAll('tips');
	$(id).css('display','none');	
}

$(function(){
	$('#popaccount,#poppassword,#popyzm').focus(function(){
			$(this).parent().find('label').hide();	
	}).blur(function(){
		var v = $(this).val();
		if(v == ''){
			$(this).parent().find('label').show();	
		}
	});
});

function poplogin(){
	var account = $('#popaccount').val();
	var password = $('#poppassword').val();
	var yzm = $('#popyzm').val();
	
	if(account == ''){
		layer.tips('请填写手机号或会员ID', '#popaccount', {
			tips: [1, '#ff6600'],
			tipsMore: true
		});
	};
	
	if(password == ''){
		layer.tips('请输入密码', '#poppassword', {
			tips: [1, '#ff6600'],
			tipsMore: true
		});
	};
	
	if(yzm == ''){
		layer.tips('请输入验证码', '#popyzm', {
			tips: [1, '#ff6600'],
			tipsMore: true
		});
	};
	
}
