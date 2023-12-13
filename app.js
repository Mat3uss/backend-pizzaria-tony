const express = require('express');
const app = express();
const port = 8000;

class PizzariaAPI {
    constructor() {
        // Load data from your module or database
        this.apiPizzaria = require('./modulo/pizzaria.js');
    }

    listarUsuarios() {
        const usuarios = this.apiPizzaria.usuario;
        const usuariosArray = usuarios.map(usuario => ({
            id: usuario.Id,
            nome: usuario.Nome,
            email: usuario.Email,
            telefone: usuario.Telefone,
            endereco: usuario.Endereço,
        }));
        return usuariosArray;
    }

    produtoEspecifico(id) {
        const produtos = this.apiPizzaria.produtos;
        const produtoEncontrado = produtos.find(produto => produto.id === id);

        if (produtoEncontrado) {
            return {
                id: produtoEncontrado.id,
                nome: produtoEncontrado.Nome,
                preco: produtoEncontrado.Preço,
                avaliacao: produtoEncontrado.Avaliação,
                descricao: produtoEncontrado.Descrição,
                imagem: produtoEncontrado.Foto,
            };
        } else {
            return "Produto não encontrado";
        }
    }

    listarProdutos() {
        const produtos = this.apiPizzaria.produtos;
        const produtosArray = produtos.map(produto => ({
            id: produto.id,
            nome: produto.Nome,
            preco: produto.Preço,
            avaliacao: produto.Avaliação,
            descricao: produto.Descrição,
            imagem: produto.Foto,
        }));
        return produtosArray;
    }

    listarComentarios() {
        // Assuming you have a comments array in your apiPizzaria module
        return this.apiPizzaria.comentarios;
    }

    categorias() {
        // Assuming you have a categories array in your apiPizzaria module
        return this.apiPizzaria.categorias;
    }
}

const pizzariaAPI = new PizzariaAPI();

// Define your endpoints
app.get('/usuarios', (req, res) => {
    const usuarios = pizzariaAPI.listarUsuarios();
    res.json(usuarios);
});

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = pizzariaAPI.produtoEspecifico(id);
    res.json(produto);
});

app.get('/produtos', (req, res) => {
    const produtos = pizzariaAPI.listarProdutos();
    res.json(produtos);
});

app.get('/comentarios', (req, res) => {
    const comentarios = pizzariaAPI.listarComentarios();
    res.json(comentarios);
});

app.get('/categorias', (req, res) => {
    const categoriasList = pizzariaAPI.categorias();
    res.json(categoriasList);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
