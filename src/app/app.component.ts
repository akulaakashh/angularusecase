import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from './table.service';
import { Chart } from 'chart.js';


export interface UserData {
  id: string;
  store_id: string;
  data_year: any;
  annual_lsv: any;
  annual_volume: any;
  total_duration: any;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'store_id', 'data_year', 'annual_lsv', 'annual_volume', 'total_duration'];
  dataSource!: MatTableDataSource<UserData>;
  posts: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  id: any;
  store_id: any;
  data_year: any;
  annual_lsv: any;
  annual_volume: any;
  total_duration: any;
  chart: any = []

  constructor(private service: TableService) {
    this.service.getData().subscribe((data) => {
      console.log(data);
      this.posts = data;
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.posts);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // console.log(this.posts);
    // console.log('users', users);
  }

  ngOnInit(){
    this.service.getData().toPromise().then((res: any) => {
      this.id =res
      this.annual_volume = this.id.data.coins.map((coins: any) => coins.price);
      this.annual_lsv = this.id.data.coins.map((coins: any) => coins.name);
      console.log(this.id)
    })

    const myChart = new Chart("canvas", {
      type: 'bar',
      data: {
          labels: this.id,
          datasets: [{
              label: '# annual_volume',
              data: this.annual_volume,
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    store_id: name,
    data_year : name,
    annual_lsv : name,
    annual_volume : name,
    total_duration : name
  };
}
