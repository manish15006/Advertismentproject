import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormData } from '../form-component/form.model';
import { AdServicesService } from '../ad-services.service';
@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  formValue!: FormGroup;
  formModelObj: FormData = new FormData;
  allAdServicesService:any;
  constructor(private router: Router, private formBuilder: FormBuilder, private AdServices: AdServicesService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      title: [''],
      name: [''],
      category: [''],
      description: ['']
    })
    this.getAllData()
  }
  
  addForms(){
    this.formModelObj.title=this.formValue.value.title;
    this.formModelObj.name=this.formValue.value.name;
    this.formModelObj.category=this.formValue.value.category;
    this.formModelObj.description=this.formValue.value.description;

    this.AdServices.postAdServices(this.formModelObj).subscribe(res=>{
      console.log(res)
      alert("added successfully");

      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset()
      this.getAllData();
    },
    err=>{
      alert("wrong");
    }
    
    )
  }

  getAllData(){
    this.AdServices.getAdServices().subscribe(res=>{
      this.allAdServicesService=res;
    })
  }

  onEdit(data:any){
    this.formModelObj.id=data.id;
    this.formValue.controls['title'].setValue(data.title);
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['category'].setValue(data.category);
    this.formValue.controls['description'].setValue(data.description);
  }

  updateForms(){
    this.formModelObj.title=this.formValue.value.title;
    this.formModelObj.name=this.formValue.value.name;
    this.formModelObj.category=this.formValue.value.category;
    this.formModelObj.description=this.formValue.value.description;

    this.AdServices.updateAdServices(this.formModelObj,this.formModelObj.id).subscribe(res=>{
      alert("updated");

      this.formValue.reset();
      this.getAllData();
    })
  }

}
