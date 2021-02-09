/* Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
Stampiamo tutto a schermo, in questo momento non è importante la parte grafica.
Bonus:
Creare una select con i seguenti generi: pop, rock, metal e jazz.
In base a cosa scegliamo nella select vedremo i corrispondenti cd. */

let app = new Vue({
    el: '#app',
    data: {
        disks: []
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {
                result.data.response.forEach(element => {
                    this.disks.push(element);
                });
            });

    }
});