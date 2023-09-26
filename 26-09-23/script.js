// Benutzeranmeldung
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Hier können Sie den Anmeldevorgang implementieren
  });
  
  // Aufgabenerfassung
  document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    // Hier können Sie die Erfassung der Aufgabe implementieren
  });
  
  // Funktion zum Anzeigen der Aufgabenliste
  function displayTodoList(todoList) {
    const todoListContainer = document.getElementById('todo-list');
    todoListContainer.innerHTML = '';
  
    todoList.forEach(function(todo) {
      const todoItem = document.createElement('li');
      todoItem.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
        <p>Fälligkeitsdatum: ${todo.dueDate}</p>
        <p>Status: ${todo.status}</p>
      `;
      todoListContainer.appendChild(todoItem);
    });
  }
  
  // Hier können Sie weitere Funktionen für die Sortierung und Suche implementieren
  
  // Beispiel-Daten für die Aufgabenliste
  const exampleTodoList = [
    { title: 'Aufgabe 1', description: 'Beschreibung der Aufgabe 1', dueDate: '2023-09-30', status: 'offen' },
    { title: 'Aufgabe 2', description: 'Beschreibung der Aufgabe 2', dueDate: '2023-10-10', status: 'erledigt' },
  ];
  
  // Beim Laden der Seite die Beispiel-Aufgabenliste anzeigen (kann durch Ihre Implementierung ersetzt werden)
  window.addEventListener('load', function() {
    displayTodoList(exampleTodoList);
  });
  