/* Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
Stampiamo tutto a schermo, in questo momento non è importante la parte grafica.
Bonus:
Creare una select con i seguenti generi: pop, rock, metal e jazz.
In base a cosa scegliamo nella select vedremo i corrispondenti cd. */

let app = new Vue({
    el: '#app',
    data: {
        disks: [],
        genres: ['All'],
        genSelection: 'All'
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {

                //Estrapolo elementi da API
                result.data.response.forEach(element => {

                    // Pusho i vari elementi dell'API nell'apposito array creato nel data
                    this.disks.push(element);

                    //Pusho i diversi generi musicali, senza ripetizioni
                    if (!this.genres.includes(element.genre)) {
                        this.genres.push(element.genre);
                    }
                });

                this.disks.map(element => {
                    element.visible = true
                });
            });

    },
    methods: {
        filterGen() {
            
            if (this.genSelection !== this.genres[0]) {
                this.disks.forEach(element => {
                    if (element.genre.toLowerCase() === this.genSelection.toLowerCase()) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            } else {
                this.disks.forEach(element => {
                    element.visible = true;
                });
            }

        }
    }
});