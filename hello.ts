class  SchoolDetails{
name:string;
fathers_name:string;
class2:string
Rollno:String


Admission_Fees:number;
Monthly_Fees:number;
Extra_Fees:number;
Game_Fees:number;
}

class Obtain_Marks extends SchoolDetails{


public English_Status:string;
 public Physics_Status:string;


public setA(English_Status:string,Physics_Status:string,name:string,fathers_name:string,class2:string,Rollno:string,Admission_Fees:number,Monthly_Fees:number,Extra_Fees:number,Games_Fees:number):void{



this.name=name;
this.fathers_name=fathers_name;
this.class2=class2;
this.Rollno=Rollno;
this.Admission_Fees=Admission_Fees;
this.Monthly_Fees=Monthly_Fees;
this.Extra_Fees=Extra_Fees;
this.Game_Fees=Games_Fees;
this.English_Status=English_Status;
this.Physics_Status=Physics_Status;






}


public disp():void{

    console.log(this.name);


}




}




var a=new Obtain_Marks();


a.setA("Pass","Fail","AsadKhan","AzamKhan","1st","2418",5000,2222,3333,444);
a.disp();




