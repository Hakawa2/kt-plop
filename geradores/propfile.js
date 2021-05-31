module.exports = (plop) => {
    plop.setGenerator('component', {
        description: 'Criar component',
        prompts: [
            {
                type: 'input',
                name: 'nome',
                message: 'Qual será o nome do seu componente: '
            }
        ],
        actions: [
            {
                type: 'add',
                path: '../components/{{pascalCase nome}}/index.js',
                templateFile: 'templates/components/Component.js.hbs'
            },
            {
                type: 'add',
                path: '../components/{{pascalCase nome}}/{{pascalCase nome}}.scss',
                templateFile: 'templates/components/styles.scss.hbs'
            }
        ]
    });









}