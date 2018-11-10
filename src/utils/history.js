import History from '../models/history.js';

export function redirectTo(location) {
  History.path = location;
}
