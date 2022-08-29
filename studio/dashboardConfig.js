export default {
  widgets: [
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
                  buildHookId: '630c7ecf7ca5617b3e983f60',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-netlify-studio',
                  apiId: 'e0b6594a-6b46-46e8-92bd-6820d0b43112'
                },
                {
                  buildHookId: '630c7ecff80c1f7d02140292',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-netlify',
                  apiId: '97d6f745-b82c-41aa-9410-472f7d15afaa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ckvgemmy/sanity-kitchen-sink-netlify',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-netlify.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
