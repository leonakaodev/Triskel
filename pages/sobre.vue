<template>
    <div>
        <!-- Root Element -->
        <!-- Quem somos -->
        <v-container>
            <v-row>
                <v-col
                    cols="12"
                    sm="9"
                    class="pr-2"
                >
                    <v-row class="align-center">
                        <v-col
                            cols="12"
                            sm="6"
                            class="align-center"
                        >
                            <v-row>
                                <v-col
                                    cols="12"
                                    class="ml-0"
                                >
                                    <h1 id="quem_titulo">
                                        Quem somos
                                    </h1>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="mt-3 mr-2 ml-1"
                                >
                                    <p class="text-justify ml-4">
                                        Com uma equipe que soma mais de 30 anos de experiência no mercado de
                                        montagem de painéis, fundada em 2015, a Triskel nasceu para
                                        acompanhar a evolução social e tecnológica em ressonância com a mutabilidade
                                        constante das necessidades do mercado, desenvolvendo uma metodologia de trabalho
                                        que prima, por meio de seu atendimento personalizado, pela confiança e parceria com
                                        os clientes, bem como pelo foco nos resultados e maximização dos recursos, criando e
                                        desenvolvendo soluções cada vez mais simplificadas e adequadas às necessidades dos
                                        nossos clientes.
                                    </p>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                            <v-img src="Imagens/imagem_bonita.jpeg" />
                        </v-col>
                    </v-row>


                    <v-row class="text-center mb-2">
                        <!-- Missão -->
                        <v-col
                            id="c"
                            cols="12"
                            class="pb-2"
                        >
                            <v-row
                                class="d-flex flex-column align-center"
                            >
                                <h1 id="c_titulo">
                                    Missão
                                </h1>

                                <barra />
                            </v-row>
                            <v-row>
                                <p class="text-justify pl-4 pr-4">
                                    Atender nossos clientes com criatividade, segurança e eficiência
                                    no alcance de seus objetivos, consolidando parceria e confiança mútuos. Aprimorar e
                                    compartilhar constantemente o conhecimento, fornecendo painéis elétricos de baixa
                                    tensão para todo o Mundo, satisfazendo as mais peculiares necessidades do mercado
                                    com tecnologia de alta qualidade, processos enxutos e pessoas qualificadas.
                                </p>
                            </v-row>
                        </v-col>

                        <!-- Visão -->
                        <v-col
                            cols="12"
                            class="pb-2"
                        >
                            <v-row
                                class="d-flex flex-column align-center "
                            >
                                <h1 id="c_titulo">
                                    Visão
                                </h1>

                                <barra />
                            </v-row>
                            <v-row>
                                <p class="text-justify pl-4 pr-4">
                                    Ser reconhecida como uma das melhores empresas do Mundo,
                                    tornando-se referência na fabricação de painéis elétricos. Contribuir para o
                                    desenvolvimento sustentável do planeta para o futuro da humanidade, transmitindo
                                    valores, concretizando ideias e sonhos.
                                </p>
                            </v-row>
                        </v-col>

                        <!-- Valores -->
                        <v-col
                            id="c"
                            cols="12"
                            class="pb-2"
                        >
                            <v-row
                                class="d-flex flex-column align-center"
                            >
                                <h1 id="c_titulo">
                                    Valores
                                </h1>

                                <barra />
                            </v-row>
                            <v-row>
                                <p class="text-justify pl-4 pr-4">
                                    Acreditamos no aperfeiçoamento da sociedade através do
                                    compromisso com a ética, responsabilidade, dedicação e transparência. Valorizamos as
                                    pessoas, o trabalho em equipe e a solidariedade, criando um ambiente saudável para o
                                    desenvolvimento pleno das potencialidades e realização pessoal dos nossos
                                    colaboradores.
                                </p>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
                <!-- Parceiros -->

                <v-col
                    sm="2"
                    cols="12"
                >
                    <v-row
                        id="c"
                        class="text-center justify-center align-center"
                    >
                        <v-col
                            cols="12"
                            class="d-flex flex-column align-center"
                        >
                            <h1 id="c_titulo">
                                Parceiros
                            </h1>
                            <barra />
                        </v-col>
                        <v-col
                            v-for="n in 9"
                            :key="n"
                            class="text-center"
                            cols="4"
                            sm="9"
                        >
                            <v-img :src="'Imagens/Parceiros/'+n+'.png'" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import barra from "~/components/barra.vue";

export default {
    components:{
        barra,
    },

};
</script>


<style scoped>
    /* ---- Geral ---- */
    #c {
        background-color: #f2f2f2ff;
    }

    #c_titulo {
        color: #a91d21ff;
    }

    p{
        font-size: 105%;
        line-height: 150%;
        padding-top: 1%;
    }

    /* ---- Quem ---- */
    #quem_titulo {
        color: #a91d21ff;
        border-left: 10px solid;
        padding-left: 1%;
        margin-left: 3%;
    }

</style>