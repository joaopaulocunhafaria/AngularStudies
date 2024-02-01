import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {

  name: string;
  editMode: boolean = false;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        this.name = params["name"];
        this.editMode = params["name"] != null;
      }
    )
  }



}
