const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const funcoes = require('./modulo/funcoes.js');


const app = express();

app.use(cors());
app.use(bodyParser.json());

// Middleware para configurar cabeçalhos CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
});

// Endpoint: Listar os usuários
app.get('/usuarios/dados', async function (req, res) {
    const dados = funcoes.listarUsuarios();
    res.json(dados);
});

// Endpoint: Listar as categorias
app.get('/categorias/dados', async function (req, res) {
    const dados = funcoes.categorias();
    res.json(dados);
});

// Endpoint: Listar os produtos
app.get('/produtos/dados', async function (req, res) {
    const dados = funcoes.listarProdutos();
    res.json(dados);
});

// Endpoint: Listar os comentários
app.get('/comentarios/dados', async function (req, res) {
    const dados = funcoes.listarComentarios();
    res.json(dados);
});

// Endpoint: Detalhes do produto
app.get('/produtos/:id', async function (req, res) {
    const { id } = req.params;
    const produto = funcoes.produtoEspecifico(id);

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
});

// Executar a API
const PORT = 8080;
app.listen(PORT, function () {
    console.log(`API funcionando e aguardando requisições na porta ${PORT}`);
});