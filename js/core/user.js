"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var location_1 = require("./classes/location");
var User = /** @class */ (function () {
    function User() {
        this.firstName = 'Salvador';
        this.lastName = 'Sanchez';
        this.email = 'salvador.sanchez@polaris.com';
        this.phone = '8120782935';
        this.dealerId = '29374673';
        this.location = new location_1.Location();
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var user = new User();
exports.user = user;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2NvcmUvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBOEM7QUFFOUM7SUFRRTtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsOEJBQThCLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMEJBQVcsR0FBWDtRQUNFLE9BQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBVSxDQUFDO0lBQzlDLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQUdELElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDZixvQkFBSSIsImZpbGUiOiJqcy9jb3JlL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJy4vY2xhc3Nlcy9sb2NhdGlvbic7XG5cbmNsYXNzIFVzZXIge1xuICBmaXJzdE5hbWU7XG4gIGxhc3ROYW1lO1xuICBlbWFpbDtcbiAgcGhvbmU7XG4gIGRlYWxlcklkO1xuICBsb2NhdGlvbjogTG9jYXRpb247XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maXJzdE5hbWUgPSAnU2FsdmFkb3InO1xuICAgIHRoaXMubGFzdE5hbWUgPSAnU2FuY2hleic7XG4gICAgdGhpcy5lbWFpbCA9ICdzYWx2YWRvci5zYW5jaGV6QHBvbGFyaXMuY29tJztcbiAgICB0aGlzLnBob25lID0gJzgxMjA3ODI5MzUnO1xuICAgIHRoaXMuZGVhbGVySWQgPSAnMjkzNzQ2NzMnO1xuICAgIHRoaXMubG9jYXRpb24gPSBuZXcgTG9jYXRpb24oKTtcbiAgfVxuXG4gIGdldEZ1bGxOYW1lKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XG4gIH1cbn1cblxuXG5jb25zdCB1c2VyID0gbmV3IFVzZXIoKTtcbmV4cG9ydCB7IHVzZXIgfSA7XG4iXX0=
