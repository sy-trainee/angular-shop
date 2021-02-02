import { InjectionToken } from '@angular/core';

import { GeneratorService } from './generator.service';

export const GeneratedString = new InjectionToken<string>('generatedString');

export function GeneratorFactory(n: number): (service: GeneratorService) => string {
  return (service: GeneratorService): string => service.generate(n);
}

