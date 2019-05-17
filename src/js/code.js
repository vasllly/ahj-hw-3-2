import Task from './task';
import filterTask from './filter';

export default class Code {
  constructor(html, data) {
    this.html = html;
    this.tasks = data;
    this.lastID = this.tasks.length;
  }

  init() {
    this.html.addSubmitListener(this.submitListener.bind(this));
    this.html.addInputListener(this.inputListener.bind(this));
    this.redrawDOM(this.tasks);
  }

  countPinned() {
    return this.tasks.filter(o => o.pinned).length;
  }

  redrawDOM(tasks) {
    this.html.buildTaskctList(tasks, this.countPinned());
    this.html.addPinListener(this.pinListener.bind(this));
  }

  submitListener(event) {
    event.preventDefault();
    const text = this.html.filterEl.value;
    if (text === '') {
      this.html.alertError[0].classList.remove('hidden');
    } else {
      this.lastID += 1;
      this.tasks.push(new Task(this.lastID, text, false));
      this.html.filterEl.value = '';
      this.redrawDOM(this.tasks);
    }
  }

  inputListener() {
    const text = this.html.filterEl.value;
    this.html.alertError[0].classList.add('hidden');
    const filtered = filterTask(this.tasks, text);
    this.redrawDOM(filtered);
  }

  pinListener(id) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === +id) task.togglePinned();
      return task;
    });
    this.redrawDOM(this.tasks);
  }
}
