import { ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { UsuarioService } from "../usuario.service";
export declare class EmailEhUnicoValidator implements ValidatorConstraintInterface {
    private usuarioService;
    constructor(usuarioService: UsuarioService);
    validate(value: any): Promise<boolean>;
}
export declare const EmailEhUnico: (opcoesDeValidacao: ValidationOptions) => (objeto: object, propriedade: string) => void;
