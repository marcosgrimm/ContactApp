webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var contact_component_1 = __webpack_require__("./src/app/components/contact/contact.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
var contact_detail_component_1 = __webpack_require__("./src/app/components/contact-detail/contact-detail.component.ts");
var profile_component_1 = __webpack_require__("./src/app/components/profile/profile.component.ts");
var profile_detail_component_1 = __webpack_require__("./src/app/components/profile-detail/profile-detail.component.ts");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'contact/detail/:id', component: contact_detail_component_1.ContactDetailComponent },
    { path: 'profile/detail/:id', component: profile_detail_component_1.ProfileDetailComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            exports: [router_1.RouterModule],
            imports: [router_1.RouterModule.forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n    <title>{{title}}</title>\r\n</head>\r\n<body>\r\n<nav class=\"navbar navbar-dark navbar-expand-sm custom-bg\">\r\n    <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a  class=\"nav-link\" routerLink=\"/dashboard\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a  class=\"nav-link\" routerLink=\"/profile\">Send your Profile</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a  class=\"nav-link\" routerLink=\"/contact\">Contact</a>\r\n            </li>\r\n        </ul>\r\n        <form class=\"form-inline my-3 my-lg-0\">\r\n            <input class=\"form-control mr-sm-3\" type=\"search\" placeholder=\"PHP, Ruby, Angular...\" aria-label=\"Java, PHP, Ruby, Angular, React ...\">\r\n            <button class=\"btn btn-outline-light my-3 my-sm-0\" type=\"submit\">Search Main Skill</button>\r\n        </form>\r\n    </div>\r\n</nav>\r\n<br>\r\n<!-- Navbar content -->\r\n<div class=\"container purple-text\">\r\n    <router-outlet></router-outlet>\r\n\r\n    <footer class=\"pt-4 my-md-5 pt-md-5 border-top\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-md\">\r\n                <img class=\"mb-2\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"24\" height=\"24\">\r\n                <small class=\"d-block mb-3 text-muted\">© 2018</small>\r\n            </div>\r\n            <div class=\"col-6 col-md\">\r\n                <h5>Features</h5>\r\n                <ul class=\"list-unstyled text-small\">\r\n                    <li><a class=\"text-muted\" href=\"#\">Cool stuff</a></li>\r\n                    <li><a class=\"text-muted\" href=\"#\">Random feature</a></li>\r\n                    <li><a class=\"text-muted\" href=\"#\">Team feature</a></li>\r\n                    <li><a class=\"text-muted\" href=\"#\">Stuff for developers</a></li>\r\n                    <li><a class=\"text-muted\" href=\"#\">Another one</a></li>\r\n                    <li><a class=\"text-muted\" href=\"#\">Last time</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-6 col-md\">\r\n                <h5>Resources</h5>\r\n                <ul class=\"list-unstyled text-small\">\r\n                    <li><a class=\"text-muted\" href=\"#\">Resource</a></li>\r\n                    <li><a class=\"text-muted\" href=\"#\">Resource name</a></li>\r\n                    <li><a class=\"text-muted\" href=\"#\">Another resource</a></li>\r\n                    <li><a class=\"text-muted\" href=\"#\">Final resource</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-6 col-md\">\r\n                <h5>About</h5>\r\n                <ul class=\"list-unstyled text-small\">\r\n                    <li><a class=\"text-muted\" href=\"#\">Team</a></li>\r\n                    <li><a class=\"text-muted\" href=\"#\">Locations</a></li>\r\n                    <li><a class=\"text-muted\" href=\"#\">Privacy</a></li>\r\n                    <li><a class=\"text-muted\" href=\"#\">Terms</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n<br>\r\n\r\n</body>\r\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'jobs.com';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var contact_component_1 = __webpack_require__("./src/app/components/contact/contact.component.ts");
var contact_detail_component_1 = __webpack_require__("./src/app/components/contact-detail/contact-detail.component.ts");
var contact_service_1 = __webpack_require__("./src/app/services/contact.service.ts");
var messages_component_1 = __webpack_require__("./src/app/components/messages/messages.component.ts");
var message_service_1 = __webpack_require__("./src/app/services/message.service.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var dashboard_component_1 = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
var profile_component_1 = __webpack_require__("./src/app/components/profile/profile.component.ts");
var profile_detail_component_1 = __webpack_require__("./src/app/components/profile-detail/profile-detail.component.ts");
var profile_service_1 = __webpack_require__("./src/app/services/profile.service.ts");
var fontawesome_free_solid_1 = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");
var fontawesome = __webpack_require__("./node_modules/@fortawesome/fontawesome/index.es.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
        fontawesome.library.add(fontawesome_free_solid_1.faStar, fontawesome_free_solid_1.faQuestion);
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                contact_component_1.ContactComponent,
                contact_detail_component_1.ContactDetailComponent,
                messages_component_1.MessagesComponent,
                dashboard_component_1.DashboardComponent,
                profile_component_1.ProfileComponent,
                profile_detail_component_1.ProfileDetailComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
            ],
            providers: [contact_service_1.ContactService, message_service_1.MessageService, profile_service_1.ProfileService],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/contact-detail/contact-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact-detail/contact-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"contact\">\r\n\r\n  <h2>{{ contact.subject | uppercase }}</h2>\r\n  <div><span>id: </span>{{contact.id}}</div>\r\n  <div>\r\n    <label>From:\r\n      <input [(ngModel)]=\"contact.from\" placeholder=\"from\"/>\r\n    </label>\r\n  </div>\r\n  <div>\r\n    <label>To:\r\n      <input [(ngModel)]=\"contact.to\" placeholder=\"to\"/>\r\n    </label>\r\n  </div>\r\n  <div>\r\n    <label>Subject:\r\n      <input [(ngModel)]=\"contact.subject\" placeholder=\"subject\"/>\r\n    </label>\r\n  </div>\r\n  <div>\r\n    <label>Message:\r\n      <input [(ngModel)]=\"contact.message\" placeholder=\"message\"/>\r\n    </label>\r\n  </div>\r\n\r\n  <button (click)=\"goBack()\">go back</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/contact-detail/contact-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Contact_1 = __webpack_require__("./src/app/models/Contact.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var contact_service_1 = __webpack_require__("./src/app/services/contact.service.ts");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent(route, contactService, location) {
        this.route = route;
        this.contactService = contactService;
        this.location = location;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        this.getContact();
    };
    ContactDetailComponent.prototype.getContact = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.contactService.getContact(id)
            .subscribe(function (contact) { return _this.contact = contact; });
    };
    ContactDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Contact_1.Contact)
    ], ContactDetailComponent.prototype, "contact", void 0);
    ContactDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-detail',
            template: __webpack_require__("./src/app/components/contact-detail/contact-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/contact-detail/contact-detail.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            contact_service_1.ContactService,
            common_1.Location])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());
exports.ContactDetailComponent = ContactDetailComponent;


/***/ }),

/***/ "./src/app/components/contact/constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TO = 'contact@bompitaco.com';


/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Contacts</h2>\r\n<ul class=\"contacts\">\r\n    <li *ngFor=\"let contact of contacts\">\r\n        <a routerLink=\"/contact/detail/{{contact.id}}\">\r\n            <span class=\"badge\">{{contact.id}}</span> {{contact.subject}}\r\n        </a>\r\n        <!--[class.selected]=\"contact === selectedContact\">-->\r\n    </li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var contact_service_1 = __webpack_require__("./src/app/services/contact.service.ts");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(contactService) {
        this.contactService = contactService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactService.getContacts().subscribe(function (contacts) { return _this.contacts = contacts; });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [contact_service_1.ContactService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron purple-text\" style=\"background-color: transparent\">\r\n    <div class=\"container\">\r\n        <h1 class=\"display-4\">Find your next hire</h1>\r\n        <p class=\"lead\">Who do You want to work with? Choose Now.</p>\r\n    </div>\r\n</div>\r\n<h3 class=\"text-center purple-text\">Top Skilled Profiles</h3>\r\n<br/>\r\n<div class=\"card-deck \" >\r\n    <div class=\"card\" *ngFor=\"let profile of profilesShown; let i = index\">\r\n        <span *ngIf=\"profile;\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{profile.title}}\r\n                    <span class=\"float-right\" *ngIf=\"profilesShown.length>2\">\r\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"removeCard(i)\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </span>\r\n                </h5>\r\n                <p class=\"card-text\">{{profile.summary.slice(0,100)}}... <a routerLink=\"/profile/detail/{{profile.id}}\" class=\"font-weight-bold purple-text\">More</a></p>\r\n            </div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <span *ngFor=\"let skill of profile.skills\">\r\n                        <li class=\"list-group-item\"><label></label>\r\n                            {{skill.name}}\r\n                            <span *ngIf=\"skill.experience == 1\" ><span class=\"fas fa-star bronze\"></span></span>\r\n                            <span *ngIf=\"skill.experience == 3\" ><span class=\"fas fa-star silver\"></span></span>\r\n                            <span *ngIf=\"skill.experience == 5\" ><span class=\"fas fa-star gold\"></span></span>\r\n                        </li>\r\n                </span>\r\n            </ul>\r\n            <div class=\"card-footer \">\r\n                <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n            </div>\r\n        </span>\r\n    </div>\r\n    <div class=\"card\" *ngFor=\"let number of ' '.repeat(qtyProfilesShown - profilesShown.length).split(''), let i = index\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">\r\n                <span class=\"fas fa-question gold fa-2x\"></span>\r\n            </h5>\r\n            <p class=\"card-text text-center \">\r\n                <strong>Unfortunately, there are no more profiles to show.</strong><br>\r\n                Invite your contacts and let them be found.<br><br>\r\n                <button type=\"button\" class=\"btn btn-outline-custom\" aria-label=\"Invite Contacts\">\r\n                    Invite Contacts\r\n                </button>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var profile_service_1 = __webpack_require__("./src/app/services/profile.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(profileService) {
        this.profileService = profileService;
        this.profiles = [];
        this.profilesShown = [];
        this.qtyProfilesShown = 3;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getProfiles();
    };
    DashboardComponent.prototype.getProfiles = function () {
        var _this = this;
        this.profileService.getProfiles()
            .subscribe(function (profiles) {
            return _this.profiles = profiles;
        });
        this.updateProfilesShown();
    };
    DashboardComponent.prototype.removeCard = function (index) {
        this.profiles.splice(index, 1);
        this.updateProfilesShown();
    };
    DashboardComponent.prototype.updateProfilesShown = function () {
        this.profilesShown = this.profiles.slice(0, this.qtyProfilesShown);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/components/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\r\n\r\n  <h2>Messages</h2>\r\n  <button class=\"clear\"\r\n          (click)=\"messageService.clear()\">clear</button>\r\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var message_service_1 = __webpack_require__("./src/app/services/message.service.ts");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/components/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


/***/ }),

/***/ "./src/app/components/profile-detail/profile-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile-detail/profile-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"profile\">\r\n\r\n  <h2>{{ profile.name | uppercase }}</h2>\r\n  <div><span>id: </span>{{profile.id}}</div>\r\n  <div>\r\n    <label>From:\r\n      <input [(ngModel)]=\"contact.from\" placeholder=\"from\"/>\r\n    </label>\r\n  </div>\r\n  <div>\r\n    <label>To:\r\n      <input [(ngModel)]=\"contact.to\" placeholder=\"to\"/>\r\n    </label>\r\n  </div>\r\n  <div>\r\n    <label>Subject:\r\n      <input [(ngModel)]=\"contact.subject\" placeholder=\"subject\"/>\r\n    </label>\r\n  </div>\r\n  <div>\r\n    <label>Message:\r\n      <input [(ngModel)]=\"contact.message\" placeholder=\"message\"/>\r\n    </label>\r\n  </div>\r\n\r\n  <button (click)=\"goBack()\">go back</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/profile-detail/profile-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Profile_1 = __webpack_require__("./src/app/models/Profile.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var profile_service_1 = __webpack_require__("./src/app/services/profile.service.ts");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var ProfileDetailComponent = /** @class */ (function () {
    function ProfileDetailComponent(route, profileService, location) {
        this.route = route;
        this.profileService = profileService;
        this.location = location;
    }
    ProfileDetailComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    ProfileDetailComponent.prototype.getProfile = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.profileService.getProfile(id)
            .subscribe(function (profile) { return _this.profile = profile; });
    };
    ProfileDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Profile_1.Profile)
    ], ProfileDetailComponent.prototype, "profile", void 0);
    ProfileDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-detail',
            template: __webpack_require__("./src/app/components/profile-detail/profile-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/profile-detail/profile-detail.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            profile_service_1.ProfileService,
            common_1.Location])
    ], ProfileDetailComponent);
    return ProfileDetailComponent;
}());
exports.ProfileDetailComponent = ProfileDetailComponent;


/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">New Profile</h1>\r\n<form [formGroup]=\"form\" (submit)=\"submit()\">\r\n    <div class=\"row \">\r\n        <div class=\"col-md-4 offset-md-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"email\">Email address</label>\r\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\"  id=\"email\" aria-describedby=\"emailHelp\">\r\n                <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n                <small *ngIf=\"form.get('email').invalid && (form.get('email').dirty || form.get('email').touched)\" class=\"form-text text-danger\">\r\n                    <div *ngIf=\"form.get('email').errors.required\">\r\n                        Email is required.\r\n                    </div>\r\n                </small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 offset-md-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\">\r\n                    <small *ngIf=\"form.get('name').invalid && (form.get('name').dirty || form.get('name').touched)\"\r\n                         class=\"form-text text-danger\">\r\n                        <div *ngIf=\"form.get('name').errors.required\">\r\n                            Name is required.\r\n                        </div>\r\n                    </small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 offset-md-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"title\">Title</label>\r\n                <input type=\"text\" formControlName=\"title\" class=\"form-control\" id=\"title\">\r\n                <small id=\"titleHelp\" class=\"form-text text-muted\">E.g., Web Developer, Project Manager, Data Analyst</small>\r\n                <small *ngIf=\"form.get('title').invalid && (form.get('title').dirty || form.get('title').touched)\"\r\n                       class=\"form-text text-danger\">\r\n                    <div *ngIf=\"form.get('title').errors.required\">\r\n                        Title is required.\r\n                    </div>\r\n                </small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 offset-md-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"title\">Summary</label>\r\n                <textarea formControlName=\"summary\" class=\"form-control\" id=\"summary\" rows=\"5\"></textarea>\r\n                <small *ngIf=\"form.get('summary').invalid && (form.get('summary').dirty || form.get('summary').touched)\"\r\n                       class=\"form-text text-danger\">\r\n                    <div *ngIf=\"form.get('summary').errors.required\">\r\n                        Summary is required.\r\n                    </div>\r\n                    <div *ngIf=\"form.get('summary').errors.maxLength\">\r\n                        The text should has to be shorter.\r\n                    </div>\r\n\r\n\r\n                </small>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 offset-md-4\">\r\n            <label>Skills</label>\r\n            <div class=\"input-group mb-3\" formGroupName=\"newSkill\">\r\n\r\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\" aria-label=\"Text input with checkbox\">\r\n                <div class=\"input-group-append\">\r\n                    <div class=\"input-group-text bg-light\">\r\n                        <input type=\"radio\"  formControlName=\"experience\" value=\"bronze\" id=\"experience_bronze\" aria-label=\"Radio button for following text input\" >\r\n                        <label class=\"form-check-label\" for=\"experience_bronze\">&nbsp;<span class=\"fas fa-star bronze\"></span></label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"input-group-append\">\r\n                    <div class=\"input-group-text bg-light\">\r\n                        <input type=\"radio\" formControlName=\"experience\" value=\"silver\" id=\"experience_silver\" aria-label=\"Radio button for following text input\">\r\n                        <label class=\"form-check-label\" for=\"experience_silver\">&nbsp;<span class=\"fas fa-star silver\"></span></label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"input-group-append\">\r\n                    <div class=\"input-group-text bg-light\">\r\n                        <input type=\"radio\"  formControlName=\"experience\"  value=\"gold\" id=\"experience_gold\"  aria-label=\"Radio button for following text input\">\r\n                        <label class=\"form-check-label\" for=\"experience_gold\">&nbsp;<span class=\"fas fa-star gold\"></span></label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n                <label>&nbsp;</label>\r\n                <button class=\"btn btn-success\" (click)=\"addSkill();\" [disabled]=\"!getControl('newSkill').valid \">Add Skill</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 offset-md-4\">\r\n            <ul class=\"list-group\">\r\n                <li  *ngFor=\"let skill of form.controls.skills.controls  let i = index;\" class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                    {{skill.get('name').value}}\r\n                    <span class=\"float-right fas fa-star {{skill.get('experience').value}}\"></span>\r\n                        <!--<span class=\"badge badge-primary badge-pill\">14</span>-->\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 offset-md-4    \">\r\n            <button type=\"submit\" class=\"btn btn-primary\" >Submit</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n<!--<p>Form value: {{ form.value | json }}</p>-->\r\n<!--<p>Form status: {{ form.status | json }}</p>-->"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ProfileComponent.prototype.getForm = function () {
        return this.form;
    };
    ProfileComponent.prototype.getControl = function (formControlName) {
        return this.getForm().get(formControlName);
    };
    ProfileComponent.prototype.getValue = function (formControlName) {
        return this.getControl(formControlName).value;
    };
    ProfileComponent.prototype.createForm = function () {
        var emptyRequired = ['', forms_1.Validators.required];
        this.form = this.formBuilder.group({
            email: emptyRequired,
            name: emptyRequired,
            title: emptyRequired,
            summary: ['', [forms_1.Validators.required]],
            skills: this.formBuilder.array([]),
            newSkill: this.formBuilder.group({ name: emptyRequired,
                experience: emptyRequired })
        });
        this.skills = this.getControl('skills');
    };
    ProfileComponent.prototype.createSkill = function (params) {
        return this.formBuilder.group({
            name: params.name,
            experience: params.experience
        });
    };
    ProfileComponent.prototype.addSkill = function () {
        var name = this.getValue('newSkill.name');
        var experience = this.getValue('newSkill.experience');
        var params = {
            name: name,
            experience: experience
        };
        this.skills.push(this.createSkill(params));
        this.getControl('newSkill').reset();
    };
    ProfileComponent.prototype.submit = function () {
        console.log("submited");
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/models/Contact.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());
exports.Contact = Contact;


/***/ }),

/***/ "./src/app/models/Profile.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());
exports.Profile = Profile;


/***/ }),

/***/ "./src/app/samples/ContactSample.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__("./src/app/components/contact/constants.ts");
exports.CONTACTS = [
    { id: 4, to: constants_1.TO, from: 'a', subject: 'Product X', message: '' },
    { id: 5, to: constants_1.TO, from: 'n', subject: 'Movie Y', message: '' },
    { id: 56, to: constants_1.TO, from: 'asda', subject: 'Book Z', message: '' },
    { id: 23, to: constants_1.TO, from: '123a', subject: 'Service H', message: '' },
    { id: 1, to: constants_1.TO, from: 'afdf', subject: 'Restaurant L', message: 'message teste' },
];


/***/ }),

/***/ "./src/app/samples/ProfileSample.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PROFILES = [
    {
        id: 4,
        email: 'jason@outlook.com',
        name: 'Jason Bourne',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus pellentesque sollicitudin. Duis vestibulum dapibus aliquet. Nulla ac eleifend justo, vel blandit nisl. Nullam elementum hendrerit massa, sit amet bibendum leo sollicitudin vitae. Nam quis lobortis elit. Nam pretium eu tellus sit amet eleifend. Maecenas cursus lacinia nunc, et consequat metus aliquet sed. Donec rutrum eu ipsum eget scelerisque. Curabitur ex ipsum, tincidunt eu mauris et, vestibulum pretium lacus.',
        title: 'Web Developer 1',
        skills: [{ name: 'PHP', experience: 1 }]
    },
    {
        id: 5,
        email: 'jason@outlook.com',
        name: 'Jason Bourne',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus pellentesque sollicitudin. Duis vestibulum dapibus aliquet. Nulla ac eleifend justo, vel blandit nisl. Nullam elementum hendrerit massa, sit amet bibendum leo sollicitudin vitae. Nam quis lobortis elit. Nam pretium eu tellus sit amet eleifend. Maecenas cursus lacinia nunc, et consequat metus aliquet sed. Donec rutrum eu ipsum eget scelerisque. Curabitur ex ipsum, tincidunt eu mauris et, vestibulum pretium lacus.',
        title: 'Web Developer 2',
        skills: [{ name: 'Ruby', experience: 3 }]
    },
    {
        id: 5,
        email: 'jason@outlook.com',
        name: 'Jason Bourne',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus pellentesque sollicitudin. Duis vestibulum dapibus aliquet. Nulla ac eleifend justo, vel blandit nisl. Nullam elementum hendrerit massa, sit amet bibendum leo sollicitudin vitae. Nam quis lobortis elit. Nam pretium eu tellus sit amet eleifend. Maecenas cursus lacinia nunc, et consequat metus aliquet sed. Donec rutrum eu ipsum eget scelerisque. Curabitur ex ipsum, tincidunt eu mauris et, vestibulum pretium lacus.',
        title: 'Data Analyst 3',
        skills: [{ name: 'Scala', experience: 5 }]
    },
    {
        id: 7,
        email: 'jason@outlook.com',
        name: 'Jason Bourne',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus pellentesque sollicitudin. Duis vestibulum dapibus aliquet. Nulla ac eleifend justo, vel blandit nisl. Nullam elementum hendrerit massa, sit amet bibendum leo sollicitudin vitae. Nam quis lobortis elit. Nam pretium eu tellus sit amet eleifend. Maecenas cursus lacinia nunc, et consequat metus aliquet sed. Donec rutrum eu ipsum eget scelerisque. Curabitur ex ipsum, tincidunt eu mauris et, vestibulum pretium lacus.',
        title: 'Web Developer 4',
        skills: [{ name: 'PHP', experience: 1 }]
    },
    {
        id: 8,
        email: 'jason@outlook.com',
        name: 'Jason Bourne',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus pellentesque sollicitudin. Duis vestibulum dapibus aliquet. Nulla ac eleifend justo, vel blandit nisl. Nullam elementum hendrerit massa, sit amet bibendum leo sollicitudin vitae. Nam quis lobortis elit. Nam pretium eu tellus sit amet eleifend. Maecenas cursus lacinia nunc, et consequat metus aliquet sed. Donec rutrum eu ipsum eget scelerisque. Curabitur ex ipsum, tincidunt eu mauris et, vestibulum pretium lacus.',
        title: 'Web Developer 5',
        skills: [{ name: 'C#', experience: 1 }]
    },
];


/***/ }),

/***/ "./src/app/services/contact.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ContactSample_1 = __webpack_require__("./src/app/samples/ContactSample.ts");
var of_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var message_service_1 = __webpack_require__("./src/app/services/message.service.ts");
var ContactService = /** @class */ (function () {
    function ContactService(messageService) {
        this.messageService = messageService;
    }
    ContactService.prototype.getContacts = function () {
        this.messageService.add('ContactService: fetched contacts');
        return of_1.of(ContactSample_1.CONTACTS);
    };
    ContactService.prototype.getContact = function (id) {
        // TODO: send the message _after_ fetching the hero
        this.messageService.add("ContactService: fetched contact id=" + id);
        return of_1.of(ContactSample_1.CONTACTS.find(function (contact) { return contact.id === id; }));
    };
    ContactService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;


/***/ }),

/***/ "./src/app/services/message.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;


/***/ }),

/***/ "./src/app/services/profile.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ProfileSample_1 = __webpack_require__("./src/app/samples/ProfileSample.ts");
var of_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var message_service_1 = __webpack_require__("./src/app/services/message.service.ts");
var ProfileService = /** @class */ (function () {
    function ProfileService(messageService) {
        this.messageService = messageService;
    }
    ProfileService.prototype.getProfiles = function () {
        this.messageService.add('ProfileService: fetched profiles');
        return of_1.of(ProfileSample_1.PROFILES);
    };
    ProfileService.prototype.getProfile = function (id) {
        // TODO: send the message _after_ fetching the hero
        // this.messageService.add(`ProfileService: fetched profile id=${id}`);
        return of_1.of(ProfileSample_1.PROFILES.find(function (profile) { return profile.id === id; }));
    };
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
__webpack_require__("./node_modules/hammerjs/hammer.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map