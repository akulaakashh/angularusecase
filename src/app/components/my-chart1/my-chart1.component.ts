import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import {  registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-my-chart1',
  templateUrl: './my-chart1.component.html',
  styleUrls: ['./my-chart1.component.css']
})
export class MyChart1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart("myChart1", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue',],
          datasets: [{
              label: 'annual_lsv',
              data: [27893.83, 31382.49],
              backgroundColor: [
                  ' yellow',
                  'light blue',
                  
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
