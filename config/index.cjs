/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx4175d06ee6dcb21f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd6ab89fdcb8ce2b26f8f19bd53dc2325',

  PROVINCE: '河南',
  CITY: '新乡',

  USERS: [
    {
      // 想要发送的人的名字
      name: '梁翼','雅雅',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o-PsT6Xy40d89pPLpZpa_Z4Hj6Ew','o-PsT6YN12rNNJOjf57Mul2f16Sw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID      
      useTemplateId: 'zSb3D_Gx3gqwW4ehnZQ1XpleuqSegLBgGsvS-Mc2xYE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '雅雅', year: '1999', date: '03-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '梁翼', year: '1998', date: '07-20',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2020', date: '11-13',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-11-13' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'fcEdrMjTgV0FjSP9uRdlSgSt7FVCxNcwJmxUmXjgXCU',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o-PsT6Xy40d89pPLpZpa_Z4Hj6Ew',
    }
  ],

}

module.exports = USER_CONFIG

