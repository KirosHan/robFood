const appName = "叮咚买菜";
launchApp(appName);
sleep(3000);
auto.waitFor()

var timeOrder = 2


const clickSettle = () => {  //结算
	className("android.widget.TextView").id('btn_submit').findOne().click()
}

const clickPay = () => {  //支付
	className("android.widget.TextView").id('tv_submit').findOne().click()
}

const clickSettime = () => {  //进入时间
	className("android.widget.TextView").id('tv_multi_product_time_text').findOne().click()
}

const clickTime = () => {  //选择时间
	className("android.view.ViewGroup").id('cl_item_select_hour_root').drawingOrder(timeOrder).findOne().click()
}


const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}

const start = () => {
	// 是否有结算按钮
	if (hasText("去结算")) {  //购物车界面
		// 点击结算
		clickSettle()
		//sleep(1000)
		start()
	} else if (hasText('请选择送达时间')) { //结算界面如果有时间
		// 返回上一页
		//back()
		//sleep(1000)
		clickSettime() 
		start()
	}else if (hasText('18:30-22:30')) { //选择时间界面
		// 返回上一页
		//back()
		//sleep(1000)
		clickTime() 
		start()
	} else if (hasText("您选择的送达时间已经失效了，请重新选择")) { //
		//id('bottom_style_two').findOne().parent().click()
		text("选择送达时间").click()
		//sleep(1000)
		start()
	} else if (hasText("返回购物车")) { //
		//id('bottom_style_two').findOne().parent().click()
		text("返回购物车").click()
		//sleep(1000)
		start()
	} else if (hasText("继续支付")) { //
		//id('bottom_style_two').findOne().parent().click()
		text("继续支付").click()
		//sleep(1000)
		start()
	}else if (hasText('立即支付')) { //支付
		className("android.widget.TextView").text("立即支付").findOne().click()
		//sleep(1000)
		start()
	} 
}

while(true){
	start()
}


//返回购物车
//继续支付