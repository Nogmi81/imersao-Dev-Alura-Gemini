# README.md

## O que este script faz?

Este script JavaScript implementa uma função de pesquisa simples em uma página web. Ao digitar um termo na caixa de pesquisa, o script varre uma lista de dados (não incluída neste exemplo) e exibe os resultados relevantes em uma seção específica da página.

## Como funciona?

1. **Captura a entrada do usuário:** O script obtém o valor digitado na caixa de pesquisa e o converte para letras minúsculas para facilitar a comparação.
2. **Itera sobre os dados:** Percorre a lista de dados, comparando o termo de pesquisa com os campos "selecao", "descricao" e "tags" de cada item.
3. **Exibe os resultados:** Se encontrar correspondências, cria elementos HTML para exibir os resultados da pesquisa. Caso contrário, exibe uma mensagem de erro.
4. **Atualiza a interface:** Insere os resultados gerados na seção HTML designada.

## Utilização

**HTML:**

```html

<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
	<title>Campeões do Mundo</title>
</head>

<body>
    <header>
        <h1>Campeões do Mundo</h1>
   </header>
    <main>
        <section>
	
	<form onsubmit="return false;">		
           <input type="text" placeholder="Pesquise por Seleção ou Ano. Ex: Brasil ou 1958" id="campo-pesquisa">
           <div class="botoes"><button onclick="pesquisar()">Pesquisar</button>
		<button type="reset">Limpar</button></div>
</form>
	</section>

        <section class="resultados-pesquisa" id="resultados-pesquisa"> </section>

		        
    </main>
    <footer>
        <p>2024 - Campeões Mundiais. Todos os direitos reservados</p>
        <p>Entre em contato pelo email: copadomundo@cm.com.br</p>
    </footer>
    <script src="dados.js"></script>
    <script src="app.js"></script>
       
</body>

</html>

```
**Teste**

Na barra de pesquisa pode-se digitar um nome de alguma Seleção ou Ano
