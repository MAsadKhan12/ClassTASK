var Hospital = /** @class */ (function () {
    function Hospital() {
    }
    Hospital.prototype.setA = function (patient_name, patent_Father, patient_ward, patient_appointment, payment_method) {
        this.patient_name = patient_name;
        this.patent_Father = patent_Father;
        this.patient_ward = patient_ward;
        this.patient_appointment = patient_appointment;
        this.payment_method = payment_method;
    };
    Hospital.prototype.display = function () {
        console.log(this.patient_name);
        console.log(this.patent_Father);
        console.log(this.patient_ward);
        console.log(this.patient_appointment);
        console.log(this.payment_method);
    };
    return Hospital;
}());
var a = new Hospital();
a.setA("Asad", "Azam", "Special", "20July", "online");
a.display();
