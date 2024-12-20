import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CotizadorService } from 'src/app/cotizador/services/cotizador.service';
import { IApiResponse } from 'src/app/shared/models/api-response';
import { ICalculate } from 'src/app/shared/models/calculate';
import { amountRangeValidator } from 'src/app/cotizador/validators/amount-range.validator';

@Component({
  selector: 'bg-cotizador-form',
  templateUrl: './cotizador-form.component.html',
  styleUrls: ['./cotizador-form.component.css']
})
export class CotizadorFormComponent implements OnInit {
  baseClass: string = 'cotizador-form';
  months = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: `${i + 1} Mes${i > 0 ? 'es' : ''}` }));
  ngForm!: FormGroup;
  performanceValue: string = '';
  amountToReceive: string = '';
  interestRate: string = '0.50';
  capitalizationPeriod: string = '';

  constructor(private fb: FormBuilder, private cotizadorService: CotizadorService) {
    this.crearFormCotizador();
  }

  ngOnInit(): void {
    const MONTH_DEFAULT = 1;
    this.ngForm.get('months')?.patchValue(MONTH_DEFAULT);
  }

  crearFormCotizador() {
    this.ngForm = this.fb.group({
      amount: [null, [Validators.required, amountRangeValidator(200, 100000)]],
      months: [null, Validators.required]
    })
  }

  calcular() {
    const AMOUNT = this.ngForm.get('amount')?.value;
    const MOUNTHS = this.ngForm.get('months')?.value;

    const PARAMS = {
      Amount: AMOUNT,
      Months: MOUNTHS
    }
    this.cotizadorService.getSavingsQuoter(PARAMS).subscribe((response: IApiResponse<ICalculate>) => {
      this.capitalizationPeriod = response.data.capitalizationPeriod;
      this.amountToReceive = response.data.amountToReceive.toFixed(2).toString();
      this.performanceValue = response.data.performanceValue.toFixed(2).toString();
    })
  }

}
