Esercizio di oggi: Lista della spesa con ciclo while
nome repo: js-lista-spesa

Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while


Passaggi:
- creo un array con dentro tot elementi
- creo un elemento (in questo caso un "ul") in HTML, che poi richiamerò in javascript
- creo una variabile che servirà dentro il ciclo while per non farlo andare in loop infinito (variabile contatore)
- creo il ciclo while con dentro la condizione, in modo che iteri per la lunghezza di quanti elementi ci sono nel array
- dentro il ciclo, creo uan variabile per creare un elemento HTML, 
che poi andrò a collegare sia al array che al "ul" presente in HTML,
in modo che il contenuto del array venga stampato in HTML
- richiamo la variabile contatore, e la incremento (cambia valore, quindi diventa falsa e non va in loop infinito il ciclo)