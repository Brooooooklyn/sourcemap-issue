export class Service {
  throwError() {
    if (Math.random() < 0) {
      return null;
    }
    throw new TypeError('wow');
  }
}

export default new Service;
