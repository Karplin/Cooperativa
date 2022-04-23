import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.page.html',
  styleUrls: ['./prestamos.page.scss'],
})
export class PrestamosPage implements OnInit {

  public prestamos: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.prestamos = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
