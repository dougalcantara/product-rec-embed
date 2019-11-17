

export const checklistChangeHandler = (item, list, callback) => {
  const existingIndex = list.indexOf(item);
  const updated = [...list];
  if (existingIndex > -1) {
    updated.splice(existingIndex, 1);
  } else {
    updated.push(item); 
  }
  callback(updated);
};


// classname generation
export const classnames = (...args) => {
  const classes = [];
  args.forEach(arg => {
    const argType = typeof arg;
    if (argType === 'string') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      classes.push(arg.join(' '));
    } else if (argType === 'object') {
      for (let key in arg) {
        if (hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  });
  return classes.join(' ');
};