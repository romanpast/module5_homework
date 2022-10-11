const defineType = (input) => {
    input = + prompt();
    const isOdd = () => input % 2 == 0 ? 'Even' : "Odd";
    return isNaN(input) ? 'Упс, кажется, вы ошиблись' : isOdd();
  }