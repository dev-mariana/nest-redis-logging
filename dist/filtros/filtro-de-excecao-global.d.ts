import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
export declare class FiltroDeExcecaoGlobal implements ExceptionFilter {
    private adapterHost;
    constructor(adapterHost: HttpAdapterHost);
    catch(excecao: unknown, host: ArgumentsHost): void;
}
