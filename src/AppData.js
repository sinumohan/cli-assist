module.exports = {
  groups: [
    {
      name: 'Docker p',
      logo: 'https://major.io/wp-content/uploads/2014/03/docker-whale.png',
      cmd: 'docker',
      commands: [
        {
          name: 'create',
          desc: 'to create a docker container',
          cmd: 'create',
          instances: [
            {
              name: 'create app1',
              params: [
                '--env-file',
                'app1.env',
                '--name',
                'app1-container',
              ],
            },
            {
              name: 'create app2',
              params: [
                '--env-file',
                'app2.env',
                '--name',
                'app2-container',
              ],
            },
            {
              name: 'create app3',
              params: [
                '--env-file',
                'app3.env',
                '--name',
                'app3-container',
              ],
            },
          ],
        },
        {
          name: 'start',
          desc: 'to start a docker container',
          cmd: 'start',
          instances: [
            {
              name: 'start app1',
              params: [
                '--env-file',
                'app1.env',
                '--name',
                'app1-container',
              ],
            },
            {
              name: 'start app2',
              params: [
                '--env-file',
                'app2.env',
                '--name',
                'app2-container',
              ],
            },
            {
              name: 'start app3',
              params: [
                '--env-file',
                'app3.env',
                '--name',
                'app3-container',
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-3-1175138.png',
      cmd: 'mongo',
      commands: [
        {
          name: 'create',
          desc: 'to create a docker container',
          cmd: 'create',
          instances: [
            {
              name: 'create app1',
              params: [
                '--env-file',
                'app1.env',
                '--name',
                'app1-container',
              ],
            },
            {
              name: 'create app2',
              params: [
                '--env-file',
                'app2.env',
                '--name',
                'app2-container',
              ],
            },
            {
              name: 'create app3',
              params: [
                '--env-file',
                'app3.env',
                '--name',
                'app3-container',
              ],
            },
          ],
        },
      ],
    },
  ],
}
;
