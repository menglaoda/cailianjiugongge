;(function(){
	
	$(function(){
//		    $(window).scroll(function(){$(this).scrollTop(0);});
//		    var running = 0;		
//			var nodata = 0;		//用来判断是否关注了公众号
//			var gamenum = 0;
//			var showSign = 0;
		     var $zhezhao = $(".zhezhao");//遮罩的盒子
		     var $owidth = $(window).width() ;
		     
		    
		     if($owidth>410){
		     	$(".jiugong_2_1").css("left",($owidth-340)/2);
		     }
		     else if($owidth>350 &&$owidth<410){
		     	$(".jiugong_2_1").css("left",($owidth-310)/2);
		     }else{
		     	$(".jiugong_2_1").css("left",($owidth-270)/2);
		     }
		    
//		     $(".header").hide();
		     $(".jiugong").hide();
		     $(".footer").hide();
		
			
			   function jiangpin(){
     	
     
               var $footer_2_1 = $(".footer_2_1");
          
               $.ajax({
	               	dataType:"json",
	               	url:"json/jiangpin.json",
	               	success:function(res){
	               		console.log(res);
	               		$.each(res, function(idx,item) {
	               			var zongjiang = 1;
	               			if(zongjiang==0){
	               				var $jiangpin = $("<div></div>");
	               				var $jiangpin_1_p = $("<p></p>");
	               				$jiangpin.addClass(".jiangpin");
	               				$jiangpin_1_p.html("奖品：未中奖").addClass(".jiangpin_1_p");
	               				$jiangpin_1_p.appendTo($jiangpin);
	               				$jiangpin.appendTo($footer_2_1);
	               				return;
	               			}else{
	               				var $jiangpin = $("<div></div>");
	               				var $jiangpin_0 = $("<div></div>");
	               				var $jiangpin_img = $("<img />");
	               				var $jiangpin_1 = $("<p></p>");
	               				var $jiangpin_2 = $("<p></p>");
	               				var $jiangpin_3 = $("<p></p>");
	               				var $jiangpin_4 = $("<p></p>");
	               				var $jiangpin_5 = $("<p></p>");
	               				var $jiangpin_6 = $("<p></p>");
	               				$jiangpin_0.addClass("jiangpin_1").appendTo($jiangpin);
	               				$jiangpin_img.attr("src",item.url).addClass("jiangpin_1img").appendTo($jiangpin_0);
	               				$jiangpin_1.html(item.explain).addClass("jiangpin_1_p").appendTo($jiangpin);
	               				$jiangpin_2.html(item.zhongj).addClass("jiangpin_1_p").appendTo($jiangpin);
	               				$jiangpin_3.html(item.duij).addClass("jiangpin_1_p").appendTo($jiangpin);
	               				$jiangpin_4.html(item.way).addClass("jiangpin_1_p").appendTo($jiangpin);
	               				$jiangpin_5.html(item.lianxi).addClass("jiangpin_1_p").appendTo($jiangpin);
	               				$jiangpin_6.html("立即兑奖").addClass("jiangpin_btn").appendTo($jiangpin);
	               				$jiangpin.addClass("jiangpin").appendTo($footer_2_1);
	               				
	               				 //点击立即兑奖
								$jiangpin_btn = $(".jiangpin_btn");
								$jiangpin_btn.on("click",function(){
									console.log("aaaaa");
									q = $jiangpin_btn.index(this);
									console.log(q);
									duijiang_mima();

									
								})
	               			}
	               		});
	               	}
               });
             } 
              //点击我的奖品
			 $(".jiugong_3_1").on("click",function(){
			 	if($sj.val()==""){
			 		$zhezhao.show();
			 		var $oheight = $("body").height()+100;
				    console.log($oheight);
				    $zhezhao.css("height",$oheight);
				 	$(".jiugong").show();
				 	$input_box.show();
				 	jiangpin();
			
					
			 		
			 	}else{
			 	    $(".header").hide();
			 	    $(".jiugong").hide();
			 	    $(".footer").show();
			 //	    jiangpin();
			 	}
			 	

   
			 })
			 //点击继续抽奖
			 $(".footer_3_1").on("click",function(){
			 		$(".jiugong").show();
			 	    $(".footer").hide();
			 	//    var $jiangpin = $(".jiangpin");
                 //   $jiangpin.remove();
			 })
			 //点击游戏规则
				$(".jiugong_1_1 span").eq(3).on("click",function(){
					var $oheight = $("body").height()+100;
					console.log($oheight);
					$zhezhao.css("height",$oheight);
					$zhezhao.css("display","block");
					$(".guize").show();
					//点击确定时
					$(".guize_2 h2").on("click",function(){
						$zhezhao.css("display","none");
						$(".guize").hide();
					})
				});	
			//点击游戏规则
				$(".footer_1_1").on("click",function(){
					var $oheight = $("body").height()+100;
				    console.log($oheight);
				    $zhezhao.css("height",$oheight);
					$zhezhao.css("display","block");
					$(".guize").show();
					//点击确定时
					$(".guize_2 h2").on("click",function(){
						$zhezhao.css("display","none");
						$(".guize").hide();
					})
				});	
						
                        //初始化游戏参数
							sudoku.container=document.getElementById("sudoku");
						//
					    var i = 3;//抽奖次数
						var $p_qd = $(".p_qd");
						
						var $zj = $(".zj");
						var $zj_img = $(".zjimg img");
						var $p_nr = $(".p_nr");
						var $p_nr2 = $(".p_nr2");
						var $p_nr3 = $(".p_nr3");
						var $p_nr4 = $(".p_nr4");
						var $p_nr5 = $(".p_nr5");
						//点击确定，中奖提示框消失
									$p_qd.on("click",function(){
										console.log("qqq");
										$zj.css("display","none");
									//	$(".jiugong").css("opacity","1");
									//	$(".header").css("opacity","1");
									    $zhezhao.css("display","none");
									});
						var $cs = $(".cs");//抽奖次数	
						//点击开始抽奖
							$(".list_btn").on("click",function () {
							 if(sudoku.running==0){
								i--;
								console.log(i);
								if(i>=0){
									$cs.html(i);
									$.ajax({
									dataType:"json",
									url:"json/test.json",
									success:function(res){	
											console.log(res);
											$.each(res, function(idx,item) {
												var ss = item.data-1;
												sudoku.run(ss);	
											    k =item.data;//控制中奖的号码	
											    s = k-1;
										//	    console.log(sudoku.runing);
											      setTimeout(function(){
													tanchu();
												},7500)
											});
											
										
									    }
						         });
								}else{
									$cs.html("0");
									console.log("cccc");										
									console.log("aaa");
									$zj.css("display","block");
									$p_nr.html("抽奖次数已用完，请下次再来！");
								    $zj.css("top","40%");
									$(".zjimg").css("display","none");
									$p_nr2.html("");
									$p_nr3.html("");
									$p_nr4.html("");
									$p_nr5.html("");
									$zhezhao.css("display","block");
									var $oheight = $("body").height()+100;
								    console.log($oheight);
								    $zhezhao.css("height",$oheight);
								//	$(".jiugong").css("opacity","0.7");
								//	$(".zj").css("opacity","1");
										 									
								}
								
						     }
							});
						
                        	//弹出中奖框
                        	   
								function tanchu(){									
									$zj.css("display","block");
									//如果抽奖次数小于0，弹出不可抽奖提示框
							
									if(s==-1){
										console.log("不中奖");
										$p_nr.html("未中奖，感谢您的参与！");
										$zj.css("top","40%");
										$(".zjimg").css("display","none");
										$p_nr2.html("");
										$p_nr3.html("");
										$p_nr4.html("");
										$p_nr5.html("");
										var $oheight = $("body").height()+100;
									    console.log($oheight);
									    $zhezhao.css("height",$oheight);
										$zhezhao.css("display","block");
						
									}else{
										$p_nr.html("恭喜您，中奖了");
										$.ajax({
													dataType:"json",
													url:"json/index.json",
													success:function(res){	
													
													$.each(res, function(idx,item) {
														console.log(res[s]);
														console.log(k);
														console.log(s);
														if(idx!=2 && idx==s){
															console.log("不是联通")
															$zj_img.attr("src",item.url);
															$p_nr2.html(item.explain);
															$p_nr3.html(item.cost);
															$p_nr4.html(item.way);
															$p_nr5.html("");
																}		
														if(s==2 && idx==2){
															console.log("联通")
															$zj_img.attr("src",item.url);
															$p_nr2.html(item.explain);
															$p_nr3.html(item.cost);
															$p_nr4.html(item.way);
															$p_nr5.html(item.ps);
														}
															});
															
														}
													});
									$zhezhao.css("display","block");
									var $oheight = $("body").height()+100;
								    console.log($oheight);
								    $zhezhao.css("height",$oheight);
										
										
									}						
								}
				                
			 //点击开始游戏
			 function congfu(){
			 	    $zj.css("top","40%");
					$(".zjimg").css("display","none");
					$p_nr2.html("");
					$p_nr3.html("");
					$p_nr4.html("");
					$p_nr5.html("");
                    $zhezhao.css("display","block");
                    var $oheight = $("body").height()+100;
				    console.log($oheight);
				    $zhezhao.css("height",$oheight);
					$(".zj").css("display","block");
			 }
			 $(".startgame").on("click",function(){
			 	var data = 3;
			 	if(data==0){
			 		$p_nr.html("活动还没开始，请十点整再来！");
					congfu();
			 	}
			 	else if(data==1){
			 		$p_nr.html("奖品已发完，请明日十点整再来！");
					congfu();
			 	}else if(data==2){
			 		$p_nr.html("活动已结束！");
					congfu();
			 	}else{
			 		 $(".header").hide();
		     	     $(".jiugong").show()
		     	     console.log("aa");
			 	}
	     	    
	     	      
	        })			
								
			
			var $input_box = $(".input_box");//整个个人信息弹窗盒子
			var $mz = $(".mz");//名字输入框
			var $sj = $(".sj");//手机输入框
			var $input_qd_1 = $(".input_qd_1");//确定按钮
			var $input_qd_2 = $(".input_qd_2");//取消按钮
			var $input_pd = $(".input_pd");//提示字符
			$mz.on("blur",function(){//名字输入框判断
				if($mz.val()==""){
					$input_pd.eq(0).show().find("span").css("color","red");
				}else{
					$input_pd.eq(0).hide();
				}
			})
			$sj.on("blur",function(){//手机输入框判断
				if($sj.val()==""){
					$input_pd.eq(1).show().find("span").css("color","red").html("手机号不能为空");
				}else{
					var $sjval = $sj.val();
				//	var inp00= /^.{6,20}$/.test(inp0);
				    var $sjval2 =/^1[34578][\d]{9}$/.test($sjval);
					if($sjval2){					
						$input_pd.eq(1).hide();
					}else{
						$input_pd.eq(1).show().find("span").css("color","red").html("手机号不合法");
					}
					
				}
			})
			$input_qd_1.on("click",function(){//点击确定按钮
				var $sjval = $sj.val();
				//	var inp00= /^.{6,20}$/.test(inp0);
				var $sjval2 =/^1[34578][\d]{9}$/.test($sjval);
				if($sjval2 &&$mz.val()!=""){
					console.log("zz");
					$zhezhao.css("display","none");
					$input_box.css("display","none");
					$(".jiugong").hide();
					$(".footer").show();
				
				}else if($mz.val()==""){
					$input_pd.eq(0).show().css("color","red");
				}else if($sj.val()==""){
					$input_pd.eq(1).show().html("手机号不能为空").css("color","red");
				}else if($sj.val()!="" && !$sjval2){
					$input_pd.eq(1).show().find("span").css("color","red").html("手机号不合法");
				}
				else{
					$zhezhao.show();
					$input_box.show();
				}
								
			})
			$input_qd_2.on("click",function(){//点击取消按钮
				$zhezhao.hide();
				$input_box.hide();
				$mz.val("");
				$sj.val("");
				$input_pd.eq(0).hide();
				$input_pd.eq(1).hide();
			
			})
			
			//兑奖密码弹窗
	function duijiang_mima(){
			
			var $duij_password = $(".duij_password");//大盒子
			var $duij_password_inp = $(".duij_password_inp");//输入框
			var $duij_password_h6 = $(".duij_password_h6");//密码不正确
			var $duij_password_1 =$(".duij_password_1");//确定
			var $duij_password_2 =$(".duij_password_2");//取消
			$zhezhao.css("display","block");
			var $oheight = $("body").height()+100;
			console.log($oheight);
			$zhezhao.css("height",$oheight);
			$duij_password.css("display","block");
			$duij_password_inp.on("focus",function(){//获取焦点
				$duij_password_h6.css("color","white");
			});
			$duij_password_1.on("click",function(){//点击确定
				var i =1234;
				var j = $duij_password_1.index(this);
				console.log(j);
				if($duij_password_inp.val()== i){//如果兑奖码正确
					$duij_password_h6.css("color","white");
					$duij_password.css("display","none");
					$zhezhao.css("display","none");
					$duij_password_inp.val("");
					$jiangpin_btn.eq(q).html("已兑奖");
					$jiangpin_btn.eq(q).unbind("click"); //给已兑奖按钮移除click;
				}else{
					$duij_password_h6.css("color","red");
					$duij_password_inp.val("");
				}
			});
			$duij_password_2.on("click",function(){//点击取消
				$duij_password.css("display","none");
				$zhezhao.css("display","none");
				$duij_password_inp.val("");
			});
		}	
	});

    

})();
