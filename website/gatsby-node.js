const path = require('path');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.onCreateNode = async ({ node, actions, store, cache }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type !== null && node.internal.type === 'StrapiAlbum') {
    for (const image of node.photos) {
      console.log(image);
      const fileNode = await createRemoteFileNode({
        url: 'http://cms:1337' + image.url,
        store,
        cache,
        createNode,
        createNodeId: id => image.id
      });

      if (fileNode) {
        image.localFile___NODE = fileNode.id;
      }
    }
  }
};

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
