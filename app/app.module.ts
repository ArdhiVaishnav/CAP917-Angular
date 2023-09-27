import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { cbComponent } from './ClassBinding.component';
import { CoreModule } from './core';
import { HelloFrameworkModule } from './hello-framework';
import { sbcomponent } from './StyleBinding.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent,sbcomponent,cbComponent],
  imports: [
    CoreModule,
    HelloFrameworkModule,
  ],
})
export class AppModule {}
