import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  @Output() public submitted: EventEmitter<Order>
  @Input() public init!: Order;
  public form!: FormGroup;
  public states: string[];

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<Order>();
    this.states = Object.values(StateOrder);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      typePresta: [this.init.typePresta, Validators.required],
      client: [
        this.init.client,
      [Validators.required, Validators.minLength(2)],
      ],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.typePresta],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }

}
