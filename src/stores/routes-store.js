import { observable } from 'mobx';

export default class RoutesStore {
  @observable
  routes = [];

  @observable
  routeItem = {};

  async getRoutes() {
    if (this.routes.length) {
      return this.routes;
    }

    try {
      this.routes = await (await fetch('https://infinite-lake-80504.herokuapp.com/api/routes')).json();

      return this.routes;
    } catch (err) {
      console.log(err);

      return [];
    }
  }

  async getRouteById(id) {
    try {
      this.routeItem = await (await fetch(`https://infinite-lake-80504.herokuapp.com/api/routes/${id}`)).json();

      return this.routeItem;
    } catch (err) {
      console.log(err);

      return {};
    }
  }

  transformToLatLng() {
    const { locations = [] } = this.routeItem;

    return locations.reduce((acc, current) => [...acc, { lat: current.latitude, lng: current.longitude }], []);
  }
}
