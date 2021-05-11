
/*
 * http://g.tbcdn.cn/de/video-flashplayer/1.0.1/config.js
 **/
(function(){
	// 如果访问页面带上?ks-debug，则不做combo，同时-min.js映射到.js
	if (KISSY.Config.debug) {
		KISSY.config({
			packages:[
				{
					name: "video-flashplayer",
					path: 'http://g.tbcdn.cn/de/video-flashplayer/1.0.1',
					charset: "utf-8",
					ignorePackageNameInUri: true,
					debug: true
				}
			]
		});
	// 线上访问模式，做combo，同时访问-min.js文件
	} else {
		KISSY.config({
			packages: [
				{
					name: 'video-flashplayer',
					// 发布到线上时需要带上版本号
					path: 'http://g.tbcdn.cn/de/video-flashplayer/1.0.1',
					ignorePackageNameInUri: true,
					combine: true
				}
			]
		});
	}
})();
