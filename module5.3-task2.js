const defineType = (x) => {
    switch (typeof x) {
      case 'number':
        return `${x} - number`
        break;
      case 'string':
        return `${x} - string`
        break;
      case 'boolean':
        return `${x} - boolean`
        break;
      default:
        return `Type of ${x} is not defined`
        break;
    }    
  }