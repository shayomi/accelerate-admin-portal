import { Component } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

interface spark3 {
  options?: ApexOptions;
  width?: number;
  height?: string | number;
  series?: ApexOptions['series'];
  [key: string]: any;
  label?: XAxisAnnotations;
  color?: string | string[] | (string & string[]) | undefined;
  endingShape?: string;
  enabled?: boolean;
}

const series = {
  monthDataSeries1: {
    prices: [
      8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85,
      8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25,
      8600.65, 8881.1, 9340.85,
    ],
    dates: [
      '13 Nov 2017',
      '14 Nov 2017',
      '15 Nov 2017',
      '16 Nov 2017',
      '17 Nov 2017',
      '20 Nov 2017',
      '21 Nov 2017',
      '22 Nov 2017',
      '23 Nov 2017',
      '24 Nov 2017',
      '27 Nov 2017',
      '28 Nov 2017',
      '29 Nov 2017',
      '30 Nov 2017',
      '01 Dec 2017',
      '04 Dec 2017',
      '05 Dec 2017',
      '06 Dec 2017',
      '07 Dec 2017',
      '08 Dec 2017',
    ],
  },
  monthDataSeries2: {
    prices: [
      8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3,
      8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9040.85, 8340.7, 8165.5,
      8122.9, 8107.85, 8128.0,
    ],
    dates: [
      '13 Nov 2017',
      '14 Nov 2017',
      '15 Nov 2017',
      '16 Nov 2017',
      '17 Nov 2017',
      '20 Nov 2017',
      '21 Nov 2017',
      '22 Nov 2017',
      '23 Nov 2017',
      '24 Nov 2017',
      '27 Nov 2017',
      '28 Nov 2017',
      '29 Nov 2017',
      '30 Nov 2017',
      '01 Dec 2017',
      '04 Dec 2017',
      '05 Dec 2017',
      '06 Dec 2017',
      '07 Dec 2017',
      '08 Dec 2017',
    ],
  },
  monthDataSeries3: {
    prices: [
      7114.25, 7126.6, 7116.95, 7203.7, 7233.75, 7451.0, 7381.15, 7348.95,
      7347.75, 7311.25, 7266.4, 7253.25, 7215.45, 7266.35, 7315.25, 7237.2,
      7191.4, 7238.95, 7222.6, 7217.9, 7359.3, 7371.55, 7371.15, 7469.2,
      7429.25, 7434.65, 7451.1, 7475.25, 7566.25, 7556.8, 7525.55, 7555.45,
      7560.9, 7490.7, 7527.6, 7551.9, 7514.85, 7577.95, 7592.3, 7621.95,
      7707.95, 7859.1, 7815.7, 7739.0, 7778.7, 7839.45, 7756.45, 7669.2,
      7580.45, 7452.85, 7617.25, 7701.6, 7606.8, 7620.05, 7513.85, 7498.45,
      7575.45, 7601.95, 7589.1, 7525.85, 7569.5, 7702.5, 7812.7, 7803.75,
      7816.3, 7851.15, 7912.2, 7972.8, 8145.0, 8161.1, 8121.05, 8071.25, 8088.2,
      8154.45, 8148.3, 8122.05, 8132.65, 8074.55, 7952.8, 7885.55, 7733.9,
      7897.15, 7973.15, 7888.5, 7842.8, 7838.4, 7909.85, 7892.75, 7897.75,
      7820.05, 7904.4, 7872.2, 7847.5, 7849.55, 7789.6, 7736.35, 7819.4,
      7875.35, 7871.8, 8076.5, 8114.8, 8193.55, 8217.1, 8235.05, 8215.3, 8216.4,
      8301.55, 8235.25, 8229.75, 8201.95, 8164.95, 8107.85, 8128.0, 8122.9,
      8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2,
    ],
    dates: [
      '02 Jun 2017',
      '05 Jun 2017',
      '06 Jun 2017',
      '07 Jun 2017',
      '08 Jun 2017',
      '09 Jun 2017',
      '12 Jun 2017',
      '13 Jun 2017',
      '14 Jun 2017',
      '15 Jun 2017',
      '16 Jun 2017',
      '19 Jun 2017',
      '20 Jun 2017',
      '21 Jun 2017',
      '22 Jun 2017',
      '23 Jun 2017',
      '27 Jun 2017',
      '28 Jun 2017',
      '29 Jun 2017',
      '30 Jun 2017',
      '03 Jul 2017',
      '04 Jul 2017',
      '05 Jul 2017',
      '06 Jul 2017',
      '07 Jul 2017',
      '10 Jul 2017',
      '11 Jul 2017',
      '12 Jul 2017',
      '13 Jul 2017',
      '14 Jul 2017',
      '17 Jul 2017',
      '18 Jul 2017',
      '19 Jul 2017',
      '20 Jul 2017',
      '21 Jul 2017',
      '24 Jul 2017',
      '25 Jul 2017',
      '26 Jul 2017',
      '27 Jul 2017',
      '28 Jul 2017',
      '31 Jul 2017',
      '01 Aug 2017',
      '02 Aug 2017',
      '03 Aug 2017',
      '04 Aug 2017',
      '07 Aug 2017',
      '08 Aug 2017',
      '09 Aug 2017',
      '10 Aug 2017',
      '11 Aug 2017',
      '14 Aug 2017',
      '16 Aug 2017',
      '17 Aug 2017',
      '18 Aug 2017',
      '21 Aug 2017',
      '22 Aug 2017',
      '23 Aug 2017',
      '24 Aug 2017',
      '28 Aug 2017',
      '29 Aug 2017',
      '30 Aug 2017',
      '31 Aug 2017',
      '01 Sep 2017',
      '04 Sep 2017',
      '05 Sep 2017',
      '06 Sep 2017',
      '07 Sep 2017',
      '08 Sep 2017',
      '11 Sep 2017',
      '12 Sep 2017',
      '13 Sep 2017',
      '14 Sep 2017',
      '15 Sep 2017',
      '18 Sep 2017',
      '19 Sep 2017',
      '20 Sep 2017',
      '21 Sep 2017',
      '22 Sep 2017',
      '25 Sep 2017',
      '26 Sep 2017',
      '27 Sep 2017',
      '28 Sep 2017',
      '29 Sep 2017',
      '03 Oct 2017',
      '04 Oct 2017',
      '05 Oct 2017',
      '06 Oct 2017',
      '09 Oct 2017',
      '10 Oct 2017',
      '11 Oct 2017',
      '12 Oct 2017',
      '13 Oct 2017',
      '16 Oct 2017',
      '17 Oct 2017',
      '18 Oct 2017',
      '19 Oct 2017',
      '23 Oct 2017',
      '24 Oct 2017',
      '25 Oct 2017',
      '26 Oct 2017',
      '27 Oct 2017',
      '30 Oct 2017',
      '31 Oct 2017',
      '01 Nov 2017',
      '02 Nov 2017',
      '03 Nov 2017',
      '06 Nov 2017',
      '07 Nov 2017',
      '08 Nov 2017',
      '09 Nov 2017',
      '10 Nov 2017',
      '13 Nov 2017',
      '14 Nov 2017',
      '15 Nov 2017',
      '16 Nov 2017',
      '17 Nov 2017',
      '20 Nov 2017',
      '21 Nov 2017',
      '22 Nov 2017',
      '23 Nov 2017',
      '24 Nov 2017',
      '27 Nov 2017',
      '28 Nov 2017',
    ],
  },
};
export class Basicarea extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: 'STOCK ABC',
          data: series.monthDataSeries1.prices,
        },
      ],
      options: {
        chart: {
          type: 'area',
          height: 320,
          zoom: {
            enabled: false,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left',
        },
        grid: {
          borderColor: '#f2f5f7',
        },
        labels: series.monthDataSeries1.dates,
        title: {
          text: 'Fundamental Analysis of Stocks',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097',
          },
        },
        colors: ['#845adf'],
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: '#8c9097',
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        yaxis: {
          opposite: true,
          labels: {
            show: true,
            style: {
              colors: '#8c9097',
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        legend: {
          horizontalAlign: 'left',
        },
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="area"
        height={300}
      />
    );
  }
}

//spiline

export class Spiline extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        chart: {
          height: 320,
          type: 'area',
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        colors: ['#845adf', '#23b7e5'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        grid: {
          borderColor: '#f2f5f7',
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z',
          ],
          labels: {
            show: true,
            style: {
              colors: '#8c9097',
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: '#8c9097',
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="area"
        height={300}
      />
    );
  }
}

//negative
export class Negative extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: 'north',
          data: [
            {
              x: 1996,
              y: 322,
            },
            {
              x: 1997,
              y: 324,
            },
            {
              x: 1998,
              y: 329,
            },
            {
              x: 1999,
              y: 342,
            },
            {
              x: 2000,
              y: 348,
            },
            {
              x: 2001,
              y: 334,
            },
            {
              x: 2002,
              y: 325,
            },
            {
              x: 2003,
              y: 316,
            },
            {
              x: 2004,
              y: 318,
            },
            {
              x: 2005,
              y: 330,
            },
            {
              x: 2006,
              y: 355,
            },
            {
              x: 2007,
              y: 366,
            },
            {
              x: 2008,
              y: 337,
            },
            {
              x: 2009,
              y: 352,
            },
            {
              x: 2010,
              y: 377,
            },
            {
              x: 2011,
              y: 383,
            },
            {
              x: 2012,
              y: 344,
            },
            {
              x: 2013,
              y: 366,
            },
            {
              x: 2014,
              y: 389,
            },
            {
              x: 2015,
              y: 334,
            },
          ],
        },
        {
          name: 'south',
          data: [
            {
              x: 1996,
              y: 162,
            },
            {
              x: 1997,
              y: 90,
            },
            {
              x: 1998,
              y: 50,
            },
            {
              x: 1999,
              y: 77,
            },
            {
              x: 2000,
              y: 35,
            },
            {
              x: 2001,
              y: -45,
            },
            {
              x: 2002,
              y: -88,
            },
            {
              x: 2003,
              y: -120,
            },
            {
              x: 2004,
              y: -156,
            },
            {
              x: 2005,
              y: -123,
            },
            {
              x: 2006,
              y: -88,
            },
            {
              x: 2007,
              y: -66,
            },
            {
              x: 2008,
              y: -45,
            },
            {
              x: 2009,
              y: -29,
            },
            {
              x: 2010,
              y: -45,
            },
            {
              x: 2011,
              y: -88,
            },
            {
              x: 2012,
              y: -132,
            },
            {
              x: 2013,
              y: -146,
            },
            {
              x: 2014,
              y: -169,
            },
            {
              x: 2015,
              y: -184,
            },
          ],
        },
      ],
      options: {
        chart: {
          type: 'area',
          height: 355,
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },

        title: {
          text: 'Area with Negative Values',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097',
          },
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: true,
            style: {
              colors: '#8c9097',
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        yaxis: {
          tickAmount: 4,
          floating: false,

          labels: {
            style: {
              colors: '#8c9097',
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
            offsetY: -7,
            offsetX: 0,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        colors: ['#845adf', '#23b7e5'],
        fill: {
          opacity: 0.5,
        },
        tooltip: {
          x: {
            format: 'yyyy',
          },
          fixed: {
            enabled: false,
            position: 'topRight',
          },
        },
        grid: {
          borderColor: '#f2f5f7',
          yaxis: {
            lines: {
              offsetX: -30,
            },
          },
          padding: {
            left: 20,
          },
        },
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="area"
        height={300}
      />
    );
  }
}

//github

const githubdata = {
  series: [
    {
      x: 1352592000000,
      a: 306,
      d: 33,
      y: 13,
    },
    {
      x: 1353196800000,
      a: 77,
      d: 41,
      y: 11,
    },
    {
      x: 1353801600000,
      a: 97,
      d: 52,
      y: 13,
    },
    {
      x: 1354406400000,
      a: 349,
      d: 231,
      y: 27,
    },
    {
      x: 1355011200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1355616000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1356220800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1356825600000,
      a: 93,
      d: 16,
      y: 12,
    },
    {
      x: 1357430400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1358035200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1358640000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1359244800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1359849600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1360454400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1361059200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1361664000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1362268800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1362873600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1363478400000,
      a: 47,
      d: 20,
      y: 6,
    },
    {
      x: 1364083200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1364688000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1365292800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1365897600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1366502400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1367107200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1367712000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1368316800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1368921600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1369526400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1370131200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1370736000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1371340800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1371945600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1372550400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1373155200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1373760000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1374364800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1374969600000,
      a: 22,
      d: 16,
      y: 9,
    },
    {
      x: 1375574400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1376179200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1376784000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1377388800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1377993600000,
      a: 104,
      d: 79,
      y: 12,
    },
    {
      x: 1378598400000,
      a: 60,
      d: 17,
      y: 9,
    },
    {
      x: 1379203200000,
      a: 27,
      d: 36,
      y: 3,
    },
    {
      x: 1379808000000,
      a: 283,
      d: 199,
      y: 20,
    },
    {
      x: 1380412800000,
      a: 1,
      d: 1,
      y: 1,
    },
    {
      x: 1381017600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1381622400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1382227200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1382832000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1383436800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1384041600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1384646400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1385251200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1385856000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1386460800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1387065600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1387670400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1388275200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1388880000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1389484800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1390089600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1390694400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1391299200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1391904000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1392508800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1393113600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1393718400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1394323200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1394928000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1395532800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1396137600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1396742400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1397347200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1397952000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1398556800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1399161600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1399766400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1400371200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1400976000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1401580800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1402185600000,
      a: 115,
      d: 38,
      y: 11,
    },
    {
      x: 1402790400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1403395200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1404000000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1404604800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1405209600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1405814400000,
      a: 598,
      d: 209,
      y: 34,
    },
    {
      x: 1406419200000,
      a: 195,
      d: 119,
      y: 18,
    },
    {
      x: 1407024000000,
      a: 174,
      d: 54,
      y: 13,
    },
    {
      x: 1407628800000,
      a: 1,
      d: 1,
      y: 1,
    },
    {
      x: 1408233600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1408838400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1409443200000,
      a: 2,
      d: 2,
      y: 1,
    },
    {
      x: 1410048000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1410652800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1411257600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1411862400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1412467200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1413072000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1413676800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1414281600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1414886400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1415491200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1416096000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1416700800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1417305600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1417910400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1418515200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1419120000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1419724800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1420329600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1420934400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1421539200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1422144000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1422748800000,
      a: 46,
      d: 43,
      y: 8,
    },
    {
      x: 1423353600000,
      a: 20,
      d: 4,
      y: 1,
    },
    {
      x: 1423958400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1424563200000,
      a: 18,
      d: 11,
      y: 4,
    },
    {
      x: 1425168000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1425772800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1426377600000,
      a: 54,
      d: 63,
      y: 4,
    },
    {
      x: 1426982400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1427587200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1428192000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1428796800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1429401600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1430006400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1430611200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1431216000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1431820800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1432425600000,
      a: 10,
      d: 11,
      y: 1,
    },
    {
      x: 1433030400000,
      a: 296,
      d: 172,
      y: 18,
    },
    {
      x: 1433635200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1434240000000,
      a: 10,
      d: 13,
      y: 2,
    },
    {
      x: 1434844800000,
      a: 20,
      d: 16,
      y: 3,
    },
    {
      x: 1435449600000,
      a: 24,
      d: 10,
      y: 3,
    },
    {
      x: 1436054400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1436659200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1437264000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1437868800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1438473600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1439078400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1439683200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1440288000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1440892800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1441497600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1442102400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1442707200000,
      a: 275,
      d: 129,
      y: 12,
    },
    {
      x: 1443312000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1443916800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1444521600000,
      a: 1213,
      d: 837,
      y: 5,
    },
    {
      x: 1445126400000,
      a: 299,
      d: 54,
      y: 3,
    },
    {
      x: 1445731200000,
      a: 30,
      d: 33,
      y: 1,
    },
    {
      x: 1446336000000,
      a: 202,
      d: 185,
      y: 18,
    },
    {
      x: 1446940800000,
      a: 554,
      d: 292,
      y: 39,
    },
    {
      x: 1447545600000,
      a: 9030,
      d: 44,
      y: 7,
    },
    {
      x: 1448150400000,
      a: 8,
      d: 1,
      y: 1,
    },
    {
      x: 1448755200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1449360000000,
      a: 18,
      d: 12,
      y: 5,
    },
    {
      x: 1449964800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1450569600000,
      a: 4,
      d: 3,
      y: 2,
    },
    {
      x: 1451174400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1451779200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1452384000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1452988800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1453593600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1454198400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1454803200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1455408000000,
      a: 2,
      d: 2,
      y: 1,
    },
    {
      x: 1456012800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1456617600000,
      a: 32,
      d: 43,
      y: 1,
    },
    {
      x: 1457222400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1457827200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1458432000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1459036800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1459641600000,
      a: 23,
      d: 13,
      y: 3,
    },
    {
      x: 1460246400000,
      a: 421,
      d: 335,
      y: 9,
    },
    {
      x: 1460851200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1461456000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1462060800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1462665600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1463270400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1463875200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1464480000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1465084800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1465689600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1466294400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1466899200000,
      a: 6,
      d: 1,
      y: 1,
    },
    {
      x: 1467504000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1468108800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1468713600000,
      a: 886,
      d: 49,
      y: 15,
    },
    {
      x: 1469318400000,
      a: 38,
      d: 26,
      y: 4,
    },
    {
      x: 1469923200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1470528000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1471132800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1471737600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1472342400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1472947200000,
      a: 2,
      d: 2,
      y: 1,
    },
    {
      x: 1473552000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1474156800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1474761600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1475366400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1475971200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1476576000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1477180800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1477785600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1478390400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1478995200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1479600000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1480204800000,
      a: 8,
      d: 0,
      y: 1,
    },
    {
      x: 1480809600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1481414400000,
      a: 1,
      d: 1,
      y: 1,
    },
    {
      x: 1482019200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1482624000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1483228800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1483833600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1484438400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1485043200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1485648000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1486252800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1486857600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1487462400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1488067200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1488672000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1489276800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1489881600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1490486400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1491091200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1491696000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1492300800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1492905600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1493510400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1494115200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1494720000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1495324800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1495929600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1496534400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1497139200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1497744000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1498348800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1498953600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1499558400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1500163200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1500768000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1501372800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1501977600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1502582400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1503187200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1503792000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1504396800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1505001600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1505606400000,
      a: 2,
      d: 2,
      y: 2,
    },
    {
      x: 1506211200000,
      a: 49,
      d: 10,
      y: 4,
    },
    {
      x: 1506816000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1507420800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1508025600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1508630400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1509235200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1509840000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1510444800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1511049600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1511654400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1512259200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1512864000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1513468800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1514073600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1514678400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1515283200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1515888000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1516492800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1517097600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1517702400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1518307200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1518912000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1519516800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1520121600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1520726400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1521331200000,
      a: 768,
      d: 2125,
      y: 12,
    },
    {
      x: 1521936000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1522540800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1523145600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1523750400000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1524355200000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1524960000000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1525564800000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1526169600000,
      a: 0,
      d: 0,
      y: 0,
    },
    {
      x: 1526774400000,
      a: 1,
      d: 0,
      y: 1,
    },
  ],
};
export class Githubdata extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: 'commits',
          data: githubdata.series,
        },
      ],
      options: {
        chart: {
          id: 'chartyear',
          type: 'area',
          height: 160,
          background: '#F6F8FA',
          toolbar: {
            show: false,
            autoSelected: 'pan',
          },
          events: {
            mounted: function (chart) {
              const commitsEl: any = document.querySelector(
                '.cmeta span.commits',
              );
              const commits = chart.getSeriesTotalXRange(
                chart.w.globals.minX,
                chart.w.globals.maxX,
              );

              commitsEl.innerHTML = commits;
            },
            updated: function (chart) {
              const commitsEl: any = document.querySelector(
                '.cmeta span.commits',
              );
              const commits = chart.getSeriesTotalXRange(
                chart.w.globals.minX,
                chart.w.globals.maxX,
              );

              commitsEl.innerHTML = commits;
            },
          },
        },
        colors: ['#845adf'],
        stroke: {
          width: 0,
          curve: 'smooth',
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 1,
          type: 'solid',
        },
        yaxis: {
          show: false,
          tickAmount: 3,
        },
        xaxis: {
          type: 'datetime',
        },
      },

      seriesYears: [
        {
          name: 'commits',
          data: githubdata.series,
        },
      ],
      optionsYears: {
        chart: {
          height: 200,
          type: 'area',
          background: '#F6F8FA',
          toolbar: {
            autoSelected: 'selection',
          },
          brush: {
            enabled: true,
            target: 'chartyear',
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date('26 Jan 2014').getTime(),
              max: new Date('29 Mar 2015').getTime(),
            },
          },
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            },
          },
        },
        colors: ['#23b7e5'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
          curve: 'smooth',
        },
        fill: {
          opacity: 1,
          type: 'solid',
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
        },
        xaxis: {
          type: 'datetime',
        },
      },
    };
  }

  render() {
    return (
      <div id="wrapper">
        <div id="chart-months">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={130}
          />
        </div>

        <div className="github-style d-flex align-items-center">
          <div className="me-2">
            <img
              className="userimg rounded"
              src={'../../../../assets/images/faces/1.jpg'}
              data-hovercard-user-id="634573"
              alt=""
              width="38"
              height="38"
            />
          </div>
          <div className="userdetails lh-1">
            <a className="username fw-semibold fs-14">coder</a>
            <span className="cmeta block mt-1">
              <span className="commits"></span> commits
            </span>
          </div>
        </div>

        <div>
          <ReactApexChart
            options={this.state.optionsYears}
            series={this.state.seriesYears}
            type="area"
            height={140}
          />
        </div>
      </div>
    );
  }
}

//Stacked
const generateDayWiseTimeSeries = function (
  baseval: number,
  count: number,
  yrange: any,
) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = baseval;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
};
export class Stacked extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: 'South',
          data: generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 10,
              max: 60,
            },
          ),
        },
        {
          name: 'North',
          data: generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 10,
              max: 20,
            },
          ),
        },
        {
          name: 'Central',
          data: generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 10,
              max: 15,
            },
          ),
        },
      ],
      options: {
        chart: {
          type: 'area',
          height: 350,
          stacked: true,
          events: {
            selection: function (_chart, e) {
              console.log(new Date(e.xaxis.min));
            },
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        colors: ['#845adf', '#23b7e5', '#e6eaeb'],
        grid: {
          borderColor: '#f2f5f7',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.2,
            opacityTo: 0.6,
          },
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
        },
        xaxis: {
          type: 'datetime',
        },
      },
    };
  }

  render() {
    return (
      <div id="chart-months">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

// nullarea chart

export class Nullarea extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Network',
          data: [
            {
              x: 'Dec 23 2017',
              y: null,
            },
            {
              x: 'Dec 24 2017',
              y: 44,
            },
            {
              x: 'Dec 25 2017',
              y: 31,
            },
            {
              x: 'Dec 26 2017',
              y: 38,
            },
            {
              x: 'Dec 27 2017',
              y: null,
            },
            {
              x: 'Dec 28 2017',
              y: 32,
            },
            {
              x: 'Dec 29 2017',
              y: 55,
            },
            {
              x: 'Dec 30 2017',
              y: 51,
            },
            {
              x: 'Dec 31 2017',
              y: 67,
            },
            {
              x: 'Jan 01 2018',
              y: 22,
            },
            {
              x: 'Jan 02 2018',
              y: 34,
            },
            {
              x: 'Jan 03 2018',
              y: null,
            },
            {
              x: 'Jan 04 2018',
              y: null,
            },
            {
              x: 'Jan 05 2018',
              y: 11,
            },
            {
              x: 'Jan 06 2018',
              y: 4,
            },
            {
              x: 'Jan 07 2018',
              y: 15,
            },
            {
              x: 'Jan 08 2018',
              y: null,
            },
            {
              x: 'Jan 09 2018',
              y: 9,
            },
            {
              x: 'Jan 10 2018',
              y: 34,
            },
            {
              x: 'Jan 11 2018',
              y: null,
            },
            {
              x: 'Jan 12 2018',
              y: null,
            },
            {
              x: 'Jan 13 2018',
              y: 13,
            },
            {
              x: 'Jan 14 2018',
              y: null,
            },
          ],
        },
      ],
      options: {
        colors: ['#845adf'],
        chart: {
          type: 'area',
          height: 350,
          animations: {
            enabled: false,
          },
          zoom: {
            enabled: false,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        fill: {
          opacity: 0.8,
          type: 'pattern',
          pattern: {
            style: ['verticalLines', 'horizontalLines'],
            width: 5,
            height: 6,
          },
        },
        markers: {
          size: 5,
          hover: {
            size: 9,
          },
        },
        title: {
          text: 'Network Monitoring',
        },
        tooltip: {
          intersect: true,
          shared: false,
        },
        theme: {
          palette: 'palette1',
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          title: {
            text: 'Bytes Received',
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart-months">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export class Datetimexaxis extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.0],
            [1327964400000, 30.95],
            [1328050800000, 31.24],
            [1328137200000, 31.29],
            [1328223600000, 31.85],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.1],
            [1328742000000, 32.65],
            [1328828400000, 32.21],
            [1329087600000, 32.35],
            [1329174000000, 32.44],
            [1329260400000, 32.46],
            [1329346800000, 32.86],
            [1329433200000, 32.75],
            [1329778800000, 32.54],
            [1329865200000, 32.33],
            [1329951600000, 32.97],
            [1330038000000, 33.41],
            [1330297200000, 33.27],
            [1330383600000, 33.27],
            [1330470000000, 32.89],
            [1330556400000, 33.1],
            [1330642800000, 33.73],
            [1330902000000, 33.22],
            [1330988400000, 31.99],
            [1331074800000, 32.41],
            [1331161200000, 33.05],
            [1331247600000, 33.64],
            [1331506800000, 33.56],
            [1331593200000, 34.22],
            [1331679600000, 33.77],
            [1331766000000, 34.17],
            [1331852400000, 33.82],
            [1332111600000, 34.51],
            [1332198000000, 33.16],
            [1332284400000, 33.56],
            [1332370800000, 33.71],
            [1332457200000, 33.81],
            [1332712800000, 34.4],
            [1332799200000, 34.63],
            [1332885600000, 34.46],
            [1332972000000, 34.48],
            [1333058400000, 34.31],
            [1333317600000, 34.7],
            [1333404000000, 34.31],
            [1333490400000, 33.46],
            [1333576800000, 33.59],
            [1333922400000, 33.22],
            [1334008800000, 32.61],
            [1334095200000, 33.01],
            [1334181600000, 33.55],
            [1334268000000, 33.18],
            [1334527200000, 32.84],
            [1334613600000, 33.84],
            [1334700000000, 33.39],
            [1334786400000, 32.91],
            [1334872800000, 33.06],
            [1335132000000, 32.62],
            [1335218400000, 32.4],
            [1335304800000, 33.13],
            [1335391200000, 33.26],
            [1335477600000, 33.58],
            [1335736800000, 33.55],
            [1335823200000, 33.77],
            [1335909600000, 33.76],
            [1335996000000, 33.32],
            [1336082400000, 32.61],
            [1336341600000, 32.52],
            [1336428000000, 32.67],
            [1336514400000, 32.52],
            [1336600800000, 31.92],
            [1336687200000, 32.2],
            [1336946400000, 32.23],
            [1337032800000, 32.33],
            [1337119200000, 32.36],
            [1337205600000, 32.01],
            [1337292000000, 31.31],
            [1337551200000, 32.01],
            [1337637600000, 32.01],
            [1337724000000, 32.18],
            [1337810400000, 31.54],
            [1337896800000, 31.6],
            [1338242400000, 32.05],
            [1338328800000, 31.29],
            [1338415200000, 31.05],
            [1338501600000, 29.82],
            [1338760800000, 30.31],
            [1338847200000, 30.7],
            [1338933600000, 31.69],
            [1339020000000, 31.32],
            [1339106400000, 31.65],
            [1339365600000, 31.13],
            [1339452000000, 31.77],
            [1339538400000, 31.79],
            [1339624800000, 31.67],
            [1339711200000, 32.39],
            [1339970400000, 32.63],
            [1340056800000, 32.89],
            [1340143200000, 31.99],
            [1340229600000, 31.23],
            [1340316000000, 31.57],
            [1340575200000, 30.84],
            [1340661600000, 31.07],
            [1340748000000, 31.41],
            [1340834400000, 31.17],
            [1340920800000, 32.37],
            [1341180000000, 32.19],
            [1341266400000, 32.51],
            [1341439200000, 32.53],
            [1341525600000, 31.37],
            [1341784800000, 30.43],
            [1341871200000, 30.44],
            [1341957600000, 30.2],
            [1342044000000, 30.14],
            [1342130400000, 30.65],
            [1342389600000, 30.4],
            [1342476000000, 30.65],
            [1342562400000, 31.43],
            [1342648800000, 31.89],
            [1342735200000, 31.38],
            [1342994400000, 30.64],
            [1343080800000, 30.02],
            [1343167200000, 30.33],
            [1343253600000, 30.95],
            [1343340000000, 31.89],
            [1343599200000, 31.01],
            [1343685600000, 30.88],
            [1343772000000, 30.69],
            [1343858400000, 30.58],
            [1343944800000, 32.02],
            [1344204000000, 32.14],
            [1344290400000, 32.37],
            [1344376800000, 32.51],
            [1344463200000, 32.65],
            [1344549600000, 32.64],
            [1344808800000, 32.27],
            [1344895200000, 32.1],
            [1344981600000, 32.91],
            [1345068000000, 33.65],
            [1345154400000, 33.8],
            [1345413600000, 33.92],
            [1345500000000, 33.75],
            [1345586400000, 33.84],
            [1345672800000, 33.5],
            [1345759200000, 32.26],
            [1346018400000, 32.32],
            [1346104800000, 32.06],
            [1346191200000, 31.96],
            [1346277600000, 31.46],
            [1346364000000, 31.27],
            [1346709600000, 31.43],
            [1346796000000, 32.26],
            [1346882400000, 32.79],
            [1346968800000, 32.46],
            [1347228000000, 32.13],
            [1347314400000, 32.43],
            [1347400800000, 32.42],
            [1347487200000, 32.81],
            [1347573600000, 33.34],
            [1347832800000, 33.41],
            [1347919200000, 32.57],
            [1348005600000, 33.12],
            [1348092000000, 34.53],
            [1348178400000, 33.83],
            [1348437600000, 33.41],
            [1348524000000, 32.9],
            [1348610400000, 32.53],
            [1348696800000, 32.8],
            [1348783200000, 32.44],
            [1349042400000, 32.62],
            [1349128800000, 32.57],
            [1349215200000, 32.6],
            [1349301600000, 32.68],
            [1349388000000, 32.47],
            [1349647200000, 32.23],
            [1349733600000, 31.68],
            [1349820000000, 31.51],
            [1349906400000, 31.78],
            [1349992800000, 31.94],
            [1350252000000, 32.33],
            [1350338400000, 33.24],
            [1350424800000, 33.44],
            [1350511200000, 33.48],
            [1350597600000, 33.24],
            [1350856800000, 33.49],
            [1350943200000, 33.31],
            [1351029600000, 33.36],
            [1351116000000, 33.4],
            [1351202400000, 34.01],
            [1351638000000, 34.02],
            [1351724400000, 34.36],
            [1351810800000, 34.39],
            [1352070000000, 34.24],
            [1352156400000, 34.39],
            [1352242800000, 33.47],
            [1352329200000, 32.98],
            [1352415600000, 32.9],
            [1352674800000, 32.7],
            [1352761200000, 32.54],
            [1352847600000, 32.23],
            [1352934000000, 32.64],
            [1353020400000, 32.65],
            [1353279600000, 32.92],
            [1353366000000, 32.64],
            [1353452400000, 32.84],
            [1353625200000, 33.4],
            [1353884400000, 33.3],
            [1353970800000, 33.18],
            [1354057200000, 33.88],
            [1354143600000, 34.09],
            [1354230000000, 34.61],
            [1354489200000, 34.7],
            [1354575600000, 35.3],
            [1354662000000, 35.4],
            [1354748400000, 35.14],
            [1354834800000, 35.48],
            [1355094000000, 35.75],
            [1355180400000, 35.54],
            [1355266800000, 35.96],
            [1355353200000, 35.53],
            [1355439600000, 37.56],
            [1355698800000, 37.42],
            [1355785200000, 37.49],
            [1355871600000, 38.09],
            [1355958000000, 37.87],
            [1356044400000, 37.71],
            [1356303600000, 37.53],
            [1356476400000, 37.55],
            [1356562800000, 37.3],
            [1356649200000, 36.9],
            [1356908400000, 37.68],
            [1357081200000, 38.34],
            [1357167600000, 37.75],
            [1357254000000, 38.13],
            [1357513200000, 37.94],
            [1357599600000, 38.14],
            [1357686000000, 38.66],
            [1357772400000, 38.62],
            [1357858800000, 38.09],
            [1358118000000, 38.16],
            [1358204400000, 38.15],
            [1358290800000, 37.88],
            [1358377200000, 37.73],
            [1358463600000, 37.98],
            [1358809200000, 37.95],
            [1358895600000, 38.25],
            [1358982000000, 38.1],
            [1359068400000, 38.32],
            [1359327600000, 38.24],
            [1359414000000, 38.52],
            [1359500400000, 37.94],
            [1359586800000, 37.83],
            [1359673200000, 38.34],
            [1359932400000, 38.1],
            [1360018800000, 38.51],
            [1360105200000, 38.4],
            [1360191600000, 38.07],
            [1360278000000, 39.12],
            [1360537200000, 38.64],
            [1360623600000, 38.89],
            [1360710000000, 38.81],
            [1360796400000, 38.61],
            [1360882800000, 38.63],
            [1361228400000, 38.99],
            [1361314800000, 38.77],
            [1361401200000, 38.34],
            [1361487600000, 38.55],
            [1361746800000, 38.11],
            [1361833200000, 38.59],
            [1361919600000, 39.6],
          ],
        },
      ],
      options: {
        chart: {
          id: 'area-datetime',
          type: 'area',
          height: 350,
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        colors: ['#845adf'],
        annotations: {
          yaxis: [
            {
              y: 30,
              borderColor: '#999',
              label: {
                // show: true,
                text: 'Support',
                style: {
                  color: '#fff',
                  background: '#00E396',
                },
              },
            },
          ],
          xaxis: [
            {
              x: new Date('14 Nov 2012').getTime(),
              borderColor: '#999',
              //   yAxisIndex: 0,
              label: {
                // show: true,
                text: 'Rally',
                style: {
                  color: '#fff',
                  background: '#775DD0',
                },
              },
            },
          ],
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          // style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          min: new Date('01 Mar 2012').getTime(),
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy',
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100],
          },
        },
      },

      selection: 'one_year',
    };
  }

  updateData(timeline: any) {
    this.setState({
      selection: timeline,
    });

    switch (timeline) {
      case 'one_month':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('28 Jan 2013').getTime(),
          new Date('27 Feb 2013').getTime(),
        );
        break;
      case 'six_months':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('27 Sep 2012').getTime(),
          new Date('27 Feb 2013').getTime(),
        );
        break;
      case 'one_year':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('27 Feb 2012').getTime(),
          new Date('27 Feb 2013').getTime(),
        );
        break;
      case 'ytd':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('01 Jan 2013').getTime(),
          new Date('27 Feb 2013').getTime(),
        );
        break;
      case 'all':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('23 Jan 2012').getTime(),
          new Date('27 Feb 2013').getTime(),
        );
        break;
      default:
    }
  }

  render() {
    return (
      <div id="chart">
        <div className="box-header">
          <div className="box-title">Area Chart-Datetime X-Axis Chart</div>
        </div>
        <div>
          <div id="area-datetime">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="area"
              height={320}
            />
          </div>
        </div>
      </div>
    );
  }
}
