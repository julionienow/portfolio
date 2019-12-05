import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  ngOnInit() {
    alert('To dos\n- Loader\n- Particles\n- Lugares que trabalhei com timeline com parallax\n- Projetos que ja desenvolvi\n- Animações de compoentes de entrada e saida com GSAP e botoes com css\n- Integração com redes socaiis?\n - Referencias layout (falar com rambo)\n - http://www.sharpeart.com/designer/\n - https://startbootstrap.com/template-categories/all/\n - https://aviebrantz.com.br/projects\n- Deploy automatizado que vini indicou now serverless application\n- Angular universal SEO\n - Colocar favicon\n - Fazer checklist de tips de acessibilidade, semantica e seo\n - Usar tags html5 main, nav, header, footer');
  }
}
