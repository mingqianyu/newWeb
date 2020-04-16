var result = {
    "code": "0",
    "msg": "操作成功",
    "data": {
        "data": [{
                "activityId": "1156866838949916674",
                "activityName": "",
                "value": [{
                        "beginTime": "2019-08-20 00:00:00",
                        "joinActivityNum": 0
                    },
                    {
                        "beginTime": "2019-08-21 00:00:00",
                        "joinActivityNum": 0
                    },
                ]
            },
            {
                "activityId": "1159734206688522241",
                "activityName": "",
                "value": [{
                        "beginTime": "2019-08-20 00:00:00",
                        "joinActivityNum": 0
                    },
                    {
                        "beginTime": "2019-08-21 00:00:00",
                        "joinActivityNum": 0
                    },
                ]
            }
        ]
    }
}

//  data.length 是 对比活动的个数 

//  rows 是赋值给 charts
var rows = []

var activeNum = result.data.data.length //活动个数
var activeData = result.data.data //活动数据
rows = result.data.data.value //第一个活动数据

// 循环别的活动 放到 rows里面
if (activeNum > 1) {
    for (var i = 1; i < activeNum; i++) {
        // activeData[i] 互动数据
        for (let j = 0; j < activeData[i].value.length; j++) {
            var str = "joinActivityNum" + i;
            rows[j].str = activeData[i].value.joinActivityNum
        }
    }
    console.log(rows)
}