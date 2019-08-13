<template>  
    <b-container style="alignContent:center; justifyContent:center; marginTop:40px">
        <b-row style="alignItems:center; justifyContent:center; margin: 10px;">
            <b-col class="col-md-1"/>
            <b-col class="col-md-5">
                <h3>Email Me</h3>
            </b-col>
        </b-row> 
        <b-row style="alignItems:center; justifyContent:center; margin: 10px;">
            <b-col class="col-md-1" style="textAlign:center; fontSize:12px">
                Subject:
            </b-col>
            <b-col class="col-md-5">
                <el-input clearable placeholder="email subject" v-model="subjectText"></el-input>
            </b-col>
        </b-row>  
        <b-row style="alignItems:center; justifyContent:center; margin: 10px;">
            <b-col class="col-md-1" style="textAlign:center; fontSize:12px">
                Body:
            </b-col>
            <b-col class="col-md-5">
                <el-input 
                    type="textarea"
                    :autosize="{ minRows: 6, maxRows: 20}"
                    placeholder="email body" 
                    v-model="bodyText"
                >
                </el-input>
            </b-col>
        </b-row>  
        <b-row style="alignItems:center; justifyContent:center; margin: 10px;">
            <b-col class="col-md-1"/>
            <b-col class="col-md-5">
                <el-button 
                    type="primary"
                    style="margin:10px; width:90%"
                    @click="sendPressed"
                >
                    Send
                </el-button>
            </b-col>
        </b-row>  
    </b-container>
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
                    message: h('i', { style: 'color: #ff7ab2;'}, 'Subject cannot be blank')
                });
                return
            }else if (this.bodyText.length == 0) {
                const h = this.$createElement;
                this.$notify({
                    title: 'Oops!',
                    message: h('i', { style: 'color: #ff7ab2' }, 'Body cannot be blank')
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