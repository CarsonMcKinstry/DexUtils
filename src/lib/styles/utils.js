
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}

export function hexAlpha(hex,a) {
  const { r, g, b} = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function getColor(props) {
  const { context, theme, secondary, disabled } = props;

  return disabled
    ? '#9e9e9es'
    : context 
      ? theme.context[context]
      : secondary 
        ? theme.secondary.dark
        : theme.primary.dark
}