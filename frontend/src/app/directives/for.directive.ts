import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
// Este é um exemplo de diretiva extrutural
export class ForDirective implements OnInit {
  @Input('myForEm')
  public numbers: number[] = [];

  // @Input('myForUsando')
  // texto: string = '';

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }

}
