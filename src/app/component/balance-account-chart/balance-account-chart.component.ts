import {Component, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {TransactionService} from '../service/transaction.service';
import {BaseChartDirective} from 'ng2-charts';
import {ChartService} from '../service/chart.service';

@Component({
  selector: 'app-balance-account-chart',
  templateUrl: './balance-account-chart.component.html',
  styleUrls: ['./balance-account-chart.component.css']
})
export class BalanceAccountChartComponent implements OnInit {

  @ViewChild('baseChart')
  public chart: BaseChartDirective;

  MONTHS: string[] = ['Styczeń', 'Luty', 'Marzec', 'Kwiecien', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpien', 'Wrzesien', 'Pazdziernik', 'Listopad', 'Grudzien'];
  public barChartType = 'bar';
  public barChartLegend = true;
  private errorMessage: '';
  public isReadyChart = false;
  private refresh = false;
  incomingBalanceData: any[];


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 200
        }
      }]
    }
  };

  public barChartData = [
    {data: [], label: 'Wydatki'},
    {data: [], label: 'Oszczednosci'}
  ];

  public constructor(private transactionService: TransactionService,
                     private chartService: ChartService) {
    this.getMonthIncomingBalance();
    this.getMonthSpendingBalance();
    this.isReadyChart = true;
  }

  ngOnInit() {
    this.chartService.refresh.subscribe(refresh => {
      this.refresh = refresh;
      this.refreshChartData();
    });
  }

  public popualteChartDataSet(dataToPresent: any[], index: number): void {
    let data: number[] = [];
    console.log(dataToPresent.length)
    for (var i = 0; i < dataToPresent.length; i++) {
      data.push(dataToPresent[i]);
    }
    // FIX for for Angular to recognize the change in the datase it has to change the dataset variable directly,so one way around it, is to clone the data, change it and then assign it;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[index].data = data;
    console.log(data)
    this.barChartData = clone;
  }
  public getMonthIncomingBalance(): void {
    this.transactionService.getMonthIncomingBalance()
      .subscribe((data) => { this.incomingBalanceData = data;
        this.popualteChartDataSet(data, 0);
      });
  }
  public getMonthSpendingBalance(): void {
    this.transactionService.getMonthSpendingBalance()
      .subscribe((data) => {
        this.popualteChartDataSet(data, 1);
      });
  }

  public refreshChartData(): void {
    if (this.refresh) {
      this.getMonthIncomingBalance();
      this.getMonthSpendingBalance();
    }
  }
}
