const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const albumTemplate = path.resolve('src/pages/album.js');

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            allStrapiAlbum {
              nodes {
                id
              }
            }
          }
        `
      ).then(result => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }

        // We'll call `createPage` for each result
        result.data.allStrapiAlbum.nodes.forEach(album => {
          const pagePath = `/albums/${album.id}/`;

          createPage({
            path: pagePath,
            component: albumTemplate,
            context: {
              id: album.id
            }
          });
        });
      })
    );
  });
};
