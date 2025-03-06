















function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}


function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}








function distanceFromHqInFeet(pickupLocation) {
  const feetPerBlock = 264;
  return Math.abs(pickupLocation - 42) * feetPerBlock;
}






function calculatesFarePrice(start, destination) {
  const distanceInFeet = Math.abs(destination - start) * 264;

  if (distanceInFeet <= 400) {
      return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
  } else {
      return "cannot travel that far";
  }
}
