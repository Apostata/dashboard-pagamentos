import Pages from './pages';

import '../css/home.scss';
import '../css/highcharts/highcharts.scss';
import '../hbs/home.hbs';

import materialize from 'materialize-css';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class Home extends Pages{
    constructor(){
        super();
    }
}

let chartOptions1 = {
    chart: {
        renderTo: 'chart1',
    },
    
    xAxis: {
        title: {
            text: 'Dias do mês',
            labels: {
                style: {
                    fontSize: '16px'
                }
            }
        },
        type: 'datetime',
        dateTimeLabelFormats: {
            day: "%e/%b/%Y"
        }
    },
    yAxis: {
        title: {
            text: 'Valor (R$)'
        },
        categories: ["0,00", "1,00", "2,00", "3,00", "4,00", "5,00", "6,00", "7,00", "8,00", "9,00", "10,00"],
        labels: {
            style: {
                fontSize: '16px'
            }
        }
    },
    tooltip: {
        pointFormat: "R${point.y:.2f}"
    },
    series: [{
        type: "line",
        name: 'Visa',
        data: [[1522540800000, 10.00], [1522627200000, 4.00], [1522800000000, 4.00], [1522886400000,8.00], [1522972800000,1.00], [1523145600000, 3.00],[1523232000000, 9.00], [1523318400000, 2.00]]
    }, {
        type: "line",
        name: 'Master',
        data: [[1522540800000,4.00], [1522627200000, 10.00], [1522713600000, 8.00], [1522800000000,8.00], [1522886400000,4.00], [1522972800000, 8.00],[1522972800000, 6.00], [1523059200000, 3.00]]
    },
    {
        type: "line",
        name: 'Elo',
        data: [[1522627200000,9.00], [1522713600000, 8.00], [1522800000000, 6.00], [1522972800000,2.00], [1523059200000,1.00], [1523145600000, 2.00],[1523318400000, 5.00], [1523404800000, 2.00]]
    }]
};

let chartOptions2 = {
    chart: {
        renderTo: 'chart2',
    },
    
    xAxis: {
        title: {
            text: 'Dias do mês',
            labels: {
                style: {
                    fontSize: '16px'
                }
            }
        },
        type: 'datetime',
        dateTimeLabelFormats: {
            day: "%e/%b/%Y"
        }
    },
    yAxis: {
        title: {
            text: 'Valor (R$)'
        },
        categories: ["0,00", "1,00", "2,00", "3,00", "4,00", "5,00", "6,00", "7,00", "8,00", "9,00", "10,00"],
        labels: {
            style: {
                fontSize: '16px'
            }
        }
    },
    tooltip: {
        pointFormat: "R${point.y:.2f}"
    },
    series: [{
        type: "line",
        name: 'Visa',
        data: [[1522540800000, 10.00], [1522627200000, 4.00], [1522800000000, 4.00], [1522886400000,8.00], [1522972800000,1.00], [1523145600000, 3.00],[1523232000000, 9.00], [1523318400000, 2.00]]
    }, {
        type: "line",
        name: 'Master',
        data: [[1522540800000,4.00], [1522627200000, 10.00], [1522713600000, 8.00], [1522800000000,8.00], [1522886400000,4.00], [1522972800000, 8.00],[1522972800000, 6.00], [1523059200000, 3.00]]
    },
    {
        type: "line",
        name: 'Elo',
        data: [[1522627200000,9.00], [1522713600000, 8.00], [1522800000000, 6.00], [1522972800000,2.00], [1523059200000,1.00], [1523145600000, 2.00],[1523318400000, 5.00], [1523404800000, 2.00]]
    }]
};
var home = new Home();
home.initilize();
home.loadChart(chartOptions1);
home.loadChart(chartOptions2);





    




