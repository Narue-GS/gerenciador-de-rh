# Gerenciador de RH
> by Logical Thinking

## Proposta: 
`um gerenciador de usuários, permissões e alçadas onde deveremos permitir que ele crie livremente novos usuários para acessar a ferramenta, estes usuários por sua vez poderão estar vinculados a alçadas diferentes, que por sua vez poderão estar vinculadas a diversas permissões diferentes.`

## Solução:
  Uma React based aplication focada em segurança e responsividade que deverá permitir:
  - Que o usuário de alçada maior administre os funcionários, contratando e demitindo, além de alterar as informações dos mesmos;
  - Que o usuário de alçada maior administre as alçadas e permições, cadastrando e removendo-as (`menos as permições, contratar, demitir, cadastrar, remover, e alçadas, Gerente, padrão`)
  - Que os demais usuários tenham acesso a funcionalidades e conteúdos correspondentes a suas alçadas;
  - Que o usuário entre e saia com facilidade de forma  intuitiva;

# Processo:
> **Dia 1 (21/03):**
>> - Tivemos um brain storming sobre a proposta do cliente formando o rascunho inicial do user flow e do desing.
>> - Separamos as responsabilidades, ficando: Naruê (Javascript), Victor (HTML e CSS), Larissa (Desing). 

> **Dia 2(22/03):**
>> - Repensamos a identidade visual e a paleta de cores da aplicação e optamos por `tons de azul`, passando seriedade, segurança e profissionalidade.
>> - Tivemos uma reunião com toda a equipe da `ELITI`, repensamos sobre a proposta e decidimos separar o MVP em dois principais: um mais simples, com apenas cadastro e remoção irrestrito, sem restrições por permição com alçadas e permições fantasia, e outra mais complexa, com restrições de conteúdo e funcionalidades, alçadas e permições reais.

> **Dia 2(22/03):**
>> - Aperfeiçoamos o fluxograma do [fluxo de usuário](https://miro.com/app/board/uXjVMa4KeGs=/), seguindo as segintes preposições:
>>> - Os dois tipos de usuários constantes são: os de alta alçada(com todas as permições) e os restritos (sem nenhuma permição além de ver as próprias informações)
