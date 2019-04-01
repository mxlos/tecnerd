
const getImageSharp = (nodes, name) => nodes.find(contentNode => (contentNode.internal.type === 'File' && contentNode.name === name));

exports.onCreateNode = ({
  node,
  getNodes,
  actions
}) => {

  const { createParentChildLink } = actions;

  if (node.internal.owner === 'gatsby-source-google-spreadsheet') {
    const avatar = (node.avatar !== null) ? node.avatar : 'avatar';
    const nodes = getNodes();
    let imageSharpNode = getImageSharp(nodes, avatar);
    if (imageSharpNode === undefined) {
      imageSharpNode = getImageSharp(nodes, 'avatar');
    }

    createParentChildLink({ parent: node, child: imageSharpNode });

    return;
  }

  return;
}
