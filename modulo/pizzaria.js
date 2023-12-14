const listarUsuarios = [
    {
        Id: "1",
        Nome: "Guilherme Oliveira",
        Email: "Guilherme@email.com.br",
        Senha: "guilherme1",
        Telefone: "(11) 95555-5555",
        Endereço: "Rua Manaus, Carapícuiba, São Paulo",
    },
    {
        Id: "2",
        Nome: "Matheus Zanoni Barbosa",
        Email: "Matheus@email.com.br",
        Senha: "matheus1",
        Telefone: "(11) 94792-4237",
        Endereço: "Rua Carapicuiba, Carapícuiba, São Paulo",
    },
    {
        Id: "3",
        Nome: "Pedro Pedraga",
        Email: "pedrinhofofo@email.com.br",
        Senha: "pedrinho1",
        Telefone: "(11) 94444-4444",
        Endereço: "Rua São Pedro, Carapícuiba, São Paulo",
    },
    {
        Id: "4",
        Nome: "Pedro Barbosa",
        Email: "pedrobarbosa@email.com.br",
        Senha: "pedro1",
        Telefone: "(11) 96666-6666",
        Endereço: "Rua Jandira, Jandira, São Paulo",
    },
    {
        Id: "5",
        Nome: "Natalia Bastazini",
        Email: "natalia@email.com.br",
        Senha: "natalia1",
        Telefone: "(11) 98888-8888",
        Endereço: "Avenida Inocencio, Carapícuiba, São Paulo",
    } 
];

const categorias = [
    {
        ID: "1",
        Nome: "Pizzas",
        Icone: "imagem-pizza",
        Descrição: "*descrição*",
    },
    {
        ID: "2",
        Nome: "Bebidas",
        Icone: "imagem-bebida",
        Descrição: "*descrição*",
    },
    {
        ID: "3",
        Nome: "Sobremesa",
        Icone: "imagem-sobremesa",
        Descrição: "*descrição*"
    }
];

const listarProdutos = [
    {
        id: "1",
        Nome: "Pizza de calabreza com queijo",
        Descrição: "Uma Saborosa Pizza de Calabresa com queijo, recém saída do forno!",
        Foto: "imagem",
        Preço: "16,00",
        Avaliação: "5",
        categoria: [
            {
                categorias: {id: "1"}
            }
        ],
        comentario: [
            {
                id: "413",
                mensagem: "Uma das melhores pizzas que eu já comi na vida!",
                data: "15/03/2023",
                usuario: {id: "1"}
            }
        ],
    },
    {
        id: "2",
        Nome: "Pizza de pepperoni com queijo",
        Descrição: "Uma Saborosa Pizza de pepperoni com queijo, recém saída do forno!",
        Foto: "imagem",
        Preço: "19,00",
        Avaliação: "5",
        categoria: [
            {
                categorias: {id: "1"}
            }
        ],
        comentario: [
            {
                id: "215",
                mensagem: "Uma das melhores pizzas que eu já comi na vida!",
                data: "15/03/2023",
                usuario: {id: "2"}
            }
        ],
    },
    {
        id: "3",
        Nome: "Pizza de calabreza com queijo",
        Descrição: "Uma Saborosa Pizza de Calabresa com queijo, recém saída do forno!",
        Foto: "imagem",
        Preço: "16,00",
        Avaliação: "5",
        categoria: [
            {
                categorias: {id: "1"}
            }
        ],
        comentario: [
            {
                id: "551",
                mensagem: "Uma das melhores pizzas que eu já comi na vida!",
                data: "15/03/2023",
                usuario: {id: "3"}
            }
        ],
    },
    {
        id: "4",
        Nome: "Pizza de calabreza com queijo",
        Descrição: "Uma Saborosa Pizza de Calabresa com queijo, recém saída do forno!",
        Foto: "imagem",
        Preço: "16,00",
        Avaliação: "5",
        categoria: [
            {
                categorias: {id: "1"}
            }
        ],
        comentario: [
            {
                id: "563",
                mensagem: "Uma das melhores pizzas que eu já comi na vida!",
                data: "15/03/2023",
                usuario: {id: "4"}
            }
        ],
    },
    {
        id: "5",
        Nome: "Pizza de pepperoni com queijo e tomate",
        Descrição: "Uma Saborosa Pizza de pepperoni com queijo e tomate, recém saída do forno!",
        Foto: "imagem",
        Preço: "14,99",
        Avaliação: "5",
        categoria: [
            {
                categorias: {id: "1"}
            }
        ],
        comentario: [
            {
                id: "511",
                mensagem: "Ótimo custo benefício!",
                data: "15/03/2023",
                usuario: {id: "5"}
            }
        ],
    },
    {
        id: "6",
        Nome: "Pizza brotinho com queijo e tomate",
        Descrição: "Um Saboroso brotinho com queijo e tomate, recém saída do forno!",
        Foto: "imagem",
        Preço: "12,00",
        Avaliação: "5",
        categoria: [
            {
                categorias: {id: "1"}
            }
        ],
        comentario: [
            {
                id: "455",
                mensagem: "Ótimo custo benefício, com certeza comprarei mais!",
                data: "15/03/2023",
                usuario: {id: "6"}
            }
        ],
    }
];

module.exports = {listarUsuarios, categorias, listarProdutos};
