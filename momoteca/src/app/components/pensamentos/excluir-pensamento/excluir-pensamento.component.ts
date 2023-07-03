import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento:Pensamento = {
    id: 0,
    conteudo:'',
    autoria: '',
    modelo: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PensamentoService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>{
      this.pensamento = pensamento
    })


  }
  excluirPensamento(){
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(()=>{
        this.router.navigate(['/listarPensamentos']);
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamentos']);
  }
}


