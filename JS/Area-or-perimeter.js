const areaOrPerimeter = function(l , w) {
    if (l === w)
      return l * w
    else
      return (l * 2) + (w * 2)
  };

  console.log((areaOrPerimeter(4 , 4)))

  // Cleaner example
  const areaOrPerimeter2 = function(l , w) {
    return l == w ? l*w : 2*(l + w)
  };