import RoutesStore from './routes-store';
import SnackStore from './snack-store';

export default class StoreInitializer {
  static initialize() {
    return {
      routesStore: new RoutesStore(),
      snackStore: new SnackStore()
    };
  }
}
