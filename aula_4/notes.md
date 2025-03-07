Funções 

```javascript

function name(parametro1, parametro2){}

```




**Relatório da Aula de Desenvolvimento Web - [Data]**

**Tema Principal:** Funções em JavaScript e Módulos

Na aula de hoje, exploramos conceitos avançados relacionados a funções em JavaScript, além de introduzir o uso de módulos para organizar e estruturar o código. Abaixo, detalho os principais tópicos abordados:

### 1. **Funções em JavaScript**

#### a) **Arrow Functions**
- As arrow functions (`=>`) são uma sintaxe mais curta e moderna para escrever funções em JavaScript.
- Elas não possuem seu próprio `this`, o que significa que o valor de `this` é herdado do contexto em que a função foi definida.
- Exemplo:
  ```javascript
  const soma = (a, b) => a + b;
  ```

#### b) **Expressões de Função**
- Funções podem ser atribuídas a variáveis, passadas como argumentos ou retornadas de outras funções.
- Exemplo:
  ```javascript
  const multiplicacao = function(a, b) {
      return a * b;
  };
  ```

#### c) **Funções de Callback**
- Callbacks são funções passadas como argumentos para outras funções e executadas após a conclusão de uma operação.
- Comumente usadas em operações assíncronas, como requisições de API ou temporizadores.
- Exemplo:
  ```javascript
  setTimeout(() => {
      console.log("Executado após 2 segundos");
  }, 2000);
  ```

#### d) **Funções Anônimas**
- Funções sem nome, frequentemente usadas como callbacks ou em expressões de função.
- Exemplo:
  ```javascript
  document.addEventListener("click", function() {
      console.log("Clicado!");
  });
  ```

#### e) **Closures**
- Closures são funções que "lembram" do ambiente em que foram criadas, mesmo após esse ambiente ter sido encerrado.
- Úteis para criar funções privadas ou manter estado.
- Exemplo:
  ```javascript
  function contador() {
      let count = 0;
      return function() {
          count++;
          return count;
      };
  }
  const incrementar = contador();
  console.log(incrementar()); // 1
  console.log(incrementar()); // 2
  ```

#### f) **Funções Recursivas**
- Funções que chamam a si mesmas para resolver problemas que podem ser divididos em subproblemas.
- Úteis em algoritmos como fatorial, Fibonacci, etc.
- Exemplo:
  ```javascript
  function fatorial(n) {
      if (n === 0) return 1;
      return n * fatorial(n - 1);
  }
  console.log(fatorial(5)); // 120
  ```

### 2. **Módulos em JavaScript**

#### a) **CommonJS**
- Sistema de módulos usado principalmente no Node.js.
- Utiliza `require` para importar módulos e `module.exports` para exportar.
- Exemplo:
  ```javascript
  // modulo.js
  module.exports = { soma, multiplicacao };

  // main.js
  const { soma, multiplicacao } = require('./modulo');
  ```

#### b) **ES Modules (ESM)**
- Padrão moderno de módulos suportado nativamente em navegadores e Node.js (a partir da versão 12).
- Utiliza `import` e `export`.
- Exemplo:
  ```javascript
  // modulo.js
  export function soma(a, b) { return a + b; }

  // main.js
  import { soma } from './modulo.js';
  ```

### **Conclusão**
A aula foi bastante produtiva, proporcionando um entendimento mais profundo sobre como funções e módulos funcionam em JavaScript. Esses conceitos são fundamentais para o desenvolvimento de aplicações web modernas, permitindo a criação de código mais modular, reutilizável e eficiente. Pretendo praticar esses conceitos em projetos futuros para consolidar o aprendizado.
