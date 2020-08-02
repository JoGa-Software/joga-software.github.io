<template>
    <div style="backgroundColor:#fafafa;paddingTop:10px">
        <b-row align-h="center" style="marginTop:10px">
            <h2><font color="#232020">Privacy Policy</font></h2>
        </b-row>
        <b-row align-v="center" align-h="center">
            <b-card
                tag="article"
                class="mb-2"
                id="card"
            >
                <pdf
                    v-for="i in numPages"
                    :key="i"
                    :page="i"
                    id="pdfContainer" 
                    :src="src"
                >   
                </pdf>
            </b-card>
        </b-row>
    </div>
</template>

<script>
import pdf from 'vue-pdf'
let loadingTask = pdf.createLoadingTask('https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?export=download&id=1_Bxe0RARVXvSw87Tt9rYfcQpYiN80_eC');

export default {
    name: "Resume",
    components: {
        pdf
    },
    data() {
        return {
            src: loadingTask,
            numPages: undefined,
        }
    },
    mounted() {

        this.src.then(pdf => {

            this.numPages = pdf.numPages;
        });
    }
}
</script>

<style scoped>

    #card {
        width: 80%;
    }

    #pdfContainer {
        width: 90%;
    }

</style>