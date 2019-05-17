function containsText(data, search) {
  const clean = search.trim().toLowerCase();
  return data.toLowerCase().includes(clean);
}

function noPinned(tasks) {
  return tasks.filter(o => !o.pinned);
}

function pinned(tasks) {
  return tasks.filter(o => o.pinned);
}

export default function filterTask(tasks, text) {
  return [...noPinned(tasks).filter(o => containsText(o.name, text)), ...pinned(tasks)];
}
