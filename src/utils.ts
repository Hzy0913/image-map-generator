function setOffsetStyle(node, container, offsetSize = 0, isSet) {
  const { width, height } = container;
  const size = isSet ? offsetSize : 0;
  const styles = {
    width: width + (size * 2) + 'px',
    height: height + (size * 2) + 'px',
    left: -size + 'px',
    top: -size + 'px',
  }

  Object.keys(styles).forEach(attribute => {
    node.style[attribute] = styles[attribute];
  });
}

function setLinkStyle(dom, style, setPosition?: boolean) {
  setPosition && ['left', 'right', 'top', 'bottom'].forEach(attribute => dom.style[attribute] = 'auto');
  Object.keys(style).forEach(attribute => {
    dom.style[attribute] = style[attribute] + 'px';
  });
}

export {
  setLinkStyle,
  setOffsetStyle,
}
