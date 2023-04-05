# Gerenciador de RH
> by Logical Thinking

## Proposta: 
`um gerenciador de usuários, permissões e alçadas onde deveremos permitir que ele crie livremente novos usuários para acessar a ferramenta, estes usuários por sua vez poderão estar vinculados a alçadas diferentes, que por sua vez poderão estar vinculadas a diversas permissões diferentes.`

## Solução:
  Uma React based aplication focada em segurança e responsividade que deverá permitir:
  - Que o usuário de alçada maior administre os funcionários, contratando e demitindo, além de alterar as informações dos mesmos;
  - Que o usuário de alçada maior administre as alçadas e permissões, cadastrando e removendo-as (`menos as permissões, contratar, demitir, cadastrar, remover, e alçadas, Gerente, padrão`)
  - Que os demais usuários tenham acesso a funcionalidades e conteúdos correspondentes a suas alçadas;
  - Que o usuário entre e saia com facilidade de forma  intuitiva;

# Processo:
> **Dia 1 (21/03):**
>> - Tivemos um brain storming sobre a proposta do cliente formando o rascunho inicial do user flow e do desing.
>> - Separamos as responsabilidades, ficando: Naruê com Javascript e documentação, por ter mais experiência em projetos reais utilizando essa linguagem, Victor com HTML e CSS, por ter mais familharidade com estruração e estilização, Larissa com Desing, por se identificar mais com essa área. 

> **Dia 2(22/03):**
>> - Repensamos a identidade visual, o modelo de negócio e a paleta de cores da aplicação e optamos por `tons de azul`, passando seriedade, segurança e profissionalidade.
>>> - Sobre o modelo de negócio, optamos pelo setor de recursos humanos, por acreditarmos que se encaixa perfeitamente com a proposta.
>> - Tivemos uma reunião com toda a equipe da `ELITI`, repensamos sobre a proposta e decidimos separar o MVP em dois principais: um mais simples, com apenas cadastro e remoção irrestrito, sem restrições por permição com alçadas e permissões fantasia, e outra mais complexa, com restrições de conteúdo e funcionalidades, alçadas e permissões reais.

> **Dia 3(23/03):**
>> - Aperfeiçoamos o fluxograma do [fluxo de usuário](https://miro.com/app/board/uXjVMa4KeGs=/), seguindo as segintes preposições:
>>> - Os dois tipos de usuários padão são: os de alta alçada(com todas as permições) e os restritos (sem nenhuma permição além de ver as próprias informações)
>>> - Os usuários que não se encaixam em nenhum dos usuários padrão podem ter quaisqueres permições, desde que não tenham todas e tenham ao menos uma
>> - Iniciamos a produção do html e do css da tela de login e da página principal.
>>> - Encontramos alguns problemas na montagem do ambiente de trabalho em equipe utilizando o github. Foi resolvido rapidamento com uma rápida e objetiva troca de conhecimentos.

>> User flow:
>>> <a href="https://ibb.co/WnZ0qLF"><img src="https://i.ibb.co/1Z1MhkK/User-flow-gerenciador-de-rh.jpg" alt="User-flow-gerenciador-de-rh" border="0"></a>

> **Dia 4(24/03):**
>> - Criamos as funções de login e logout, utilizando o usuário `Carlos`

> **Dias 5 e 6 (25/03 à 26/03)**
>> - Tiramos o dia pra descançar e clarear as idéias.

> **Dia 7 (27/03)**
>> - Corrigimos um bug no login e na permanência do usuário administrador.
>> - Adicionamos validações de permição para a visualização de conteúdo


> **Dia 8 (28/03)**
>> - Corrigimos um bug na lista de usuários
>> - Tivemos uma palestra com o ilustre [Lucas Pacheco](https://github.com/pachecolucas). Nessa palestra ele explicou como deveriamos olhar para o nosso projeto como uma oportunidade de crescer e não como um peso. A pelestra foi inspiradora e nos ajudou a clarear as ideias para seguir em frente.

> **Dia 9 (29/03)**
>> - Desenvolvemos o básico da página principal e melhoramos a página de login.
>> - Melhoramos a documentação no trello
>> - Tivemos uma palestra com o ilustre [Lucas Pacheco](https://github.com/pachecolucas) sobre como deveriamos fazer o projeto na prática e como POO, programação orientada à objetos é eficiente.

> **Dia 10 (30/03)**
>> - Fizemos um brain storming para repensar como ficaria a questão de documentação. Decidimos que o [Narue G. Santos](https://github.com/Narue-GS) ficará responsável pela documentação geral, enquanto o [Victor E.C. Santos](https://github.com/Victor-E-C-Santos) e a [Larissa] ficarão responsáveis por documentar suas respectivas áreas.
>> - Trabalhamos em melhorias no código

> **Dia 11 (31/03)**
>> - Focamos em resolução de erros para iniciarmos a próxima semana emplementando novas features.

> **Dias 12 e 13 (01/04 à 02/04)**
>> - Tiramos o fim de semana pra descançar e refrescar a mente

> **Dia 14 (03/04)**
>> - Emplementamos a edição de usuários.
>> - Ainda restaram alguns bugs na alteração do usuário 

> **Dia 15 (04/04)**
>> - Focamos no design. Desenvolvemos nossa logo oficial e repensamos o design da tela principal.
>> - Iniciamos o desenvolvimento do design do formulaŕio de cadastro de usuário
>> - Repensamos o design do header.
