Entendido! Se é uma FanWiki e você quer acelerar o processo, vou me concentrar em popular o conteúdo das páginas dos blocos com base no guia que você forneceu anteriormente.

**Importante:**

*   **Imagens e Logo:** Eu não posso criar imagens. Você precisará adicionar um `logo.png` e os ícones (`icon-192x192.png`, `icon-512x512.png`) manualmente depois.
*   **Revisão Detalhada:** Como é um processo automatizado de preenchimento, a precisão técnica de cada descrição de bloco e os exemplos conceituais podem precisar de uma revisão cuidadosa sua para garantir que correspondam exatamente à funcionalidade do CCode.
*   **JavaScript da Busca:** A busca permanecerá muito básica.
*   **CSS:** Manterei o CSS como está.
*   **Service Worker:** A lista `ASSETS_TO_CACHE` será atualizada com as novas páginas criadas.

Vamos lá! Vou gerar o conteúdo para as páginas de blocos que faltam.

---

### Arquivos Atualizados e Novos Conteúdos para `pages/blocks/`

Você já tem `pages/blocks/events.html`. Agora vamos criar/completar os outros.

#### `pages/blocks/data-text.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blocos de Dados & Texto - CCode Wiki</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="manifest" href="../../manifest.json">
</head>
<body>
    <header>
        <div class="container">
            <a href="../../index.html"><img src="../../images/logo.png" alt="CCode Logo" id="logo"></a>
            <h1><a href="../../index.html" style="color:white; text-decoration:none;">CCode Wiki</a></h1>
            <nav id="top-nav">
                <a href="../../index.html">Home</a>
                <a href="../introduction.html">Introdução</a>
                <a href="../modes.html">Modos de Uso</a>
            </nav>
        </div>
    </header>

    <div class="container main-container">
        <aside id="sidebar">
            <h2>Navegação</h2>
            <input type="text" id="search-bar" placeholder="Buscar na Wiki...">
            <ul>
                <li><a href="../../index.html">Página Inicial</a></li>
                <li><a href="../introduction.html">Introdução ao CCode</a></li>
                <li><a href="../modes.html">Modo Normal vs. Simplificado</a></li>
                <li>
                    <span class="category-toggle">Categorias de Blocos</span>
                    <ul class="submenu open"> <!-- Mantém aberto nesta página -->
                        <li><a href="events.html">Eventos</a></li>
                        <li><a href="data-text.html">Dados & Texto</a></li>
                        <li><a href="objects-filters.html">Objetos & Filtros / Imagens</a></li>
                        <li><a href="control.html">Controle</a></li>
                        <li><a href="shapes.html">Formas</a></li>
                        <li><a href="physics.html">Física</a></li>
                        <li><a href="media.html">Mídia</a></li>
                        <li><a href="transitions.html">Transições</a></li>
                        <li><a href="editor-expressions.html">Editor de Expressões</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <main id="main-content">
            <section>
                <h2>Blocos de Dados & Texto</h2>
                <p>Esses blocos são fundamentais para armazenar informações (como pontuação, nomes, configurações) e para exibir texto na tela do seu jogo ou aplicativo.</p>

                <div class="block-description">
                    <h4>Definir Valor da Variável (<code>setVar</code>) / Criar Valor (<code>setVarNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Cria uma nova variável (ou atualiza uma existente) com um nome específico e armazena um valor nela. Variáveis podem guardar números, texto, valores lógicos (verdadeiro/falso) ou tabelas.</p>
                    <p><strong>Modo Normal:</strong> <code>setVar</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>setVarNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome da variável</code> / <code>Nome do valor</code>: O identificador único para esta variável.</li>
                        <li><code>Valor</code>: O dado que será armazenado na variável. Pode ser um número (ex: <code>100</code>), texto (ex: <code>"Olá Jogador"</code>), ou o resultado de uma expressão.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>No evento <code>Ao Iniciar</code>, criar uma variável <code>pontuacao</code> com valor <code>0</code>.</li>
                        <li>Armazenar o nome do jogador digitado em um campo de texto.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Extremamente importante. Variáveis são a base para qualquer lógica dinâmica e para guardar o estado do jogo.</p>
                </div>

                <div class="block-description">
                    <h4>Adicionar Valor à Variável (<code>updVar</code>) / Adicionar Valor (<code>updVarNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Modifica uma variável numérica existente, somando (ou subtraindo, se o valor for negativo) um novo valor ao seu conteúdo atual.</p>
                    <p><strong>Modo Normal:</strong> <code>updVar</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>updVarNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome da variável</code> / <code>Nome do valor</code>: O nome da variável numérica a ser modificada.</li>
                        <li><code>Valor</code>: O número a ser adicionado (ou subtraído) ao valor atual da variável.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Quando o jogador coleta uma moeda: Adicionar <code>10</code> à variável <code>pontuacao</code>.</li>
                        <li>Quando o jogador perde uma vida: Adicionar <code>-1</code> à variável <code>vidas</code>.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Muito útil para contadores, sistemas de pontuação, gerenciamento de vidas, etc.</p>
                </div>

                <div class="block-description">
                    <h4>Criar Texto (<code>newText</code>)</h4>
                    <p><strong>O que faz:</strong> Exibe um texto na tela do jogo. Este bloco é geralmente encontrado no Modo Normal, pois o Modo Simplificado pode ter formas mais diretas de adicionar texto via objetos de imagem que já contêm texto.</p>
                    <p><strong>Modo Normal:</strong> <code>newText</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do texto</code>: Um nome único para identificar este elemento de texto.</li>
                        <li><code>Texto</code>: O conteúdo textual a ser exibido (ex: "Pontuação: ").</li>
                        <li><code>Fonte</code>: O nome da fonte a ser usada (deve estar nos recursos do projeto).</li>
                        <li><code>Tamanho</code>: O tamanho da fonte em pixels.</li>
                        <li><code>Cor</code>: A cor do texto.</li>
                        <li><code>Opacidade (0-100)</code>: (Opcional) Nível de transparência do texto.</li>
                        <li><code>Posição (X)</code>: Coordenada X onde o texto será posicionado.</li>
                        <li><code>Posição (Y)</code>: Coordenada Y onde o texto será posicionado.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Mostrar a pontuação atual na tela: "Pontuação: " + variável `pontuacao`.</li>
                        <li>Exibir diálogos de personagens.</li>
                        <li>Apresentar instruções ou mensagens para o jogador.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Essencial para qualquer interface de usuário (UI), feedback ao jogador e narrativa textual.</p>
                </div>

                <div class="block-description">
                    <h4>Alterar Texto (<code>setText</code>)</h4>
                    <p><strong>O que faz:</strong> Modifica o conteúdo de um elemento de texto que já foi criado e está visível na tela.</p>
                    <p><strong>Modo Normal:</strong> <code>setText</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do texto</code>: O nome do elemento de texto a ser alterado (definido com `Criar Texto`).</li>
                        <li><code>Texto</code>: O novo conteúdo textual a ser exibido.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Após a variável <code>pontuacao</code> ser atualizada, usar este bloco para exibir o novo valor no elemento de texto da pontuação.</li>
                        <li>Mudar a mensagem na tela com base no progresso do jogo.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Permite que as informações textuais na tela sejam dinâmicas e reflitam o estado atual do jogo.</p>
                </div>

                <div class="block-description">
                    <h4>Salvar Valor (<code>saveValue</code> / <code>saveValueNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Salva o valor de uma variável de forma persistente no dispositivo do usuário. Isso permite que o valor seja recuperado mesmo após o jogo ser fechado e reaberto.</p>
                    <p><strong>Modo Normal:</strong> <code>saveValue</code> (geralmente usa uma 'Chave' para identificar o dado salvo)</p>
                    <p><strong>Modo Simplificado:</strong> <code>saveValueNoob</code> (pode usar o próprio 'Nome do valor' como chave)</p>
                    <p><strong>Parâmetros Principais (Normal):</strong></p>
                    <ul>
                        <li><code>Chave 'K'</code>: Um nome único (string) para identificar o dado salvo.</li>
                        <li><code>Valor</code>: A variável ou valor a ser salvo.</li>
                    </ul>
                    <p><strong>Parâmetros Principais (Simplificado):</strong></p>
                    <ul>
                        <li><code>Nome do valor</code>: A variável cujo conteúdo será salvo.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Salvar a maior pontuação (highscore).</li>
                        <li>Salvar o progresso do jogador (nível atual, itens coletados).</li>
                        <li>Salvar configurações do usuário (volume da música, preferências de controle).</li>
                    </ul>
                    <p><strong>Relevância:</strong> Crucial para jogos com progressão, recordes ou configurações personalizáveis.</p>
                </div>

                <div class="block-description">
                    <h4>Ler Valor Salvo (<code>editor.list.fun.read_save</code> / <code>readValueNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Recupera um valor que foi previamente salvo no dispositivo do usuário usando o bloco "Salvar Valor".</p>
                    <p><strong>Modo Normal:</strong> Usado no Editor de Expressões como `ler_salvo("chave_K")`.</p>
                    <p><strong>Modo Simplificado:</strong> <code>readValueNoob</code></p>
                    <p><strong>Parâmetros Principais (Normal - Editor de Expressões):</strong></p>
                    <ul>
                        <li><code>"chave_K"</code>: A mesma chave usada para salvar o valor.</li>
                    </ul>
                    <p><strong>Parâmetros Principais (Simplificado):</strong></p>
                    <ul>
                        <li><code>Nome do valor</code>: A variável onde o valor lido será armazenado (e também a chave implícita usada para buscar o dado salvo).</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>No evento <code>Ao Iniciar</code>, ler o highscore salvo e exibi-lo na tela.</li>
                        <li>Carregar o último nível salvo quando o jogador continuar o jogo.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Complementar ao "Salvar Valor", permitindo a persistência de dados entre sessões de jogo.</p>
                    <p><strong>Nota:</strong> Se nenhum valor for encontrado para a chave especificada, o bloco geralmente retorna um valor padrão (como `nulo` ou `0`), que você pode precisar tratar na sua lógica.</p>
                </div>

                 <!-- Adicionar mais blocos relevantes como:
                 - Criar Tabela (addTable)
                 - Inserir Valor no Array (insertTable)
                 - ... e outros da categoria 'vars' e 'editor.fun' que manipulam dados e texto -->

            </section>
        </main>
    </div>
     <footer>
        <div class="container">
            <p>&copy; 2023 CCode FanWiki. Todos os direitos reservados.</p>
        </div>
    </footer>
    <script src="../../js/main.js"></script>
</body>
</html>
```

#### `pages/blocks/objects-filters.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blocos de Objetos & Filtros / Imagens - CCode Wiki</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="manifest" href="../../manifest.json">
</head>
<body>
    <header>
        <div class="container">
            <a href="../../index.html"><img src="../../images/logo.png" alt="CCode Logo" id="logo"></a>
            <h1><a href="../../index.html" style="color:white; text-decoration:none;">CCode Wiki</a></h1>
            <nav id="top-nav">
                <a href="../../index.html">Home</a>
                <a href="../introduction.html">Introdução</a>
                <a href="../modes.html">Modos de Uso</a>
            </nav>
        </div>
    </header>

    <div class="container main-container">
        <aside id="sidebar">
            <h2>Navegação</h2>
            <input type="text" id="search-bar" placeholder="Buscar na Wiki...">
            <ul>
                <li><a href="../../index.html">Página Inicial</a></li>
                <li><a href="../introduction.html">Introdução ao CCode</a></li>
                <li><a href="../modes.html">Modo Normal vs. Simplificado</a></li>
                <li>
                    <span class="category-toggle">Categorias de Blocos</span>
                    <ul class="submenu open">
                        <li><a href="events.html">Eventos</a></li>
                        <li><a href="data-text.html">Dados & Texto</a></li>
                        <li><a href="objects-filters.html">Objetos & Filtros / Imagens</a></li>
                        <li><a href="control.html">Controle</a></li>
                        <li><a href="shapes.html">Formas</a></li>
                        <li><a href="physics.html">Física</a></li>
                        <li><a href="media.html">Mídia</a></li>
                        <li><a href="transitions.html">Transições</a></li>
                        <li><a href="editor-expressions.html">Editor de Expressões</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <main id="main-content">
            <section>
                <h2>Blocos de Objetos & Filtros (Modo Normal) / Imagens (Modo Simplificado)</h2>
                <p>Esta categoria lida com a criação, manipulação e aparência dos elementos visuais do seu jogo. No Modo Normal, são chamados de "Objetos" e podem ter "Filtros" (efeitos visuais). No Modo Simplificado, são geralmente referidos como "Imagens".</p>

                <div class="block-description">
                    <h4>Criar Objeto (<code>newObject</code>) / Criar Imagem (<code>newObjectNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Adiciona um novo elemento visual (sprite ou imagem) à tela do jogo.</p>
                    <p><strong>Modo Normal:</strong> <code>newObject</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>newObjectNoob</code></p>
                    <p><strong>Parâmetros Principais (Normal):</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code>: Um nome único para identificar este objeto.</li>
                        <li><code>Nome do sprite</code>: O nome do arquivo de imagem (ex: "personagem.png") que está nos recursos do projeto.</li>
                        <li><code>Posição (X)</code>: Coordenada X inicial.</li>
                        <li><code>Posição (Y)</code>: Coordenada Y inicial.</li>
                    </ul>
                    <p><strong>Parâmetros Principais (Simplificado):</strong></p>
                    <ul>
                        <li><code>Nome da imagem</code>: Um nome único para identificar esta imagem. O arquivo de imagem associado geralmente é o mesmo que o "Nome da Imagem" na lista de recursos.</li>
                        <li><code>Posição (X)</code>: Coordenada X inicial.</li>
                        <li><code>Posição (Y)</code>: Coordenada Y inicial.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Criar o personagem principal do jogador.</li>
                        <li>Adicionar inimigos, moedas, plataformas, elementos de cenário.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Base para qualquer elemento gráfico que aparece no jogo.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Posição do Objeto/Imagem (<code>setPos</code> / <code>setPosNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Move um objeto ou imagem para coordenadas X e Y específicas na tela de forma instantânea.</p>
                    <p><strong>Modo Normal:</strong> <code>setPos</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>setPosNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code> / <code>Nome da imagem</code>: O identificador do elemento a ser movido.</li>
                        <li><code>Posição (X)</code>: A nova coordenada X.</li>
                        <li><code>Posição (Y)</code>: A nova coordenada Y.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Posicionar o jogador no ponto de início de uma fase.</li>
                        <li>Mover um inimigo para uma nova localização após um padrão de movimento.</li>
                        <li>Reposicionar um item após ser coletado e reaparecer.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Fundamental para controlar onde os elementos visuais estão localizados na tela.</p>
                    <p><strong>Nota:</strong> Existem blocos específicos como <code>Definir Posição X</code> (<code>setPosX</code>) e <code>Definir Posição Y</code> (<code>setPosY</code>) para controlar cada eixo individualmente, e blocos como <code>Alterar Posição X</code> (<code>updPosX</code>) para movimentos relativos.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Rotação do Objeto/Imagem (<code>setRotation</code> / <code>setRotationNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Gira um objeto ou imagem em torno de seu ponto de âncora (geralmente o centro) para um ângulo específico.</p>
                    <p><strong>Modo Normal:</strong> <code>setRotation</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>setRotationNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code> / <code>Nome da imagem</code>: O identificador do elemento a ser girado.</li>
                        <li><code>Rotação (0-360)</code>: O ângulo de rotação em graus. 0 graus geralmente é sem rotação, e valores positivos giram no sentido horário (pode variar).</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Fazer um carro virar para a esquerda ou direita.</li>
                        <li>Animar uma hélice ou um ventilador girando.</li>
                        <li>Orientar uma flecha para apontar na direção do movimento.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Importante para orientação visual e animações de rotação.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Tamanho do Objeto/Imagem (<code>setSize</code> / <code>setSizeNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Altera o tamanho visual de um objeto ou imagem. Geralmente é definido como uma porcentagem do tamanho original do sprite/imagem.</p>
                    <p><strong>Modo Normal:</strong> <code>setSize</code> (pode ter opções para largura e altura separadas também: <code>setWidth</code>, <code>setHeight</code>)</p>
                    <p><strong>Modo Simplificado:</strong> <code>setSizeNoob</code> (geralmente um valor percentual único que afeta largura e altura proporcionalmente)</p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code> / <code>Nome da imagem</code>: O identificador do elemento.</li>
                        <li><code>Tamanho (%)</code>: Um valor percentual (ex: <code>100</code> para tamanho original, <code>50</code> para metade do tamanho, <code>200</code> para o dobro do tamanho).</li>
                        <li>(Normal) <code>Largura</code> / <code>Altura</code>: Valores específicos para dimensões, se usando <code>setWidth</code>/<code>setHeight</code>.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Fazer um personagem encolher ao passar por uma passagem estreita.</li>
                        <li>Aumentar o tamanho de um item quando o jogador está perto dele para destacá-lo.</li>
                        <li>Criar um efeito de "zoom" em um objeto.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Para efeitos visuais, feedback e adaptação de elementos a diferentes contextos.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Opacidade do Objeto/Imagem (<code>setAlpha</code> / <code>setAlphaNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Controla o nível de transparência de um objeto ou imagem.</p>
                    <p><strong>Modo Normal:</strong> <code>setAlpha</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>setAlphaNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code> / <code>Nome da imagem</code>: O identificador do elemento.</li>
                        <li><code>Opacidade (0-100)</code>: Um valor onde <code>100</code> é totalmente opaco (visível) e <code>0</code> é totalmente transparente (invisível). Valores intermediários criam translucidez.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Fazer um personagem ficar semitransparente após tomar dano (efeito de invencibilidade temporária).</li>
                        <li>Esmaecer (fade out) elementos da interface.</li>
                        <li>Criar fantasmas ou objetos etéreos.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Essencial para efeitos visuais de fade, destaque e para indicar estados especiais de objetos.</p>
                </div>


                <div class="block-description">
                    <h4>Remover Objeto (<code>removeObject</code>) / Remover Imagem (<code>removeObjectNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Exclui permanentemente um objeto ou imagem da tela e da memória do jogo.</p>
                    <p><strong>Modo Normal:</strong> <code>removeObject</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>removeObjectNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code> / <code>Nome da imagem</code>: O identificador do elemento a ser removido.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Remover um inimigo após ser derrotado.</li>
                        <li>Remover uma moeda ou item após ser coletado pelo jogador.</li>
                        <li>Limpar projéteis que saíram da tela.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Crucial para o gerenciamento de recursos (evitar que o jogo fique lento com muitos objetos desnecessários) e para a lógica de progressão do jogo.</p>
                </div>

                <div class="block-description">
                    <h4>Esconder Objeto (<code>hideObject</code>) / Esconder Imagem (<code>hideObjectNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Torna um objeto ou imagem invisível na tela, mas ele ainda existe na memória do jogo e pode ter suas propriedades alteradas ou ser tornado visível novamente.</p>
                    <p><strong>Modo Normal:</strong> <code>hideObject</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>hideObjectNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code> / <code>Nome da imagem</code>: O identificador do elemento a ser escondido.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Esconder um menu quando o jogo começa.</li>
                        <li>Tornar um item secreto invisível até que uma condição seja cumprida.</li>
                        <li>Desativar temporariamente um inimigo sem removê-lo completamente.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Útil para controlar a visibilidade dos elementos sem a necessidade de recriá-los constantemente.</p>
                    <p><strong>Nota:</strong> O bloco complementar é <code>Mostrar Objeto</code> (<code>showObject</code>) / <code>Mostrar Imagem</code> (<code>showObjectNoob</code>).</p>
                </div>

                <div class="block-description">
                    <h4>Aplicar Filtro (Ex: Desfoque - <code>setBlur</code>) (Modo Normal)</h4>
                    <p><strong>O que faz:</strong> Adiciona um efeito visual (shader ou filtro) a um objeto existente. O CCode oferece diversos filtros como desfoque, pixelização, brilho (bloom), chroma key, etc.</p>
                    <p><strong>Modo Normal:</strong> Ex: <code>setBlur</code>, <code>setPixellization</code>, <code>setBloom</code>, etc.</p>
                    <p><strong>Modo Simplificado:</strong> Geralmente não possui acesso direto a filtros complexos.</p>
                    <p><strong>Parâmetros Principais (Variam por filtro):</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code>: O objeto ao qual o filtro será aplicado.</li>
                        <li>Parâmetros específicos do filtro (ex: para <code>setBlur</code>: <code>Tamanho horizontal/vertical do desfoque</code>, <code>Força horizontal/vertical</code>).</li>
                        <li>Muitos filtros também aceitam parâmetros de animação (<code>Tipo de animação</code>, <code>Tempo</code>, <code>Curva de transição</code>, etc.) para aplicar o efeito gradualmente.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Aplicar um leve desfoque a objetos no fundo para criar profundidade.</li>
                        <li>Fazer um objeto brilhar intensamente ao ser ativado.</li>
                        <li>Pixelizar a tela durante uma transição ou efeito especial.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Permite um grande enriquecimento visual e a criação de efeitos especiais avançados. Requer mais conhecimento sobre os parâmetros de cada filtro.</p>
                    <p><strong>Nota:</strong> Para remover um filtro, geralmente se usa o bloco <code>Remover Filtro</code> (<code>deleteFilter</code>).</p>
                </div>
                <!-- Adicionar mais blocos de Objetos e Filtros -->

            </section>
        </main>
    </div>
     <footer>
        <div class="container">
            <p>&copy; 2023 CCode FanWiki. Todos os direitos reservados.</p>
        </div>
    </footer>
    <script src="../../js/main.js"></script>
</body>
</html>
```

#### `pages/blocks/control.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blocos de Controle - CCode Wiki</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="manifest" href="../../manifest.json">
</head>
<body>
    <header>
        <div class="container">
            <a href="../../index.html"><img src="../../images/logo.png" alt="CCode Logo" id="logo"></a>
            <h1><a href="../../index.html" style="color:white; text-decoration:none;">CCode Wiki</a></h1>
            <nav id="top-nav">
                <a href="../../index.html">Home</a>
                <a href="../introduction.html">Introdução</a>
                <a href="../modes.html">Modos de Uso</a>
            </nav>
        </div>
    </header>

    <div class="container main-container">
        <aside id="sidebar">
            <h2>Navegação</h2>
            <input type="text" id="search-bar" placeholder="Buscar na Wiki...">
            <ul>
                <li><a href="../../index.html">Página Inicial</a></li>
                <li><a href="../introduction.html">Introdução ao CCode</a></li>
                <li><a href="../modes.html">Modo Normal vs. Simplificado</a></li>
                <li>
                    <span class="category-toggle">Categorias de Blocos</span>
                    <ul class="submenu open">
                        <li><a href="events.html">Eventos</a></li>
                        <li><a href="data-text.html">Dados & Texto</a></li>
                        <li><a href="objects-filters.html">Objetos & Filtros / Imagens</a></li>
                        <li><a href="control.html">Controle</a></li>
                        <li><a href="shapes.html">Formas</a></li>
                        <li><a href="physics.html">Física</a></li>
                        <li><a href="media.html">Mídia</a></li>
                        <li><a href="transitions.html">Transições</a></li>
                        <li><a href="editor-expressions.html">Editor de Expressões</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <main id="main-content">
            <section>
                <h2>Blocos de Controle</h2>
                <p>Os blocos de controle são essenciais para determinar o fluxo de execução do seu programa. Eles permitem que você tome decisões (condicionais), repita ações (loops) e gerencie o tempo (temporizadores).</p>

                <div class="block-description">
                    <h4>Se Condição For Verdadeira (<code>if</code>)</h4>
                    <p><strong>O que faz:</strong> Verifica uma condição lógica. Se a condição for verdadeira, os blocos aninhados dentro do "Se" são executados. Caso contrário, são ignorados (a menos que haja um bloco "Senão" ou "Senão, Se").</p>
                    <p><strong>Modo Normal e Simplificado:</strong> Presente em ambos, fundamental para a lógica.</p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Condição</code>: Uma expressão que resulta em verdadeiro ou falso (ex: <code>pontuacao > 100</code>, <code>vidas == 0</code>, <code>objeto_colidiu == verdadeiro</code>). Pode ser criada usando o Editor de Expressões.</li>
                    </ul>
                    <p><strong>Estrutura:</strong></p>
                    <pre><code>
SE (condição) ENTÃO
    [Blocos a serem executados se a condição for verdadeira]
[SENÃO, SE (outra_condição) ENTÃO]  (Opcional)
    [Blocos para outra condição]
[SENÃO] (Opcional)
    [Blocos a serem executados se nenhuma condição anterior for verdadeira]
FIM SE
                    </code></pre>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Verificar se o jogador tem vidas restantes: <code>SE (vidas > 0) ENTÃO ... SENÃO (mostrar tela de "Game Over")</code>.</li>
                        <li>Verificar qual tecla foi pressionada para mover o personagem.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Pedra angular da programação, permitindo que seu jogo reaja a diferentes situações.</p>
                    <p><strong>Nota:</strong> Requer um bloco de fechamento como `Fim da Condição` (<code>ifEnd</code>).</p>
                </div>

                <div class="block-description">
                    <h4>Temporizador (<code>timer</code> / <code>timerName</code>)</h4>
                    <p><strong>O que faz:</strong> Executa um conjunto de blocos após um determinado período de tempo. Pode ser configurado para repetir a execução várias vezes ou indefinidamente.</p>
                    <p><strong>Modo Normal:</strong> <code>timer</code> (simples) e <code>timerName</code> (com nome, para controle individual).</p>
                    <p><strong>Modo Simplificado:</strong> Geralmente uma versão simplificada de <code>timer</code>.</p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Tempo (Segundos)</code>: O intervalo de tempo antes da primeira execução (e entre repetições).</li>
                        <li><code>Qtd. de repetições</code>: Quantas vezes os blocos devem ser executados. Use <code>0</code> ou um valor negativo para repetição infinita.</li>
                        <li>(Modo Normal - <code>timerName</code>) <code>Nome do temporizador</code>: Um identificador para pausar, retomar ou cancelar este temporizador específico.</li>
                    </ul>
                    <p><strong>Estrutura:</strong></p>
                    <pre><code>
TEMPORIZADOR (Tempo: 5s, Repetições: 10)
    [Blocos a serem executados a cada 5 segundos, por 10 vezes]
FIM TEMPORIZADOR
                    </code></pre>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Fazer um inimigo aparecer na tela a cada 5 segundos.</li>
                        <li>Criar um cronômetro de contagem regressiva.</li>
                        <li>Animar um objeto piscando (alternando visibilidade) a cada 0.5 segundos.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Essencial para ações baseadas no tempo, eventos programados e animações simples.</p>
                    <p><strong>Nota:</strong> Requer um bloco de fechamento como `Fim do Temporizador` (<code>timerEnd</code> / <code>timerNameEnd</code>). No Modo Normal, existem blocos para `Pausar Temporizador`, `Retomar Temporizador` e `Cancelar Temporizador` usando o nome definido.</p>
                </div>

                <div class="block-description">
                    <h4>Repetir N Vezes (<code>repeat</code>)</h4>
                    <p><strong>O que faz:</strong> Executa um conjunto de blocos aninhados um número específico de vezes.</p>
                    <p><strong>Modo Normal e Simplificado:</strong> Funcionalidade similar.</p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Qtd. de repetições</code>: O número exato de vezes que o loop será executado.</li>
                    </ul>
                    <p><strong>Estrutura:</strong></p>
                    <pre><code>
REPETIR (5 vezes)
    [Blocos a serem executados 5 vezes]
FIM REPETIÇÕES
                    </code></pre>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Criar 5 inimigos de uma vez no início de uma onda.</li>
                        <li>Tocar um efeito sonoro 3 vezes seguidas.</li>
                        <li>Desenhar uma série de objetos em um padrão.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Útil para tarefas que precisam ser feitas um número fixo de vezes.</p>
                    <p><strong>Nota:</strong> Requer um bloco de fechamento como `Fim das Repetições` (<code>repeatEnd</code>).</p>
                </div>

                <div class="block-description">
                    <h4>Repetir Para Sempre (<code>forever</code>)</h4>
                    <p><strong>O que faz:</strong> Executa um conjunto de blocos aninhados continuamente, em um loop infinito, frame após frame, até que o programa seja interrompido ou um bloco `Interromper Ciclo` (<code>break</code>) seja usado dentro dele (se aplicável à estrutura do loop).</p>
                    <p><strong>Modo Normal e Simplificado:</strong> Conceito de loop principal.</p>
                    <p><strong>Parâmetros Principais:</strong> Nenhum.</p>
                    <p><strong>Estrutura:</strong></p>
                    <pre><code>
REPETIR PARA SEMPRE
    [Blocos a serem executados continuamente]
FIM DO LOOP INFINITO
                    </code></pre>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Atualizar a posição do personagem com base na entrada do jogador a cada frame.</li>
                        <li>Verificar colisões continuamente.</li>
                        <li>Mover objetos de fundo para criar um efeito de parallax.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Frequentemente usado como o loop principal do jogo para atualizar a lógica e a renderização a cada frame.</p>
                    <p><strong>Cuidado:</strong> Evite colocar operações muito pesadas dentro de um loop `Repetir Para Sempre` sem controle, pois isso pode causar lentidão no jogo. Considere usar temporizadores para tarefas que não precisam ser executadas a cada frame.</p>
                    <p><strong>Nota:</strong> Requer um bloco de fechamento como `Fim do Loop Infinito` (<code>foreverEnd</code>).</p>
                </div>

                <div class="block-description">
                    <h4>Chamar Função (<code>requestFun</code>) / Executar Ação (<code>requestFunNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Executa um conjunto de blocos que foram previamente definidos dentro de um bloco `Criar Função` (Modo Normal) ou `Criar Ação` (Modo Simplificado).</p>
                    <p><strong>Modo Normal:</strong> <code>requestFun</code> (pode incluir `requestFunParams` para funções com parâmetros)</p>
                    <p><strong>Modo Simplificado:</strong> <code>requestFunNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome da função</code> / <code>Ação</code>: O nome da função/ação a ser executada.</li>
                        <li>(Modo Normal - `requestFunParams`) <code>Parâmetros</code>: Uma tabela ou valores individuais a serem passados para a função.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Se o jogador pressionar o botão de pulo, chamar a ação `PularPersonagem`.</li>
                        <li>Após um inimigo ser derrotado, chamar a função `SpawnarItemDrop`.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Essencial para organizar o código, evitar repetição e criar blocos de lógica reutilizáveis. Torna o código principal mais limpo e fácil de entender.</p>
                </div>
                <!-- Adicionar mais blocos de Controle
                - Ciclo (Loop For) (for)
                - Repetir Enquanto Condição For Verdadeira (while)
                - Interromper Ciclo (break)
                - ...
                -->

            </section>
        </main>
    </div>
     <footer>
        <div class="container">
            <p>&copy; 2023 CCode FanWiki. Todos os direitos reservados.</p>
        </div>
    </footer>
    <script src="../../js/main.js"></script>
</body>
</html>
```

#### `pages/blocks/shapes.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blocos de Formas - CCode Wiki</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="manifest" href="../../manifest.json">
</head>
<body>
    <header>
        <div class="container">
            <a href="../../index.html"><img src="../../images/logo.png" alt="CCode Logo" id="logo"></a>
            <h1><a href="../../index.html" style="color:white; text-decoration:none;">CCode Wiki</a></h1>
            <nav id="top-nav">
                <a href="../../index.html">Home</a>
                <a href="../introduction.html">Introdução</a>
                <a href="../modes.html">Modos de Uso</a>
            </nav>
        </div>
    </header>

    <div class="container main-container">
        <aside id="sidebar">
            <h2>Navegação</h2>
            <input type="text" id="search-bar" placeholder="Buscar na Wiki...">
            <ul>
                <li><a href="../../index.html">Página Inicial</a></li>
                <li><a href="../introduction.html">Introdução ao CCode</a></li>
                <li><a href="../modes.html">Modo Normal vs. Simplificado</a></li>
                <li>
                    <span class="category-toggle">Categorias de Blocos</span>
                    <ul class="submenu open">
                        <li><a href="events.html">Eventos</a></li>
                        <li><a href="data-text.html">Dados & Texto</a></li>
                        <li><a href="objects-filters.html">Objetos & Filtros / Imagens</a></li>
                        <li><a href="control.html">Controle</a></li>
                        <li><a href="shapes.html">Formas</a></li>
                        <li><a href="physics.html">Física</a></li>
                        <li><a href="media.html">Mídia</a></li>
                        <li><a href="transitions.html">Transições</a></li>
                        <li><a href="editor-expressions.html">Editor de Expressões</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <main id="main-content">
            <section>
                <h2>Blocos de Formas e Texturas</h2>
                <p>Estes blocos permitem criar formas geométricas básicas (retângulos, círculos, linhas) e manipular as texturas (imagens) dos seus objetos, incluindo cores e contornos.</p>

                <div class="block-description">
                    <h4>Definir Textura do Objeto (<code>setSprite</code>) / Aplicar Imagem2 Sobre Imagem1 (<code>setSpriteNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Muda a imagem visual (textura) de um objeto que já existe na tela.</p>
                    <p><strong>Modo Normal:</strong> <code>setSprite</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>setSpriteNoob</code></p>
                    <p><strong>Parâmetros Principais (Normal):</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code>: O objeto cuja textura será alterada.</li>
                        <li><code>Nome do sprite</code>: O nome do novo arquivo de imagem (dos recursos) a ser aplicado.</li>
                    </ul>
                    <p><strong>Parâmetros Principais (Simplificado):</strong></p>
                    <ul>
                        <li><code>Nome da imagem1</code>: A imagem existente que terá sua aparência alterada.</li>
                        <li><code>Nome da imagem2</code>: A nova imagem (dos recursos) a ser aplicada.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Mudar a sprite do personagem quando ele coleta um power-up (ex: de "normal.png" para "com_escudo.png").</li>
                        <li>Alterar a imagem de um bloco após ele ser atingido.</li>
                        <li>Ciclar entre diferentes frames de uma animação manualmente (embora haja blocos de animação melhores para isso).</li>
                    </ul>
                    <p><strong>Relevância:</strong> Permite que a aparência dos objetos mude dinamicamente durante o jogo.</p>
                </div>

                <div class="block-description">
                    <h4>Criar Retângulo com Cor (<code>newRect</code> / <code>newRectNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Desenha um retângulo sólido preenchido com uma cor específica na tela. Este retângulo é tratado como um objeto/imagem normal e pode ter outras propriedades (como física) aplicadas a ele.</p>
                    <p><strong>Modo Normal:</strong> <code>newRect</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>newRectNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code> / <code>Nome da imagem</code>: Um nome para identificar este retângulo.</li>
                        <li><code>Cor</code>: A cor de preenchimento do retângulo (pode ser um nome de cor, ex: "vermelho", ou um valor hexadecimal/RGB).</li>
                        <li><code>Largura</code>: A largura do retângulo em pixels.</li>
                        <li><code>Altura</code>: A altura do retângulo em pixels.</li>
                        <li><code>Posição (X)</code>: Coordenada X do canto superior esquerdo (ou centro, dependendo da âncora padrão).</li>
                        <li><code>Posição (Y)</code>: Coordenada Y.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Criar plataformas simples para um jogo de plataforma.</li>
                        <li>Desenhar botões ou elementos de interface sem precisar de arquivos de imagem.</li>
                        <li>Criar um fundo colorido para uma seção da tela.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Útil para prototipagem rápida, elementos de UI simples e formas geométricas básicas que não requerem texturas complexas.</p>
                </div>

                <div class="block-description">
                    <h4>Criar Círculo (<code>newCircle</code> / <code>newCircleNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Desenha um círculo sólido preenchido com uma cor na tela.</p>
                    <p><strong>Modo Normal:</strong> <code>newCircle</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>newCircleNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code> / <code>Nome da imagem</code>: Nome para identificar o círculo.</li>
                        <li>(Normal) <code>Cor</code>: A cor de preenchimento. (No simplificado, a cor pode ser definida com um bloco separado `Definir Cor da Imagem`).</li>
                        <li><code>Raio</code>: O raio do círculo em pixels.</li>
                        <li><code>Posição (X)</code>: Coordenada X do centro do círculo.</li>
                        <li><code>Posição (Y)</code>: Coordenada Y do centro do círculo.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Criar bolas para um jogo de bilhar ou arkanoid.</li>
                        <li>Representar áreas de efeito circulares.</li>
                        <li>Elementos de design arredondados.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Para criar objetos circulares sem a necessidade de sprites. Útil em conjunto com física para simulações de bolas.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Cor do Objeto/Imagem (<code>setColor</code> / <code>setColorNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Altera a cor de preenchimento de um objeto/imagem que foi criado como uma forma (retângulo, círculo) ou, em alguns casos, pode aplicar uma tonalidade a um objeto com textura (sprite).</p>
                    <p><strong>Modo Normal:</strong> <code>setColor</code> (também <code>setRGB</code>, <code>setHEX</code> para formatos de cor específicos)</p>
                    <p><strong>Modo Simplificado:</strong> <code>setColorNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code> / <code>Nome da imagem</code>: O elemento cuja cor será alterada.</li>
                        <li><code>Cor</code>: A nova cor (nome, hexadecimal, RGB).</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Mudar a cor de um botão quando ele é pressionado.</li>
                        <li>Fazer uma plataforma mudar de cor após ser pisada.</li>
                        <li>Aplicar um tom avermelhado a um personagem quando ele toma dano (se o objeto não for uma forma sólida, o resultado pode variar).</li>
                    </ul>
                    <p><strong>Relevância:</strong> Permite feedback visual e alteração dinâmica da aparência de formas e, potencialmente, de sprites.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Largura do Contorno (<code>setStrokeWidth</code>) (Modo Normal)</h4>
                    <p><strong>O que faz:</strong> Define a espessura da linha de contorno de um objeto que é uma forma (retângulo, círculo, linha, polígono). Não se aplica a objetos baseados em sprites (imagens bitmap).</p>
                    <p><strong>Modo Normal:</strong> <code>setStrokeWidth</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code>: O objeto forma cujo contorno será afetado.</li>
                        <li><code>Largura</code>: A espessura do contorno em pixels. Um valor de <code>0</code> geralmente remove o contorno.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Adicionar uma borda preta a um botão retangular.</li>
                        <li>Destacar uma área com um contorno mais grosso.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Permite customizar a aparência de formas geométricas, adicionando detalhes visuais.</p>
                    <p><strong>Nota:</strong> Geralmente acompanhado pelo bloco <code>Definir Cor do Contorno</code> (<code>setStrokeColor</code>) para definir a cor da linha.</p>
                </div>
                <!-- Adicionar mais blocos de Formas
                - newRoundedRect
                - newLine
                - newPolygon
                - setBitmapSprite (se aplicável a formas)
                - Gradientes (setLinearGradient, setRadialGradient)
                -->
            </section>
        </main>
    </div>
     <footer>
        <div class="container">
            <p>&copy; 2023 CCode FanWiki. Todos os direitos reservados.</p>
        </div>
    </footer>
    <script src="../../js/main.js"></script>
</body>
</html>
```

#### `pages/blocks/physics.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blocos de Física - CCode Wiki</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="manifest" href="../../manifest.json">
</head>
<body>
    <header>
        <div class="container">
            <a href="../../index.html"><img src="../../images/logo.png" alt="CCode Logo" id="logo"></a>
            <h1><a href="../../index.html" style="color:white; text-decoration:none;">CCode Wiki</a></h1>
            <nav id="top-nav">
                <a href="../../index.html">Home</a>
                <a href="../introduction.html">Introdução</a>
                <a href="../modes.html">Modos de Uso</a>
            </nav>
        </div>
    </header>

    <div class="container main-container">
        <aside id="sidebar">
            <h2>Navegação</h2>
            <input type="text" id="search-bar" placeholder="Buscar na Wiki...">
            <ul>
                <li><a href="../../index.html">Página Inicial</a></li>
                <li><a href="../introduction.html">Introdução ao CCode</a></li>
                <li><a href="../modes.html">Modo Normal vs. Simplificado</a></li>
                <li>
                    <span class="category-toggle">Categorias de Blocos</span>
                    <ul class="submenu open">
                        <li><a href="events.html">Eventos</a></li>
                        <li><a href="data-text.html">Dados & Texto</a></li>
                        <li><a href="objects-filters.html">Objetos & Filtros / Imagens</a></li>
                        <li><a href="control.html">Controle</a></li>
                        <li><a href="shapes.html">Formas</a></li>
                        <li><a href="physics.html">Física</a></li>
                        <li><a href="media.html">Mídia</a></li>
                        <li><a href="transitions.html">Transições</a></li>
                        <li><a href="editor-expressions.html">Editor de Expressões</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <main id="main-content">
            <section>
                <h2>Blocos de Física</h2>
                <p>Os blocos de física permitem que seus objetos interajam com um mundo simulado, respondendo à gravidade, colisões, forças e outras propriedades físicas. Isso é essencial para criar jogos com movimento e interações realistas.</p>

                <div class="block-description">
                    <h4>Definir Corpo Físico do Objeto (<code>setBody</code>) / Tornar Imagem Física (<code>setBodyNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Ativa o comportamento físico para um objeto ou imagem. Sem este bloco, o objeto é apenas visual e não interage com o motor de física.</p>
                    <p><strong>Modo Normal:</strong> <code>setBody</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>setBodyNoob</code></p>
                    <p><strong>Parâmetros Principais (Normal):</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code>: O objeto que se tornará físico.</li>
                        <li><code>Tipo</code>:
                            <ul>
                                <li><code>Dinâmico</code>: Move-se sob a influência de forças (gravidade, impulsos) e colide com outros objetos. Ex: personagem, bola.</li>
                                <li><code>Estático</code>: Não se move, mas outros objetos podem colidir com ele. Ex: chão, paredes, plataformas fixas.</li>
                                <li>(Pode haver outros tipos como 'Cinemático' em engines mais complexas).</li>
                            </ul>
                        </li>
                        <li><code>Densidade</code>: Afeta a massa do objeto (quão "pesado" ele é).</li>
                        <li><code>Elasticidade</code> (Restituição/Bounce): Quão "saltitante" o objeto é após uma colisão (0 = não salta, 1 = salta com a mesma energia).</li>
                        <li><code>Atrito</code>: Resistência ao deslizar contra outras superfícies.</li>
                        <li><code>Gravidade</code>: (Opcional) Escala de gravidade específica para este objeto (1 = gravidade normal do mundo, 0 = sem gravidade, 2 = dobro da gravidade).</li>
                        <li>(Avançado) <code>Filtro de colisão</code>, <code>Tabela de colisões</code>: Para definir com quais outros objetos ou categorias de objetos este pode colidir.</li>
                    </ul>
                    <p><strong>Parâmetros Principais (Simplificado):</strong></p>
                    <ul>
                        <li><code>Nome da imagem</code>: A imagem que se tornará física.</li>
                        <li><code>Tipo</code>: Geralmente <code>Dinâmico</code> ou <code>Estático</code>.</li>
                        <li><code>Elasticidade</code>: Quão saltitante.</li>
                        <li><code>Gravidade</code>: Se o objeto é afetado pela gravidade do mundo.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Tornar o personagem do jogador um corpo dinâmico para que ele caia e colida.</li>
                        <li>Tornar o chão e as plataformas corpos estáticos.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Bloco fundamental para qualquer jogo que utilize física.</p>
                </div>

                <div class="block-description">
                    <h4>Remover Corpo Físico do Objeto (<code>removeBody</code>) / Remover Física da Imagem (<code>removeBodyNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Desativa o comportamento físico de um objeto ou imagem. Ele voltará a ser apenas um elemento visual, não respondendo mais à gravidade ou colisões.</p>
                    <p><strong>Modo Normal:</strong> <code>removeBody</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>removeBodyNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code> / <code>Nome da imagem</code>: O objeto cuja física será removida.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Transformar um objeto físico em um item de inventário puramente visual.</li>
                        <li>Desativar a física de um objeto temporariamente por razões de performance ou lógica de jogo.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Útil para otimizar ou mudar o estado de um objeto em relação ao mundo físico.</p>
                </div>

                <div class="block-description">
                    <h4>Fazer Pular (<code>setLinearVelocity</code>) / Fazer Pular em Y (<code>setLinearVelocityYNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Aplica uma velocidade linear instantânea a um objeto físico. Comumente usado para simular pulos ou lançamentos.</p>
                    <p><strong>Modo Normal:</strong> <code>setLinearVelocity</code> (permite definir velocidade X e Y) e blocos separados como <code>setLinearVelocityX</code>, <code>setLinearVelocityY</code>.</p>
                    <p><strong>Modo Simplificado:</strong> <code>setLinearVelocityYNoob</code> (focado no pulo vertical).</p>
                    <p><strong>Parâmetros Principais (Normal - <code>setLinearVelocity</code>):</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code>: O objeto a ser impulsionado.</li>
                        <li><code>Velocidade (X)</code>: Velocidade no eixo horizontal.</li>
                        <li><code>Velocidade (Y)</code>: Velocidade no eixo vertical (valores negativos geralmente impulsionam para cima).</li>
                    </ul>
                    <p><strong>Parâmetros Principais (Simplificado - <code>setLinearVelocityYNoob</code>):</strong></p>
                    <ul>
                        <li><code>Nome da imagem</code>: A imagem a ser impulsionada.</li>
                        <li><code>Velocidade (Y)</code>: Força do pulo vertical.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Quando o jogador pressiona o botão de pulo, aplicar uma velocidade Y negativa ao personagem.</li>
                        <li>Lançar um projétil aplicando velocidades X e Y.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Essencial para mecânicas de pulo, arremesso e qualquer movimento baseado em impulso inicial.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Hitbox (Ex: Retangular - <code>setHitboxBox</code>) (Modo Normal)</h4>
                    <p><strong>O que faz:</strong> Define a forma geométrica precisa que o motor de física usará para detectar colisões para um objeto. Por padrão, a hitbox pode ser uma caixa baseada no tamanho do sprite, mas este bloco permite customização.</p>
                    <p><strong>Modo Normal:</strong> <code>setHitboxBox</code> (retangular), <code>setHitboxCircle</code> (circular), <code>setHitboxPolygon</code> (poligonal), <code>setHitboxMesh</code> (baseada na transparência do sprite).</p>
                    <p><strong>Modo Simplificado:</strong> Geralmente não oferece controle direto sobre hitboxes; elas são automáticas.</p>
                    <p><strong>Parâmetros Principais (Ex: <code>setHitboxBox</code>):</strong></p>
                    <ul>
                        <li><code>Nome do objeto</code>: O objeto cuja hitbox será definida.</li>
                        <li><code>Largura</code>: Largura da caixa de colisão.</li>
                        <li><code>Altura</code>: Altura da caixa de colisão.</li>
                        <li><code>Deslocamento (X)</code> (Opcional): Deslocamento da hitbox em relação ao centro do objeto no eixo X.</li>
                        <li><code>Deslocamento (Y)</code> (Opcional): Deslocamento no eixo Y.</li>
                        <li><code>Rotação (0-360)</code> (Opcional): Rotação da hitbox em relação ao objeto.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Fazer a hitbox de um personagem ser um pouco menor que sua imagem para uma jogabilidade mais "justa".</li>
                        <li>Criar uma hitbox circular para uma bola, mesmo que o sprite seja quadrado.</li>
                        <li>Definir hitboxes complexas para objetos de formato irregular usando polígonos.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Permite um controle fino sobre como as colisões são detectadas, o que pode impactar significativamente a sensação e a justiça do jogo.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Gravidade do Mundo (<code>setWorldGravity</code>) (Modo Normal)</h4>
                    <p><strong>O que faz:</strong> Altera a força e direção da gravidade que afeta todos os objetos dinâmicos no mundo do jogo (a menos que tenham sua própria gravidade individual configurada).</p>
                    <p><strong>Modo Normal:</strong> <code>setWorldGravity</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Gravidade (X)</code>: Componente horizontal da gravidade (geralmente 0 para gravidade vertical padrão).</li>
                        <li><code>Gravidade (Y)</code>: Componente vertical da gravidade (valores positivos geralmente puxam para baixo).</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Aumentar a gravidade para tornar os pulos mais curtos e as quedas mais rápidas.</li>
                        <li>Mudar a direção da gravidade para criar níveis onde o jogador anda nas paredes ou no teto.</li>
                        <li>Definir gravidade zero para um jogo no espaço.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Controla uma das forças fundamentais que afetam o movimento no jogo.</p>
                </div>
                <!-- Adicionar mais blocos de Física
                - setBodyType
                - setGravity (para objeto individual)
                - setSensor / removeSensor
                - setFixedRotation / removeFixedRotation
                - Juntas (Joints) como setPivotJoint, setDistanceJoint (Modo Normal Avançado)
                -->
            </section>
        </main>
    </div>
     <footer>
        <div class="container">
            <p>&copy; 2023 CCode FanWiki. Todos os direitos reservados.</p>
        </div>
    </footer>
    <script src="../../js/main.js"></script>
</body>
</html>
```

#### `pages/blocks/media.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blocos de Mídia - CCode Wiki</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="manifest" href="../../manifest.json">
</head>
<body>
    <header>
        <div class="container">
            <a href="../../index.html"><img src="../../images/logo.png" alt="CCode Logo" id="logo"></a>
            <h1><a href="../../index.html" style="color:white; text-decoration:none;">CCode Wiki</a></h1>
            <nav id="top-nav">
                <a href="../../index.html">Home</a>
                <a href="../introduction.html">Introdução</a>
                <a href="../modes.html">Modos de Uso</a>
            </nav>
        </div>
    </header>

    <div class="container main-container">
        <aside id="sidebar">
            <h2>Navegação</h2>
            <input type="text" id="search-bar" placeholder="Buscar na Wiki...">
            <ul>
                <li><a href="../../index.html">Página Inicial</a></li>
                <li><a href="../introduction.html">Introdução ao CCode</a></li>
                <li><a href="../modes.html">Modo Normal vs. Simplificado</a></li>
                <li>
                    <span class="category-toggle">Categorias de Blocos</span>
                    <ul class="submenu open">
                        <li><a href="events.html">Eventos</a></li>
                        <li><a href="data-text.html">Dados & Texto</a></li>
                        <li><a href="objects-filters.html">Objetos & Filtros / Imagens</a></li>
                        <li><a href="control.html">Controle</a></li>
                        <li><a href="shapes.html">Formas</a></li>
                        <li><a href="physics.html">Física</a></li>
                        <li><a href="media.html">Mídia</a></li>
                        <li><a href="transitions.html">Transições</a></li>
                        <li><a href="editor-expressions.html">Editor de Expressões</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <main id="main-content">
            <section>
                <h2>Blocos de Mídia (Sons e Vídeos)</h2>
                <p>Os blocos de mídia são usados para carregar, reproduzir e controlar arquivos de áudio (músicas, efeitos sonoros) e vídeo dentro dos seus projetos CCode.</p>

                <div class="block-description">
                    <h4>Carregar Som (<code>loadSound</code> / <code>loadStream</code>) (Modo Normal)</h4>
                    <p><strong>O que faz:</strong> Prepara um arquivo de som para ser reproduzido. `loadSound` geralmente carrega o som inteiro na memória (bom para efeitos sonoros curtos), enquanto `loadStream` carrega o som sob demanda (bom para músicas longas, economiza memória).</p>
                    <p><strong>Modo Normal:</strong> <code>loadSound</code>, <code>loadStream</code></p>
                    <p><strong>Modo Simplificado:</strong> Este passo é frequentemente abstraído; você apenas usa o nome do som diretamente no bloco "Tocar Som".</p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome da mídia</code>: Um nome único que você dará a este som carregado (ex: "som_pulo", "musica_tema").</li>
                        <li><code>Nome do som</code>: O nome do arquivo de som (ex: "pulo.wav", "tema.mp3") que está nos recursos do projeto.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>No evento <code>Ao Iniciar</code>, carregar todos os efeitos sonoros e músicas que serão usados no jogo.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Necessário no Modo Normal antes que um som possa ser tocado. Garante que o som esteja pronto para reprodução rápida.</p>
                </div>

                <div class="block-description">
                    <h4>Tocar Som (<code>playSound</code> / <code>playSoundNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Reproduz um som que foi previamente carregado (no Modo Normal) ou um som diretamente (no Modo Simplificado).</p>
                    <p><strong>Modo Normal:</strong> <code>playSound</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>playSoundNoob</code></p>
                    <p><strong>Parâmetros Principais (Normal):</strong></p>
                    <ul>
                        <li><code>Nome da mídia</code>: O nome dado ao som no bloco `Carregar Som`.</li>
                        <li><code>Qtd. de repetições</code>: Quantas vezes o som deve ser repetido (0 ou negativo para loop infinito, 1 para tocar uma vez).</li>
                        <li><code>Ao concluir</code> (Opcional): Nome de uma função a ser chamada quando o som terminar de tocar.</li>
                        <li><code>Tempo (Segundos)</code> (Opcional): Um atraso antes do som começar a tocar.</li>
                        <li><code>Fade out (Segundos)</code> (Opcional): Tempo para o som diminuir gradualmente de volume ao parar (se aplicável).</li>
                    </ul>
                    <p><strong>Parâmetros Principais (Simplificado):</strong></p>
                    <ul>
                        <li><code>Nome do som</code>: O nome do arquivo de som (dos recursos).</li>
                        <li><code>Qtd. de repetições</code>: Similar ao Modo Normal.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Tocar "som_pulo" quando o personagem pula.</li>
                        <li>Iniciar "musica_tema" em loop no início do jogo.</li>
                        <li>Tocar um efeito sonoro de explosão quando um inimigo é destruído.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Essencial para adicionar feedback auditivo e ambientação ao jogo.</p>
                </div>

                <div class="block-description">
                    <h4>Parar Som (<code>stopSound</code> / <code>stopSoundNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Interrompe imediatamente a reprodução de um som que está tocando.</p>
                    <p><strong>Modo Normal:</strong> <code>stopSound</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>stopSoundNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome da mídia</code> / <code>Nome do som</code>: O identificador do som a ser parado.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Parar a música do menu quando o jogo começa.</li>
                        <li>Interromper um efeito sonoro longo se a ação que o causou for cancelada.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Permite controle sobre a reprodução de áudio, evitando sons sobrepostos ou indesejados.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Volume do Som (<code>setVolume</code> / <code>setVolumeNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Ajusta o nível de volume de um som específico que está tocando ou que será tocado.</p>
                    <p><strong>Modo Normal:</strong> <code>setVolume</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>setVolumeNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome da mídia</code> / <code>Nome do som</code>: O identificador do som.</li>
                        <li><code>Volume (0-100)</code>: O nível de volume, onde 0 é mudo e 100 é o volume máximo.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Permitir que o jogador ajuste o volume da música e dos efeitos sonoros nas configurações.</li>
                        <li>Diminuir o volume de sons de fundo para dar destaque a sons mais importantes.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Oferece flexibilidade no controle da mixagem de áudio e permite personalização pelo usuário.</p>
                </div>

                <div class="block-description">
                    <h4>Criar Vídeo (<code>newVideo</code>) (Modo Normal)</h4>
                    <p><strong>O que faz:</strong> Carrega e exibe um arquivo de vídeo na tela do jogo.</p>
                    <p><strong>Modo Normal:</strong> <code>newVideo</code> (pode haver <code>newRemoteVideo</code> para vídeos da internet)</p>
                    <p><strong>Modo Simplificado:</strong> Geralmente não possui blocos de vídeo dedicados, ou são mais limitados.</p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome da mídia</code>: Um nome único para este player de vídeo.</li>
                        <li><code>Nome do vídeo</code>: O nome do arquivo de vídeo (ex: "intro.mp4") dos recursos.</li>
                        <li><code>Ao concluir</code> (Opcional): Função a ser chamada quando o vídeo terminar.</li>
                        <li><code>Posição (X)</code>, <code>Posição (Y)</code>: Onde o vídeo será exibido.</li>
                        <li><code>Largura</code>, <code>Altura</code>: Dimensões do player de vídeo na tela.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Exibir uma cutscene de introdução.</li>
                        <li>Mostrar um vídeo de tutorial.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Para adicionar cinemáticas ou conteúdo de vídeo aos projetos.</p>
                    <p><strong>Nota:</strong> Geralmente acompanhado de blocos como <code>Pausar Mídia</code> (<code>pauseMedia</code>), <code>Retomar Mídia</code> (<code>resumeMedia</code>), <code>Remover Vídeo</code> (<code>removeVideo</code>) para controlar a reprodução.</p>
                </div>
                <!-- Adicionar mais blocos de Mídia
                - pauseMedia, resumeMedia, seekMedia
                - disposeSound
                - Blocos relacionados a manipulação de arquivos, se forem considerados 'mídia' em CCode (newFile, readFile)
                -->
            </section>
        </main>
    </div>
     <footer>
        <div class="container">
            <p>&copy; 2023 CCode FanWiki. Todos os direitos reservados.</p>
        </div>
    </footer>
    <script src="../../js/main.js"></script>
</body>
</html>
```

#### `pages/blocks/transitions.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blocos de Transições - CCode Wiki</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="manifest" href="../../manifest.json">
</head>
<body>
    <header>
        <div class="container">
            <a href="../../index.html"><img src="../../images/logo.png" alt="CCode Logo" id="logo"></a>
            <h1><a href="../../index.html" style="color:white; text-decoration:none;">CCode Wiki</a></h1>
            <nav id="top-nav">
                <a href="../../index.html">Home</a>
                <a href="../introduction.html">Introdução</a>
                <a href="../modes.html">Modos de Uso</a>
            </nav>
        </div>
    </header>

    <div class="container main-container">
        <aside id="sidebar">
            <h2>Navegação</h2>
            <input type="text" id="search-bar" placeholder="Buscar na Wiki...">
            <ul>
                <li><a href="../../index.html">Página Inicial</a></li>
                <li><a href="../introduction.html">Introdução ao CCode</a></li>
                <li><a href="../modes.html">Modo Normal vs. Simplificado</a></li>
                <li>
                    <span class="category-toggle">Categorias de Blocos</span>
                    <ul class="submenu open">
                        <li><a href="events.html">Eventos</a></li>
                        <li><a href="data-text.html">Dados & Texto</a></li>
                        <li><a href="objects-filters.html">Objetos & Filtros / Imagens</a></li>
                        <li><a href="control.html">Controle</a></li>
                        <li><a href="shapes.html">Formas</a></li>
                        <li><a href="physics.html">Física</a></li>
                        <li><a href="media.html">Mídia</a></li>
                        <li><a href="transitions.html">Transições</a></li>
                        <li><a href="editor-expressions.html">Editor de Expressões</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <main id="main-content">
            <section>
                <h2>Blocos de Transições (Animações Suaves)</h2>
                <p>Os blocos de transição permitem animar as propriedades de objetos (como posição, tamanho, rotação, opacidade) suavemente ao longo de um período de tempo, em vez de mudá-las instantaneamente. Isso cria animações mais fluidas e visualmente agradáveis.</p>

                <div class="block-description">
                    <h4>Definir Posição Suavemente (<code>setTransitionPos</code> / <code>setTransitionPosNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Move um objeto ou imagem de sua posição atual para uma nova posição (X, Y) de forma animada, durante um tempo especificado.</p>
                    <p><strong>Modo Normal:</strong> <code>setTransitionPos</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>setTransitionPosNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome</code>: O nome do objeto/imagem a ser animado.</li>
                        <li><code>Tipo</code>: (Mais relevante no Modo Normal) Especifica o tipo de elemento (Objeto, Texto, Nível, etc.).</li>
                        <li><code>Tempo (Segundos)</code>: A duração da animação de transição.</li>
                        <li><code>Posição (X)</code>: A coordenada X de destino.</li>
                        <li><code>Posição (Y)</code>: A coordenada Y de destino.</li>
                        <li>(Modo Normal) <code>Tipo de animação</code>: Ex: "Linear" (velocidade constante), "EaseIn" (começa devagar), "EaseOut" (termina devagar), "Bounce" (efeito de quicar).</li>
                        <li>(Modo Normal) <code>Qtd. de repetições</code>: Quantas vezes a transição deve se repetir.</li>
                        <li>(Modo Normal) <code>Curva de transição</code>: Parâmetro mais detalhado para o easing da animação.</li>
                        <li>(Modo Normal) <code>Ao concluir</code>, <code>Ao pausar</code>, etc.: Funções de callback para eventos da transição.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Fazer um menu deslizar suavemente para dentro ou fora da tela.</li>
                        <li>Mover uma plataforma para cima e para baixo de forma contínua e suave.</li>
                        <li>Animar um personagem se movendo para um ponto específico no mapa.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Cria movimentos muito mais polidos e profissionais do que mudanças de posição instantâneas.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Tamanho Suavemente (<code>setTransitionSize</code> / <code>setTransitionSizeNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Anima a mudança da largura e altura de um objeto/imagem para novos valores ao longo do tempo.</p>
                    <p><strong>Modo Normal:</strong> <code>setTransitionSize</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>setTransitionSizeNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome</code>, <code>Tipo</code>, <code>Tempo (Segundos)</code>: Similares ao <code>setTransitionPos</code>.</li>
                        <li><code>Largura</code>: A largura de destino.</li>
                        <li><code>Altura</code>: A altura de destino.</li>
                        <li>Outros parâmetros de animação do Modo Normal (tipo de animação, repetições, etc.).</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Fazer um botão "pulsar" aumentando e diminuindo de tamanho suavemente.</li>
                        <li>Animar um objeto crescendo ou encolhendo ao ser coletado ou ativado.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Para efeitos de destaque, feedback visual e animações de transformação de tamanho.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Escala Suavemente (<code>setTransitionScale</code> / <code>setTransitionScaleNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Anima a escala (multiplicador de tamanho) de um objeto/imagem nos eixos X e Y.</p>
                    <p><strong>Modo Normal:</strong> <code>setTransitionScale</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>setTransitionScaleNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome</code>, <code>Tipo</code>, <code>Tempo (Segundos)</code>: Similares aos anteriores.</li>
                        <li><code>Escala (X)</code>: Multiplicador de tamanho para a largura (ex: 1.0 para original, 0.5 para metade, 2.0 para dobro).</li>
                        <li><code>Escala (Y)</code>: Multiplicador de tamanho para a altura.</li>
                        <li>Outros parâmetros de animação do Modo Normal.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Criar um efeito de "pop" quando um objeto aparece.</li>
                        <li>Animar um personagem "respirando" com leves alterações de escala.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Similar ao `setTransitionSize`, mas usa multiplicadores, o que pode ser mais intuitivo para certos tipos de animação.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Rotação Suavemente (<code>setTransitionRotation</code> / <code>setTransitionRotationNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Anima a rotação de um objeto/imagem para um novo ângulo ao longo do tempo.</p>
                    <p><strong>Modo Normal:</strong> <code>setTransitionRotation</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>setTransitionRotationNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome</code>, <code>Tipo</code>, <code>Tempo (Segundos)</code>: Similares aos anteriores.</li>
                        <li><code>Rotação (0-360)</code>: O ângulo de destino em graus.</li>
                        <li>Outros parâmetros de animação do Modo Normal.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Fazer uma engrenagem girar suavemente.</li>
                        <li>Animar uma carta virando.</li>
                        <li>Suavemente orientar um personagem para uma nova direção.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Para animações de giro e orientação fluidas.</p>
                </div>

                <div class="block-description">
                    <h4>Definir Opacidade Suavemente (<code>setTransitionAlpha</code> / <code>setTransitionAlphaNoob</code>)</h4>
                    <p><strong>O que faz:</strong> Anima a transparência (opacidade) de um objeto/imagem para um novo valor ao longo do tempo.</p>
                    <p><strong>Modo Normal:</strong> <code>setTransitionAlpha</code></p>
                    <p><strong>Modo Simplificado:</strong> <code>setTransitionAlphaNoob</code></p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome</code>, <code>Tipo</code>, <code>Tempo (Segundos)</code>: Similares aos anteriores.</li>
                        <li><code>Opacidade (0-100)</code>: O nível de opacidade de destino (0 = transparente, 100 = opaco).</li>
                        <li>Outros parâmetros de animação do Modo Normal.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Fazer um objeto aparecer suavemente (fade in) ou desaparecer (fade out).</li>
                        <li>Criar um efeito de "piscar" para um item que pode ser coletado.</li>
                        <li>Animar um fantasma tornando-se mais ou menos visível.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Essencial para efeitos de fade, transições de visibilidade e para dar um toque profissional às aparições e desaparecimentos de objetos.</p>
                </div>

                <div class="block-description">
                    <h4>Controle de Transições (Modo Normal - Ex: <code>setTransitionPause</code>)</h4>
                    <p><strong>O que faz:</strong> O Modo Normal geralmente oferece blocos para controlar transições em andamento.</p>
                    <p><strong>Modo Normal:</strong> <code>setTransitionPause</code>, <code>setTransitionResume</code>, <code>setTransitionCancel</code>.</p>
                    <p><strong>Parâmetros Principais:</strong></p>
                    <ul>
                        <li><code>Nome</code>: O nome do objeto/elemento cuja transição está ativa.</li>
                        <li><code>Tipo</code>: O tipo do elemento.</li>
                    </ul>
                    <p><strong>Exemplo de Uso:</strong></p>
                    <ul>
                        <li>Pausar todas as animações de transição quando o jogo é pausado.</li>
                        <li>Cancelar uma animação de movimento se o jogador realizar outra ação.</li>
                    </ul>
                    <p><strong>Relevância:</strong> Oferece controle mais fino sobre o ciclo de vida das animações suaves.</p>
                </div>

                 <!-- Adicionar mais blocos de Transições e Partículas
                 - setTransitionTo (bloco mais genérico)
                 - Blocos de Partículas (newEmitter, setEmitterPos, etc.) se forem considerados parte de "transições" ou animações visuais.
                 -->
            </section>
        </main>
    </div>
     <footer>
        <div class="container">
            <p>&copy; 2023 CCode FanWiki. Todos os direitos reservados.</p>
        </div>
    </footer>
    <script src="../../js/main.js"></script>
</body>
</html>
```

#### `pages/blocks/editor-expressions.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editor de Expressões - CCode Wiki</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="manifest" href="../../manifest.json">
</head>
<body>
    <header>
        <div class="container">
            <a href="../../index.html"><img src="../../images/logo.png" alt="CCode Logo" id="logo"></a>
            <h1><a href="../../index.html" style="color:white; text-decoration:none;">CCode Wiki</a></h1>
            <nav id="top-nav">
                <a href="../../index.html">Home</a>
                <a href="../introduction.html">Introdução</a>
                <a href="../modes.html">Modos de Uso</a>
            </nav>
        </div>
    </header>

    <div class="container main-container">
        <aside id="sidebar">
            <h2>Navegação</h2>
            <input type="text" id="search-bar" placeholder="Buscar na Wiki...">
            <ul>
                <li><a href="../../index.html">Página Inicial</a></li>
                <li><a href="../introduction.html">Introdução ao CCode</a></li>
                <li><a href="../modes.html">Modo Normal vs. Simplificado</a></li>
                <li>
                    <span class="category-toggle">Categorias de Blocos</span>
                    <ul class="submenu open">
                        <li><a href="events.html">Eventos</a></li>
                        <li><a href="data-text.html">Dados & Texto</a></li>
                        <li><a href="objects-filters.html">Objetos & Filtros / Imagens</a></li>
                        <li><a href="control.html">Controle</a></li>
                        <li><a href="shapes.html">Formas</a></li>
                        <li><a href="physics.html">Física</a></li>
                        <li><a href="media.html">Mídia</a></li>
                        <li><a href="transitions.html">Transições</a></li>
                        <li><a href="editor-expressions.html">Editor de Expressões</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <main id="main-content">
            <section>
                <h2>Editor de Expressões</h2>
                <p>O Editor de Expressões é uma ferramenta poderosa dentro do CCode que permite criar valores dinâmicos e condições complexas para seus blocos. Em vez de usar apenas valores fixos (como o número <code>10</code> ou o texto <code>"Olá"</code>), você pode combinar variáveis, operadores matemáticos, funções internas e propriedades de objetos.</p>
                <p>Ele é acessado ao clicar em campos de parâmetros de blocos que esperam um valor calculado ou uma condição lógica (ex: o campo "Valor" do bloco <code>Definir Valor da Variável</code> ou o campo "Condição" do bloco <code>Se</code>).</p>

                <h3>Como Usar</h3>
                <p>Ao abrir o Editor de Expressões, você geralmente verá uma interface que permite:</p>
                <ul>
                    <li><strong>Digitar diretamente:</strong> Para números (<code>100</code>, <code>3.14</code>), texto (<code>"meu_texto"</code> - as aspas são importantes para strings), e valores lógicos (<code>verdadeiro</code>, <code>falso</code>).</li>
                    <li><strong>Selecionar Variáveis:</strong> Uma lista das suas variáveis criadas estará disponível para inserção.</li>
                    <li><strong>Selecionar Funções/Métodos:</strong> Listas de funções matemáticas, de texto, de propriedades de objetos, etc.</li>
                    <li><strong>Usar Operadores:</strong> Para realizar cálculos e comparações.</li>
                </ul>

                <h3>Componentes Comuns em Expressões</h3>

                <div class="block-description">
                    <h4>Variáveis</h4>
                    <p>Você pode usar os nomes das variáveis que você criou com blocos como <code>Definir Valor da Variável</code>.</p>
                    <p><strong>Exemplo:</strong> Se você tem uma variável <code>pontuacao</code>, pode usá-la em uma expressão: <code>pontuacao + 10</code>.</p>
                </div>

                <div class="block-description">
                    <h4>Operadores Matemáticos</h4>
                    <ul>
                        <li><code>+</code> (Adição)</li>
                        <li><code>-</code> (Subtração)</li>
                        <li><code>*</code> (Multiplicação)</li>
                        <li><code>/</code> (Divisão)</li>
                        <li><code>%</code> (Módulo - resto da divisão)</li>
                        <li><code>^</code> (Potência - pode variar)</li>
                    </ul>
                    <p><strong>Exemplo:</strong> <code>(largura_tela / 2) - (largura_jogador / 2)</code> para centralizar um jogador.</p>
                </div>

                <div class="block-description">
                    <h4>Operadores Lógicos e de Comparação</h4>
                    <p>Usados principalmente em condições (ex: no bloco <code>Se</code>). Retornam <code>verdadeiro</code> ou <code>falso</code>.</p>
                    <ul>
                        <li><code>==</code> (Igual a)</li>
                        <li><code>~=</code> ou <code>!=</code> (Diferente de)</li>
                        <li><code>></code> (Maior que)</li>
                        <li><code><</code> (Menor que)</li>
                        <li><code>>=</code> (Maior ou igual a)</li>
                        <li><code><=</code> (Menor ou igual a)</li>
                        <li><code>e</code> (AND lógico - ambas as condições devem ser verdadeiras)</li>
                        <li><code>ou</code> (OR lógico - pelo menos uma condição deve ser verdadeira)</li>
                        <li><code>nao</code> (NOT lógico - inverte o valor lógico)</li>
                    </ul>
                    <p><strong>Exemplo:</strong> <code>vidas > 0 e pontuacao >= 1000</code>.</p>
                </div>

                <div class="block-description">
                    <h4>Texto (Strings)</h4>
                    <p>Texto deve ser colocado entre aspas (geralmente duplas <code>" "</code>).</p>
                    <p><strong>Concatenação (juntar texto):</strong> Frequentemente usa o operador <code>..</code> (Lua) ou <code>+</code> (outras linguagens). Verifique a sintaxe específica do CCode.</p>
                    <p><strong>Exemplo:</strong> <code>"Pontos: " .. pontuacao</code> (sintaxe Lua).</p>
                </div>

                <div class="block-description">
                    <h4>Funções Internas (Exemplos Comuns)</h4>
                    <p>O CCode oferece uma variedade de funções que podem ser chamadas dentro de expressões. A lista exata pode ser encontrada na interface do editor.</p>
                    <p><strong>Matemáticas:</strong></p>
                    <ul>
                        <li><code>aleatorio(min, max)</code>: Retorna um número aleatório entre min e max.</li>
                        <li><code>raiz(numero)</code>: Calcula a raiz quadrada.</li>
                        <li><code>arredondar(numero)</code>: Arredonda para o inteiro mais próximo.</li>
                        <li><code>seno(angulo)</code>, <code>cosseno(angulo)</code>, <code>tangente(angulo)</code>: Funções trigonométricas (ângulo geralmente em radianos).</li>
                        <li><code>abs(numero)</code> ou <code>modulo(numero)</code> (para valor absoluto): Retorna o valor absoluto de um número.</li>
                    </ul>
                    <p><strong>Texto:</strong></p>
                    <ul>
                        <li><code>comprimento_texto(meu_texto)</code>: Retorna o número de caracteres no texto.</li>
                        <li><code>texto_maiusculo(meu_texto)</code>, <code>texto_minusculo(meu_texto)</code>.</li>
                        <li><code>substituir_no_texto(texto_original, texto_procurado, texto_substituto)</code>.</li>
                    </ul>
                    <p><strong>Propriedades de Objetos/Dispositivo:</strong></p>
                    <ul>
                        <li><code>posicao_x("nome_do_objeto")</code>: Retorna a coordenada X do objeto especificado.</li>
                        <li><code>posicao_y("nome_do_objeto")</code>.</li>
                        <li><code>largura("nome_do_objeto")</code>, <code>altura("nome_do_objeto")</code>.</li>
                        <li><code>distancia("objeto1", "objeto2")</code>: Calcula a distância entre dois objetos.</li>
                        <li><code>largura_tela()</code>, <code>altura_tela()</code>.</li>
                        <li><code>dedo_tocando_tela_x()</code>, <code>dedo_tocando_tela_y()</code>: Posição do último toque na tela.</li>
                    </ul>
                    <p><strong>Outras:</strong></p>
                    <ul>
                        <li><code>ler_salvo("chave_K")</code>: Lê um valor salvo persistentemente.</li>
                        <li><code>tempo_unix()</code>: Retorna o tempo atual em segundos desde a época Unix.</li>
                    </ul>
                    <p><strong>Exemplo de Expressão Complexa:</strong></p>
                    <p><code>(posicao_x("jogador") < largura_tela() / 2) e (aleatorio(1, 10) > 5)</code></p>
                    <p>Esta condição seria verdadeira se a posição X do jogador for menor que a metade da largura da tela E um número aleatório entre 1 e 10 for maior que 5.</p>
                </div>

                <h3>Dicas para Usar Expressões</h3>
                <ul>
                    <li><strong>Parênteses:</strong> Use parênteses <code>( )</code> para controlar a ordem das operações, assim como na matemática. <code>(2 + 3) * 5</code> é diferente de <code>2 + (3 * 5)</code>.</li>
                    <li><strong>Tipos de Dados:</strong> Preste atenção aos tipos de dados. Tentar somar um número com um texto diretamente pode causar um erro. Algumas funções como <code>para_numero()</code> e <code>para_texto()</code> podem ser necessárias para conversões.</li>
                    <li><strong>Aspas para Texto:</strong> Lembre-se sempre de colocar texto (strings) entre aspas. Nomes de variáveis e funções não usam aspas.</li>
                    <li><strong>Teste Pequeno:</strong> Se uma expressão longa não funcionar, divida-a em partes menores para encontrar o erro. Use o bloco `Mostrar Notificação` ou `Alterar Texto` para exibir o resultado de partes da sua expressão e depurar.</li>
                </ul>
                <p>Dominar o Editor de Expressões abrirá um leque enorme de possibilidades para criar lógicas sofisticadas e dinâmicas em seus projetos CCode!</p>
            </section>
        </main>
    </div>
     <footer>
        <div class="container">
            <p>&copy; 2023 CCode FanWiki. Todos os direitos reservados.</p>
        </div>
    </footer>
    <script src="../../js/main.js"></script>
</body>
</html>
```

---

### Atualização do `js/sw.js` (Service Worker)

Adicione as novas páginas à lista `ASSETS_TO_CACHE`:

```javascript
const CACHE_NAME = 'ccode-wiki-cache-v1'; // Mude a versão ao atualizar assets
const ASSETS_TO_CACHE = [
    '/', // Alias para index.html
    'index.html',
    'css/style.css',
    'js/main.js',
    'manifest.json',
    // Páginas HTML principais
    'pages/introduction.html',
    'pages/modes.html',
    'pages/blocks/events.html',
    'pages/blocks/data-text.html',        // ADICIONADO
    'pages/blocks/objects-filters.html', // ADICIONADO
    'pages/blocks/control.html',         // ADICIONADO
    'pages/blocks/shapes.html',          // ADICIONADO
    'pages/blocks/physics.html',         // ADICIONADO
    'pages/blocks/media.html',           // ADICIONADO
    'pages/blocks/transitions.html',     // ADICIONADO
    'pages/blocks/editor-expressions.html',// ADICIONADO
    // Logos e ícones importantes
    'images/logo.png', // Se você tiver um logo
    'icons/icon-192x192.png',
    'icons/icon-512x512.png'
];

// O resto do sw.js permanece o mesmo...
```

---

### Próximos Passos para Você:

1.  **Criar os Arquivos:** Crie todos os arquivos `.html` dentro da pasta `pages/blocks/` com os conteúdos fornecidos acima.
2.  **Revisar TODO o Conteúdo:**
    *   **Precisão dos Blocos:** Verifique se a descrição de cada bloco, seus parâmetros e exemplos estão corretos em relação à funcionalidade real do CCode.
    *   **Nomes dos Blocos:** Confirme se os nomes `(nome_no_codigo)` correspondem aos nomes internos ou aos nomes que os usuários veem.
    *   **Completude:** Adicione descrições para blocos que eu não cobri em cada categoria. Por exemplo, na seção "Controle", faltam detalhes sobre `for`, `while`, `break`. Na seção "Objetos & Filtros", há muitos filtros específicos que podem ser detalhados.
    *   **Exemplos Conceituais:** Melhore ou adicione mais exemplos práticos ou até mesmo pequenas imagens/GIFs de como os blocos se conectam e funcionam.
3.  **Adicionar Imagens:**
    *   Coloque sua `logo.png` na pasta `images/`.
    *   Crie e coloque `icon-192x192.png` e `icon-512x512.png` na pasta `icons/`.
4.  **Testar a Navegação:** Verifique se todos os links na sidebar e no cabeçalho funcionam corretamente.
5.  **Testar o Service Worker e Offline:**
    *   Sirva a Wiki através de um servidor web local (essencial para o SW funcionar).
    *   Use as Ferramentas de Desenvolvedor do navegador para inspecionar o Service Worker, o cache e simular o modo offline.
    *   Verifique se as páginas cacheadas em `ASSETS_TO_CACHE` carregam offline.
6.  **Melhorar a Busca (Opcional, Avançado):** Se a Wiki crescer muito, a busca atual não será suficiente. Considere bibliotecas como Lunr.js.
7.  **Estilo e Acessibilidade:** Refine o CSS e verifique a acessibilidade.

Este preenchimento deve economizar um bom tempo na digitação inicial do conteúdo. O foco agora é na revisão técnica e na adição de detalhes específicos do CCode!