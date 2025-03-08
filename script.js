function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoNas = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (anoNas.value.length == 0 || Number(anoNas.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anoNas.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                res.innerHTML = `Detectamos uma criança com ${idade} anos.`
            } else if (idade < 21){
                // Jovem
                res.innerHTML = `Detectamos um jovem com ${idade} anos.`
            } else if (idade < 50){
                // Adulto
                res.innerHTML = `Detectamos um adulto com ${idade} anos.`
            } else {
                // Idoso
                res.innerHTML = `Detectamos um idoso com ${idade} anos.`
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                res.innerHTML = `Detectamos uma criança com ${idade} anos.`
            } else if (idade < 21){
                // Jovem
                res.innerHTML = `Detectamos um jovem com ${idade} anos.`
            } else if (idade < 50){
                // Adulto
                res.innerHTML = `Detectamos um adulto com ${idade} anos.`
            } else {
                // Idoso
                res.innerHTML = `Detectamos um idoso com ${idade} anos.`
            }
        }

    }
}