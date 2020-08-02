<template>  
    <div>
        <b-col align-h="center" align-v="center" style="paddingTop:20px; paddingBottom:20px">
            <b-row align-v="center" align-h="center" style="margin: 10px;">
                <b-col class="col-sm-5">
                    <h3>Email Me</h3>
                </b-col>
            </b-row> 
            <b-row align-v="center" align-h="center" style="margin: 10px;">
                <b-col class="col-sm-5">
                    <el-input clearable placeholder="email subject" v-model="subjectText"></el-input>
                </b-col>
            </b-row>  
            <b-row align-v="center" align-h="center" style="margin: 10px;">
                <b-col class="col-sm-5">
                    <el-input 
                        type="textarea"
                        :autosize="{ minRows: 6, maxRows: 20}"
                        placeholder="email body" 
                        v-model="bodyText"
                    >
                    </el-input>
                </b-col>
            </b-row>  
            <b-row align-v="center" align-h="center" style="margin: 10px;">
                <b-col class="col-sm-5">
                    <el-button 
                        type="primary"
                        style="margin:10px; width:90%"
                        @click="sendPressed"
                    >
                        Send
                    </el-button>
                </b-col>
            </b-row>  
        </b-col>
    </div>
</template>

<script>

export default {
    name: "Contact",
    data() {
        return {
            bodyText: '',
            subjectText: ''
        }
    },
    methods: {
        sendPressed() {

            //check if the subject or body have been left blank
            if (this.subjectText.length == 0) {
                const h = this.$createElement;
                this.$notify({
                    title: 'Oops!',
                    message: h('i', { style: 'color: #000;'}, 'Subject cannot be blank')
                });
                return
            }else if (this.bodyText.length == 0) {
                const h = this.$createElement;
                this.$notify({
                    title: 'Oops!',
                    message: h('i', { style: 'color: #000' }, 'Body cannot be blank')
                });
                return
            }

            //compose the email 
            var link = "mailto:jogasoftware07@gmail.com"
             + "?subject=" + escape(this.subjectText)
             + "&body=" + escape(this.bodyText)

            //display the email client
            window.location.href = link

            //clear out the fields 
            this.bodyText = ""
            this.subjectText = ""
        }
    }
}
</script>