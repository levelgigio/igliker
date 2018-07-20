# igliker

#FUNCIONALIDADES
- Seguir perfis
- Curtir publicacoes

#COMO CONFIGURAR
- a variavel "quant_likes_antes_pausa" indica quantos likes vai dar antes de entrar em uma pausa
- a variavel "tempo_pausa" determina a duracao da pausa em segundos
- a variavel "tempo_entre_funcoes" determina o tempo em segundos entre cada acao de abrir, curtir/seguir e fechar
- a variavel "seguir_perfis" indica se o perfil que publicou sera seguido ou nao
- a variavel "curtir_publicacoes" indica se a publicacao sera curtida ou nao
- a variavel "seguir_ilimitado" indica se a acao de seguir continuara indefinidamente ou nao
- a variavel "curtir_ilimitado" inidica se a acao de curtir continuara indefinidamente ou nao
- a variavel "max_seguir" so e pertinente caso a variavel "seguir_ilimitado" estiver como "false". Indica o limite de perfis que serao seguidos no decorrer da execucao do script
a variavel "max_curtidas" so e pertinente caso a variavel "curtir_ilimitado" estiver como "false". Indica o limite de likes que serao envidaos no decorrer da execucao do script
- a variavel "curtir_explore" indica que o script sera executado na aba explore do Instagram Web
- a variavel "curtir_hashtags" indica que o script sera executado numa hashtag do Instagram Web

#COMO USAR
- Configurar o script
- Entrar na pagina do Instagram Web
- Entrar na aba "Explore" ou em uma hashtag qualquer (ver "curtir_explore" e "curtir_hashtags em "COMO CONFIGURAR")
- Clicar com o botao direito em qualquer ponto da pagina e ir em "Inspecionar"
- Colar o script na aba "Console" e dar enter

#CONFIGURACOES DEFAULT
- O Instagram possui um sistema "anti bot" que detecta atividade sobre humana de curtidas/seguidas. Aparentemente o sistema esta configurado para dar block na conta caso curta mais que 350 publicacoes por hora e/ou siga mais que 30 perfis por hora. 

----------
A configuracao abaixo e a versao que nao se preocupa com isso, curte adoidado.

var quant_likes_antes_pausa = 80; 

var tempo_pausa = 45; 

var tempo_entre_funcoes = 0.8; 

----------
A configuracao abaixo e a versao que se preocupa com isso, curtindo em media 180 publicacoes por hora.

var quant_likes_antes_pausa = 1; 

var tempo_pausa = 10; 

var tempo_entre_funcoes = 3.333; 
