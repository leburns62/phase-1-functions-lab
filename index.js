function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(42 - streetNumber);
}

function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return (Math.max(start, destination) - Math.min(start, destination)) * 264
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination);

    if (feet <= 400) return 0;
    else if (feet > 400 && feet < 2000)
        return (feet - 400) * .02;
    else if (feet >= 2000 && feet < 2500)
        return 25;
    else if (feet >= 2500)
        return "cannot travel that far";
}