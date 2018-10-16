export default class SnackStore {
  calculateNumberOfSnacks(locations = []) {
    let momentum = 0;

    return locations.reduce((acc, location, i) => {
      let snacks = acc;

      if (i < locations.length - 1) {
        const { altitude } = location;
        const nextLocation = locations[i + 1];

        if (altitude > nextLocation.altitude) {
          momentum += altitude - nextLocation.altitude;
        } else if (altitude < nextLocation.altitude) {
          const upHill = nextLocation.altitude - altitude;

          if (upHill <= momentum) {
            momentum -= upHill;

            return snacks;
          }

          snacks += upHill - momentum;

          momentum = 0;
        }
      }

      return snacks;
    }, 0);
  }
}
