var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SchoolDetails = /** @class */ (function () {
    function SchoolDetails() {
    }
    return SchoolDetails;
}());
var Obtain_Marks = /** @class */ (function (_super) {
    __extends(Obtain_Marks, _super);
    function Obtain_Marks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Obtain_Marks.prototype.setA = function (English_Status, Physics_Status, name, fathers_name, class2, Rollno, Admission_Fees, Monthly_Fees, Extra_Fees, Games_Fees) {
        this.name = name;
        this.fathers_name = fathers_name;
        this.class2 = class2;
        this.Rollno = Rollno;
        this.Admission_Fees = Admission_Fees;
        this.Monthly_Fees = Monthly_Fees;
        this.Extra_Fees = Extra_Fees;
        this.Game_Fees = Games_Fees;
        this.English_Status = English_Status;
        this.Physics_Status = Physics_Status;
    };
    Obtain_Marks.prototype.disp = function () {
        console.log(this.name);
    };
    return Obtain_Marks;
}(SchoolDetails));
var a = new Obtain_Marks();
a.setA("Pass", "Fail", "AsadKhan", "AzamKhan", "1st", "2418", 5000, 2222, 3333, 444);
a.disp();
