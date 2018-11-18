import {
  Component, OnInit, ElementRef, ViewChild, EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild("form") slForm: NgForm
  subscription: Subscription;
  editMode = false;
  editedNumber: number;
  editedItem: Ingredient;



  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startEditting.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedNumber = index;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });

      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    // console.log("-MM",this.form);

    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
     this.slService.updateIngredient(this.editedNumber,newIngredient);
    }
    else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode=false;
    form.reset();
  }
  onClrear(){
    this.slForm.reset();
    this.editMode=false;
  }
 

}
