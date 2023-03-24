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
