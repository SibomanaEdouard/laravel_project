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
require("dotenv").config();
const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
let Idea = class Idea {
    constructor(igitekerezo, category, urwego, indangamuntu, locationTarget, location) {
        this.category = category;
        this.indangamuntu = indangamuntu;
        this.urwego = urwego;
        this.igitekerezo = igitekerezo;
        this.target = locationTarget;
        this.location = location;
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Idea.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], Idea.prototype, "urwego", void 0);
__decorate([
    Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Idea.prototype, "igitekerezo", void 0);
__decorate([
    Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Idea.prototype, "category", void 0);
__decorate([
    Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Idea.prototype, "indangamuntu", void 0);
__decorate([
    Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Idea.prototype, "target", void 0);
__decorate([
    Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Idea.prototype, "location", void 0);
Idea = __decorate([
    Entity("ideas"),
    __metadata("design:paramtypes", [String, String, String, String, String, String])
], Idea);
exports.default = Idea;
