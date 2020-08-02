<template>
    <b-container style="paddingTop:10px">
        <b-row align-v="center" align-h="center">
            <b-card
                tag="article"
                class="mb-2"
                id="card"
            >
                <pdf
                    id="pdfContainer" 
                    src="https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?export=download&id=1QSAww2vBHkybbqR6NZKGr2VedW-mlefy"
                >   
                </pdf>
            </b-card>
        </b-row>
    </b-container>
</template>

<script>
import pdf from 'vue-pdf'


export default {
    name: "Resume",
    components: {
        pdf
    },
    data() {
        return {
        }
    },
}
</script>

<style scoped>

    #card {
        width: 80%;
    }

    #pdfContainer {
        display: inline-block;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

</style>