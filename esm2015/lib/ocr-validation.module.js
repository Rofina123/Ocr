import { NgModule } from '@angular/core';
import { OcrValidationComponent } from './ocr-validation.component';
import { OcrvalidationComponent } from './pics-ocrvalidation/ocrvalidation/ocrvalidation.component';
import { CardModule } from 'primeng/card';
import { FormioModule } from 'angular-formio';
import * as i0 from "@angular/core";
export class OcrValidationModule {
}
OcrValidationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OcrValidationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationModule, declarations: [OcrValidationComponent,
        OcrvalidationComponent], imports: [CardModule,
        FormioModule], exports: [OcrValidationComponent] });
OcrValidationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationModule, imports: [[
            CardModule,
            FormioModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OcrValidationComponent,
                        OcrvalidationComponent
                    ],
                    imports: [
                        CardModule,
                        FormioModule
                    ],
                    exports: [
                        OcrValidationComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLXZhbGlkYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL29jci12YWxpZGF0aW9uL3NyYy9saWIvb2NyLXZhbGlkYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDcEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBZTlDLE1BQU0sT0FBTyxtQkFBbUI7O2lIQUFuQixtQkFBbUI7a0hBQW5CLG1CQUFtQixpQkFYNUIsc0JBQXNCO1FBQ3RCLHNCQUFzQixhQUd0QixVQUFVO1FBQ1YsWUFBWSxhQUdaLHNCQUFzQjtrSEFHYixtQkFBbUIsWUFSckI7WUFDUCxVQUFVO1lBQ1YsWUFBWTtTQUNiOzRGQUtVLG1CQUFtQjtrQkFiL0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osc0JBQXNCO3dCQUN0QixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxVQUFVO3dCQUNWLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHNCQUFzQjtxQkFDdkI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NyVmFsaWRhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vb2NyLXZhbGlkYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE9jcnZhbGlkYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BpY3Mtb2NydmFsaWRhdGlvbi9vY3J2YWxpZGF0aW9uL29jcnZhbGlkYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NhcmQnO1xuaW1wb3J0IHsgRm9ybWlvTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1mb3JtaW8nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBPY3JWYWxpZGF0aW9uQ29tcG9uZW50LFxuICAgIE9jcnZhbGlkYXRpb25Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENhcmRNb2R1bGUsXG4gICAgRm9ybWlvTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBPY3JWYWxpZGF0aW9uQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgT2NyVmFsaWRhdGlvbk1vZHVsZSB7IH1cbiJdfQ==