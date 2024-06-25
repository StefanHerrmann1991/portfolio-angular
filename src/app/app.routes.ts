import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { JourneyComponent } from './journey/journey.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';


export const routes: Routes = [
    { path: '', component: IntroductionComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'about', component: JourneyComponent }];
