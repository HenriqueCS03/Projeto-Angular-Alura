import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private router: Router,
    private service: PensamentoService
    ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criarPensamento(this.pensamento).subscribe(()=>{
      this.router.navigate(["/listarPensamentos"]);
    });
  }

  cancelar(){
    this.router.navigate(["/listarPensamentos"]);
  }
}
