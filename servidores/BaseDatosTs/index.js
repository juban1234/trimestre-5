"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
class User {
    constructor(email, nombres, apellidos, telefono, password) {
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._telefono = telefono;
        this._password = password;
    }
    // Getters
    get email() {
        return this._email;
    }
    get nombres() {
        return this._nombres;
    }
    get apellidos() {
        return this._apellidos;
    }
    get telefono() {
        return this._telefono;
    }
    get password() {
        return this._password;
    }
    // Setters
    set email(email) {
        this._email = email;
    }
    set nombres(nombres) {
        this._nombres = nombres;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    set telefono(telefono) {
        this._telefono = telefono;
    }
    set password(password) {
        this._password = password;
    }
}
class UserRepository {
    static add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO users (email, nombres, apellidos, telefono, password) VALUES (?, ?, ?, ?, ?)';
            const values = [user.email, user.nombres, user.apellidos, user.telefono, user.password];
            return config_1.default.execute(sql, values);
        });
    }
}
UserRepository.add(new User("test@gmail.com", "Test", "2025", "2324234", "41231253143"));
