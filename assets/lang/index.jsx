//import { CBLang } from 'citybrain'
// 脚手架搭建默认的语言json格式（和项目中语言包格式一致）
 //var i18n1 = require('../mockLang.json')

// 项目中已经形成的语言包（一个或者多个）
//var i18n1 = require('@alife/mcms_event-perceiving_et-brain')
// var i18n2 = require('@alife/mcms_event-perceiving_et-brain')
// var i18n3 = require('@alife/mcms_et-components_et-brain')

/*
i18n1为项目的主要语言包，其余的为辅助的语言包（i18n2、i18n3......）
主语言包的appCode，可以不传入，辅助语言包的appCode必传
*/
// let i18n = [
//   {appCode: '1001', langes: i18n1}
//   // {appCode:"1002",langes:i18n2},
//   // {appCode:"1003",langes:i18n3},
// ]

//var i18 = CBLang(i18n)
let currentLang='en';//let currentLang = i18.currentLang
let messages={}//let messages = i18.messages

//EtLang会将扩展的国际化包的key自动加上appCode_前缀，不便使用，此处直接将自定义国际化包追加到主语言包中
//此处需要注意的是：如果出现重名的key将不进行覆盖，只进行增量追加
var i18nProj = require('./moduleName')
// Object.assign(messages[currentLang], i18nProj[currentLang]);
for (let locale in i18nProj) {
    if(!messages.hasOwnProperty(locale)) {
        continue;
    }

    for (let key in i18nProj[locale]) {
        // 主语言包已经存在改key
        if (messages[locale].hasOwnProperty(key)) {
            continue;
        }

        if (typeof(i18nProj[locale][key]) === 'string' || typeof(i18nProj[locale][key]) === 'number') {
            messages[locale][key] = i18nProj[locale][key];
        } else {
            messages[locale][key] = { ...i18nProj[currentLang][key] };
        }
    }
}

/*
最终返回的i18是多个语言包合并后的语言包
合并规则: key:appCode_key,value:value
主语言包的key不做任何修改
返回结果：
{
  "zh-cn":{
    "title":"交通在组织优化",
    "1002_title":"城市事件感知"
    "1003_title":"交通诱导"
  },
  "en-us":{
    "title":"english....",
    "1002_title":"english..."
    "1003_title":"english..."
  }
}
*/
export {
  messages,
  currentLang
}

