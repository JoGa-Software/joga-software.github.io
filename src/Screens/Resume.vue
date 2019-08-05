<template>
    <b-container style="alignContent:center; justifyContent:center; marginTop:40px">
        <pdf src="https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?export=download&id=1ZHFUYW8MtLS_POEw1MkYAuB5KMesl8HK">
            <template slot="loading">
            loading content here...
            </template>
        </pdf>
    </b-container>
</template>

<script>
import { scrypt } from 'crypto';
import pdf from 'pdfvuer'
import PDFJS from 'pdfjs-dist'

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