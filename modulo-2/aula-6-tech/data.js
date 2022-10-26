const hoje = new Date()

hoje.getDate() // Dia
hoje.getDay() // Dia da Semana ex: 5 = Fri
hoje.getMonth() // Número dia mês
hoje.getFullYear() // Ano
hoje.getHours() // Hora
hoje.getMinutes() // Minutos
hoje.getTime() // ms desde 1970
hoje.getUTCHours() - 3 // Brasília
hoje.getMilliseconds() // Milesegundos

const dia = hoje.getDay();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();

const data = `${dia}/${mes + 1}/${ano}`;
document.write(data)
