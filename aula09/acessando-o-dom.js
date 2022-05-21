// acessa o primeiro parágrafo e salva na variárel p1
var p1 = window.document.getElementsByTagName('p')[0]
// retorna o conteúdo do parágrafo
window.document.write(p1.innerText)
// colore o parágrafo pela DOM
p1.style.color = 'blue'
// acessa o body do html e salva em 'corpo'
var corpo = window.document.body
// colore o body através da DOM
corpo.style.background = 'green'