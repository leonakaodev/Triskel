<template>
    <div>
        <!-- Root Element -->

        <!-- Botões -->
        <v-container>
            <v-row id="botao">
                <v-col
                    cols="12"
                    sm="4"
                >
                    <btnBox
                        cor="r"
                        icone="mdi mdi-whatsapp"
                        titulo="Whatsapp"
                        texto="Fale diretamente conosco: (11) 97709-5384"
                        caminho="https://api.whatsapp.com/send?phone=5511977095384&text=Olá"
                    />
                </v-col>
                <v-col
                    cols="12"
                    sm="4"
                >
                    <btnBox
                        cor="w"
                        icone="mdi mdi-instagram"
                        titulo="Instagram"
                        texto="Nos encontre também nas redes sociais."
                        caminho="https://www.instagram.com/triskeleletrificacao/"
                    />
                </v-col>
                <v-col
                    cols="12"
                    sm="4"
                >
                    <btnBox
                        cor="r"
                        icone="mdi mdi-linkedin"
                        titulo="Linkedin"
                        texto="Nos encontre também nas redes sociais."
                        caminho="https://www.linkedin.com/in/triskel-eletrifica%C3%A7%C3%A3o-e-automa%C3%A7%C3%A3o-518a721a6/"
                    />
                </v-col>
            </v-row>
        </v-container>

        <!-- Form -->
        <v-container id="c_back">
            <v-row justify="center">
                <v-col
                    cols="12"
                    sm="8"
                >
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-row
                            id="map"
                            class="elevation-4 ml-1"
                        >
                            <v-col
                                class="align-center text-center"
                                cols="12"
                            >
                                <h2 id="c">
                                    Fale Conosco
                                </h2>
                            </v-col>
                            <v-col
                                class="pr-4 pl-4"
                                sm="6"
                                cols="12"
                            >
                                <v-text-field
                                    v-model="name"
                                    :rules="nameRules"
                                    label="Nome"
                                    required
                                    solo
                                />

                                <v-text-field
                                    v-model="telefone"
                                    :rules="telefoneRules"
                                    label="Telefone"
                                    required
                                    solo
                                />

                                <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                                    solo
                                />
                            </v-col>
                            <v-col
                                class="align-start text-center pr-4 pl-4"
                                cols="12"
                                sm="6"
                            >
                                <v-textarea
                                    v-model="mensagem"
                                    label="Escreva sua mensagem aqui."
                                    required
                                    :rules="mensagemRules"
                                    hint="O que você veio nos contar?"
                                    solo
                                />
                                <v-btn
                                    id="enviar"
                                    class="mr-4"
                                    @click="validate"
                                >
                                    Enviar
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>




        <!-- Endereço -->
        <v-container
            id="map_area"
        >
            <v-row>
                <v-col
                    id="map_text"
                    cols="12"
                    sm="4"
                >
                    <v-row
                        class="d-flex flex-column align-center"
                    >
                        <v-col
                            class="d-flex flex-column align-center"
                        >
                            <h2>Endereço</h2>
                            <barra />
                        </v-col>
                        <v-col>
                            <h4 align="center">
                                Est. Portão Honda, 3305  <br>
                                Jardim Revista  <br>
                                Suzano - SP
                            </h4>
                        </v-col>
                    </v-row>

                    <v-divider />

                    <v-row
                        class="d-flex flex-column align-center"
                    >
                        <v-col
                            class="d-flex flex-column align-center"
                        >
                            <h2>Contato</h2>
                            <barra />
                        </v-col>
                        <v-col>
                            <h4 align="center">
                                (11) 9 7709-5384<br>
                                vendas@triskeleletrificacao.com.br
                            </h4>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col
                    cols="12"
                    sm="8"
                >
                    <div id="map_map_map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.6894775971746!2d-46.282636584878766!3d-23.507691665497955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce79843d77f147%3A0x3234e2dca8bb2c74!2sEstr.%20Port%C3%A3o%20do%20Ronda%2C%203305%20-%20Jardim%20Europa%2C%20Suzano%20-%20SP%2C%2008696-043!5e0!3m2!1spt-BR!2sbr!4v1591809127611!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            frameborder="0"
                            style="border:0;"
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                        />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import btnBox from "~/components/btnBox.vue";
import barra from "~/components/barra.vue";

export default {
    components:{
        btnBox,
        barra,
    },
    data: () => ({
        valid: true,
        name: "",
        nameRules: [
            v => !!v || "Name é obrigatório."
        ],
        telefone: "",
        telefoneRules: [
            v => !!v || "O telefone é obrigatório."
        ],
        email: "",
        emailRules: [
            v => !!v || "E-mail é obrigatório.",
            v => /.+@.+\..+/.test(v) || "E-mail tem que ser valido.",
        ],
        mensagem: "",
        mensagemRules: [
            v => !!v || "Este campo é obrigatório."
        ],
        select: null,
    }),

    methods: {
        validate () {
            this.$refs.form.validate();
        },
    },
};
</script>

<style scoped>
    /* ---- Geral ---- */
    #c {
        color: #a91d21ff;
    }

    #c_back{
        background-color: #f2f2f2ff;
    }

    /* ---- Titulo ---- */
    #titulo_page {
        color: white;
    }

    /* ---- Botões ---- */
    #botao {
        margin-top: -3%;
    }

    /* ---- Form ---- */
    #enviar {
        color:white;
        background-color: #a91d21ff;
    }

    /* ---- Mapa ---- */
    #map_area {
        background-color: white;
    }

    #map_map_map {
        height: 100%;
        border-left: 10px solid;
        color: #a91d21ff;
    }
</style>