
	function Sudoku(){}
				
					Sudoku.i=0;//初始下标
					Sudoku.j=32;//最少走4圈，基础步数
					Sudoku.prototype.running = 0;//用来判断游戏是否在运行
					Sudoku.s = 0;//用来判断是否基础步数要加上索引步数
					Sudoku.sudu = 100;//初始速度
//					this.reset = function(){//重置，装盘每一次都从第一个开始
//						        clearInterval(time_zhuanpan);
//					    		Sudoku.i=0;
//								Sudoku.j=32;
//								Sudoku.prototype.running = 0;
//								Sudoku.s = 0;
//								Sudoku.sudu = 100;
//					},
					Sudoku.reset = function(){//重置但转盘从之前中奖的位置开始
						        clearInterval(time_zhuanpan);
					    		Sudoku.i=odex;
								Sudoku.j=32-odex;
								Sudoku.prototype.running = 0;
								Sudoku.s = 0;
								Sudoku.sudu = 100;
					};
					Sudoku.prototype.run = function(dex){
						    odex = dex;//记录结束时背景图的下标
						    Sudoku.prototype.running = 1;
						    
					    	if(Sudoku.s==0){
					    		Sudoku.j+=dex-1;//因为开始j没有减1，所以这里要手动加上
					    		Sudoku.s=1;
					    	}else{
					    		Sudoku.j--
					    	}
					    	Sudoku.i++;
					    	if(Sudoku.sudu>=300){//设置转盘速度
					    		Sudoku.sudu=500;//为了让它停止时显得更自然
					    	}else{
					    		Sudoku.sudu+=1.5*Sudoku.i; 
					    	}
					    	if(Sudoku.i==3||Sudoku.i==5){
					    		$(".list").eq(Sudoku.i+1).addClass("action");
					    	    $(".list").eq(Sudoku.i+1).siblings(".list").removeClass("action");
					    	}else if(Sudoku.i==4){
					    		$(".list").eq(Sudoku.i+3).addClass("action");
					    	    $(".list").eq(Sudoku.i+3).siblings(".list").removeClass("action");
					    	}else if(Sudoku.i==6){
					    		$(".list").eq(Sudoku.i-1).addClass("action");
					    	    $(".list").eq(Sudoku.i-1).siblings(".list").removeClass("action");
					    	}
					    	else if(Sudoku.i==7){
					    		$(".list").eq(Sudoku.i-4).addClass("action");
					    	    $(".list").eq(Sudoku.i-4).siblings(".list").removeClass("action");
					    	}else if(Sudoku.i==8){					    		
					    		Sudoku.i=0;
					    		$(".list").eq(Sudoku.i).addClass("action");
					    	    $(".list").eq(Sudoku.i).siblings(".list").removeClass("action");
					    	}
					    	else{
					    		$(".list").eq(Sudoku.i).addClass("action");
					    	    $(".list").eq(Sudoku.i).siblings(".list").removeClass("action");
					    	}
					    	
					     time_zhuanpan = setTimeout(function(){//再一次执行run方法
								Sudoku.prototype.run(dex);
								console.log(Sudoku.sudu);
							},Sudoku.sudu)
					     if(Sudoku.j==0){	//当转盘结束时，重置转盘数据
					     	    Sudoku.reset();
					    	}
					    	
					}
								
				var sudoku = new Sudoku();

