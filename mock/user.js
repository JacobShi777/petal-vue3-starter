const mockJS = require('mockjs')

const userList = mockJS.mock({
  'data|100': [
    {
      name: '@cname', // 表示生成不同的中文名
      // ename: mockJS.Random.name(), // 生成不同的英文名
      'id|+1': 1, //
      time: '@time',
      date: '@date',
    },
  ],
})

module.exports = [
  {
    method: 'post',
    url: '/user/login',
    response: ({ body }) => {
      const { username, password } = body
      if (username === 'admin' && password === 'admin') {
        return {
          code: 1,
          msg: 'success',
          data: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJpZCI6IjE3NzI1MTA4ODI3MzEyOTA2MjUifV0sImlhdCI6MTcxOTY1NTU3MCwiZXhwIjoxNzIwMTA4Nzk5LCJhdWQiOiIiLCJpc3MiOiIiLCJzdWIiOiIifQ.DOU_oCGirCZ_S-xxv1N9_drxHYc53Fsx8W_B66brODo',
          },
        }
      } else {
        return {
          code: 0,
          msg: '用户名或密码错误',
        }
      }
    },
  },
  {
    method: 'get',
    url: '/user/info',
    response: ({ headers }) => {
      const token = headers.token
      if (
        token ===
        '2eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJpZCI6IjE3NzI1MTA4ODI3MzEyOTA2MjUifV0sImlhdCI6MTcxOTY1NTU3MCwiZXhwIjoxNzIwMTA4Nzk5LCJhdWQiOiIiLCJpc3MiOiIiLCJzdWIiOiIifQ.DOU_oCGirCZ_S-xxv1N9_drxHYc53Fsx8W_B66brODo'
      ) {
        return {
          code: 1,
          msg: 'success',
          data: {
            id: '1772510882731290625',
            username: 'admin',
            nickname: '管理员',
            roleId: '1',
            phoneNumber: '13393837465',
            avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          },
        }
      } else {
        return {
          code: 0,
          msg: 'token已失效',
        }
      }
    },
  },
]
