import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import {  registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['2007','2021'],
          datasets: [{
              label: '# annual_volume',
              data: [922,1052],
              backgroundColor: [
                  'pink',
                  'Indigo'
                 
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
