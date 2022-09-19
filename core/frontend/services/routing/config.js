module.exports.QUERY = {
    tag: {
        controller: 'tagsPublic',
        type: 'read',
        resource: 'tags',
        options: {
            slug: '%s',
            visibility: 'public'
        }
    },
    author: {
        controller: 'authorsPublic',
        type: 'read',
        resource: 'authors',
        options: {
            slug: '%s'
        }
    },
    post: {
        controller: 'postsPublic',
        type: 'read',
        resource: 'posts',
        options: {
            slug: '%s'
        }
    },
    page: {
        controller: 'pagesPublic',
        type: 'read',
        resource: 'pages',
        options: {
            slug: '%s'
        }
    },
    previews: {
        controller: 'previews',
        resource: 'previews'
    },
    email: {
        controller: 'emailPost',
        resource: 'email_posts',
        options: {
            slug: '%s'
        }
    },
    upload: {
        controller: 'upload',
        resource: 'upload'
    },
};

module.exports.TAXONOMIES = {
    tag: {
        filter: 'tags:\'%s\'+tags.visibility:public',
        editRedirect: '#/tags/:slug/',
        resource: 'tags'
    },
    author: {
        filter: 'authors:\'%s\'',
        editRedirect: '#/settings/staff/:slug/',
        resource: 'authors'
    }
};
