"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../../core/user");
var _selectors = {
    formElement: '#form',
    postalCodeElement: '#postalCode'
};
var _cache = {
    formElement: document.querySelector(_selectors.formElement),
    postalCodeElement: document.querySelector(_selectors.postalCodeElement)
};
window.addEventListener('load', function () {
    _cache.formElement.addEventListener('submit', function (event) {
        event.preventDefault();
        var isFormValid = _cache.formElement.checkValidity();
        if (isFormValid) {
            var postalCode = _cache.postalCodeElement.value;
            if (postalCode) {
                user_1.user.location.postalCode = postalCode;
                console.info("Saved postal code: " + postalCode);
            }
        }
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2Jsb2Nrcy9pbnZlbnRvcnktc2VhcmNoL2ludmVudG9yeS1zZWFyY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBdUM7QUFFdkMsSUFBTSxVQUFVLEdBQUc7SUFDakIsV0FBVyxFQUFFLE9BQU87SUFDcEIsaUJBQWlCLEVBQUUsYUFBYTtDQUNqQyxDQUFDO0FBRUYsSUFBTSxNQUFNLEdBQUc7SUFDYixXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFvQjtJQUM5RSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBcUI7Q0FDNUYsQ0FBQztBQUVGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7SUFDOUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFLO1FBQ2xELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JELElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztZQUNoRCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxXQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBRXRDLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXNCLFVBQVksQ0FBQyxDQUFDO2FBQ2xEO1NBQ0Y7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImpzL2Jsb2Nrcy9pbnZlbnRvcnktc2VhcmNoL2ludmVudG9yeS1zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VyIH0gZnJvbSAnLi4vLi4vY29yZS91c2VyJztcblxuY29uc3QgX3NlbGVjdG9ycyA9IHtcbiAgZm9ybUVsZW1lbnQ6ICcjZm9ybScsXG4gIHBvc3RhbENvZGVFbGVtZW50OiAnI3Bvc3RhbENvZGUnXG59O1xuXG5jb25zdCBfY2FjaGUgPSB7XG4gIGZvcm1FbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKF9zZWxlY3RvcnMuZm9ybUVsZW1lbnQpIGFzIEhUTUxGb3JtRWxlbWVudCxcbiAgcG9zdGFsQ29kZUVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoX3NlbGVjdG9ycy5wb3N0YWxDb2RlRWxlbWVudCkgYXMgSFRNTElucHV0RWxlbWVudFxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIF9jYWNoZS5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IGlzRm9ybVZhbGlkID0gX2NhY2hlLmZvcm1FbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcbiAgICBpZiAoaXNGb3JtVmFsaWQpIHtcbiAgICAgIGxldCBwb3N0YWxDb2RlID0gX2NhY2hlLnBvc3RhbENvZGVFbGVtZW50LnZhbHVlO1xuICAgICAgaWYgKHBvc3RhbENvZGUpIHtcbiAgICAgICAgdXNlci5sb2NhdGlvbi5wb3N0YWxDb2RlID0gcG9zdGFsQ29kZTtcblxuICAgICAgICBjb25zb2xlLmluZm8oYFNhdmVkIHBvc3RhbCBjb2RlOiAke3Bvc3RhbENvZGV9YCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pO1xuIl19
