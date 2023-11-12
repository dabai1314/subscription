import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.wps.moffice_eng',
  name: 'WPS',
  {
  "id": "com.tsingzone.questionbank",
  "name": "一起考教师",
  "groups": [
    {
      "key": 1,
      "name": "[ChangeMe]规则名称-2023-11-12 12:58:31",
      "desc": "[ChangeMe]本规则由GKD网页端审查工具生成",
      "rules": [
        {
          "activityIds": "com.yiqischool.login.moduleSplash.YQSplashScreenActivity",
          "matches": "[id='com.tsingzone.questionbank:id/left_time']",
          "snapshotUrls": "https://i.gkd.li/import/13327206"
        }
      ]
    }
  ]
}
});
