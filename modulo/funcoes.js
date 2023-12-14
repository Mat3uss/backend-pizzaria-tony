const apiPizzaria = require('./pizzaria.js');

const listarUsuarios = () => {
    let usuarios = apiPizzaria.usuario || [];
    let usuariosArray = [];

    for (let i = 0; i < usuarios.length; i++) {
        let usuario = usuarios[i];

        let informacoesUsuarios = {
            id: usuario.Id,
            nome: usuario.Nome,
            email: usuario.Email,
            telefone: usuario.Telefone,
            endereco: usuario.Endereço
        };

        usuariosArray.push(informacoesUsuarios);
    }

    return usuariosArray;
};

const listarCategorias = () => {
    return apiPizzaria.categorias || [];
};

const listarProdutos = () => {
    let produtos = apiPizzaria.produtos || [];
    let produtosArray = [];

    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let informacoesProdutos = {
            id: produto.id,
            nome: produto.Nome,
            preco: produto.Preço,
            avaliacao: produto.Avaliação,
            descricao: produto.Descrição,
            imagem: produto.Foto
        };

        produtosArray.push(informacoesProdutos);
    }

    return produtosArray;
};

const listarComentarios = () => {
    let produtos = apiPizzaria.produtos || [];
    let comentariosArray = [];

    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let comentariosProduto = produto.comentario || [];

        for (let j = 0; j < comentariosProduto.length; j++) {
            let comentario = comentariosProduto[j];

            let usuarioComentario = comentario.usuario || {};

            let comentariosInformacoes = {
                id: comentario.id,
                mensagem: comentario.mensagem,
                data: comentario.data,
                usuario: usuarioComentario.Nome || "Usuário não disponível"
            };

            comentariosArray.push(comentariosInformacoes);
        }
    }

    return comentariosArray;
};

const produtoEspecifico = (id) => {
    let produtos = apiPizzaria.produtos || [];
    let produtoEncontrado = null;

    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];

        if (produto.id === id) {
            produtoEncontrado = {
                id: produto.id,
                nome: produto.Nome,
                preco: produto.Preço,
                avaliacao: produto.Avaliação,
                descricao: produto.Descrição,
                imagem: produto.Foto
            };
            break;
        }
    }

    return produtoEncontrado;
};
