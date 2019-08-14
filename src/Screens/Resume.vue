<template>
    <div id="resumeContainer">
        <b-card
            tag="article"
            class="mb-2"
        >
            <pdf id="pdfContainer" src="https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?export=download&id=1ZHFUYW8MtLS_POEw1MkYAuB5KMesl8HK">
                <template slot="loading">
                    Loading 
                    <font-awesome-icon icon="spinner" spin/>
                </template>
            </pdf>
        </b-card>
    </div>
</template>

<script>
import { scrypt } from 'crypto';
import pdf from 'pdfvuer'

export default {
    name: "Resume",
    components: {
        pdf
    },
    data() {
        return {
            data: null
        }
    }
}
</script>

<style scoped>

    #pdfContainer {
        display: flex;
        width:100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    #resumeContainer {
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center; 
        margin-top:40px; 
        width:100%;
    }

</style>