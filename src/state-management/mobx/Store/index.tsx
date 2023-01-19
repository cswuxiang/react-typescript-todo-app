import { action, observable } from 'mobx';

class Store {
  @observable
  count = 1;

  @action
  setCount = () => {
    this.count++;
  }
}
export const store = new Store();




