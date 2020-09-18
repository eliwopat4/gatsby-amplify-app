
exports.createPages = ({ graphql, actions }) => {
  const {createRedirect} = actions //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
  createRedirect({
    fromPath: '/test',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/home',
    force: true,
  });
}