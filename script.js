const calcular = document.getElementById('calcular');

function start(){
  const numeroA = document.getElementById('numero-a').valueAsNumber;
  const numeroB = document.getElementById('numero-b').valueAsNumber;
  const resultadoSoma = document.getElementById('resultado-sm');
  const resultadoSub1 = document.getElementById('resultado-sub1');
  const resultadoSub2 = document.getElementById('resultado-sub2');
  const resultadoDiv1 = document.getElementById('resultado-div1');
  const resultadoDiv2 = document.getElementById('resultado-div2');
  const resultadoMult = document.getElementById('resultado-mult');
  const resultadoPot1 = document.getElementById('resultado-pot1');
  const resultadoPot2 = document.getElementById('resultado-pot2');
  const resultadoRq1 = document.getElementById('resultado-rq1');
  const resultadoRq2 = document.getElementById('resultado-rq2');
  const resultadoFat1 = document.getElementById('resultado-fat1');
  const resultadoFat2 = document.getElementById('resultado-fat2');
  const resultadoPorc1 = document.getElementById('resultado-porc1');
  const resultadoPorc2 = document.getElementById('resultado-porc2');
  const resultadoMed = document.getElementById('resultado-med');


    //SOMA
  if (numeroA !== '' && numeroB !== '') {
      const soma = numeroA + numeroB;  
      
      resultadoSoma.textContent = soma; 
    } 
     //SUBTRAÇÃO 1  
  if (numeroA !== '' && numeroB !== '') {
      const subtracao1 = numeroA - numeroB;
      
      resultadoSub1.textContent = subtracao1; 
  }
    //SUBTRAÇÃO 2
  if (numeroA !== '' && numeroB !== '') {
      const subtracao2 = numeroB - numeroA;
      
      resultadoSub2.textContent = subtracao2; 
  }
    //DIVISÃO 1
  if (numeroA !== '' && numeroB !== '') {
      const divisao1 = (numeroA / numeroB).toFixed(2);
      
      resultadoDiv1.textContent = divisao1; 
  }
    //DIVISÃO 2
  if (numeroA !== '' && numeroB !== '') {
      const divisao2 = (numeroB / numeroA).toFixed(2);
      
      resultadoDiv2.textContent = divisao2; 
  }
    //MULTIPLICAÇÃO
  if (numeroA !== '' && numeroB !== '') {
      const multiplicacao = numeroA * numeroB;
      
      resultadoMult.textContent = multiplicacao; 
  }
    //POTÊNCIA 1
  if (numeroA !== '' && numeroB !== '') {
      const potencia1 = numeroA ** numeroB;
      
      resultadoPot1.textContent = potencia1; 
  }
    //POTÊNCIA 2
  if (numeroA !== '' && numeroB !== '') {
      const potencia2 = numeroB ** numeroA;
      
      resultadoPot2.textContent = potencia2; 
  }
    //RAIZ QUADRADA 1
  if (numeroA) {
      const raiz1 = Math.sqrt(numeroA).toFixed(2);
      
      resultadoRq1.textContent = raiz1; 
  }
    //RAIZ QUADRADA 2
  if (numeroB !== '') {
      const raiz2 = Math.sqrt(numeroB).toFixed(2);
      
      resultadoRq2.textContent = raiz2; 
  }
    //FATORIAL 1
  if (numeroA !== '') {
      const fatorial1 = (numeroA - 1) * numeroA;
      
      resultadoFat1.textContent = fatorial1; 
  }
    //FATORIAL 2
  if (numeroB !== '') {
    const fatorial2 = (numeroB - 1) * numeroB;
      
      resultadoFat2.textContent = fatorial2; 
  }
    //PORCENTAGEM 1
  if (numeroA !== '' && numeroB !== '') {
    const porcentagem1 = (numeroB / numeroA * 100).toFixed(0);
      
      resultadoPorc1.textContent = porcentagem1 + "%"; 
  }
    //PORCENTAGEM 2
  if (numeroA !== '' && numeroB !== '') {
      const porcentagem2 = (numeroA / numeroB * 100).toFixed(0);
        
        resultadoPorc2.textContent = porcentagem2 + "%"; 
  }
    //MEDIA
  if (numeroA !== '' && numeroB !== '') {
      const media = (numeroA + numeroB) / 2;
        
        resultadoMed.textContent = media; 
  }
}

calcular.addEventListener('click', start);