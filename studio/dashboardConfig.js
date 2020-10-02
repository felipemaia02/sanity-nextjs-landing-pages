export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f7728d3c656891ac99af088',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vdu6t76o',
                  apiId: '1117ff15-ec8e-43ea-bebc-a4ce27568e8b'
                },
                {
                  buildHookId: '5f7728d490b28327d5a1000b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yn16twhn',
                  apiId: '0804d2e2-4894-4062-8513-fff9e0c8d36e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/felipemaia02/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yn16twhn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
