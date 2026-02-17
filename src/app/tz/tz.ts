import { Component } from '@angular/core';


@Component({
  selector: 'app-tz',
  standalone: true,  
  templateUrl: './tz.html',
  styles: [`
    div { color: blue; }
    p { font-size: 18px; }
  img {
  width: 150px;   // רוחב קבוע
  height: auto;   // שומר על פרופורציות
  border-radius: 8px; // אופציונלי, עיגול קל לפינות
  }
  `]
})
export class TZ {
  isIsraeli: boolean = true;
  firstName: string = 'איילה';
  lastName: string = 'אהרוני';
  numberOfChildren: number = 2;
  idNumber: string = '123456789';
  birthDate: Date = new Date(2006, 4, 2006); 
  imageName: string = '20250805_154927.jpg'; 
  hideImage: boolean = false;

  getAge(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const m = today.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }
    return age;
  }

  toggleImage() {
    this.hideImage = !this.hideImage;
  }
}