const inst = Vue.createApp({
    data() {
        return {
            mostrar: null,
            anosuwu: false,
            numero: null,
            dulce: '',
            conjunto: [],

        }
    },
    methods: {
        texto:function(){
            if (this.numero !== null && this.numero !== '') {
                this.anosuwu = true;
            } else {
                this.anosuwu = false;
            }
        },
        cambiar:function(valor){
            this.mostrar = valor;
        },
        agregar:function() {
            if (this.dulce.trim() !== '') {
                this.conjunto.push(this.dulce);
                this.dulce = '';
            }
        }
    }
})
const app = inst.mount('#encuesta')