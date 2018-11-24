import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
    // styleUrls: ['./app.component.css']
})
export class HeaderComponent {
    // uing routing there is no need for this code 
    //  @Output() featureSelected = new EventEmitter<string>()
    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);

    // }
    constructor(private dataStorageService: DataStorageService,private authService:AuthService) { }
    onSaveData() {
        this.dataStorageService.storeRecipe().subscribe(
            (response: Response) => {
                console.log(response);
            }
        )

    }
    getFetchData(){
        this.dataStorageService.getRecipes();
    }
    onLogOut(){
        this.authService.logOut();
    }

}