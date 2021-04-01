const home = (req, res) => {
  res.render('home', {
    time: 10,
    lista: ['Tulio', 'Faria', 'Teste'],
    animais: [
      { name: 'Teca' },
      { name: 'Tica' },
      { name: 'Branca' },
      { name: 'Tiazinha' },
      { name: 'Bolinha' }
    ]
  })
}

const pagina1 = (req, res) => {
  res.send('Fullstack Master')
}

const calc = (req, res) => {
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query
    const soma = parseFloat(num1) + parseFloat(num2)
    res.render('calc', { soma })
  } else {
    res.render('erro')
  }
}

const par = (req, res) => {
  const isPar = (req.params.num % 2) === 0
  if (isPar) {
    res.send('Número é Par')
  } else {
    res.send('Número é Impar')
  }
}

module.exports = {
  home,
  pagina1,
  calc,
  par
}