# Seu Enterprise IT Support Lab, do zero

## 1. O que é

É um simulador de atendimento de suporte de TI. Você assume o papel do técnico e recebe seis chamados fictícios de uma empresa. Cada chamado apresenta um usuário, um equipamento, sintomas e opções de investigação.

O objetivo é praticar o raciocínio: entender o problema, avaliar impacto, escolher testes úteis, interpretar resultados, registrar o atendimento e decidir entre resolver e encaminhar para outra equipe.

O site também é um projeto de desenvolvimento web: HTML monta a estrutura, CSS cuida da apresentação e JavaScript implementa os cenários e interações.

**Os diagnósticos são simulados.** Clicar em `Run ipconfig /all` mostra um resultado preparado no código. Não executa comandos no seu computador. O laboratório não está conectado ao ServiceNow ou a um ambiente Windows/Active Directory real.

## 2. O que significam os termos

| Termo | Significado neste projeto |
| --- | --- |
| Ticket / chamado | Registro de um problema ou pedido de um usuário |
| Incident | Algo que deixou de funcionar, como login ou impressão |
| Service request | Pedido de um serviço, como preparar uma estação de trabalho |
| L1 | Primeiro nível de suporte; investiga e resolve dentro de seu escopo |
| Escalate | Encaminhar o caso e suas evidências à equipe adequada |
| Work note | Anotação técnica do atendimento |
| SLA | Meta de prazo de atendimento; aqui os valores são ilustrativos |
| Asset / CI | Equipamento ou item de configuração associado ao chamado |
| IMACD | Install, Move, Add, Change, Dispose: operações do ciclo de vida de equipamentos |
| DNS | Serviço que traduz nomes, como um domínio, em endereços IP |
| Git | Controle de versões do código |
| GitHub | Plataforma onde o código e seu histórico ficam disponíveis |
| GitHub Pages | Hospedagem de sites estáticos a partir do GitHub |
| Domínio | Endereço do site; um domínio próprio é opcional |

## 3. Onde abrir e o que já está disponível

- [Laboratório público](https://guilhermedealmeidapereira.github.io/projects/enterprise-it-support-lab/)
- [Portfólio e seus projetos](https://guilhermedealmeidapereira.github.io/#projects)
- [Código e README](https://github.com/GuilhermeDeAlmeidaPereira/GuilhermeDeAlmeidaPereira.github.io/tree/main/projects/enterprise-it-support-lab)

O código fica em uma pasta própria dentro do repositório do portfólio. Não é necessário criar outro repositório para compartilhar esta versão. Você pode separar o projeto depois, se quiser uma página exclusiva no seu perfil do GitHub.

Os arquivos também são compatíveis com GitHub Pages. Com a publicação do portfólio concluída, a versão hospedada no GitHub fica em `https://guilhermedealmeidapereira.github.io/projects/enterprise-it-support-lab/`.

Você não precisa comprar um domínio ou contratar outro servidor para esta versão. O endereço fornecido já permite demonstrar o projeto.

## 4. Seu primeiro exercício: Wi-Fi conectado, mas sem abrir sites

1. Abra **Live lab** e escolha **Connected to Wi-Fi but websites will not load**, chamado `INC0018446`.
2. Leia **User report**. Pergunte: afeta só uma pessoa ou várias? O Wi-Fi está conectado? O problema começou depois de alguma mudança?
3. Clique em **Confirm scope**. O resultado informa que os colegas estão online: isso aponta para um problema nesse computador.
4. Clique em **Run ipconfig /all**. O endereço IP e o gateway estão corretos, mas o DNS foi configurado manualmente para um servidor de outro local.
5. Clique em **Test gateway and DNS**. A comunicação com IPs funciona, mas nomes não são resolvidos. Essa evidência sustenta a hipótese de DNS incorreto.
6. Em **Add work note**, escreva sua hipótese e as evidências. Use **Add to activity** para salvar antes de mudar de tela.
7. Clique em **Restore automatic DNS**. O resultado simulado confirma que os testes de resolução de nomes e navegação funcionam.
8. Clique em **Resolve ticket**. Escolha o código de fechamento e registre problema, causa, ação e validação. Confirme em **Confirm resolution**.
9. Atualize a página: o status e suas notas devem continuar salvos nesse navegador.

Exemplo de anotação, após você ter realizado os passos acima:

> Single user affected. Valid DHCP address and working gateway connectivity. Hostname resolution failed because the adapter used a stale manually configured DNS server. Restored automatic DNS; the simulated nslookup and browsing checks passed.

O aprendizado é explicar por que uma conexão Wi-Fi ativa não garante que a resolução de nomes funcione. Você não precisa decorar o texto; precisa entender as evidências.

## 5. Segundo exercício: saber quando escalar

Abra **Shared printer shows offline for entire floor**, chamado `INC0018431`.

1. **Confirm impact**: várias pessoas estão afetadas; existe uma impressora alternativa.
2. **Ping printer IP**: o IP antigo não responde, e o painel mostra outro endereço.
3. **Inspect print port**: a fila no servidor ainda aponta para o endereço antigo.
4. **Check DHCP reservation**: o cenário informa que a reserva de endereço foi removida e identifica a equipe responsável.
5. Adicione uma nota com impacto, IP antigo, IP atual, testes e alternativa temporária.
6. Clique em **Escalate**. Confira o registro de encaminhamento para **Network Operations**.

Aqui o resultado esperado é um encaminhamento bem documentado. Você não deve dizer que o serviço foi restabelecido antes de haver correção e validação. A versão atual permite fechar o caso depois dos diagnósticos, mas a decisão correta no exercício é escalar.

## 6. Exercite os outros quatro casos

| Caso | Sequência sugerida | O que explicar |
| --- | --- | --- |
| Login do Windows | Verify identity → Check network at sign-in → Unlock account → Use pre-logon VPN | Identidade, bloqueio de conta e acesso à rede corporativa; credenciais em cache como investigação complementar |
| Áudio da sala Teams | Set high-impact priority → Check output device → Select room speakers → Run test call | Seleção da saída de áudio e validação com o organizador; prioridade real depende da matriz de impacto e urgência da empresa |
| Nova estação de trabalho | Verify request approval → Reserve stock assets → Validate managed build → Install and cable desk → Update ownership | Aprovação, equipamento correto, configuração, segurança física e registro de entrega |
| Dock sem monitores | Reseat display cables → Check Display Settings → Update dock firmware → Validate peripherals | Como isolar a falha da dock e testar vídeo, rede, USB e energia depois da correção |

Antes de cada clique, diga em voz alta o que você espera descobrir. Depois compare sua hipótese com o resultado. Se selecionar uma opção inadequada, leia o feedback e explique por que ela não era sustentada pelas evidências.

## 7. Testes do site

Além de praticar suporte, confira o funcionamento do software:

1. Resolva um chamado e confirme a alteração do status e do contador.
2. Escale a impressora e confira o destino e o histórico.
3. Salve uma nota, atualize a página e confirme que ela permanece.
4. Pesquise pelo número do ticket e teste os filtros.
5. Tente resolver antes de completar os diagnósticos obrigatórios: o botão deve ficar desabilitado.
6. Abra em uma janela anônima: o visitante deve começar uma sessão independente.
7. Use o celular ou reduza a janela e confira fila, ações e anotações.
8. Teste o botão de reiniciar: cancele primeiro para preservar dados; depois confirme para recomeçar.

Seus dados ficam no `localStorage`, o armazenamento local do navegador. Não são compartilhados com o recrutador, não sincronizam entre dispositivos e podem desaparecer ao limpar os dados do site. A versão em cada endereço tem armazenamento separado.

## 8. Como mostrar a um recrutador

Envie o portfólio e o link direto da demonstração. O recrutador pode testar os chamados ou abrir **Project overview** para entender a proposta.

Em uma apresentação de três minutos:

1. Explique que é um projeto pessoal de simulação de suporte L1, com casos fictícios.
2. Demonstre o caso de DNS, narrando hipótese, evidências, correção e validação.
3. Mostre o caso da impressora e explique por que escalou para Network Operations.
4. Mostre uma anotação clara e o código no GitHub.

Uma descrição curta em inglês:

> This is my interactive L1 IT support lab. It simulates common desktop-support incidents and lets visitors investigate symptoms, record work notes, and practise resolution or escalation. It is a personal learning project with fictional data and browser-local progress.

Você já pode compartilhar a versão inicial enquanto estuda. Apresente seu nível com precisão: os botões demonstram o fluxo simulado; sua capacidade de explicar as escolhas é o que comprova seu entendimento. Se perguntarem sobre a implementação com IA, explique como ela foi usada e quais partes você estudou e validou.

## 9. Limites que você precisa conhecer

- Não é uma instalação real do ServiceNow, Windows Server, Active Directory ou Intune.
- Não executa comandos reais nem acessa computadores de visitantes.
- Os seis chamados são fixos; não existe formulário para criar outros pela interface.
- As ações de inventário registram resultados simulados; não há banco de ativos editável.
- Existe um cenário de Teams; Zoom e Webex ainda não têm exercícios próprios.
- Os SLAs são rótulos ilustrativos, e os links de artigos apenas exibem uma notificação.
- O sistema verifica uma lista de ações obrigatórias, mas ainda não avalia toda a ordem das ações nem a qualidade do texto das notas.

## 10. O que fazer daqui em diante

**Agora:** envie o link e pratique os casos de DNS e impressora.

**Depois:** conclua os seis cenários. Para cada um, documente problema, impacto, testes, causa, ação, validação e aprendizado. Não marque um teste como feito sem tê-lo executado.

**Para fortalecer o portfólio:** acrescente evidências de um ambiente real de testes, por exemplo máquinas virtuais suas com Windows, contas, conectividade e comandos. Registre somente os testes que você realmente fez. Essa etapa complementa o simulador e permite demonstrar administração prática.

**Para continuar programando:** estude `TICKETS`, `useAction`, `escalateTicket`, `openResolveModal`, `saveState` e `loadState` em `app.js`. Implemente primeiro uma melhoria pequena, como um artigo de conhecimento real ou um novo cenário. Um repositório separado e melhorias avançadas podem vir depois.

Se você tem o portfólio clonado no computador, use **Pull** no GitHub Desktop antes da próxima edição para receber estes arquivos e evitar trabalhar numa cópia desatualizada.
