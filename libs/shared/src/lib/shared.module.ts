import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './search.pipe';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [
        ToolbarComponent,
        SearchPipe
    ],
    declarations: [ToolbarComponent, SearchPipe]
})
export class SharedModule {}
