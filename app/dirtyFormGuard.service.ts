import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DirtyChecker } from './dirtyChecker';

@Injectable()
export class DirtyFormGuard implements CanDeactivate<DirtyChecker> {
    canDeactivate(dirtyChecker): boolean {
        if (dirtyChecker.isDirty()) {
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        }
        return true;
    }
}