import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "../produto.service";
import { Produto } from "../produtos";

@Component({
  selector: "app-lista-produto",
  templateUrl: "./lista-produto.component.html",
})
export class ListaProdutoComponent implements OnInit {
  constructor(private produtoservice: ProdutoService) {}

  public produtos: Produto[];

  ngOnInit() {
    this.produtoservice.obterProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
        console.log(produtos);
      },
      (error) => console.log(error)
    );
  }
}
