var apiPizzaria = require ('./pizzaria.js');

const listarUsuarios = () => {
    let usuarios = apiPizzaria.usuario;
    let usuariosArray = [];

    for (let i = 0; i < produtos.length; i++) {
        let usuario = usuarios[i];
        let informacoesUsuarios = {}

        informacoesUsuarios.id = usuario.Id,
        informacoesUsuarios.nome = usuario.Nome,
        informacoesUsuarios.email = usuario.Email,
        informacoesUsuarios.telefone = usuario.Telefone,
        informacoesUsuarios.endereco = usuario.Endereço

        usuariosArray.push(informacoesUsuarios);

    }
    return usuariosArray
}
const produtoEspecifico = (id) => {

}
const listarProdutos = () => {

    let produtos = apiPizzaria.produtos;
    let produtosArray = [];

    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let informacoesProdutos = {}
        

        informacoesProdutos.id = produto.id,
        informacoesProdutos.nome = produto.Nome,
        informacoesProdutos.preco = produto.Preço,
        informacoesProdutos.avaliacao = produto.Avaliação,
        informacoesProdutos.descricao = produto.Descrição,
        informacoesProdutos.imagem = produto.Foto
        

        produtosArray.push(informacoesProdutos);
    }

    return produtosArray;
};
const listarComentarios = () => {
};
const categorias = () => {
}

// console.log(produtoEspecifico);
// console.log(listarProdutos());
// console.log(categorias);
// console.log(listarComentarios)
console.log(listarUsuarios);