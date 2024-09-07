function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p class='item-resultado erro'>ATENÇÃO: Você precisa digitar o nome de uma Seleção ou Ano</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let selecao = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        selecao = dado.selecao.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se selecao includes campoPesquisa
        if (selecao.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>${dado.selecao}</h2>
                 <p class="descricao-meta"><span class='negrito'>${dado.descricao}</span></p>
               <p class="direita"> <a href=${dado.link} target="_blank">Mais informações</a></p>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p class='item-resultado erro'>ATENÇÃO: Seleção não foi Campeã ou Ano não teve Copa</p>";
	
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}