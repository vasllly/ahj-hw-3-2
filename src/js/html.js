export default class Html {
  constructor() {
    this.filterEl = document.querySelector('[data-id=filter-text]');
    this.filterBtnEl = document.querySelector('[data-action=filter]');
    this.alertError = document.getElementsByClassName('alert');
    this.pinAlert = document.getElementsByClassName('pinned');
    this.taskAlert = document.getElementsByClassName('all-task');
    this.allTaskListEl = document.querySelector('[data-section=all-task-list]');
    this.pinTaskListEl = document.querySelector('[data-section=pin-task-list]');
    this.pins = document.getElementsByClassName('pin');
  }

  buildTaskctList(tasks, countPinned) {
    // Отрисовка задач
    this.allTaskListEl.innerHTML = '';
    this.pinTaskListEl.innerHTML = '';
    if (countPinned) {
      this.pinAlert[0].classList.add('hidden');
    } else {
      this.pinAlert[0].classList.remove('hidden');
    }
    if (countPinned !== tasks.length) {
      this.taskAlert[0].classList.add('hidden');
    } else {
      this.taskAlert[0].classList.remove('hidden');
    }
    tasks.forEach((o) => {
      const el = document.createElement('li');
      el.dataset.id = o.id;
      if (o.pinned) {
        el.innerHTML = `${o.name} <button class="pin">V</button>`;
        this.pinTaskListEl.appendChild(el);
      } else {
        el.innerHTML = `${o.name} <button class="pin">&nbsp;</button>`;
        this.allTaskListEl.appendChild(el);
      }
    });
  }

  addSubmitListener(callback) {
    this.filterBtnEl.addEventListener('click', (event) => {
      callback.call(null, event);
    });
  }

  addInputListener(callback) {
    this.filterEl.addEventListener('input', () => {
      callback.call(null);
    });
  }

  addPinListener(callback) {
    [...this.pins].forEach((pin) => {
      pin.addEventListener('click', (event) => {
        callback.call(null, event.currentTarget.parentElement.dataset.id);
      });
    });
  }
}
