import Html from './html';
import Code from './code';
import Task from './task';

const data = [
  new Task(1, 'Task 1', true),
  new Task(2, 'Task 2', false),
];

const html = new Html();
const code = new Code(html, data);

code.init();
