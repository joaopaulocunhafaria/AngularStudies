Este projeto utiliza um sistema de annotation @Input(), que permite
com  eu atribua valor a uma propriedade de uma classe/componente de outro
lugar/componente. Posso tambem usar um parametro para a annotation do tipo @input('nome_alternativo'), que assimila um nome altenativo pelo qual o componente vai ser recomhecido de 
fora do seu escopo
==> Father atribui ao child   
    **IMPLEMENTACAO**
    childComponent{
         @Input() element:{type:string,name:string,content:string}
    }

    fatherComponent{
       serverElement:{}     
    } 
    fatherComponent.html{
      <app-child  [element]="serversElement"></app-child>
    }

similar a esta propriedade tambem faz o uso da annotation
@Input(), que por sua vez permite que eu passe uma informacao de uma classe child para uma classe father. Neste projeto faz-se o uso do EventEmiter<{objeto a ser emitido}>()
,chamando a funcao EventEmmiter.emit({objeto a ser emitido}), assim em outro componente eu posso observar esta variavel e sempre que ela emitir algo poderei realizar uma fincionalidade na classe father. 
==>child fala com o father 

   **IMPLEMENTACAO**
   childComponent{
     @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
        
        addServer() {
        this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
        });
      }
   }

   childComponent.html{
     <button class="btn btn-primary" (click)="addServer()">Add Server</button>
   }

   fatherComponent{
    onAddServer{
        aicionaServer
    }
   }

   fatherComponent.html{
    <app-child (serverCreated)="onAddServer()"></app-child>
   }




__Importante__
os dois metodos permitem mudar os nomes de como os componentes vao ser conhecidos do lado de fora do seu escopo
@Input("outroNome")
@Output("outroNome")

______________**______________

Outra funcionalidade implementada neste projeto e o uso de Local References, fazendo assim o uso do  two-way biding nao tao necessario em alguns casos, pois para um input por exemplo nao se faz mais necessario fazer este tipo de implementacao  [(ngModel)]="variavelDoTS", um alternativa para isso e, por exemplo no caso de um input eu associar um valor aquele input
como por exemplo #meuInput , e passar ele como parametro de uma funcao dentro do proprio html, dessa forma por exemplo
 (click)="minhaFuncao(meuInput)", e assim dentro do escopo da funcao eu posso acessar o valor do input utilizando meuInput.value, e outras diferentes propriedades da tag. Ou tambem na classe typescript podemos usar a anotacao 
 "@ViewChild("meuInput", {static:true}) meuInput:ElementRef" para ter acesso a este elemento sem precissar passar como parametro para uma funcao, porem ao acessar o conteudo deste elemento deve usar o da seguinte forma meuInput.nativeElement.value .