import { Directive, Input, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appGenderStyle]'
})

export class GenderStyleDirective implements OnInit {
    @Input('appGenderStyle') gender: string;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.applyStyle();
    }

    applyStyle(): void {
        let backgroundColor: string;
        let textColor: string;

        if(this.gender==='Male'){
            backgroundColor = 'lightblue';
            textColor = 'darkblue';
        }
        else{
            backgroundColor = 'pink';
            textColor = 'black';
        }

        this.renderer.setStyle(this.el.nativeElement, 'background-color', backgroundColor);
        this.renderer.setStyle(this.el.nativeElement, 'color', textColor);
    }
}
