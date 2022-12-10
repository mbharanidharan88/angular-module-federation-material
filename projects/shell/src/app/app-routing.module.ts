import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'mfe1',
  //   loadChildren: () => loadRemoteModule({
  //     remoteEntry: 'http://localhost:3000/remoteEntry.js',
  //     type: 'module',
  //     exposedModule: './Module'
  //   }).then(m => m.SetupModule)
  // },
  {
    path: 'mfe1',
    loadChildren: () => import('mfe1/Module')
    .then(m => m.SetupModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
