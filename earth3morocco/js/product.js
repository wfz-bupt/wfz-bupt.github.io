var commonPath = '//static.qyer.com/models/project/hades/earth3morocco/images/product/';
var tpl_product_data = {
	list: [
			{
				img_url: commonPath+'product1.jpeg',
				go_url: 'http://z.qyer.com/deal/85578/',
				product_desc: '【最世界线路】北非奇幻之旅—穿越摩洛哥一千零一夜【保证出团】',
				origin_money: 14900,
				now_money: 12900
			},
			{
				img_url: commonPath+'product2.png',
				go_url: 'http://z.qyer.com/deal/86669/',
				product_desc: '【免签目的地】北京/上海/香港往返摩洛哥5-30天往返特价机票',
				origin_money: 9999,
				now_money:3799
			},
			{
				img_url: commonPath+'product3.jpeg',
				go_url: 'http://z.qyer.com/deal/97337/',
				product_desc: '【暑假】北京/上海/香港往返拉巴特/卡萨布兰卡5-30天含税机票',
				origin_money: 8999,
				now_money:3500
			},
			{
				img_url: commonPath+'product4.jpeg',
				go_url: 'http://z.qyer.com/deal/96168/',
				product_desc: '寻找摩洛哥宝藏9晚10日游卡萨卡布兰卡进出',
				origin_money: 10000,
				now_money:7699
			},
			{
				img_url: commonPath+'product5.jpeg',
				go_url: 'http://z.qyer.com/deal/99360/',
				product_desc: '摩洛哥马拉喀什热气球飞行体验（含酒店往返接送，飞行证书）',
				origin_money: 1600,
				now_money:899
			},
			{
				img_url: commonPath+'product6.jpeg',
				go_url: 'http://z.qyer.com/deal/82793/',
				product_desc: '【探索自然】摩洛哥梅尔祖卡沙漠3日游 (马拉喀什往返)',
				origin_money: 985,
				now_money:830
			}
	]
};
var tpl_product = document.getElementById('product').innerHTML;
var html = juicer(tpl_product, tpl_product_data);
document.getElementById('tpl_product').innerHTML = html;