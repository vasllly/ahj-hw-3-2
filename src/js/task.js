export default class Task {
  constructor(id, name, pinned) {
    this.id = id;
    this.name = name;
    this.pinned = pinned;
  }

  togglePinned() {
    this.pinned = !this.pinned;
  }
}
