import { Component, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Id } from './id';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'id-sk-gen';

  model = new Id("Specimen", "Vzorka", "SVK", "F","EA000000", "11.11.1911", "Bratislava", "111111/111", "01.03.2025", "01.03.2015",  "Bratislava", "Zizkova 12", "", "Povodna", "Banska Bystrica", "Mgr.", "IDSVKEA000000<81111111111<<<<<", "1111112F2503011SVK<<<<<<<<<<<6", "SPECIMEN<<VZORKA<<<<<<<<<<<<<<")

  submitted = false;

  onSubmit() { this.submitted = true; }

  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = "../assets/face.png";
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      //this.cd.markForCheck();        
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    // this.registrationForm.patchValue({
    //   file: [null]
    // });
  }
}
