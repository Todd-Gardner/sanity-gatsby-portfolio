export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615df9941596d000a0142835',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-o51m1cvs',
                  apiId: 'edf85d63-9ca5-413a-a4d8-8ba299ba068c'
                },
                {
                  buildHookId: '615df994804cac00a6a4c89f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xfzz51km',
                  apiId: 'ce8982a7-4600-45b2-a913-d8e2dd7f8fcb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Todd-Gardner/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xfzz51km.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
