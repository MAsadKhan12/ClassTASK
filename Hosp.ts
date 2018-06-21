class Hospital{

patient_name:string;
patent_Father:string;
patient_ward:string;
patient_appointment:string;
payment_method:string

public setA(patient_name:string,patent_Father:string,patient_ward:string,patient_appointment:string,payment_method):void{
this.patient_name=patient_name;
this.patent_Father=patent_Father;
this.patient_ward=patient_ward;
this.patient_appointment=patient_appointment;
this.payment_method=payment_method;


}

public display():void{

console.log(this.patient_name);
console.log(this.patent_Father);
console.log(this.patient_ward);
console.log(this.patient_appointment);
console.log(this.payment_method);


}



}
var a=new Hospital();
a.setA("Asad","Azam","Special","20July","online");
a.display();