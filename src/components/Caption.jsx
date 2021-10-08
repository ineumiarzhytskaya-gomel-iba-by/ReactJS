import './Caption.css';

function Caption(props) {
  const classes = 'caption ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Caption;
