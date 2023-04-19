const hospitalCoordinates = [9.0567, 7.4969];
const getUsersDistance = (x1, x2, y1, y2) => {
  const x = parseFloat(x2) - parseFloat(x1);
  const y = parseFloat(y2) - parseFloat(y1);
  // const x = parseFloat(hospitalCoordinates[0]) - parseFloat(usersCordinates[0]);
  // const y = parseFloat(hospitalCoordinates[1]) - parseFloat(usersCordinates[1]);
  const distance = Math.sqrt(x * x + y * y);

  console.log(distance);
  return distance;
};

export const getLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    getUsersDistance(
      position.coords.latitude,
      hospitalCoordinates[0],
      position.coords.longitude,
      hospitalCoordinates[1]
    );
  });
};
