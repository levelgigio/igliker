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
