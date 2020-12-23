import React from 'react';
import forImg from '../../images/for_img.png';
import forInImg from '../../images/forin_img.png';
import forOfImg from '../../images/forof_img.png';
import functionImg from '../../images/function_img.png';
import ifelseImg from '../../images/ifelse_img.png';
import ifelseifImg from '../../images/if_elseif_else_img.png';
import switchImg from '../../images/switchcase_img.png';

const JSBasics = () => {
  return (
    <main>
      <h2>JSBasics</h2>

      <article className="card w-75 mx-auto p-2 m-3">
        <h4>História - timeline</h4>
        <p>1989 Tim Berners-Lee cria a Web.</p>
        <p>1991 Al Gore cria uma lei com incentivos e apoio financeiro para computação.</p>
        <p>
          Mosaic Web Browser - Um dos primeiros navegadores que ajudou a popularizar a Internet.
        </p>
        <p>
          1993 Marc Andreessen funda a Netscape, dominando grande parte do mercado, porém sem
          dinamismo nas paǵinas
        </p>
        <p>
          Brendan Eich cria a linguagem Mocha, sendo remoeda para LiveScript e logo após JavaScript.
        </p>
        <p>1995 Microsoft cria o Internet Explorer, introduzindo a linguage, JScript.</p>
        <p>1996 Netscape socilita à ECMA a padronização do JavaScript.</p>
        <p>
          1997 Primeira versão do ECMA-262, conhecido como ECMAScript. Fornecendo uma série de
          padrões e guias para os navegadores pudessem implementar o JavaScript.
        </p>
      </article>
      <article className="card w-75 mx-auto p-2 m-3">
        <p>
          O JavaScript é a linguagem mais popular do mundo segundo o{' '}
          <a target="_blank" href="https://insights.stackoverflow.com/survey/2019#technology">
            Stack Overflow
          </a>
          , além de ser utilizada em diversos contextos, faz páginas em toda a web terem
          comportamentos dinâmicos!
        </p>
        <p>
          Para utilizar o JavaScript sem depender de um navegador (browser), é necessário instalar o
          Node.js, um runtime para executar códigos JavaScript.
        </p>
        <p>
          Para instalar o Node entre no{' '}
          <a href="https://nodejs.org/en/" target="_blank">
            site oficial
          </a>{' '}
          e faça o download seguindo as instruções.
        </p>
      </article>

      <article className="card w-75 mx-auto p-2 m-3">
        <h4>Variáveis e tipos primitivos</h4>
        <p>Variáveis armazenam valores. Valores que podem ser de vários tipos.</p>
        <p>Exemplos:</p>
        <ul>
          <li>Boolean</li>
          <li>Null</li>
          <li>Undefined</li>
          <li>Number</li>
          <li>String</li>
          <li>Object</li>
        </ul>
        <p>Para criar uma variável existe uma sintaxe à ser respeitada.</p>
        <p>
          <b> const playerName = 'GG_Unit';</b>
        </p>
        <p>
          <b> let meuArray = [1, 5, true, 'Alexandria'];</b>
        </p>
      </article>
      <article className="card w-75 mx-auto p-2 m-3">
        <h4>Arrays e Objetos</h4>
        <p>Arrays e objetos são "agrupamento" de valores.</p>
        <p>const number1 = 1;</p>
        <p>const number2 = 2;</p>
        <p>const number3 = 3;</p>
        <p>
          <b>const arrayNumber = [1, 2, 3];</b>
        </p>
      </article>

      <article className="card w-75 mx-auto p-2 m-3">
        <h4>Operadores lógicos e operadores de atribuição</h4>
        <p>Tornam possível fazer comparações e operações matemáticas.</p>
        <p>Alguns exemplos incluem, + , - , >=, ou (||) , e (and &&), entre outros.</p>
        <p>
          Link para Operadores do JavaScript -
          <a href="https://www.w3schools.com/js/js_operators.asp" target="_blank">
            Aqui
          </a>
        </p>
      </article>

      <article className="card w-75 mx-auto p-2 m-3">
        <h4>Loop For</h4>
        <p>Loops ajudam com funções / ações que serão repetidas várias vezes.</p>
        <img className="mx-auto m-2" width="400px" src={forImg} alt="for loop example" />
        <img className="mx-auto m-2" width="400px" src={forInImg} alt="forIn loop example" />
        <img className="mx-auto m-2" width="400px" src={forOfImg} alt="forOf loop example" />
      </article>

      <article className="card w-75 mx-auto p-2 m-3">
        <h4>Funções</h4>
        <p>Funções executam ações.</p>
        <p>A função sum recebe 2 números e retorna a soma deles.</p>
        <p>sum(4, 8)</p>
        <p>// 12</p>

        <img className="m-2 mx-auto" width="400px" src={functionImg} alt="function example" />
      </article>

      <article className="card w-75 mx-auto p-2 m-3">
        <h4>Condicionais</h4>
        <h6>IF ELSE</h6>
        <img className="m-2 mx-auto" width="400px" src={ifelseImg} alt="if example" />
        <img className="m-2 mx-auto" width="400px" src={ifelseifImg} alt="if else example" />
        <h6>SWITCH CASE</h6>
        <img className="m-2 mx-auto" width="400px" src={switchImg} alt="switch case example" />
      </article>

      <p>Bloco 4 e Bloco 5</p>

      <p>DOM</p>
    </main>
  );
};

export default JSBasics;
